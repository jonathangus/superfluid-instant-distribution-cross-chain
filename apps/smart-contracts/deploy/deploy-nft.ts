import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import NFTSpreadDeployment from 'web3-config/deployments/optimismKovan/NFTSpread.json';

const name = 'MyNFT';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const nftSpreadOnOptimism = NFTSpreadDeployment.address;

  const erc20Symbol = 'TEST';
  const erc20Name = 'test';
  const domainManagerKovan = '0x4361d0F75A0186C05f971c566dC6bEa5957483fD';

  const deployment = await deploy(name, {
    from: deployer,
    args: [erc20Name, erc20Symbol, domainManagerKovan, nftSpreadOnOptimism],
  });

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

func.tags = [name];
func.skip = async (env) => env.network.name !== 'kovan';

export default func;
