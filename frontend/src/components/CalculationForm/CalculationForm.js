import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Paper } from "@mui/material";
import Axios from "axios";
import swal from "sweetalert";

const CalculationForm = () => {
  const [valueInput, setValueInput] = useState(0);
  const [exchangeRate, setExchangeRate] = useState();
  const [ProductID, setProductID] = useState();
  const [AV, setAV] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [CD_Rate, setCD_Rate] = useState();
  const [RD_Rate, setRD_Rate] = useState();
  const [SD_Rate, setSD_Rate] = useState();
  const [VAT_Rate, setVAT_Rate] = useState();
  const [CD_Val, setCD_Val] = useState();
  const [RD_Val, setRD_Val] = useState();
  const [SD_Val, setSD_Val] = useState();
  const [VAT_Val, setVAT_Val] = useState();
  const [total, setTotal] = useState();

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

  const productIdFormHandler = (e) => {
    e.preventDefault();

    Axios.get(`/api/product-info/${ProductID}`)
      .then((result) => {
        if (result.data) {
          const { SD, CD, VAT, RD } = result.data;
          setCD_Rate(CD);
          setRD_Rate(RD);
          setVAT_Rate(VAT);
          setSD_Rate(SD);
        } else {
          return swal("", "No data found for this productId", "error");
        }
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (AV && (CD_Rate || SD_Rate || VAT_Rate || RD_Rate)) {
      setCD_Val(AV * CD_Rate);

      setRD_Val(AV * RD_Rate);

      setSD_Val(AV + CD_Val + RD_Val);
      setVAT_Val(AV + CD_Val + RD_Val + SD_Val);
      setTotal(VAT_Val * 2);
    }
  }, [CD_Rate, SD_Rate, VAT_Rate, AV, RD_Rate]);
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
                      value={CD_Rate}
                      onChange={(e) => setCD_Rate(e.target.value)}
                      style={{ width: "50px" }}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <input
                    value={CD_Val}
                    onChange={(e) => setCD_Val(e.target.value)}
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="">
                    <label style={{ width: "30px" }}>RD </label>{" "}
                    <input
                      value={RD_Rate}
                      onChange={(e) => setRD_Rate(e.target.value)}
                      style={{ width: "50px" }}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <input
                    value={RD_Val}
                    onChange={(e) => setRD_Val(e.target.value)}
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="">
                    <label style={{ width: "30px" }}>SD </label>{" "}
                    <input
                      value={SD_Rate}
                      onChange={(e) => setSD_Rate(e.target.value)}
                      style={{ width: "50px" }}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <input
                    value={SD_Val}
                    onChange={(e) => setSD_Val(e.target.value)}
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="">
                    <label style={{ width: "30px" }}>VAT </label>{" "}
                    <input
                      value={VAT_Rate}
                      onChange={(e) => setVAT_Rate(e.target.value)}
                      style={{ width: "50px" }}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <input
                    value={VAT_Val}
                    onChange={(e) => setVAT_Val(e.target.value)}
                    type="number"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <p>Total</p>
                <p>{total} Taka</p>
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

              <form onSubmit={productIdFormHandler}>
                <label style={{ width: "120px" }}>Product ID :</label>
                <input
                  onChange={(e) => setProductID(e.target.value)}
                  type="number"
                  name=""
                  id=""
                />
              </form>
            </Col>
          </Row>
        </Paper>
      </Container>
    </div>
  );
};

export default CalculationForm;
