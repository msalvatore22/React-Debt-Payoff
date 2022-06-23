import React, { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { CssBaseline, Container } from "@mui/material";

import DebtContext from "./DebtContext";

import DebtForm from "./components/DebtForm";
import DebtTable from "./components/DebtTable";
import DebtLineChart from "./components/DebtLineChart";

const Title = styled.h1`
  text-align: center;
`;

function App() {
  const [debt, debtSet] = useState({
    accountName: "",
    accountType: "",
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
      <Container maxWidth="lg">
        <Title className="title">Debt Payoff</Title>
        <DebtForm />
        <DebtTable />
        <DebtLineChart />
      </Container>
    </DebtContext.Provider>
  );
}

export default App;