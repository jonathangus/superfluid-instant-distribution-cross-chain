// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import {ERC721} from '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import {L1CrossDomainMessenger} from '@eth-optimism/contracts/L1/messaging/L1CrossDomainMessenger.sol';
import {IL1CrossDomainMessenger} from '@eth-optimism/contracts/L1/messaging/IL1CrossDomainMessenger.sol';

contract MyNFT is ERC721 {
    uint256 public mintCount;
    address public nftSpreadContract;
    IL1CrossDomainMessenger private messenger;

    constructor(
        string memory _name,
        string memory _symbol,
        address _optimisticContractAddress,
        address _nftSpreadContract
    ) ERC721(_name, _symbol) {
        messenger = L1CrossDomainMessenger(_optimisticContractAddress);
        nftSpreadContract = _nftSpreadContract;
    }

    function mintNft(address subscriber, uint256 quantity) external {
        for (uint256 i = 0; i < quantity; i++) {
            _safeMint(subscriber, mintCount + i);
            mintCount++;
        }
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override {
        if (from != address(0)) {
            if (balanceOf(from) == 0) {
                messenger.sendMessage(
                    nftSpreadContract,
                    abi.encodeWithSignature('deleteShares(address)', from),
                    10000000
                );
            } else {
                messenger.sendMessage(
                    nftSpreadContract,
                    abi.encodeWithSignature('loseShare(address)', from),
                    10000000
                );
            }
        }

        messenger.sendMessage(
            nftSpreadContract,
            abi.encodeWithSignature('gainShare(address,uint256)', to, 1),
            10000000
        );
    }
}
