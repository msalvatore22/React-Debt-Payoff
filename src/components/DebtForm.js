import React, { useContext } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Box,
  FilledInput,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import DebtContext from "../DebtContext";
import payoffCalc from "../payoffCalc";
import ButtonExample from "./ColorPicker";

const DebtForm = () => {
  const { debt, debtSet, debtList, debtListSet, color } = useContext(
    DebtContext
  );

  const handleChange = (prop) => (event) => {
    debtSet({ ...debt, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedDebt = payoffCalc(debt);
    if (calculatedDebt.valid === true) {
      calculatedDebt["color"] = color;
      debtListSet([...debtList, calculatedDebt]);
      debtSet({
        accountName: "",
        accountType: "",
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
        justifyContent: "space-between",
        border: 1,
        borderColor: "grey.400",
        borderRadius: "2px",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: "1 0 100%",
          flexFlow: "row wrap",
          justifyContent: "space-between",
        }}
      >
        <FormControl sx={{ m: 1, width: "20ch" }}>
          <InputLabel htmlFor="accountName">Account Name</InputLabel>
          <OutlinedInput
            id="accountName"
            label="Account Name"
            value={debt.accountName}
            onChange={handleChange("accountName")}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            required
            inputProps={{
              min: 1,
              max: 20,
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "20ch" }}>
          <InputLabel id="accountTypeLabel">Account Type</InputLabel>
          <Select
            labelId="accountTypeLabel"
            id="accountType"
            value={debt.accountType}
            label="Account Type"
            onChange={handleChange("accountType")}
          >
            <MenuItem value={"Credit Card"}>Credit Card</MenuItem>
            <MenuItem value={"Student Loan"}>Student Loan</MenuItem>
            <MenuItem value={"Mortgage"}>Mortgage</MenuItem>
            <MenuItem value={"Auto Loan"}>Auto Loan</MenuItem>
            <MenuItem value={"Personal Loan"}>Personal Loan</MenuItem>
            <MenuItem value={"Medical Bill"}>Other</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "20ch" }}>
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
        <FormControl sx={{ m: 1, width: "20ch" }}>
          <InputLabel htmlFor="interestRate">Interest Rate</InputLabel>
          <OutlinedInput
            id="interestRate"
            label="Interest Rate"
            value={debt.interestRate}
            onChange={handleChange("interestRate")}
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
            type="number"
            required
            inputProps={{
              min: 0,
              max: 99.99,
              step: ".01",
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "20ch" }}>
          <InputLabel htmlFor="monthlyPayment">Monthly Payment</InputLabel>
          <OutlinedInput
            id="monthlyPayment"
            label="Monthly Payment"
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
        

        <ButtonExample />
        <Button sx={{ m: 1, width: "25ch" }} variant="outlined" type="submit">
          CALCULATE
        </Button>
      </Box>
    </Box>
  );
};

export default DebtForm;
