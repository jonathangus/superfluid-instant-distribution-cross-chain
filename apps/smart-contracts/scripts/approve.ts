import { Framework, WrapperSuperToken } from '@superfluid-finance/sdk-core';
import { ethers } from 'ethers';
import { config } from 'dotenv';
import hre from 'hardhat';
import NFTSpreadDeployment from 'web3-config/deployments/optimismKovan/NFTSpread.json';
import { getFramework } from '../utils/sf-utils';

config();

const daiABI = [
  'function mint(address to,uint256 amount) returns (bool)',
  'function approve(address,uint256) returns (bool)',
];

const main = async () => {
  const sf = await getFramework();
  const daix = (await sf.loadSuperToken('fDAIx')) as any as WrapperSuperToken;
  const daiAddress = daix?.underlyingToken?.address;
  const [deployer] = await hre.ethers.getSigners();

  if (!daiAddress) {
    throw new Error('Missing daix');
  }
  const dai = new ethers.Contract(daiAddress, daiABI, deployer);

  await dai
    .connect(deployer)
    .mint(deployer.address, ethers.utils.parseEther('1000000'));

  await dai
    .connect(deployer)
    .approve(daix.address, ethers.utils.parseEther('1000000'));

  const daixUpgradeOperation = await daix.upgrade({
    amount: ethers.utils.parseEther('1000000').toString(),
  });

  await daixUpgradeOperation.exec(deployer);

  console.log('approving subscription...');
  await sf.idaV1
    .approveSubscription({
      indexId: '0',
      superToken: daix.address,
      publisher: NFTSpreadDeployment.address,
    })
    .exec(deployer);

  console.log('approving daix...');
  await daix
    .approve({
      receiver: NFTSpreadDeployment.address,
      amount: ethers.utils.parseEther('1000000').toString(),
    })
    .exec(deployer);
};

main();
