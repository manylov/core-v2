/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type ExchangeStruct = {
  path: PromiseOrValue<string>[];
  amountOutMin: PromiseOrValue<BigNumberish>;
};

export type ExchangeStructOutput = [string[], BigNumber] & {
  path: string[];
  amountOutMin: BigNumber;
};

export interface ICreditManagerInterface extends utils.Interface {
  functions: {
    "_calcClosePayments(address,uint256,bool)": FunctionFragment;
    "addCollateral(address,address,uint256)": FunctionFragment;
    "approve(address,address)": FunctionFragment;
    "calcRepayAmount(address,bool)": FunctionFragment;
    "closeCreditAccount(address,(address[],uint256)[])": FunctionFragment;
    "creditAccounts(address)": FunctionFragment;
    "creditFilter()": FunctionFragment;
    "defaultSwapContract()": FunctionFragment;
    "executeOrder(address,address,bytes)": FunctionFragment;
    "feeInterest()": FunctionFragment;
    "feeLiquidation()": FunctionFragment;
    "getCreditAccountOrRevert(address)": FunctionFragment;
    "hasOpenedCreditAccount(address)": FunctionFragment;
    "increaseBorrowedAmount(uint256)": FunctionFragment;
    "liquidateCreditAccount(address,address,bool)": FunctionFragment;
    "liquidationDiscount()": FunctionFragment;
    "maxAmount()": FunctionFragment;
    "maxLeverageFactor()": FunctionFragment;
    "minAmount()": FunctionFragment;
    "minHealthFactor()": FunctionFragment;
    "openCreditAccount(uint256,address,uint256,uint256)": FunctionFragment;
    "poolService()": FunctionFragment;
    "provideCreditAccountAllowance(address,address,address)": FunctionFragment;
    "repayCreditAccount(address)": FunctionFragment;
    "repayCreditAccountETH(address,address)": FunctionFragment;
    "transferAccountOwnership(address)": FunctionFragment;
    "underlyingToken()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_calcClosePayments"
      | "addCollateral"
      | "approve"
      | "calcRepayAmount"
      | "closeCreditAccount"
      | "creditAccounts"
      | "creditFilter"
      | "defaultSwapContract"
      | "executeOrder"
      | "feeInterest"
      | "feeLiquidation"
      | "getCreditAccountOrRevert"
      | "hasOpenedCreditAccount"
      | "increaseBorrowedAmount"
      | "liquidateCreditAccount"
      | "liquidationDiscount"
      | "maxAmount"
      | "maxLeverageFactor"
      | "minAmount"
      | "minHealthFactor"
      | "openCreditAccount"
      | "poolService"
      | "provideCreditAccountAllowance"
      | "repayCreditAccount"
      | "repayCreditAccountETH"
      | "transferAccountOwnership"
      | "underlyingToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_calcClosePayments",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addCollateral",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "calcRepayAmount",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "closeCreditAccount",
    values: [PromiseOrValue<string>, ExchangeStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "creditAccounts",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "creditFilter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultSwapContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeOrder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "feeInterest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeLiquidation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditAccountOrRevert",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasOpenedCreditAccount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseBorrowedAmount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateCreditAccount",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationDiscount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "maxAmount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxLeverageFactor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "minAmount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minHealthFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "openCreditAccount",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "poolService",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "provideCreditAccountAllowance",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "repayCreditAccount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "repayCreditAccountETH",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferAccountOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_calcClosePayments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calcRepayAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditFilter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultSwapContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreditAccountOrRevert",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasOpenedCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseBorrowedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidateCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationDiscount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxAmount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxLeverageFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minAmount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minHealthFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolService",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "provideCreditAccountAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayCreditAccountETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferAccountOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;

  events: {
    "AddCollateral(address,address,uint256)": EventFragment;
    "CloseCreditAccount(address,address,uint256)": EventFragment;
    "ExecuteOrder(address,address)": EventFragment;
    "IncreaseBorrowedAmount(address,uint256)": EventFragment;
    "LiquidateCreditAccount(address,address,uint256)": EventFragment;
    "NewParameters(uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "OpenCreditAccount(address,address,address,uint256,uint256,uint256)": EventFragment;
    "RepayCreditAccount(address,address)": EventFragment;
    "TransferAccount(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddCollateral"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CloseCreditAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncreaseBorrowedAmount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidateCreditAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewParameters"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OpenCreditAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RepayCreditAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferAccount"): EventFragment;
}

export interface AddCollateralEventObject {
  onBehalfOf: string;
  token: string;
  value: BigNumber;
}
export type AddCollateralEvent = TypedEvent<
  [string, string, BigNumber],
  AddCollateralEventObject
>;

export type AddCollateralEventFilter = TypedEventFilter<AddCollateralEvent>;

export interface CloseCreditAccountEventObject {
  owner: string;
  to: string;
  remainingFunds: BigNumber;
}
export type CloseCreditAccountEvent = TypedEvent<
  [string, string, BigNumber],
  CloseCreditAccountEventObject
>;

export type CloseCreditAccountEventFilter =
  TypedEventFilter<CloseCreditAccountEvent>;

export interface ExecuteOrderEventObject {
  borrower: string;
  target: string;
}
export type ExecuteOrderEvent = TypedEvent<
  [string, string],
  ExecuteOrderEventObject
>;

export type ExecuteOrderEventFilter = TypedEventFilter<ExecuteOrderEvent>;

export interface IncreaseBorrowedAmountEventObject {
  borrower: string;
  amount: BigNumber;
}
export type IncreaseBorrowedAmountEvent = TypedEvent<
  [string, BigNumber],
  IncreaseBorrowedAmountEventObject
>;

export type IncreaseBorrowedAmountEventFilter =
  TypedEventFilter<IncreaseBorrowedAmountEvent>;

export interface LiquidateCreditAccountEventObject {
  owner: string;
  liquidator: string;
  remainingFunds: BigNumber;
}
export type LiquidateCreditAccountEvent = TypedEvent<
  [string, string, BigNumber],
  LiquidateCreditAccountEventObject
>;

export type LiquidateCreditAccountEventFilter =
  TypedEventFilter<LiquidateCreditAccountEvent>;

export interface NewParametersEventObject {
  minAmount: BigNumber;
  maxAmount: BigNumber;
  maxLeverage: BigNumber;
  feeInterest: BigNumber;
  feeLiquidation: BigNumber;
  liquidationDiscount: BigNumber;
}
export type NewParametersEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  NewParametersEventObject
>;

export type NewParametersEventFilter = TypedEventFilter<NewParametersEvent>;

export interface OpenCreditAccountEventObject {
  sender: string;
  onBehalfOf: string;
  creditAccount: string;
  amount: BigNumber;
  borrowAmount: BigNumber;
  referralCode: BigNumber;
}
export type OpenCreditAccountEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber],
  OpenCreditAccountEventObject
>;

export type OpenCreditAccountEventFilter =
  TypedEventFilter<OpenCreditAccountEvent>;

export interface RepayCreditAccountEventObject {
  owner: string;
  to: string;
}
export type RepayCreditAccountEvent = TypedEvent<
  [string, string],
  RepayCreditAccountEventObject
>;

export type RepayCreditAccountEventFilter =
  TypedEventFilter<RepayCreditAccountEvent>;

export interface TransferAccountEventObject {
  oldOwner: string;
  newOwner: string;
}
export type TransferAccountEvent = TypedEvent<
  [string, string],
  TransferAccountEventObject
>;

export type TransferAccountEventFilter = TypedEventFilter<TransferAccountEvent>;

export interface ICreditManager extends BaseContract {
  contractName: "ICreditManager";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICreditManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _calcClosePayments(
      creditAccount: PromiseOrValue<string>,
      totalValue: PromiseOrValue<BigNumberish>,
      isLiquidated: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _borrowedAmount: BigNumber;
        amountToPool: BigNumber;
        remainingFunds: BigNumber;
        profit: BigNumber;
        loss: BigNumber;
      }
    >;

