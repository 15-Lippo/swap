import React, { useState } from "react";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { Button, Form, FormGroup, FormControl, Spinner, Container, Row, Col } from "react-bootstrap";

//where the Superfluid logic takes place
async function nearDowngrade(amt) {
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

  const lisprocoin = await sf.loadSuperToken(
    "0x2776cAFe6dcAeB292A013Cb03e3aB332DAa52e8"
  );

  console.log(DAIx.address);

  try {
    console.log(`Downgrading ${amt} NEARx...`);
    const amtToDowngrade = ethers.utils.parseEther(amt.toString());
    const downgradeOperation = Lisprocoin.downgrade({
      amount: amtToDowngrade.toString()
    });
    const downgradeTxn = await downgradeOperation.exec(signer);
    await downgradeTxn.wait().then(function (tx) {
      console.log(
        `
        Congrats - you've just downgraded DAIx to DAI!
        You can see this tx at https://polygonscan.com/txs/${tx.transactionHash}
        Network: Goerli
        NOTE: you downgraded the dai of0xD0355200111C2B21AAbC1a31552eCCDc5d4E905d .
        You can use this code to allow your users to do it in your project.
        Or you can downgrade tokens at app.superfluid.finance/dashboard.
      `
      );
    });
  } catch (error) {
    console.error(error);
  }
}

export default function DowngradeNEAR () {
  const [amount, setAmount] = useState("");
  const [isDowngradeButtonLoading, setIsDowngradeButtonLoading] = useState(
    false
  );

  function DowngradeButton({ isLoading, children, ...props }) {
    return (
      <Button variant="success" className="button" {...props}>
        {isDowngradeButtonLoading ? <Spinner animation="border" /> : children}
      </Button>
    );
  }

  const handleAmountChange = (e) => {
    setAmount(() => ([e.target.name] = e.target.value));
  };

  return (
    <div>
      <h2 className="text-center">Downgrade NEARx to NEAR</h2>
      <Form>
        <FormGroup className="mb-3">
          <FormControl
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter the whole dollar amount you'd like to downgrade"
          ></FormControl>
        </FormGroup>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={5}>
              <DowngradeButton
                onClick={() => {
                  setIsDowngradeButtonLoading(true);
                  nearDowngrade(amount);
                  setTimeout(() => {
                    setIsDowngradeButtonLoading(false);
                  }, 1000);
                }}
              >
                Click to Downgrade Your Tokens
              </DowngradeButton>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};
