
let products = []

const display = () => {
    document.getElementById("box").innerHTML="";
    products.map((ele, i) => {
        let title = document.createElement("h4")
        title.innerHTML = ele.title
        let price = document.createElement("h5")
        price.innerHTML = ele.price
        let img = document.createElement("h3")
        img.src = ele.img
        let div = document.createElement("div")
        // let btn = document.createElement("button")
        // btn.innerHTML = "delete"
        // div.append(title, price, img, btn)
        // btn.addEventListener("click", () => {
        //     products.splice(i, 1);

        //     console.log(products);
        //     dryfruits()
        // })

        div.append(title,img,price);
        // title.setAttribute("class", "title")
        document.getElementById("box").append(div)
    })
}
let handleproduct = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let img = document.getElementById("img").value;
    // let cat=document.getElementById("categary").value

    // console.log(title,price,img);

    let product = {
        title: title,
        price: price,
        img: img
    }

    products.push(product);
    console.log(products)
    // dryfruits();
}

document.getElementById("data").addEventListener("submit", handleproduct);