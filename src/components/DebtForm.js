import React, { useContext } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Box,
  FilledInput,
  Button,
} from "@mui/material";
import DebtContext from "../DebtContext";
import payoffCalc from "../payoffCalc";
import ButtonExample from "./ColorPicker";

const DebtForm = () => {
  const { debt, debtSet, debtList, debtListSet, color } = useContext(DebtContext);

  const handleChange = (prop) => (event) => {
    debtSet({ ...debt, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedDebt = payoffCalc(debt);
    if (calculatedDebt.valid === true) {
      calculatedDebt["color"] = color
      debtListSet([...debtList, calculatedDebt]);
      debtSet({
        remainingBalance: "",
        monthlyPayment: "",
        interestRate: "",
      });
    } else {
      alert(calculatedDebt.timeRemaining);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
            max: 1000000000,
            step: ".01",
            min: 1,
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
            max: 100000000,
            step: ".01",
            min: 1,
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
            min: 0.01,
            max: 99.99,
            step: ".01",
          }}
        />
      </FormControl>
      <ButtonExample />
      <Button sx={{ m: 1 }} variant="outlined" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default DebtForm;
