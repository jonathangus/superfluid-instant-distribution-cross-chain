/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IStateCommitmentChain,
  IStateCommitmentChainInterface,
} from "../IStateCommitmentChain";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_batchIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_batchRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_batchSize",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_prevTotalElements",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_extraData",
        type: "bytes",
      },
    ],
    name: "StateBatchAppended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_batchIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_batchRoot",
        type: "bytes32",
      },
    ],
    name: "StateBatchDeleted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_batch",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "_shouldStartAtElement",
        type: "uint256",
      },
    ],
    name: "appendStateBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "batchIndex",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "batchRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "batchSize",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "prevTotalElements",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct Lib_OVMCodec.ChainBatchHeader",
        name: "_batchHeader",
        type: "tuple",
      },
    ],
    name: "deleteStateBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastSequencerTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "_lastSequencerTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalBatches",
    outputs: [
      {
        internalType: "uint256",
        name: "_totalBatches",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalElements",
    outputs: [
      {
        internalType: "uint256",
        name: "_totalElements",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "batchIndex",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "batchRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "batchSize",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "prevTotalElements",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct Lib_OVMCodec.ChainBatchHeader",
        name: "_batchHeader",
        type: "tuple",
      },
    ],
    name: "insideFraudProofWindow",
    outputs: [
      {
        internalType: "bool",
        name: "_inside",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_element",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "batchIndex",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "batchRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "batchSize",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "prevTotalElements",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct Lib_OVMCodec.ChainBatchHeader",
        name: "_batchHeader",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "bytes32[]",
            name: "siblings",
            type: "bytes32[]",
          },
        ],
        internalType: "struct Lib_OVMCodec.ChainInclusionProof",
        name: "_proof",
        type: "tuple",
      },
    ],
    name: "verifyStateCommitment",
    outputs: [
      {
        internalType: "bool",
        name: "_verified",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IStateCommitmentChain__factory {
  static readonly abi = _abi;
  static createInterface(): IStateCommitmentChainInterface {
    return new utils.Interface(_abi) as IStateCommitmentChainInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStateCommitmentChain {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IStateCommitmentChain;
  }
}
