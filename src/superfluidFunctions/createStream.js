import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

export default async function createNewFlow(recipient, flowRate) {
    const provider = new ethers.providers.JsonRpcProvider(
        process.env.NODE_ENV_INFURA_URL,  //Your Infura NETWORK ENDPOINTS
        137
      );

    const signer = new ethers.Wallet(process.env.NODE_ENV_PRIVATE_KEY, provider);

    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const superfluid = await Framework.create({
        chainId: 137,
        provider: provider,
    });

    const NEARxContract = await superfluid.loadSuperToken("0x094Ed09F072596C34C5c0b197dcEB0da6b04C580");
    const NEARx = NEARxContract.address;

    try {
        const createFlowOperation = superfluid.cfaV1.createFlow({
            receiver: recipient,
            flowRate: flowRate,
            superToken: NEARx,
        });

        console.log("Creating your stream...");

        const result = await createFlowOperation.exec(signer);
        console.log(result);
        alert(
            `Congrats - you've just created a money stream!
            View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
            Network: Polygon
            Super Token: NEARx
            Sender: 0x6EeE6060f715257b970700bc2656De21dEdF074C
            Receiver: ${recipient},
            FlowRate: ${flowRate}
            `
        );
    } catch (error) {
        alert(
            "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
        );
        console.error(error);
    }
}
