import React, { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { CssBaseline } from "@mui/material";

import DebtContext from "./DebtContext";

import DebtForm from "./components/DebtForm";
import DebtTable from "./components/DebtTable";
import DebtLineChart from "./components/DebtLineChart";

const Container = styled.div`
  margin: auto;
  width: 80%;
  padding-top: 1rem;
`;
const Title = styled.h1`
  text-align: center;
`;

function App() {
  const [debt, debtSet] = useState({
    remainingBalance: "",
    monthlyPayment: "",
    interestRate: "",
  });
  const [debtList, debtListSet] = useState([]);
  const [color, colorSet] = useState({rgb: { r: "25", g: "118", b: "210", a: "1" }, hex: '#1976d2'});


  return (
    <DebtContext.Provider
      value={{
        debt,
        debtSet,
        debtList,
        debtListSet,
        color,
        colorSet,
      }}
    >
      <CssBaseline />
      <Container>
        <Title className="title">Debt Payoff</Title>
        <DebtForm />
        <DebtTable />
        <DebtLineChart />
      </Container>
    </DebtContext.Provider>
  );
}

export default App;
