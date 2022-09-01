// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import {ISuperfluid, ISuperToken, SuperAppBase, SuperAppDefinitions} from '@superfluid-finance/ethereum-contracts/contracts/apps/SuperAppBase.sol';
import {IInstantDistributionAgreementV1} from '@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IInstantDistributionAgreementV1.sol';

import {IDAv1Library} from '@superfluid-finance/ethereum-contracts/contracts/apps/IDAv1Library.sol';

import {IERC20} from '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract NFTSpread {
    /// @notice Super token to be distributed.
    ISuperToken public spreaderToken;

    /// @notice IDA Library
    using IDAv1Library for IDAv1Library.InitData;
    IDAv1Library.InitData public idaV1;

    uint32 public constant INDEX_ID = 0;

    constructor(ISuperfluid _host, ISuperToken _spreaderToken) {
        spreaderToken = _spreaderToken;

        // IDA Library Initialize.
        idaV1 = IDAv1Library.InitData(
            _host,
            IInstantDistributionAgreementV1(
                address(
                    _host.getAgreementClass(
                        keccak256(
                            'org.superfluid-finance.agreements.InstantDistributionAgreement.v1'
                        )
                    )
                )
            )
        );

        idaV1.createIndex(spreaderToken, INDEX_ID);
    }

    // todo verify request comes from MyNFT
    function gainShare(address subscriber, uint256 units) external {
        // Get current units subscriber holds
        (, , uint256 currentUnitsHeld, ) = idaV1.getSubscription(
            spreaderToken,
            address(this),
            INDEX_ID,
            subscriber
        );

        // Update to current amount + 1
        idaV1.updateSubscriptionUnits(
            spreaderToken,
            INDEX_ID,
            subscriber,
            uint128(currentUnitsHeld + units)
        );
    }

    //  todo verify request comes from MyNFT
    /// @notice lets an account lose a single distribution unit
    /// @param subscriber subscriber address whose units are to be decremented
    function loseShare(address subscriber) external {
        // Get current units subscriber holds
        (, , uint256 currentUnitsHeld, ) = idaV1.getSubscription(
            spreaderToken,
            address(this),
            INDEX_ID,
            subscriber
        );

        // Update to current amount - 1 (reverts if currentUnitsHeld - 1 < 0, so basically if currentUnitsHeld = 0)
        idaV1.updateSubscriptionUnits(
            spreaderToken,
            INDEX_ID,
            subscriber,
            uint128(currentUnitsHeld - 1)
        );
    }

    /// @notice allows an account to delete its entire subscription this contract
    /// @param subscriber subscriber address whose subscription is to be deleted
    function deleteShares(address subscriber) external {
        idaV1.deleteSubscription(
            spreaderToken,
            address(this),
            INDEX_ID,
            subscriber
        );
    }

    /// @notice Takes the entire balance of the designated spreaderToken in the contract and distributes it out to unit holders w/ IDA
    function distribute(uint256 amount) public {
        spreaderToken.transferFrom(msg.sender, address(this), amount);

        (uint256 actualDistributionAmount, ) = idaV1.ida.calculateDistribution(
            spreaderToken,
            address(this),
            INDEX_ID,
            amount
        );

        idaV1.distribute(spreaderToken, INDEX_ID, actualDistributionAmount);
    }
}
