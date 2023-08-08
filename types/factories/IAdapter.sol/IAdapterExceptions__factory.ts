/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAdapterExceptions,
  IAdapterExceptionsInterface,
} from "../../IAdapter.sol/IAdapterExceptions";

const _abi = [
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
] as const;

export class IAdapterExceptions__factory {
  static readonly abi = _abi;
  static createInterface(): IAdapterExceptionsInterface {
    return new utils.Interface(_abi) as IAdapterExceptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAdapterExceptions {
    return new Contract(address, _abi, signerOrProvider) as IAdapterExceptions;
  }
}
