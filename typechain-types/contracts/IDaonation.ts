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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface IDaonationInterface extends utils.Interface {
  functions: {
    "addGovernanceTokenRewards(uint256)": FunctionFragment;
    "donate(uint256,uint256)": FunctionFragment;
    "proposeVaquinha(string,uint256,address)": FunctionFragment;
    "redeemDonations(uint256)": FunctionFragment;
    "unlockTokens(uint256)": FunctionFragment;
    "voteAgainstVaquinha(uint256,uint256)": FunctionFragment;
    "voteForVaquinha(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addGovernanceTokenRewards"
      | "donate"
      | "proposeVaquinha"
      | "redeemDonations"
      | "unlockTokens"
      | "voteAgainstVaquinha"
      | "voteForVaquinha"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addGovernanceTokenRewards",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "donate",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposeVaquinha",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemDonations",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "voteAgainstVaquinha",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "voteForVaquinha",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addGovernanceTokenRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "donate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeVaquinha",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemDonations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteAgainstVaquinha",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteForVaquinha",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IDaonation extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDaonationInterface;

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
    addGovernanceTokenRewards(
      rewardsAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    donate(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      donationAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposeVaquinha(
      description: PromiseOrValue<string>,
      expectedValue: PromiseOrValue<BigNumberish>,
      donationsTo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeemDonations(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unlockTokens(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    voteAgainstVaquinha(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      tokensToUse: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    voteForVaquinha(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      tokensToUse: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addGovernanceTokenRewards(
    rewardsAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  donate(
    vaquinhaId: PromiseOrValue<BigNumberish>,
    donationAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposeVaquinha(
    description: PromiseOrValue<string>,
    expectedValue: PromiseOrValue<BigNumberish>,
    donationsTo: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeemDonations(
    vaquinhaId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unlockTokens(
    vaquinhaId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  voteAgainstVaquinha(
    vaquinhaId: PromiseOrValue<BigNumberish>,
    tokensToUse: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  voteForVaquinha(
    vaquinhaId: PromiseOrValue<BigNumberish>,
    tokensToUse: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addGovernanceTokenRewards(
      rewardsAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    donate(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      donationAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposeVaquinha(
      description: PromiseOrValue<string>,
      expectedValue: PromiseOrValue<BigNumberish>,
      donationsTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemDonations(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockTokens(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    voteAgainstVaquinha(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      tokensToUse: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    voteForVaquinha(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      tokensToUse: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addGovernanceTokenRewards(
      rewardsAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    donate(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      donationAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposeVaquinha(
      description: PromiseOrValue<string>,
      expectedValue: PromiseOrValue<BigNumberish>,
      donationsTo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeemDonations(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unlockTokens(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    voteAgainstVaquinha(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      tokensToUse: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    voteForVaquinha(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      tokensToUse: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addGovernanceTokenRewards(
      rewardsAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    donate(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      donationAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposeVaquinha(
      description: PromiseOrValue<string>,
      expectedValue: PromiseOrValue<BigNumberish>,
      donationsTo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeemDonations(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unlockTokens(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    voteAgainstVaquinha(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      tokensToUse: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    voteForVaquinha(
      vaquinhaId: PromiseOrValue<BigNumberish>,
      tokensToUse: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
