var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

  });

const payoffCalc = ({remainingBalance, monthlyPayment, interestRate}) => {
    const interest = interestRate / 100
    const interestPerMonth = interest / 12
    const step2 = (remainingBalance / monthlyPayment) * interestPerMonth
    const step3 = 1 - step2
    const step4 = 1 + interestPerMonth
    const step5 = -(Math.log10(step3))
    const step6 = Math.log10(step4)
    const payoffMonths = step5 / step6
    const payoffYears = payoffMonths / 12
    const total = payoffMonths * monthlyPayment

    return {
        payoffMonths: payoffMonths.toFixed(2),
        payoffYears: payoffYears.toFixed(2),
        total: formatter.format(total)
    }
}

export default payoffCalc