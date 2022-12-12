import React from "react";
import { ethers } from 'ethers';
import { SuperToken } from "@superfluid-finance/sdk-core";

export default async function Balance() {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NODE_ENV_INFURA_URL,  //https://polygon-mainnet.infura.io/v3/d57f136bd5024f4889c74a1d4f7ce760
      137
    )

    const config = {
      hostAddress: "0x3E14dC1b13c488a8d5D310918780c983bD5982E7",
      cfaV1Address: "0xE62A9bc6eDe534E18Dd2793Dcaf5A2B6df112180",
      idaV1Address: "0xD0355200111C2B21AAbC1a31552eCCDc5d4E905d"
    }

    const daix = await SuperToken.create({
      address: "0xE62A9bc6eDe534E18Dd2793Dcaf5A2B6df112180",
      config,
      chainId: 56, // you can also pass in chainId instead (e.g. chainId: 137)
      provider
    })

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
  })

    const balance = await daix.balanceOf({
      account: accounts[0],
      provider
    })
    console.log(">>Got Balance");
    console.log(balance);
  }
