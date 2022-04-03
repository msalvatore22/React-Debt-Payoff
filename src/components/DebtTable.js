import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import DebtContext from "../DebtContext";

const DebtTable = () => {
  const { debtList } = useContext(DebtContext)

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Remaining Balance</TableCell>
          <TableCell align="right">Monthly Payment</TableCell>
          <TableCell align="right">Interest Rate %</TableCell>
          <TableCell align="right">Payoff Months</TableCell>
          <TableCell align="right">Payoff Years</TableCell>
          <TableCell align="right">Total Payoff Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {debtList.map((row, idx) => (
          <TableRow
            key={idx}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.remainingBalance}
            </TableCell>
            <TableCell align="right">{row.monthlyPayment}</TableCell>
            <TableCell align="right">{row.interestRate}</TableCell>
            <TableCell align="right">{row.payoffMonths}</TableCell>
            <TableCell align="right">{row.payoffYears}</TableCell>
            <TableCell align="right">{row.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )

}

export default DebtTable