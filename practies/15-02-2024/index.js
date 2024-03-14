
let handlesubmit = (e) => {

    e.preventDefault();

    let title = document.getElementById("name").value
    let grid = document.getElementById("grid").value
    console.log(title,grid);

}
document.getElementById("data").addEventListener("submit", handlesubmit);



