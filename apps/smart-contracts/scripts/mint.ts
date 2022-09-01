import { config } from 'dotenv';
import hre from 'hardhat';
import { MyNFT__factory } from 'web3-config/typechain/factories/MyNFT__factory';
import MyNFTDeployment from 'web3-config/deployments/kovan/MyNFT.json';

config();

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const contract = MyNFT__factory.connect(MyNFTDeployment.address, deployer);

  const receiver = '0xa50F556168a2A67EeABD5BAf821212a6F0c8Fe1E';
  const quantity = 2;
  await contract.mintNft(receiver, quantity);

  console.log(`Minted ${quantity} to ${receiver}`);
};

main();
