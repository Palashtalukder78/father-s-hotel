//Handle Deposit Button event
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const newdepositeText = depositInput.value;
    const newdepositeAmount = parseFloat(newdepositeText);
    //Update Deposite Total
    const depositTotal = document.getElementById('deposit-total');
    const previousdepositeText = depositTotal.innerText;
    const previousdepositeAmount = parseFloat(previousdepositeText);
    const newdepositeTotal = previousdepositeAmount + newdepositeAmount;

    depositTotal.innerText = newdepositeTotal;
    //Update Account Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newdepositeTotal;
    balanceTotal.innerText = newBalanceTotal;

    //Clear The deposit input value
    depositInput.value = '';
});

//Handle Event Handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput =  document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    
    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount ;

    withdrawTotal.innerText = newWithdrawTotal;

    //Update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal ;
    
    balanceTotal.innerText = newBalanceTotal;
    //Clear the Withdraw Input value
    withdrawInput.value = '';
});