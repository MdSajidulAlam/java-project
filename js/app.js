// Function for field item
function field(input) {
    const field = document.getElementById(input + '-field')
    const result = parseInt(field.value)

    // Error check
    if (isNaN(result) || result < 0) {
        field.value = 0
        return alert('Please enter a valid cost amount for' + ' ' + input)
    }
    else {
        return result
    }
}

// Function for balance update
function updateBalance() {
    const income = field('income')
    const totalExpense = field('food') + field('rent') + field('cloth')
    if (income < totalExpense) {
        return
    }
    const totalExpenseAmount = document.getElementById('total-expense').innerText = totalExpense || 0
    const updatedBalance = document.getElementById('balance').innerText = (income - totalExpenseAmount) || 0
    return updatedBalance

}

// Event handle for calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = field('income')
    const totalExpense = field('food') + field('rent') + field('cloth')
    if (income < totalExpense) {
        const income = document.getElementById('income-field')
        income.value = 0
        const foodCost = document.getElementById('food-field')
        foodCost.value = 0
        const rentCost = document.getElementById('rent-field')
        rentCost.value = 0
        const clothCost = document.getElementById('cloth-field')
        clothCost.value = 0
        alert("You don't have enough balance to expense")
        updateBalance()
    }
    else {
        updateBalance()
    }

})

// Event handler for save button
document.getElementById('save-btn').addEventListener('click', function () {
    const save = field('save')
    const incomeAmount = field('income')
    const balance = updateBalance()
    const saveAmount = incomeAmount * (save / 100)
    // Error check

    if (saveAmount > balance) {
        alert("You haven't enough money to save")
        return
    }
    else {
        const saveBalance = document.getElementById('save-amount').innerText = saveAmount || 0
        const remainingBalance = document.getElementById('remaining-balance').innerText = (balance - saveAmount) || 0
    }
})