let a=40
let b=40

if(a < b)
{
    console.log("true")
    document.getElementById("two").innerHTML=`greater`
}
else{
    console.log("false")
}
if(a > b){
    console.log("true")
    document.getElementById("two").innerHTML=`smaller`
}
else{
    console.log("false")
    document.getElementById("two").innerHTML=`true`
}
if(a == b){
    console.log("true")
}
else{
    console.log("false")
}