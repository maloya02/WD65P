let bread = 10;
let breadPrice = 899;

const totalBreadPurchased = (bread, breadPrice) => bread * breadPrice;
const totalContribution = totalBreadPurchased(bread, breadPrice);
const eachContribution = totalContribution / 2;

console.log("Total Contribution: ", totalContribution);
console.log("Juan and Pedro have to contribute: ", eachContribution, " each");