
let str = "nayan";

let map = new Map()
for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
        map.set(str[i], map.get(str[i]) + 1)
    }
    else {
        map.set(str[i], 1)
    }
}
console.log(map)

let odd=0;

for(let[key,val] of map){
    if(val % 2 !=0)
    {
        odd++;
    }
}

if(odd==0 || odd==1){
    console.log("palindrome can be possible");
}
else{
    console.log("palindrome cannot be possible");

}