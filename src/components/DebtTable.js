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
import formatter from "../USDformatter";

const DebtTable = () => {
  const { debtList } = useContext(DebtContext)

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Remaining Balance</TableCell>
          <TableCell align="center">Monthly Payment</TableCell>
          <TableCell align="center">Interest Rate</TableCell>
          <TableCell align="center">Payoff Time</TableCell>
          <TableCell align="center">Total Payoff Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {debtList.map((row, idx) => (
          <TableRow
            key={idx}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {formatter.format(row.remainingBalance)}
            </TableCell>
            <TableCell align="center">{formatter.format(row.monthlyPayment)}</TableCell>
            <TableCell align="center">{row.interestRate}</TableCell>
            <TableCell align="center">{row.timeRemaining}</TableCell>
            <TableCell align="center">{row.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )

}

export default DebtTable