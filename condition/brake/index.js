let distance=100
let  Time=2

let speed=distance/Time
// let consolelog=("speed")

if(speed < 40){
    console.log("speed")
    document.getElementById("break").innerHTML=`apply break`
}
// else if(speed > 20){
//     console.log("speed")
//     document.getElementById("break").innerHTML=`keep stop`
// }
else{
    console.log("keep going")
    document.getElementById("break").innerHTML=`keep going`
}