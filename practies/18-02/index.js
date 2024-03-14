

// let employes = [];

// const display = () => {

//     let n = employes.length;
//     for (let i = 0; i < n; i++) {
//         let tr = document.createElement("tr");
//         let td1 = document.createElement("td");
//         td1.innerHTML = employes[i].name;
//         let td2 = document.getElementById("td");
//         td2.innerHTML = employes[i].job;
//         let td3 = document.createElement("td");
//         td3.innerHTML = employes[i].eng;
//         let td4 = document.getElementById("td");
//         td4.innerHTML = employes[i].salary;
//         let td5 = document.createElement("td");
//         td5.innerHTML = employes[i].exp;
//         let td6 = document.getElementById("td");
//         tr6.innerHTML = employes[i].email;
//         tr.append(td1, td2, td3, td4, td5, td6,)
//         document.getElementById("tbody").append(tr)
//         let div = document.createElement("div");
//         div.append(td1, td2, td3, td4, td5, td6,);
//         document.getElementById("parent-box").append(div);

//     }
   

//     let tr = document.createElement("tr")
//     let td1 = document.createElement("td")
//     td1.innerHTML = name;
//     let td2 = document.createElement("td")
//     td2.innerHTML = job;
//     let td3 = document.createElement("td")
//     td3.innerHTML = eng;
//     let td4 = document.createElement("td")
//     td4.innerHTML = salary;
//     let td5 = document.createElement("td")
//     td5.innerHTML = exp;
//     let td6 = document.createElement("td")
//     td6.innerHTML = email;

//     tr.append(td1, td2, td3, td4,td5,td6,);
//     document.getElementById("tbody").append(tr)
    
// }

let productdata = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value
    let job = document.getElementById("job").value
    let eng = document.getElementById("eng").value
    let salary = document.getElementById("salary").value
    let exp = document.getElementById("exp").value
    let email = document.getElementById("email").value
    console.log(name, job, eng, salary, exp, email,);

    // let productdata = {
    //     name: name,
    //     job: job,
    //     eng: eng,
    //     salary: salary,
    //     exp: exp,
    //     email: email,
    // };
    // console.log(display);
    // employes.push(productdata);
    // console.log(productdata);
    // display(productdata);
}

document.getElementById("data").addEventListener("submit", productdata)