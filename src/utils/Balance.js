import React from "react";
import { ethers } from 'ethers';
import { SuperToken } from "@superfluid-finance/sdk-core";

export default async function Balance() {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NODE_ENV_INFURA_URL,  //Your Infura NETWORK ENDPOINTS
      137
    )

    const config = {
      hostAddress: "0x3E14dC1b13c488a8d5D310918780c983bD5982E7",
      cfaV1Address: "0x6EeE6060f715257b970700bc2656De21dEdF074C",
      idaV1Address: "0xB0aABBA4B2783A72C52956CDEF62d438ecA2d7a1"
    }

    const daix = await SuperToken.create({
      address: "0x094Ed09F072596C34C5c0b197dcEB0da6b04C580",
      config,
      chainId: 137, // you can also pass in chainId instead (e.g. chainId: 137)
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
