let walletBalance = 10000

const transferMoney = () => {
    // Get the receiver's mobile number
    const receiverMobileNumber = prompt(`Enter the receiver's mobile number: `)
    
    if(receiverMobileNumber.length !== 11) {
        console.log(`Invalid receiver's mobile number`)
        return
    }
    
    const transferAmount = prompt('How much do you want to transfer?: ')
    
    if(isNaN(transferAmount) || transferAmount < 0) {
        console.log('Invalid transfer amount. Please enter a valid amount.')
        return
    }
    
    if(transferAmount > walletBalance) {
        console.log('Insufficient wallet balance.')
        return
    }
    
    walletBalance = walletBalance - transferAmount
    
    console.log('Transfer successful!')
    console.log(`Receiver's mobile number: ${receiverMobileNumber}`)
    console.log(`Transfer amount: ${parseFloat(transferAmount).toFixed(2)}`)
    console.log(`Wallet balance: ${parseFloat(walletBalance).toFixed(2)}`)
}

// Execute the money transfer function
transferMoney()