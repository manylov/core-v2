/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILPPriceFeedEvents,
  ILPPriceFeedEventsInterface,
} from "../../ILPPriceFeed.sol/ILPPriceFeedEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "lowerBound",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "upperBound",
        type: "uint256",
      },
    ],
    name: "NewLimiterParams",
    type: "event",
  },
] as const;

export class ILPPriceFeedEvents__factory {
  static readonly abi = _abi;
  static createInterface(): ILPPriceFeedEventsInterface {
    return new utils.Interface(_abi) as ILPPriceFeedEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILPPriceFeedEvents {
    return new Contract(address, _abi, signerOrProvider) as ILPPriceFeedEvents;
  }
}
