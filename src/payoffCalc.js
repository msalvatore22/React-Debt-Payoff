

const payoffCalc = ({remainingBalance, monthlyPayment, interestRate}) => {
    const interest = interestRate / 100
    const interestPerMonth = interest / 12
    const step2 = (remainingBalance / monthlyPayment) * interestPerMonth
    const step3 = 1 - step2
    const step4 = 1 + interestPerMonth
    const step5 = -(Math.log10(step3))
    const step6 = Math.log10(step4)
    const result = step5 / step6
    return result.toFixed(2)
}

export default payoffCalc