let a=50
let b=50

if(a > b){
    console.log("largest number")
    document.getElementById("big").innerHTML=`largest`
}
else if(a < b){
    console.log( "small")
    document.getElementById("big").innerHTML=`small`

}
else if(a == b){
    console.log("equal")
    document.getElementById("big").innerHTML=`equal`

}