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

const generatePayoffMonthYear = numOfMonths => {
    const result = []
    const start_date = new Date(new Date().getFullYear(), new Date().getMonth());
    
    while(numOfMonths>0){
      start_date.setMonth(start_date.getMonth() + 1)
            
      result.push(start_date.toLocaleString('default', { month: 'long' , year: 'numeric'}));
      numOfMonths--
    }
    return result
}

const generatePayoffRemainingBalances = (remainingBalance, monthlyPayment, interestPerMonth) => {
    const result = []
    while(remainingBalance>0){
        const principalReduction = monthlyPayment - (remainingBalance * interestPerMonth)
        
        if (principalReduction>remainingBalance){
            result.push(0)
        } else {
            result.push((remainingBalance - principalReduction).toFixed(2))
        }
        remainingBalance = remainingBalance - principalReduction
    }
    return result
}

const payoffCalc = ({ remainingBalance, monthlyPayment, interestRate, accountName, accountType }) => {
    const interest = interestRate / 100
    const interestPerMonth = interest / 12
    const step2 = (remainingBalance / monthlyPayment) * interestPerMonth
    if (step2>1){
        // Your payments are not sufficient enough to cover interest. Loan will never be paid off.
        return {
            payoffMonths: '∞',
            payoffYears: '∞',
            total: formatter.format(remainingBalance),
            timeRemaining: 'Your payments are not sufficient enough to cover interest. Loan will never be paid off.',
            valid: false
        }
    }
    const step3 = Math.abs(1 - step2)
    const step4 = 1 + interestPerMonth
    const step5 = Math.log10(1/step3)
    const step6 = Math.log10(step4)
    const payoffMonths = step5 / step6
    const payoffMonthsRounded = Math.ceil(payoffMonths)
    const days = Math.round(payoffMonths * 30.4167)
    const payoffYears = payoffMonths / 12
    const total = payoffMonths * monthlyPayment
    const totalInterestPaid = total - remainingBalance

    const timeRemaining = calculateTimingString(days)
    const payoffScheduleMonthYear = generatePayoffMonthYear(payoffMonthsRounded)
    const payoffScheduleBalances = generatePayoffRemainingBalances(remainingBalance, monthlyPayment, interestPerMonth)

    return {
        accountName,
        accountType,
        remainingBalance: formatter.format(remainingBalance),
        monthlyPayment: formatter.format(monthlyPayment),
        interestRate: Number.parseFloat(interestRate).toFixed(2),
        payoffMonths: payoffMonths.toFixed(2),
        payoffYears: payoffYears.toFixed(2),
        total: formatter.format(total),
        totalInterestPaid: formatter.format(totalInterestPaid),
        timeRemaining: timeRemaining,
        payoffScheduleMonthYear,
        payoffScheduleBalances,
        valid: true
    }
}

export default payoffCalc