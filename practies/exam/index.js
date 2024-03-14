

let productdata = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value
    let job = document.getElementById("job").value
    let eng = document.getElementById("eng").value
    let salary = document.getElementById("salary").value
    let exp = document.getElementById("exp").value
    let email = document.getElementById("email").value
    console.log(name, job, eng, salary, exp, email,);

    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    td1.innerHTML=name;
    let td2=document.createElement("td")
    td2.innerHTML=job;
    let td3=document.createElement("td")
    td3.innerHTML=eng;
    let td4=document.createElement("td")
    td4.innerHTML=salary;
    let td5=document.createElement("td")
    td5.innerHTML=exp;
    let td6=document.createElement("td")
    td6.innerHTML=email;
    let td8=document.createElement("td")
    td8.innerHTML="type"
    if(exp > 5){
        td8.innerHTML="senior";
    }
    else{
        td8.innerHTML="junior"
    }
    let td7=document.createElement("td")
    td7.innerHTML="delete";
    td7.addEventListener("click",(e)=>{
        e.target.parentNode.remove();
    })
    document.getElementById("del").addEventListener("click",()=>{
       document.getElementById("tbody").innerHTML=""; 
    })
    tr.append(td1,td2,td3,td4,td5,td6,td8,td7)
    document.getElementById("tbody").append(tr);

}

const dis=()=>{
    let t_salary=0;
    let n=Date.length;
    for(let i=0; i<n; i++)
    {
        t_salary += date[i].salary
    }
}

document.getElementById("data").addEventListener("submit", productdata)



