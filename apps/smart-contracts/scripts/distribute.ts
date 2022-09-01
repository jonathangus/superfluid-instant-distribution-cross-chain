import { ethers } from 'ethers';
import { config } from 'dotenv';
import hre from 'hardhat';
import { NFTSpread__factory } from 'web3-config/typechain/factories/NFTSpread__factory';
import NFTSpreadDeployment from 'web3-config/deployments/optimismKovan/NFTSpread.json';

config();

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const contract = NFTSpread__factory.connect(
    NFTSpreadDeployment.address,
    deployer
  );

  const amount = ethers.utils.parseEther('10');
  await contract.distribute(amount);
  console.log('Distribution complete');
};

main();
