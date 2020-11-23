/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Operations } from "./Operations";

export class OperationsFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Operations> {
    return super.deploy(overrides || {}) as Promise<Operations>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Operations {
    return super.attach(address) as Operations;
  }
  connect(signer: Signer): OperationsFactory {
    return super.connect(signer) as OperationsFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Operations {
    return new Contract(address, _abi, signerOrProvider) as Operations;
  }
}

const _abi = [
  {
    inputs: [],
    name: "PACKED_DEPOSIT_PUBDATA_BYTES",
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
    inputs: [],
    name: "PACKED_FULL_EXIT_PUBDATA_BYTES",
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
];

const _bytecode =
  "0x60a0610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c8063466dc2171460425780635ebcfa95146042575b600080fd5b6048605c565b604051605391906061565b60405180910390f35b602b81565b9081526020019056fea26469706673582212200776730c5d87704c16adfd6c8779e2e3abe43f2763ca223d0c37e0abcded07ce64736f6c63430007030033";