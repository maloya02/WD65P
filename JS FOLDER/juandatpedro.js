 {
let bread = 10;
let breadPrice = 749;
let costumer = ['Juan','Pedro']

const totalBreadPurchased = (bread, breadPrice) => bread * breadPrice;
const totalContribution = totalBreadPurchased(bread, breadPrice);
console.log("Total Contribution: ", totalContribution);

const devidedContri = (totalContribution,numCostumer) => totalContribution/numCostumer; 
console.log("Juan and Pedro have to contribute: ", devidedContri(totalContribution,costumer.length), " each");
}



