/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AdapterMock, AdapterMockInterface } from "../AdapterMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_targetContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CallerNotConfiguratorException",
    type: "error",
  },
  {
    inputs: [],
    name: "CreditFacadeOnlyException",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenNotAllowedException",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressException",
    type: "error",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "_acl",
    outputs: [
      {
        internalType: "contract IACL",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_gearboxAdapterType",
    outputs: [
      {
        internalType: "enum AdapterType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_gearboxAdapterVersion",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "addressProvider",
    outputs: [
      {
        internalType: "contract IAddressProvider",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approveToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokensToEnable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokensToDisable",
        type: "uint256",
      },
    ],
    name: "changeEnabledTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "configure",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creditAccount",
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
    inputs: [],
    name: "creditFacade",
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
    inputs: [],
    name: "creditManager",
    outputs: [
      {
        internalType: "contract ICreditManagerV2",
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
        name: "token",
        type: "address",
      },
    ],
    name: "disableToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "enableToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "disableTokenIn",
        type: "bool",
      },
    ],
    name: "executeSwapNoApprove",
    outputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "disableTokenIn",
        type: "bool",
      },
    ],
    name: "executeSwapSafeApprove",
    outputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getMaskOrRevert",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenMask",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetContract",
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
] as const;

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506040516200184e3803806200184e8339810160408190526200003591620001f1565b81816001600160a01b03821615806200005557506001600160a01b038116155b156200007457604051635919af9760e11b815260040160405180910390fd5b6001600160a01b0382166080819052604080516316f0115b60e01b815290516316f0115b916004808201926020929091908290030181865afa158015620000bf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e5919062000230565b6001600160a01b0316632954018c6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000123573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000149919062000230565b6001600160a01b0390811660a081905290821660c05260408051630873769560e01b815290516308737695916004808201926020929091908290030181865afa1580156200019b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c1919062000230565b6001600160a01b031660e052506200025792505050565b6001600160a01b0381168114620001ee57600080fd5b50565b600080604083850312156200020557600080fd5b82516200021281620001d8565b60208401519092506200022581620001d8565b809150509250929050565b6000602082840312156200024357600080fd5b81516200025081620001d8565b9392505050565b60805160a05160c05160e051611562620002ec600039600081816102e601526106b901526000818161030d0152818161046f01526109ff01526000610220015260008181610334015281816103950152818161042b0152818161097201528181610a6f01528181610b6401528181610c5701528181610d4901528181610e6601528181610f3d0152610feb01526115626000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806378aa73a4116100b2578063bd90df7011610081578063c690908a11610066578063c690908a14610356578063ce30bbdb14610369578063e7681adb1461037e5761011b565b8063bd90df7014610308578063c12c21c01461032f5761011b565b806378aa73a414610292578063807e14db146102ad578063a4cb202a146102ce578063a50cf2c8146102e15761011b565b80632f7a1881116100ee5780632f7a1881146102675780633e0b1a231461026f5780635e521ad2146102775780636d0a12181461028a5761011b565b8063022fc88b146101ca57806309c5eabe146101df57806323e27a64146102085780632954018c1461021b575b610123610391565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610187576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101c76000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061042792505050565b50005b6101dd6101d83660046110d6565b610518565b005b6101f26101ed36600461121c565b610592565b6040516101ff91906112cb565b60405180910390f35b6101dd6102163660046112e5565b610609565b6102427f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101ff565b610242610681565b6101dd61068b565b6101f2610285366004611310565b610771565b6102426107f6565b61029a600181565b60405161ffff90911681526020016101ff565b6102c06102bb3660046112e5565b610800565b6040519081526020016101ff565b6101f26102dc366004611310565b61080b565b6102427f000000000000000000000000000000000000000000000000000000000000000081565b6102427f000000000000000000000000000000000000000000000000000000000000000081565b6102427f000000000000000000000000000000000000000000000000000000000000000081565b6101dd6103643660046112e5565b610885565b610371600081565b6040516101ff9190611385565b6101dd61038c3660046113c6565b6108fa565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632f7a18816040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042291906113e8565b905090565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636ce4074a61046d610391565b7f0000000000000000000000000000000000000000000000000000000000000000856040518463ffffffff1660e01b81526004016104ad93929190611405565b6000604051808303816000875af11580156104cc573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610512919081019061143e565b92915050565b610520610391565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610584576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61058e8282610970565b5050565b606061059c610391565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610600576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61051282610427565b610611610391565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610675576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61067e81610a6d565b50565b6000610422610391565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa158015610715573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073991906114b5565b61076f576040517f61081c1500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b606061077b610391565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107df576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107eb85858585610b48565b90505b949350505050565b6000610422610b60565b600061051282610c0f565b6060610815610391565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610879576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107eb85858585610d02565b61088d610391565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108f1576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61067e81610d47565b610902610391565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610966576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61058e8282610e14565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166346fb371d6109b4610391565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000082166024820152908516604482015260648101849052608401600060405180830381600087803b158015610a5157600080fd5b505af1158015610a65573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630d8f9cee610ab1610b60565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff918216600482015290841660248201526044016020604051808303816000875af1158015610b24573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058e91906114b5565b6060610b5385610c0f565b506107eb8585858561108f565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e958b704610ba6610391565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401602060405180830381865afa1580156103fe573d6000803e3d6000fd5b6040517ff67c5bd000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063f67c5bd090602401602060405180830381865afa158015610ca0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc491906114d2565b905080610cfd576040517f700ca0af00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6060610d2e857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610970565b610d3a8585858561108f565b90506107ee856001610970565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166351e3f160610d8b610b60565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff91821660048201529084166024820152604401600060405180830381600087803b158015610df957600080fd5b505af1158015610e0d573d6000803e3d6000fd5b5050505050565b6000610e1e610b60565b9050828218600060015b828111610a65578281161561105a576040517fe75538c7000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e75538c7906024016040805180830381865afa158015610ec1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee591906114eb565b50915085811615610f9e576040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015283811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015610f8157600080fd5b505af1158015610f95573d6000803e3d6000fd5b5050505061105a565b6040517f0d8f9cee00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015283811660248301527f00000000000000000000000000000000000000000000000000000000000000001690630d8f9cee906044016020604051808303816000875af1158015611034573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061105891906114b5565b505b807f8000000000000000000000000000000000000000000000000000000000000000141561108757610a65565b60011b610e28565b606061109a83610427565b905081156110ab576110ab85610a6d565b6107ee84610d47565b73ffffffffffffffffffffffffffffffffffffffff8116811461067e57600080fd5b600080604083850312156110e957600080fd5b82356110f4816110b4565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561117857611178611102565b604052919050565b600067ffffffffffffffff82111561119a5761119a611102565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126111d757600080fd5b81356111ea6111e582611180565b611131565b8181528460208386010111156111ff57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561122e57600080fd5b813567ffffffffffffffff81111561124557600080fd5b6107ee848285016111c6565b60005b8381101561126c578181015183820152602001611254565b8381111561127b576000848401525b50505050565b60008151808452611299816020860160208601611251565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006112de6020830184611281565b9392505050565b6000602082840312156112f757600080fd5b81356112de816110b4565b801515811461067e57600080fd5b6000806000806080858703121561132657600080fd5b8435611331816110b4565b93506020850135611341816110b4565b9250604085013567ffffffffffffffff81111561135d57600080fd5b611369878288016111c6565b925050606085013561137a81611302565b939692955090935050565b60208101601583106113c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b600080604083850312156113d957600080fd5b50508035926020909101359150565b6000602082840312156113fa57600080fd5b81516112de816110b4565b600073ffffffffffffffffffffffffffffffffffffffff8086168352808516602084015250606060408301526107eb6060830184611281565b60006020828403121561145057600080fd5b815167ffffffffffffffff81111561146757600080fd5b8201601f8101841361147857600080fd5b80516114866111e582611180565b81815285602083850101111561149b57600080fd5b6114ac826020830160208601611251565b95945050505050565b6000602082840312156114c757600080fd5b81516112de81611302565b6000602082840312156114e457600080fd5b5051919050565b600080604083850312156114fe57600080fd5b8251611509816110b4565b602084015190925061ffff8116811461152157600080fd5b80915050925092905056fea264697066735822122032c5938ebd20870f783e8d61867ae10563eb9084a7c9c2b64de8f014c1c7d89a64736f6c634300080a0033";

type AdapterMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdapterMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AdapterMock__factory extends ContractFactory {
  constructor(...args: AdapterMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AdapterMock";
  }

  override deploy(
    _creditManager: PromiseOrValue<string>,
    _targetContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AdapterMock> {
    return super.deploy(
      _creditManager,
      _targetContract,
      overrides || {}
    ) as Promise<AdapterMock>;
  }
  override getDeployTransaction(
    _creditManager: PromiseOrValue<string>,
    _targetContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _creditManager,
      _targetContract,
      overrides || {}
    );
  }
  override attach(address: string): AdapterMock {
    return super.attach(address) as AdapterMock;
  }
  override connect(signer: Signer): AdapterMock__factory {
    return super.connect(signer) as AdapterMock__factory;
  }
  static readonly contractName: "AdapterMock";

  public readonly contractName: "AdapterMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdapterMockInterface {
    return new utils.Interface(_abi) as AdapterMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdapterMock {
    return new Contract(address, _abi, signerOrProvider) as AdapterMock;
  }
}
