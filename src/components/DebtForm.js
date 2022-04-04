import React, { useContext } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Box,
  FilledInput,
  Button
} from "@mui/material";
import DebtContext from "../DebtContext";
import payoffCalc from "../payoffCalc";

const DebtForm = () => {
  const { debt, debtSet, debtList, debtListSet } = useContext(DebtContext);

  const handleChange = (prop) => (event) => {
    debtSet({ ...debt, [prop]: event.target.value });
  };

  const handleSubmit = e => {
      e.preventDefault()
      const { payoffMonths, payoffYears, total, timeRemaining } = payoffCalc(debt)
      const calculatedDebt = {...debt, payoffMonths, payoffYears, total, timeRemaining }
      console.log(calculatedDebt)
      debtListSet([...debtList, calculatedDebt])
      debtSet({
        remainingBalance: '',
        monthlyPayment: '',
        interestRate: '',
        payoffMonths: '',
        payoffYears: '',
        total: '',
        timeRemaining: ''
    })
  }

  return (
    <Box component="form" onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="remainingBalance">Remaining Balance</InputLabel>
        <OutlinedInput
          id="remainingBalance"
          value={debt.remainingBalance}
          onChange={handleChange("remainingBalance")}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Remaining Balance"
          type="number"
          required
          inputProps={{
            maxlenth: 10,
            step: ".01",
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "48%" }} variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">
          Monthly Payment
        </InputLabel>
        <FilledInput
          id="monthlyPayment"
          value={debt.monthlyPayment}
          onChange={handleChange("monthlyPayment")}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          type="number"
          required
          inputProps={{
            maxlenth: 10,
            step: ".01"
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "48%" }} variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">Interest Rate</InputLabel>
        <FilledInput
          id="interestRate"
          value={debt.interestRate}
          onChange={handleChange("interestRate")}
          startAdornment={<InputAdornment position="start">%</InputAdornment>}
          type="number"
          required
          inputProps={{
            max: 99.99,
            maxLength: 4,
            step: ".01"
          }}
        />
      </FormControl>
      <Button sx={{ m: 1 }} variant="outlined" type="submit">Submit</Button>
    </Box>
  );
};

export default DebtForm;