    addCollateral(
      onBehalfOf: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    approve(
      targetContract: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    calcRepayAmount(
      borrower: PromiseOrValue<string>,
      isLiquidated: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    closeCreditAccount(
      to: PromiseOrValue<string>,
      paths: ExchangeStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    creditAccounts(
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    creditFilter(overrides?: CallOverrides): Promise<[string]>;

    defaultSwapContract(overrides?: CallOverrides): Promise<[string]>;

    executeOrder(
      borrower: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    feeInterest(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeLiquidation(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCreditAccountOrRevert(
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hasOpenedCreditAccount(
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    increaseBorrowedAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidateCreditAccount(
      borrower: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      force: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidationDiscount(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxLeverageFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    minAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    minHealthFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    openCreditAccount(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      leverageFactor: PromiseOrValue<BigNumberish>,
      referralCode: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    poolService(overrides?: CallOverrides): Promise<[string]>;

    provideCreditAccountAllowance(
      creditAccount: PromiseOrValue<string>,
      toContract: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repayCreditAccount(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repayCreditAccountETH(
      borrower: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferAccountOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;
  };

  _calcClosePayments(
    creditAccount: PromiseOrValue<string>,
    totalValue: PromiseOrValue<BigNumberish>,
    isLiquidated: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      _borrowedAmount: BigNumber;
      amountToPool: BigNumber;
      remainingFunds: BigNumber;
      profit: BigNumber;
      loss: BigNumber;
    }
  >;

  addCollateral(
    onBehalfOf: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  approve(
    targetContract: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  calcRepayAmount(
    borrower: PromiseOrValue<string>,
    isLiquidated: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  closeCreditAccount(
    to: PromiseOrValue<string>,
    paths: ExchangeStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  creditAccounts(
    borrower: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  creditFilter(overrides?: CallOverrides): Promise<string>;

  defaultSwapContract(overrides?: CallOverrides): Promise<string>;

  executeOrder(
    borrower: PromiseOrValue<string>,
    target: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  feeInterest(overrides?: CallOverrides): Promise<BigNumber>;

  feeLiquidation(overrides?: CallOverrides): Promise<BigNumber>;

  getCreditAccountOrRevert(
    borrower: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  hasOpenedCreditAccount(
    borrower: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  increaseBorrowedAmount(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidateCreditAccount(
    borrower: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    force: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidationDiscount(overrides?: CallOverrides): Promise<BigNumber>;

  maxAmount(overrides?: CallOverrides): Promise<BigNumber>;

  maxLeverageFactor(overrides?: CallOverrides): Promise<BigNumber>;

  minAmount(overrides?: CallOverrides): Promise<BigNumber>;

  minHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

  openCreditAccount(
    amount: PromiseOrValue<BigNumberish>,
    onBehalfOf: PromiseOrValue<string>,
    leverageFactor: PromiseOrValue<BigNumberish>,
    referralCode: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  poolService(overrides?: CallOverrides): Promise<string>;

  provideCreditAccountAllowance(
    creditAccount: PromiseOrValue<string>,
    toContract: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repayCreditAccount(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repayCreditAccountETH(
    borrower: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferAccountOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _calcClosePayments(
      creditAccount: PromiseOrValue<string>,
      totalValue: PromiseOrValue<BigNumberish>,
      isLiquidated: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _borrowedAmount: BigNumber;
        amountToPool: BigNumber;
        remainingFunds: BigNumber;
        profit: BigNumber;
        loss: BigNumber;
      }
    >;

    addCollateral(
      onBehalfOf: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    approve(
      targetContract: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    calcRepayAmount(
      borrower: PromiseOrValue<string>,
      isLiquidated: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closeCreditAccount(
      to: PromiseOrValue<string>,
      paths: ExchangeStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    creditAccounts(
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    creditFilter(overrides?: CallOverrides): Promise<string>;

    defaultSwapContract(overrides?: CallOverrides): Promise<string>;

    executeOrder(
      borrower: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    feeInterest(overrides?: CallOverrides): Promise<BigNumber>;

    feeLiquidation(overrides?: CallOverrides): Promise<BigNumber>;

    getCreditAccountOrRevert(
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    hasOpenedCreditAccount(
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    increaseBorrowedAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidateCreditAccount(
      borrower: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      force: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidationDiscount(overrides?: CallOverrides): Promise<BigNumber>;

    maxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    maxLeverageFactor(overrides?: CallOverrides): Promise<BigNumber>;

    minAmount(overrides?: CallOverrides): Promise<BigNumber>;

    minHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    openCreditAccount(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      leverageFactor: PromiseOrValue<BigNumberish>,
      referralCode: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    poolService(overrides?: CallOverrides): Promise<string>;

    provideCreditAccountAllowance(
      creditAccount: PromiseOrValue<string>,
      toContract: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    repayCreditAccount(
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    repayCreditAccountETH(
      borrower: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferAccountOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AddCollateral(address,address,uint256)"(
      onBehalfOf?: PromiseOrValue<string> | null,
      token?: PromiseOrValue<string> | null,
      value?: null
    ): AddCollateralEventFilter;
    AddCollateral(
      onBehalfOf?: PromiseOrValue<string> | null,
      token?: PromiseOrValue<string> | null,
      value?: null
    ): AddCollateralEventFilter;

    "CloseCreditAccount(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      remainingFunds?: null
    ): CloseCreditAccountEventFilter;
    CloseCreditAccount(
      owner?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      remainingFunds?: null
    ): CloseCreditAccountEventFilter;

    "ExecuteOrder(address,address)"(
      borrower?: PromiseOrValue<string> | null,
      target?: PromiseOrValue<string> | null
    ): ExecuteOrderEventFilter;
    ExecuteOrder(
      borrower?: PromiseOrValue<string> | null,
      target?: PromiseOrValue<string> | null
    ): ExecuteOrderEventFilter;

    "IncreaseBorrowedAmount(address,uint256)"(
      borrower?: PromiseOrValue<string> | null,
      amount?: null
    ): IncreaseBorrowedAmountEventFilter;
    IncreaseBorrowedAmount(
      borrower?: PromiseOrValue<string> | null,
      amount?: null
    ): IncreaseBorrowedAmountEventFilter;

    "LiquidateCreditAccount(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      liquidator?: PromiseOrValue<string> | null,
      remainingFunds?: null
    ): LiquidateCreditAccountEventFilter;
    LiquidateCreditAccount(
      owner?: PromiseOrValue<string> | null,
      liquidator?: PromiseOrValue<string> | null,
      remainingFunds?: null
    ): LiquidateCreditAccountEventFilter;

    "NewParameters(uint256,uint256,uint256,uint256,uint256,uint256)"(
      minAmount?: null,
      maxAmount?: null,
      maxLeverage?: null,
      feeInterest?: null,
      feeLiquidation?: null,
      liquidationDiscount?: null
    ): NewParametersEventFilter;
    NewParameters(
      minAmount?: null,
      maxAmount?: null,
      maxLeverage?: null,
      feeInterest?: null,
      feeLiquidation?: null,
      liquidationDiscount?: null
    ): NewParametersEventFilter;

    "OpenCreditAccount(address,address,address,uint256,uint256,uint256)"(
      sender?: PromiseOrValue<string> | null,
      onBehalfOf?: PromiseOrValue<string> | null,
      creditAccount?: PromiseOrValue<string> | null,
      amount?: null,
      borrowAmount?: null,
      referralCode?: null
    ): OpenCreditAccountEventFilter;
    OpenCreditAccount(
      sender?: PromiseOrValue<string> | null,
      onBehalfOf?: PromiseOrValue<string> | null,
      creditAccount?: PromiseOrValue<string> | null,
      amount?: null,
      borrowAmount?: null,
      referralCode?: null
    ): OpenCreditAccountEventFilter;

    "RepayCreditAccount(address,address)"(
      owner?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): RepayCreditAccountEventFilter;
    RepayCreditAccount(
      owner?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): RepayCreditAccountEventFilter;

    "TransferAccount(address,address)"(
      oldOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): TransferAccountEventFilter;
    TransferAccount(
      oldOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): TransferAccountEventFilter;
  };

  estimateGas: {
    _calcClosePayments(
      creditAccount: PromiseOrValue<string>,
      totalValue: PromiseOrValue<BigNumberish>,
      isLiquidated: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addCollateral(
      onBehalfOf: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    approve(
      targetContract: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    calcRepayAmount(
      borrower: PromiseOrValue<string>,
      isLiquidated: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closeCreditAccount(
      to: PromiseOrValue<string>,
      paths: ExchangeStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    creditAccounts(
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditFilter(overrides?: CallOverrides): Promise<BigNumber>;

    defaultSwapContract(overrides?: CallOverrides): Promise<BigNumber>;

    executeOrder(
      borrower: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    feeInterest(overrides?: CallOverrides): Promise<BigNumber>;

    feeLiquidation(overrides?: CallOverrides): Promise<BigNumber>;

    getCreditAccountOrRevert(
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasOpenedCreditAccount(
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseBorrowedAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidateCreditAccount(
      borrower: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      force: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidationDiscount(overrides?: CallOverrides): Promise<BigNumber>;

    maxAmount(overrides?: CallOverrides): Promise<BigNumber>;

    maxLeverageFactor(overrides?: CallOverrides): Promise<BigNumber>;

    minAmount(overrides?: CallOverrides): Promise<BigNumber>;

    minHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    openCreditAccount(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      leverageFactor: PromiseOrValue<BigNumberish>,
      referralCode: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    poolService(overrides?: CallOverrides): Promise<BigNumber>;

    provideCreditAccountAllowance(
      creditAccount: PromiseOrValue<string>,
      toContract: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repayCreditAccount(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repayCreditAccountETH(
      borrower: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferAccountOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _calcClosePayments(
      creditAccount: PromiseOrValue<string>,
      totalValue: PromiseOrValue<BigNumberish>,
      isLiquidated: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addCollateral(
      onBehalfOf: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    approve(
      targetContract: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    calcRepayAmount(
      borrower: PromiseOrValue<string>,
      isLiquidated: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closeCreditAccount(
      to: PromiseOrValue<string>,
      paths: ExchangeStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    creditAccounts(
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditFilter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultSwapContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeOrder(
      borrower: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    feeInterest(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeLiquidation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCreditAccountOrRevert(
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasOpenedCreditAccount(
      borrower: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseBorrowedAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidateCreditAccount(
      borrower: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      force: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidationDiscount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxLeverageFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minHealthFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    openCreditAccount(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      leverageFactor: PromiseOrValue<BigNumberish>,
      referralCode: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    poolService(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    provideCreditAccountAllowance(
      creditAccount: PromiseOrValue<string>,
      toContract: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repayCreditAccount(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repayCreditAccountETH(
      borrower: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferAccountOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
