# Superfluid Instant Distribution Crosschain

https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/instant-distribution-agreement-ida


https://community.optimism.io/docs/developers/bridge/messaging/#for-l1-%E2%87%92-l2-transactions

## Description
Mint NFTs on L1 that communicates with a L2 smart contract that implement a Superfluid instant distribution agreement. Now we can do a distribution of funds on L2 and each holder get a share representing the amount of NFTs they hold.

## Proccess

- `yarn`
- `cd apps/smart-contracts`
-  Create .env file with `DEPLOYER_PRIVATE_KEY` and `INFURA_ID`
- `yarn deploy:spread` to deploy the distributor contract to optimism kovan
- `yarn deploy:nft` to deploy the NFT contract to kovan
- `yarn approve` to mint fake tokens, approve them for contract and approve the distribution
- `yarn mint` to mint NFTs
- `yarn deposit` to deposit payouts to all NFT holders

