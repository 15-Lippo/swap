import React, { useState } from "react";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers, BigNumber } from "ethers";
import { Button, Form, FormGroup, FormControl, Spinner, Container, Row, Col } from "react-bootstrap";
import { abi } from '../utils/SuperApp';

//will be used to approve super token contract to spend DAI
async function nearApprove(amt) {
    const contractABI = abi;
    const provider = new ethers.providers.JsonRpcProvider(
        process.env.NODE_ENV_INFURA_URL,  //Your Infura NETWORK ENDPOINTS
        137
      );
    const sf = await Framework.create({
    chainId: 137,
    provider
  });

  const signer = sf.createSigner({
    privateKey: process.env.NODE_ENV_PRIVATE_KEY,
    provider
  });

  const gasPrice = ethers.utils.parseUnits('100', 'gwei');
  const gasLimit = 250000;

  //fDAI on goerli: you can find network addresses here: https://docs.superfluid.finance/superfluid/developers/networks
  //note that this abi is the one found here: https://goerli.etherscan.io/address/0x88271d333C72e51516B67f5567c728E702b3eeE8
  const NEAR = new ethers.Contract(
    "0x72bd80445b0db58ebe3E8dB056529D4C5FAF6F2f",
    contractABI,
    signer
  );
  try {
    console.log("approving NEAR spend");
    await NEAR.approve(
      "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00",
      ethers.utils.parseEther(amt.toString()),
      { gasPrice: gasPrice, gasLimit: gasLimit }
    ).then(function (tx) {
      console.log(
        `Congrats, you just approved your NEAR spend. You can see this tx at https://polygonscan.com/txs/${tx.hash}`
      );
    });
  } catch (error) {
    console.error(error);
  }
}

//where the Superfluid logic takes place
async function nearUpgrade(amt) {
  const sf = await Framework.create({
    chainId: 137,
    provider
  });

  const signer = sf.createSigner({
    privateKey: process.env.NODE_ENV_PRIVATE_KEY,
    provider
  });

  const NEARx = await sf.loadSuperToken("0x094Ed09F072596C34C5c0b197dcEB0da6b04C580");

  try {
    console.log(`upgrading ${amt} NEAR to NEARx`);
    const amtToUpgrade = ethers.utils.parseEther(amt.toString());
    const upgradeOperation = NEARx.upgrade({
      amount: amtToUpgrade.toString()
    });
    const upgradeTxn = await upgradeOperation.exec(signer);
    await upgradeTxn.wait().then(function (tx) {
      console.log(
        `
        Congrats - you've just upgraded Near to NEARx!
      `
      );
    });
  } catch (error) {
    console.error(error);
  }
}

export default function UpgradeNear () {
  const [amount, setAmount] = useState("");
  const [isUpgradeButtonLoading, setIsUpgradeButtonLoading] = useState(false);
  const [isApproveButtonLoading, setIsApproveButtonLoading] = useState(false);

  function UpgradeButton({ isLoading, children, ...props }) {
    return (
      <Button variant="success" className="button" {...props}>
        {isUpgradeButtonLoading ? <Spinner animation="border" /> : children}
      </Button>
    );
  }

  function ApproveButton({ isLoading, children, ...props }) {
    return (
      <Button variant="success" className="button" {...props}>
        {isApproveButtonLoading ? <Spinner animation="border" /> : children}
      </Button>
    );
  }

  const handleAmountChange = (e) => {
    setAmount(() => ([e.target.name] = e.target.value));
  };

  return (
    <div>
      <h2 className="text-center">Upgrade NEAR to NEARx</h2>
      <Form>
        <FormGroup className="mb-3">
          <FormControl
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter the dollar amount you'd like to upgrade"
          ></FormControl>
        </FormGroup>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={5}>   
              <ApproveButton
                onClick={() => {
                  setIsApproveButtonLoading(true);
                  nearApprove(amount);
                  setTimeout(() => {
                    setIsApproveButtonLoading(false);
                  }, 1000);
                }}
              >
                Click to Approve Token Upgrade
              </ApproveButton>
          </Col>
          <Col></Col>
          </Row>
        </Container>
        <div className="mt-5">
        <Container>
          <Row>
            <Col></Col>
            <Col xs={5}>
              <UpgradeButton 
                onClick={() => {
                  setIsUpgradeButtonLoading(true);
                  nearUpgrade(amount);
                  setTimeout(() => {
                    setIsUpgradeButtonLoading(false);
                  }, 1000);
                }}
              >
                Click to Upgrade Your Tokens
              </UpgradeButton>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        </div>
      </Form>
    </div>
  );
};
