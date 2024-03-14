let a=10
let b=10
let c=15
let d=15
let sum= a + b + c + d 
let double= sum + sum

console.log(sum)
console.log(double)

document.getElementById("sum").innerHTML=`sum of ${sum}`
document.getElementById("double").innerHTML=`double of ${double}`