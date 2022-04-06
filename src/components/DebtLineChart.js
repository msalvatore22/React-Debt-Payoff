import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import DebtContext from "../DebtContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Debt Payoff Timeline",
    },
  },
};

export default function LineChart() {
  const { debtList } = useContext(DebtContext);

  const findLongestArray = (dl) => {
    let longest = [];
    dl.forEach((debt) => {
      if (debt.payoffScheduleMonthYear > longest) {
        longest = debt.payoffScheduleMonthYear;
      }
    });
    return longest;
  };

  const labels = findLongestArray(debtList);

  const data = {
    labels,
    datasets: debtList.map((debt, index) => ({
      label: `Debt ${index + 1}`,
      data: debt.payoffScheduleBalances,
      borderColor: `rgb(${debt.color.rgb.r}, ${debt.color.rgb.g}, ${debt.color.rgb.b})`,
      backgroundColor: `rgba(${debt.color.rgb.r}, ${debt.color.rgb.g}, ${debt.color.rgb.b}, 0.5)`,
      cubicInterpolationMode: "monotone",
      tension: 0.6,
      fill: false
    })),
  };

  return debtList.length > 0 ? <Line options={options} data={data} /> : null;
}
