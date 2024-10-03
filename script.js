const amountBalance = document.getElementById('balance');
const checkBalance = document.getElementById('checkBalanceBtn');
const deposit = document.getElementById('depositBtn');
const withdraw = document.getElementById('withdrawBtn');
const exit = document.getElementById('exitBtn');

// Local Storage
let balance = parseFloat(localStorage.getItem('balance')) || 0;
amountBalance.innerText = `₱${balance}`;

// Check Balance
checkBalance.addEventListener('click', () => {
    alert(`Current Balance: ${balance}`);
});

// Deposit
deposit.addEventListener('click', () => {
    let amount = prompt('Enter Deposit Amount: ');
    amount = parseFloat(amount);
    
    if (isNaN(amount)) {
        alert('Kindly enter a valid amount');
    } else if (amount <= 0) {
        alert('Please enter a positive amount.');
    } else {
        balance += amount;
        localStorage.setItem('balance', balance);
        amountBalance.innerText = `₱${balance}`;
    }
});


// Withdraw
withdraw.addEventListener('click', () => {
    let withdrawAmount = prompt('Enter Withdraw Amount: ');
    withdrawAmount = parseFloat(withdrawAmount);
    
    if (isNaN(withdrawAmount)) {
        alert('Invalid amount. Please enter a numeric value.');
    } else if (withdrawAmount <= 0) {
        alert('Please enter a positive amount.');
    } else if (withdrawAmount > balance) {
        alert('Insufficient balance. Please check your balance.');
    } else {
        balance -= withdrawAmount;
        localStorage.setItem('balance', balance); 
        amountBalance.innerText = `₱${balance}`;
    }
});

// Exit
exit.addEventListener('click', () => {
    setTimeout(() => {
        alert('Thanks for using the ATM Simulation!');
        location.reload();
    }, 1500);
});
