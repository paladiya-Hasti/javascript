let austraila= 89
let england =200

if(austraila > england){
    console.log("austraila win")
    document.getElementById("england").innerHTML=`australia win`
}
else if(austraila < england){
    console.log("england win")
    document.getElementById("england").innerHTML=`england win`
}
else if(austraila == england)
{
    console.log("england")
    document.getElementById("england").innerHTML=`tie`
}
else{
    console.log("catch")
    document.getElementById("england").innerHTML=`123`
}