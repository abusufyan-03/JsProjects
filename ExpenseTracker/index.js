document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    let expenseNameEl = document.getElementById('expense-name');
    let amountEl = document.getElementById('amount');
    const expenseItems = document.querySelector('.expense-items');
    const total = document.getElementById('total');

    let expenses = JSON.parse(localStorage.getItem('expense')) || [];
    renderExpense();
    totalExpense();

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        console.log("clicked");
        let expenseName = expenseNameEl.value;
        let amount = amountEl.value;

        if(expenseName == '' || amount == '' || amount<0){
            alert("Please Enter valid expense or amount or both");
            return;
        }

        const obj = {
            id: Date.now(),
            name: expenseName,
            amount: parseFloat(amount)
        }
        console.log(obj);
        expenses.push(obj);
        saveExpenses()
        console.log('expenses: ', expenses)
        renderExpense();
        totalExpense();
        expenseNameEl.value = '';
        amountEl.value = '';

    });

    expenseItems.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            console.log('delete button clicked');
            const id = Number(e.target.getAttribute('data-id'));
            console.log('id:', id)
            expenses = expenses.filter((item) => item.id !== id)
            saveExpenses();
            renderExpense();
            totalExpense();
        }
    })

    function renderExpense() {
        expenseItems.innerHTML = '';
        expenses.forEach(element => {
            const li = document.createElement('li');
            li.classList.add('expense-item');
            li.innerHTML = `
        <span>${element.name} - $${element.amount.toFixed(2)}</span>
        <button data-id='${element.id}'>Delete</button>
        `;
            expenseItems.appendChild(li)
        });
    }

    function totalExpense() {
        let totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);
        console.log(totalExpense);
        total.innerHTML = `$${totalExpense.toFixed(2)}`
    }

    function saveExpenses() {
        localStorage.setItem('expense', JSON.stringify(expenses))
    }
})