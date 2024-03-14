let = products = [];
const display = () => {
    document.getElementById("parent-box").innerHTML=""
    products.map((ele,i) => {
        let img = document.createElement("img");
        img.src = ele.img;
        let price = document.createElement("p");
        price.innerHTML = ele.price;
        let title = document.createElement("h2");
        title.innerHTML = ele.title;
        let div = document.createElement("div");
        let btn=document.createElement("button")
        btn.innerHTML="delete"
        div.append(img, title,price,btn);

        // delete
        btn.addEventListener("click",()=>{
            products.splice(i,1)

            console.log(products);
            uimaker();
        })
        
        console.log(div);
        document.getElementById("parent-box").append(div);

    })
}
let productdata = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value
    let price = document.getElementById("price").value
    let img = document.getElementById("img").value
    console.log(title, price, img);
    let productdata = {

        title: title,
        price: price,
        img: img,
    };

    products.push(productdata);

    display();

}
document.getElementById("data").addEventListener("submit", productdata)
