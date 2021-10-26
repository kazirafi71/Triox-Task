import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Paper } from "@mui/material";

const CalculationForm = () => {
  const [valueInput, setValueInput] = useState(0);
  const [exchangeRate, setExchangeRate] = useState();
  const [ProductID, setProductID] = useState();
  const [AV, setAV] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    if (valueInput) {
      const val = parseInt(valueInput);
      setTotalValue(val * 0.01 * 2 + val);
    }

    if (valueInput && exchangeRate) {
      const exchange = parseInt(exchangeRate);
      setAV(exchange * totalValue);
    }
  }, [valueInput, exchangeRate]);

  return (
    <div>
      <Container className="p-4">
        <Paper className="p-4">
          <Row>
            <Col md={8}>
              <div className="">
                {" "}
                <label style={{ width: "120px" }}>Value($):</label>{" "}
                <input
                  onChange={(e) => setValueInput(e.target.value)}
                  type="number"
                  name=""
                  id=""
                />
              </div>
              <div className="p-5">
                <div className="d-flex align-items-center justify-content-between">
                  <p>Insurance 1%</p>
                  <p>{valueInput * 0.01} USD</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p>Charge 1%</p>
                  <p>{valueInput * 0.01} USD</p>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <p>Total Value</p>
                  <p>{totalValue} USD</p>
                </div>
              </div>

              <div className="">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="">
                    <label style={{ width: "30px" }}>A/V </label>{" "}
                  </div>
                  <input value={AV} type="number" name="" id="" />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="">
                    <label style={{ width: "30px" }}>CD </label>{" "}
                    <input
                      style={{ width: "50px" }}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <input type="number" name="" id="" />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="">
                    <label style={{ width: "30px" }}>RD </label>{" "}
                    <input
                      style={{ width: "50px" }}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <input type="number" name="" id="" />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="">
                    <label style={{ width: "30px" }}>SD </label>{" "}
                    <input
                      style={{ width: "50px" }}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <input type="number" name="" id="" />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="">
                    <label style={{ width: "30px" }}>VAT </label>{" "}
                    <input
                      style={{ width: "50px" }}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <input type="number" name="" id="" />
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <p>Total</p>
                <p>0.00 Taka</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="">
                {" "}
                <label style={{ width: "120px" }}>Exchange Rate:</label>
                <input
                  onChange={(e) => setExchangeRate(e.target.value)}
                  type="number"
                  name=""
                  id=""
                />{" "}
              </div>
              <br />

              <div className="">
                <label style={{ width: "120px" }}>Product ID :</label>
                <input
                  onChange={(e) => setProductID(e.target.value)}
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </Col>
          </Row>
        </Paper>
      </Container>
    </div>
  );
};

export default CalculationForm;
