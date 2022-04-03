import React, { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { CssBaseline } from "@mui/material"

import DebtContext from "./DebtContext";

import DebtForm from './components/DebtForm'
import DebtTable from "./components/DebtTable";

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;
const Title = styled.h1`
  text-align: center;
`;

function App() {
  const [debt, debtSet] = useState({
    remainingBalance: '',
    monthlyPayment: '',
    interestRate: '',
    payoffMonths: '',
    payoffYears: '',
    total: ''
  })
  const [debtList, debtListSet] = useState([])

  return (
    <DebtContext.Provider
      value={{
        debt,
        debtSet,
        debtList,
        debtListSet,
      }}
    >
      <CssBaseline />
    <Container>
      <Title className="title">Debt Payoff</Title>
      <DebtForm />
      <DebtTable />
    </Container>
    </DebtContext.Provider>
  );
}

export default App;
