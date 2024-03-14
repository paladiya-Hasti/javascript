const handlesubmit = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value
    let grid = document.getElementById("grid").value
    let mark = document.getElementById("mark").value
    let course = document.getElementById("course").value
    console.log(name, grid, mark, course);

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerHTML = name;
    let td2 = document.createElement("td")
    td2.innerHTML = grid;
    let td3 = document.createElement("td")
    td3.innerHTML = mark;
    let td4 = document.createElement("td")
    td4.innerHTML = course;
    let td5 = document.createElement("td")
    td5.innerHTML = "delete all";
    td5.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })
    document.getElementById("del").addEventListener("click", () => {
        document.getElementById("tbody").innerHTML = "";

    })

    td6.document.createElement("td")
    td6.innerHTML = "mark";
    if (mark >= 90) {
        td6.innerHTML = "pass";
    }
    else {
        td6.innerHTML = "fail";
    }
    tr.append(td1, td2, td3, td4, td5, td6);
    document.getElementById("tbody").append(tr)



}


document.getElementById("form"), addEventListener("submit", handlesubmit)

