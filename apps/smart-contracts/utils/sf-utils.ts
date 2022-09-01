import { Framework } from '@superfluid-finance/sdk-core';
import { ethers } from 'ethers';

const kovanOptimismResolver = '0x218B65780615Ff134f9Ad810CB98839534D3C0D6';

export const getFramework = async (): Promise<Framework> => {
  const url = 'https://kovan.optimism.io';
  const httpProvider = new ethers.providers.JsonRpcProvider(url);
  const sf = await Framework.create({
    provider: httpProvider,
    chainId: 69,
    resolverAddress: kovanOptimismResolver,
  });

  return sf;
};
