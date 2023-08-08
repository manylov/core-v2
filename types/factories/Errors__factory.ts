/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Errors, ErrorsInterface } from "../Errors";

const _abi = [
  {
    inputs: [],
    name: "ACL_CALLER_NOT_CONFIGURATOR",
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
    name: "ACL_CALLER_NOT_PAUSABLE_ADMIN",
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
    name: "AF_CANT_CLOSE_CREDIT_ACCOUNT_IN_THE_SAME_BLOCK",
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
    name: "AF_CREDIT_ACCOUNT_NOT_IN_STOCK",
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
    name: "AF_EXTERNAL_ACCOUNTS_ARE_FORBIDDEN",
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
    name: "AF_MINING_IS_FINISHED",
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
    name: "AS_ADDRESS_NOT_FOUND",
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
    name: "CA_CONNECTED_CREDIT_MANAGER_ONLY",
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
    name: "CA_FACTORY_ONLY",
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
    name: "CR_CREDIT_MANAGER_ALREADY_ADDED",
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
    name: "CR_POOL_ALREADY_ADDED",
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
    name: "INCORRECT_ARRAY_LENGTH",
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
    name: "INCORRECT_PARAMETER",
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
    name: "INCORRECT_PATH_LENGTH",
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
    name: "MATH_ADDITION_OVERFLOW",
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
    name: "MATH_DIVISION_BY_ZERO",
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
    name: "MATH_MULTIPLICATION_OVERFLOW",
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
    name: "NOT_IMPLEMENTED",
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
    name: "POOL_CANT_ADD_CREDIT_MANAGER_TWICE",
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
    name: "POOL_CONNECTED_CREDIT_MANAGERS_ONLY",
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
    name: "POOL_INCOMPATIBLE_CREDIT_ACCOUNT_MANAGER",
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
    name: "POOL_INCORRECT_WITHDRAW_FEE",
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
    name: "POOL_MORE_THAN_EXPECTED_LIQUIDITY_LIMIT",
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
    name: "REGISTERED_CREDIT_ACCOUNT_MANAGERS_ONLY",
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
    name: "REGISTERED_POOLS_ONLY",
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
    name: "TD_CONTRIBUTOR_IS_NOT_REGISTERED",
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
    name: "TD_INCORRECT_WEIGHTS",
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
    name: "TD_NON_ZERO_BALANCE_AFTER_DISTRIBUTION",
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
    name: "TD_WALLET_IS_ALREADY_CONNECTED_TO_VC",
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
    name: "WG_DESTINATION_IS_NOT_WETH_COMPATIBLE",
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
    name: "WG_NOT_ENOUGH_FUNDS",
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
    name: "WG_RECEIVE_IS_NOT_ALLOWED",
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
    name: "ZERO_ADDRESS_IS_NOT_ALLOWED",
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
] as const;

const _bytecode =
  "0x610a9561003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106102155760003560e01c806387f88ef411610134578063bdcb2576116100c7578063de63cd4011610096578063ebbd977f1161007b578063ebbd977f14610938578063fe32e65d14610974578063ff2a04e3146109b057600080fd5b8063de63cd40146108c0578063e7f3be0c146108fc57600080fd5b8063bdcb2576146107d0578063beea5ec21461080c578063ccbf927814610848578063d1a65a381461088457600080fd5b8063a988ac6011610103578063a988ac60146106e0578063abc3d2541461071c578063ac75713914610758578063b563b3001461079457600080fd5b806387f88ef4146105f057806394391a4a1461062c57806399a98c9914610668578063a27c0370146106a457600080fd5b80633647c9f9116101ac57806343f6e4ab1161017b57806343f6e4ab14610500578063447d8e421461053c578063532789111461057857806376d9ebb8146105b457600080fd5b80633647c9f9146104105780633df46fe51461044c5780633f3153b2146104885780634349e3d8146104c457600080fd5b80630f5ee482116101e85780630f5ee48214610320578063119427c51461035c5780632357f3621461039857806328432c22146103d457600080fd5b8063029d23441461021a5780630a2b1d3a1461026c5780630afeee97146102a85780630c9409e7146102e4575b600080fd5b6102566040518060400160405280600281526020017f4d3100000000000000000000000000000000000000000000000000000000000081525081565b60405161026391906109ec565b60405180910390f35b6102566040518060400160405280600381526020017f435231000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f525000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f414631000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f4d3200000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f505332000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f434132000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f505333000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f574731000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f504c00000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f5a3000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f4d3300000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f4e4900000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f574732000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f544431000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f505330000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f414632000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f435000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f435232000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f505331000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600481526020017f41434c310000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f544433000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f414633000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f544434000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f495000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f574733000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f505334000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f414634000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f415031000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f435200000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600481526020017f41434c320000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f544432000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600381526020017f434131000000000000000000000000000000000000000000000000000000000081525081565b600060208083528351808285015260005b81811015610a19578581018301518582016040015282016109fd565b81811115610a2b576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea26469706673582212203b117742ee960690e2e26379cbce72bee2bed92dd253d4b0cc3527088d70a74564736f6c634300080a0033";

type ErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ErrorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Errors__factory extends ContractFactory {
  constructor(...args: ErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Errors";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Errors> {
    return super.deploy(overrides || {}) as Promise<Errors>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Errors {
    return super.attach(address) as Errors;
  }
  override connect(signer: Signer): Errors__factory {
    return super.connect(signer) as Errors__factory;
  }
  static readonly contractName: "Errors";

  public readonly contractName: "Errors";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ErrorsInterface {
    return new utils.Interface(_abi) as ErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Errors {
    return new Contract(address, _abi, signerOrProvider) as Errors;
  }
}
