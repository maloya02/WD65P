const avSpeed = 5
const timeVal = (distance,avSpeed) => distance/avSpeed
const distance = prompt(`distance input: `)
console.log (`estimate ${timeVal(distance,avSpeed)}`,`hrs`)
