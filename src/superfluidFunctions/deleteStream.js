import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

export default async function deleteFlow(recipient) {
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

    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

    try {
        const deleteFlowOperation = superfluid.cfaV1.deleteFlow({
            sender: accounts[0],
            receiver: recipient,
            superToken: NEARx,
        });

        console.log("Deleting your stream...");

        await deleteFlowOperation.exec(signer);

        console.log(
            `Congrats - you've just deleted your money stream!
            Network: Polygon
            Super Token: NEARx
            Sender: 0x6EeE6060f715257b970700bc2656De21dEdF074C
            Receiver: ${recipient}
            `
        );
    } catch (error) {
        console.error(error);
    }
}
