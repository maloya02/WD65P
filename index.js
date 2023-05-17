let productName = 'Nose Buds' //Trending Product in TokTik
let quantity = 5 // Pcs
let amount = 10 //PHP
let taxRate = 0.12 //12%

let subTotal = quantity * amount
let taxAmount = subTotal * taxRate
let totalAmount = subTotal + taxAmount

console.log('Product Name: ' + productName)
console.log('Quantity: ' + quantity)
console.log('Amount: ' + amount + 'pesos')
console.log('Tax Rate: ' + taxRate + '%')
console.log('Subtotal: ' + subTotal + 'pesos')
console.log('Tax Amount: ' + taxAmount + 'pesos')
console.log('Total Amount: ' + totalAmount + 'pesos')
