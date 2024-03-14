let grade;

console.log("----------refrence card------------")
console.log("student name: hasti")
console.log("grade:9")
console.log("============================================")
console.log("subject\t\t score\t\tgrade")
console.log("============================================")
let math=parseInt(prompt("enter maths marks"))
let sci=parseInt(prompt("enter sci marks"))
let eng=parseInt(prompt("enter eng marks"))
let his=parseInt(prompt("enter his marks"))
let geo=parseInt(prompt("enter geo marks"))


console.log("Maths\t\t",`${math}`,"\t\tA","\nScience\t\t",`${sci}`,"\t\tA","\t\tA","\nEnglish\t\t",`${eng}`,"\t\tA","\nHistory\t\t",`${his}`,"\t\tA","\nGoraphy\t\t",`${geo}`,)

console.log("---------------------------------------------------")
//
let sum=math + sci + eng + his + geo;
console.log(`total:${sum}`);
let avg=(sum/5);
console.log(`avarage:${avg} `)