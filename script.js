const amountBalance = document.getElementById('balance');
const checkBalance = document.getElementById('checkBalanceBtn');
const deposit = document.getElementById('depositBtn');
const withdraw = document.getElementById('withdrawBtn');
const exit = document.getElementById('exitBtn');

// Retrieve balance from local storage, or set it to 0 if it doesn't exist
let balance = parseFloat(localStorage.getItem('balance')) || 0;
amountBalance.innerText = `₱${balance}`;

// Functionality for check balance button
checkBalance.addEventListener('click', () => {
    alert(`Current Balance: ${balance}`);
});

// Functionality for deposit button
deposit.addEventListener('click', () =>  {
    let amount = prompt('Enter Deposit Amount: ');
    amount = parseFloat(amount);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        localStorage.setItem('balance', balance); // Save to local storage
        amountBalance.innerText = `₱${balance}`;
    } else {
        alert('Kindly enter a valid amount');
    }
});

// Functionality for withdraw
withdraw.addEventListener('click', () => {
    let withdrawAmount = prompt('Enter Withdraw Amount: ');
    withdrawAmount = parseFloat(withdrawAmount);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        localStorage.setItem('balance', balance); // Save to local storage
        amountBalance.innerText = `₱${balance}`;
    } else {
        alert('Kindly enter a valid amount or check your balance');
    }
});

// Functionality for exit button
exit.addEventListener('click', () => {
    setTimeout(() => {
        alert('Thanks for using the ATM Simulation!');
        location.reload();
    }, 1500);
});
