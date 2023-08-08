/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PriceFeedMock, PriceFeedMockInterface } from "../PriceFeedMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeedType",
    outputs: [
      {
        internalType: "enum PriceFeedType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
      {
        internalType: "uint256",
        name: "_startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "_answerInRound",
        type: "uint80",
      },
    ],
    name: "setParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "newPrice",
        type: "int256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "setRevertOnLatestRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum FlagState",
        name: "f",
        type: "uint8",
      },
    ],
    name: "setSkipPriceCheck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "skipPriceCheck",
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
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161070338038061070383398101604081905261002f9161007f565b600082905560ff81166080526001805460506001600160501b031991821681178355600480549092161790556100669042906100b5565b6002556100744260016100b5565b600355506100db9050565b6000806040838503121561009257600080fd5b82519150602083015160ff811681146100aa57600080fd5b809150509250929050565b600082198211156100d657634e487b7160e01b600052601160045260246000fd5b500190565b60805161060e6100f5600039600060d3015261060e6000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80639a6fc8f511610081578063d62ada111161005b578063d62ada11146102dc578063f7a30806146102f4578063feaf968c1461030757600080fd5b80639a6fc8f5146101cd578063bd18ad531461023a578063cd653afc1461024d57600080fd5b806354fd4d50116100b257806354fd4d501461012d57806367e8d83d1461013c5780637284e4161461018e57600080fd5b8063313ce567146100ce5780633fd0875f1461010c575b600080fd5b6100f57f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020015b60405180910390f35b6004546a0100000000000000000000900460ff166040516101039190610441565b60405160018152602001610103565b61018c61014a366004610482565b600480549115156c01000000000000000000000000027fffffffffffffffffffffffffffffffffffffff00ffffffffffffffffffffffff909216919091179055565b005b604080518082018252600c81527f7072696365206f7261636c6500000000000000000000000000000000000000006020820152905161010391906104ab565b6102036101db36600461053d565b60015460005460025460035460045469ffffffffffffffffffff948516941691939590929450565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a001610103565b61018c610248366004610558565b61030f565b61018c61025b366004610579565b6001805469ffffffffffffffffffff9586167fffffffffffffffffffffffffffffffffffffffffffff0000000000000000000090911617905560029290925560035560048054919092167fffffffffffffffffffffffffffffffffffffffff00ff00000000000000000000909116176b020000000000000000000000179055565b6102e461035f565b6040519015158152602001610103565b61018c6103023660046105bf565b600055565b610203610385565b600480548291907fffffffffffffffffffffffffffffffffffffffff00ffffffffffffffffffffff166b01000000000000000000000083600281111561035757610357610412565b021790555050565b600454600090610380906b010000000000000000000000900460ff166103d6565b905090565b60008060008060006004600c9054906101000a900460ff16156103a757600080fd5b505060015460005460025460035460045469ffffffffffffffffffff9485169893975091955093509190911690565b600060028260028111156103ec576103ec610412565b14156103f757600080fd5b600182600281111561040b5761040b610412565b1492915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60208101600e831061047c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60006020828403121561049457600080fd5b813580151581146104a457600080fd5b9392505050565b600060208083528351808285015260005b818110156104d8578581018301518582016040015282016104bc565b818111156104ea576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803569ffffffffffffffffffff8116811461053857600080fd5b919050565b60006020828403121561054f57600080fd5b6104a48261051e565b60006020828403121561056a57600080fd5b8135600381106104a457600080fd5b6000806000806080858703121561058f57600080fd5b6105988561051e565b935060208501359250604085013591506105b46060860161051e565b905092959194509250565b6000602082840312156105d157600080fd5b503591905056fea2646970667358221220b28ca5a6940544584841b24226583491b1dbb2b4611a626ac95d32ef8eb4541b64736f6c634300080a0033";

type PriceFeedMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PriceFeedMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PriceFeedMock__factory extends ContractFactory {
  constructor(...args: PriceFeedMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PriceFeedMock";
  }

  override deploy(
    _price: PromiseOrValue<BigNumberish>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PriceFeedMock> {
    return super.deploy(
      _price,
      _decimals,
      overrides || {}
    ) as Promise<PriceFeedMock>;
  }
  override getDeployTransaction(
    _price: PromiseOrValue<BigNumberish>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_price, _decimals, overrides || {});
  }
  override attach(address: string): PriceFeedMock {
    return super.attach(address) as PriceFeedMock;
  }
  override connect(signer: Signer): PriceFeedMock__factory {
    return super.connect(signer) as PriceFeedMock__factory;
  }
  static readonly contractName: "PriceFeedMock";

  public readonly contractName: "PriceFeedMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceFeedMockInterface {
    return new utils.Interface(_abi) as PriceFeedMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceFeedMock {
    return new Contract(address, _abi, signerOrProvider) as PriceFeedMock;
  }
}
