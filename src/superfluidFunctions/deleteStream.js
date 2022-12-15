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

    const lisprocoinContract = await superfluid.loadSuperToken("0x2776cAFe6dcAeB292A013Cb03e3aB332DAa52e8F");
    const lisprocoin = lisprocoinContract.address;

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
            Super Token: lisprocoin
            Sender: 0x2776cAFe6dcAeB292A013Cb03e3aB332DAa52e8F
            Receiver: ${recipient}
            `
        );
    } catch (error) {
        console.error(error);
    }
}
