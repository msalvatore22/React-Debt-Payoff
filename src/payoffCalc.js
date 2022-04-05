import formatter from './USDformatter'

const calculateTimingString = numOfDays => {
    let years = 0, months = 0, days = 0
    while (numOfDays){
        if (numOfDays >= 365){
            years++
            numOfDays -= 365
        } else if(numOfDays >= 30){
            months++
            numOfDays -= 30
        } else {
            days ++
            numOfDays--
        }
    }
    return `${years} Years, ${months} Months and ${days} Days`
}

const payoffCalc = ({ remainingBalance, monthlyPayment, interestRate }) => {
    const interest = interestRate / 100
    const interestPerMonth = interest / 12
    const step2 = (remainingBalance / monthlyPayment) * interestPerMonth
    if (step2>1){
        // Your payments are not sufficient enough to cover interest. Loan will never be paid off.
        return {
            payoffMonths: '∞',
            payoffYears: '∞',
            total: remainingBalance,
            timeRemaining: 'Your payments are not sufficient enough to cover interest. Loan will never be paid off.'
        }
    }
    const step3 = Math.abs(1 - step2)
    const step4 = 1 + interestPerMonth
    const step5 = Math.log10(1/step3)
    const step6 = Math.log10(step4)
    const payoffMonths = step5 / step6
    const days = Math.round(payoffMonths * 30.4167)
    const timeRemaining = calculateTimingString(days)
    const payoffYears = payoffMonths / 12
    const total = payoffMonths * monthlyPayment
    
    return {
        remainingBalance: formatter.format(remainingBalance),
        monthlyPayment: formatter.format(monthlyPayment),
        interestRate: Number.parseFloat(interestRate).toFixed(2),
        payoffMonths: payoffMonths.toFixed(2),
        payoffYears: payoffYears.toFixed(2),
        total: formatter.format(total),
        timeRemaining: timeRemaining
    }
}

export default payoffCalc