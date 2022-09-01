/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MyNFT, MyNFTInterface } from "../MyNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_optimisticContractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nftSpreadContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mintNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftSpreadContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002f9938038062002f998339818101604052810190620000379190620003ab565b8383816000908051906020019062000051929190620000f9565b5080600190805190602001906200006a929190620000f9565b50505081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050620004bf565b82805462000107906200048a565b90600052602060002090601f0160209004810192826200012b576000855562000177565b82601f106200014657805160ff191683800117855562000177565b8280016001018555821562000177579182015b828111156200017657825182559160200191906001019062000159565b5b5090506200018691906200018a565b5090565b5b80821115620001a55760008160009055506001016200018b565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200021282620001c7565b810181811067ffffffffffffffff82111715620002345762000233620001d8565b5b80604052505050565b600062000249620001a9565b905062000257828262000207565b919050565b600067ffffffffffffffff8211156200027a5762000279620001d8565b5b6200028582620001c7565b9050602081019050919050565b60005b83811015620002b257808201518184015260208101905062000295565b83811115620002c2576000848401525b50505050565b6000620002df620002d9846200025c565b6200023d565b905082815260208101848484011115620002fe57620002fd620001c2565b5b6200030b84828562000292565b509392505050565b600082601f8301126200032b576200032a620001bd565b5b81516200033d848260208601620002c8565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003738262000346565b9050919050565b620003858162000366565b81146200039157600080fd5b50565b600081519050620003a5816200037a565b92915050565b60008060008060808587031215620003c857620003c7620001b3565b5b600085015167ffffffffffffffff811115620003e957620003e8620001b8565b5b620003f78782880162000313565b945050602085015167ffffffffffffffff8111156200041b576200041a620001b8565b5b620004298782880162000313565b93505060406200043c8782880162000394565b92505060606200044f8782880162000394565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004a357607f821691505b602082108103620004b957620004b86200045b565b5b50919050565b612aca80620004cf6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063b88d4fde11610066578063b88d4fde146102ad578063c87b56dd146102c9578063d1194e2b146102f9578063e985e9c51461031557610100565b806370a082311461022557806395d89b41146102555780639659867e14610273578063a22cb4651461029157610100565b806323b872dd116100d357806323b872dd1461019f57806342842e0e146101bb5780635dbcfff3146101d75780636352211e146101f557610100565b806301ffc9a71461010557806306fdde0314610135578063081812fc14610153578063095ea7b314610183575b600080fd5b61011f600480360381019061011a9190611b27565b610345565b60405161012c9190611b6f565b60405180910390f35b61013d610427565b60405161014a9190611c23565b60405180910390f35b61016d60048036038101906101689190611c7b565b6104b9565b60405161017a9190611ce9565b60405180910390f35b61019d60048036038101906101989190611d30565b6104ff565b005b6101b960048036038101906101b49190611d70565b610616565b005b6101d560048036038101906101d09190611d70565b610676565b005b6101df610696565b6040516101ec9190611ce9565b60405180910390f35b61020f600480360381019061020a9190611c7b565b6106bc565b60405161021c9190611ce9565b60405180910390f35b61023f600480360381019061023a9190611dc3565b61076d565b60405161024c9190611dff565b60405180910390f35b61025d610824565b60405161026a9190611c23565b60405180910390f35b61027b6108b6565b6040516102889190611dff565b60405180910390f35b6102ab60048036038101906102a69190611e46565b6108bc565b005b6102c760048036038101906102c29190611fbb565b6108d2565b005b6102e360048036038101906102de9190611c7b565b610934565b6040516102f09190611c23565b60405180910390f35b610313600480360381019061030e9190611d30565b61099c565b005b61032f600480360381019061032a919061203e565b6109ee565b60405161033c9190611b6f565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061041057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610420575061041f82610a82565b5b9050919050565b606060008054610436906120ad565b80601f0160208091040260200160405190810160405280929190818152602001828054610462906120ad565b80156104af5780601f10610484576101008083540402835291602001916104af565b820191906000526020600020905b81548152906001019060200180831161049257829003601f168201915b5050505050905090565b60006104c482610aec565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061050a826106bc565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361057a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057190612150565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610599610b37565b73ffffffffffffffffffffffffffffffffffffffff1614806105c857506105c7816105c2610b37565b6109ee565b5b610607576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fe906121e2565b60405180910390fd5b6106118383610b3f565b505050565b610627610621610b37565b82610bf8565b610666576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065d90612274565b60405180910390fd5b610671838383610c8d565b505050565b610691838383604051806020016040528060008152506108d2565b505050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610764576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075b906122e0565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d490612372565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060018054610833906120ad565b80601f016020809104026020016040519081016040528092919081815260200182805461085f906120ad565b80156108ac5780601f10610881576101008083540402835291602001916108ac565b820191906000526020600020905b81548152906001019060200180831161088f57829003601f168201915b5050505050905090565b60065481565b6108ce6108c7610b37565b8383610ef3565b5050565b6108e36108dd610b37565b83610bf8565b610922576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091990612274565b60405180910390fd5b61092e8484848461105f565b50505050565b606061093f82610aec565b60006109496110bb565b905060008151116109695760405180602001604052806000815250610994565b80610973846110d2565b6040516020016109849291906123ce565b6040516020818303038152906040525b915050919050565b60005b818110156109e9576109be83826006546109b99190612421565b611232565b600660008154809291906109d190612477565b919050555080806109e190612477565b91505061099f565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610af581611250565b610b34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2b906122e0565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610bb2836106bc565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c04836106bc565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c465750610c4581856109ee565b5b80610c8457508373ffffffffffffffffffffffffffffffffffffffff16610c6c846104b9565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610cad826106bc565b73ffffffffffffffffffffffffffffffffffffffff1614610d03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cfa90612531565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d69906125c3565b60405180910390fd5b610d7d8383836112bc565b610d88600082610b3f565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dd891906125e3565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e2f9190612421565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610eee8383836116d8565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5890612663565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110529190611b6f565b60405180910390a3505050565b61106a848484610c8d565b611076848484846116dd565b6110b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ac906126f5565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008203611119576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061122d565b600082905060005b6000821461114b57808061113490612477565b915050600a826111449190612744565b9150611121565b60008167ffffffffffffffff81111561116757611166611e90565b5b6040519080825280601f01601f1916602001820160405280156111995781602001600182028036833780820191505090505b5090505b60008514611226576001826111b291906125e3565b9150600a856111c19190612775565b60306111cd9190612421565b60f81b8183815181106111e3576111e26127a6565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561121f9190612744565b945061119d565b8093505050505b919050565b61124c828260405180602001604052806000815250611864565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461158d5760006112fb8461076d565b0361144857600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633dbb202b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040516024016113729190611ce9565b6040516020818303038152906040527f2268cacb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050629896806040518463ffffffff1660e01b81526004016114119392919061287f565b600060405180830381600087803b15801561142b57600080fd5b505af115801561143f573d6000803e3d6000fd5b5050505061158c565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633dbb202b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040516024016114ba9190611ce9565b6040516020818303038152906040527fd58a8828000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050629896806040518463ffffffff1660e01b81526004016115599392919061287f565b600060405180830381600087803b15801561157357600080fd5b505af1158015611587573d6000803e3d6000fd5b505050505b5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633dbb202b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846001604051602401611602929190612905565b6040516020818303038152906040527f4f514382000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050629896806040518463ffffffff1660e01b81526004016116a19392919061287f565b600060405180830381600087803b1580156116bb57600080fd5b505af11580156116cf573d6000803e3d6000fd5b50505050505050565b505050565b60006116fe8473ffffffffffffffffffffffffffffffffffffffff166118bf565b15611857578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611727610b37565b8786866040518563ffffffff1660e01b8152600401611749949392919061292e565b6020604051808303816000875af192505050801561178557506040513d601f19601f82011682018060405250810190611782919061298f565b60015b611807573d80600081146117b5576040519150601f19603f3d011682016040523d82523d6000602084013e6117ba565b606091505b5060008151036117ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117f6906126f5565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061185c565b600190505b949350505050565b61186e83836118e2565b61187b60008484846116dd565b6118ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b1906126f5565b60405180910390fd5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611951576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161194890612a08565b60405180910390fd5b61195a81611250565b1561199a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161199190612a74565b60405180910390fd5b6119a6600083836112bc565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119f69190612421565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611ab7600083836116d8565b5050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611b0481611acf565b8114611b0f57600080fd5b50565b600081359050611b2181611afb565b92915050565b600060208284031215611b3d57611b3c611ac5565b5b6000611b4b84828501611b12565b91505092915050565b60008115159050919050565b611b6981611b54565b82525050565b6000602082019050611b846000830184611b60565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611bc4578082015181840152602081019050611ba9565b83811115611bd3576000848401525b50505050565b6000601f19601f8301169050919050565b6000611bf582611b8a565b611bff8185611b95565b9350611c0f818560208601611ba6565b611c1881611bd9565b840191505092915050565b60006020820190508181036000830152611c3d8184611bea565b905092915050565b6000819050919050565b611c5881611c45565b8114611c6357600080fd5b50565b600081359050611c7581611c4f565b92915050565b600060208284031215611c9157611c90611ac5565b5b6000611c9f84828501611c66565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611cd382611ca8565b9050919050565b611ce381611cc8565b82525050565b6000602082019050611cfe6000830184611cda565b92915050565b611d0d81611cc8565b8114611d1857600080fd5b50565b600081359050611d2a81611d04565b92915050565b60008060408385031215611d4757611d46611ac5565b5b6000611d5585828601611d1b565b9250506020611d6685828601611c66565b9150509250929050565b600080600060608486031215611d8957611d88611ac5565b5b6000611d9786828701611d1b565b9350506020611da886828701611d1b565b9250506040611db986828701611c66565b9150509250925092565b600060208284031215611dd957611dd8611ac5565b5b6000611de784828501611d1b565b91505092915050565b611df981611c45565b82525050565b6000602082019050611e146000830184611df0565b92915050565b611e2381611b54565b8114611e2e57600080fd5b50565b600081359050611e4081611e1a565b92915050565b60008060408385031215611e5d57611e5c611ac5565b5b6000611e6b85828601611d1b565b9250506020611e7c85828601611e31565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ec882611bd9565b810181811067ffffffffffffffff82111715611ee757611ee6611e90565b5b80604052505050565b6000611efa611abb565b9050611f068282611ebf565b919050565b600067ffffffffffffffff821115611f2657611f25611e90565b5b611f2f82611bd9565b9050602081019050919050565b82818337600083830152505050565b6000611f5e611f5984611f0b565b611ef0565b905082815260208101848484011115611f7a57611f79611e8b565b5b611f85848285611f3c565b509392505050565b600082601f830112611fa257611fa1611e86565b5b8135611fb2848260208601611f4b565b91505092915050565b60008060008060808587031215611fd557611fd4611ac5565b5b6000611fe387828801611d1b565b9450506020611ff487828801611d1b565b935050604061200587828801611c66565b925050606085013567ffffffffffffffff81111561202657612025611aca565b5b61203287828801611f8d565b91505092959194509250565b6000806040838503121561205557612054611ac5565b5b600061206385828601611d1b565b925050602061207485828601611d1b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806120c557607f821691505b6020821081036120d8576120d761207e565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061213a602183611b95565b9150612145826120de565b604082019050919050565b600060208201905081810360008301526121698161212d565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b60006121cc603e83611b95565b91506121d782612170565b604082019050919050565b600060208201905081810360008301526121fb816121bf565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b600061225e602e83611b95565b915061226982612202565b604082019050919050565b6000602082019050818103600083015261228d81612251565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006122ca601883611b95565b91506122d582612294565b602082019050919050565b600060208201905081810360008301526122f9816122bd565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061235c602983611b95565b915061236782612300565b604082019050919050565b6000602082019050818103600083015261238b8161234f565b9050919050565b600081905092915050565b60006123a882611b8a565b6123b28185612392565b93506123c2818560208601611ba6565b80840191505092915050565b60006123da828561239d565b91506123e6828461239d565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061242c82611c45565b915061243783611c45565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561246c5761246b6123f2565b5b828201905092915050565b600061248282611c45565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036124b4576124b36123f2565b5b600182019050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061251b602583611b95565b9150612526826124bf565b604082019050919050565b6000602082019050818103600083015261254a8161250e565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006125ad602483611b95565b91506125b882612551565b604082019050919050565b600060208201905081810360008301526125dc816125a0565b9050919050565b60006125ee82611c45565b91506125f983611c45565b92508282101561260c5761260b6123f2565b5b828203905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b600061264d601983611b95565b915061265882612617565b602082019050919050565b6000602082019050818103600083015261267c81612640565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006126df603283611b95565b91506126ea82612683565b604082019050919050565b6000602082019050818103600083015261270e816126d2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061274f82611c45565b915061275a83611c45565b92508261276a57612769612715565b5b828204905092915050565b600061278082611c45565b915061278b83611c45565b92508261279b5761279a612715565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006127fc826127d5565b61280681856127e0565b9350612816818560208601611ba6565b61281f81611bd9565b840191505092915050565b6000819050919050565b600063ffffffff82169050919050565b6000819050919050565b600061286961286461285f8461282a565b612844565b612834565b9050919050565b6128798161284e565b82525050565b60006060820190506128946000830186611cda565b81810360208301526128a681856127f1565b90506128b56040830184612870565b949350505050565b6000819050919050565b600060ff82169050919050565b60006128ef6128ea6128e5846128bd565b612844565b6128c7565b9050919050565b6128ff816128d4565b82525050565b600060408201905061291a6000830185611cda565b61292760208301846128f6565b9392505050565b60006080820190506129436000830187611cda565b6129506020830186611cda565b61295d6040830185611df0565b818103606083015261296f81846127f1565b905095945050505050565b60008151905061298981611afb565b92915050565b6000602082840312156129a5576129a4611ac5565b5b60006129b38482850161297a565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006129f2602083611b95565b91506129fd826129bc565b602082019050919050565b60006020820190508181036000830152612a21816129e5565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612a5e601c83611b95565b9150612a6982612a28565b602082019050919050565b60006020820190508181036000830152612a8d81612a51565b905091905056fea264697066735822122089a8987a827ab81f440e6442523cd740856b59d83dc20dad891c9bc14db1af9264736f6c634300080e0033";

type MyNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyNFT__factory extends ContractFactory {
  constructor(...args: MyNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MyNFT";
  }

  deploy(
    _name: string,
    _symbol: string,
    _optimisticContractAddress: string,
    _nftSpreadContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyNFT> {
    return super.deploy(
      _name,
      _symbol,
      _optimisticContractAddress,
      _nftSpreadContract,
      overrides || {}
    ) as Promise<MyNFT>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _optimisticContractAddress: string,
    _nftSpreadContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _optimisticContractAddress,
      _nftSpreadContract,
      overrides || {}
    );
  }
  attach(address: string): MyNFT {
    return super.attach(address) as MyNFT;
  }
  connect(signer: Signer): MyNFT__factory {
    return super.connect(signer) as MyNFT__factory;
  }
  static readonly contractName: "MyNFT";
  public readonly contractName: "MyNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyNFTInterface {
    return new utils.Interface(_abi) as MyNFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MyNFT {
    return new Contract(address, _abi, signerOrProvider) as MyNFT;
  }
}
