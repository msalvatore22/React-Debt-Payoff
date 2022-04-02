import React, { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { CssBaseline } from "@mui/material"

import DebtContext from "./DebtContext";

import DebtForm from './components/DebtForm'

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
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
  
  
  const onDebtSubmit = () => {
    debtListSet(debtList => [...debtList, debt])
  }

  console.log(debt, debtList)
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
      <h1 className="title">Debt Payoff</h1>
      <DebtForm onFormSubmit={onDebtSubmit} />
    </Container>
    </DebtContext.Provider>
  );
}

export default App;
