// time = D/S
 //km per hr
 const avSpeed = 5
 const timeIsDistanceOverSpeed = (distanceInput,avSpeed) => {
    return distanceInput/avSpeed}
    
const distanceInput = prompt(`Enter the distance: `) 
if(isNaN(distanceInput) || distanceInput < 0) {
   console.log(`Invalid data input. Please enter valid data.`)
}
else
{
    const estimatedTime = timeIsDistanceOverSpeed(distanceInput,avSpeed) 
    console.log(`Estimated time is: ${estimatedTime} hours`)
}
   




