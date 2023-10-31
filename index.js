let products = [
    {
        id: 1,
        image: "https://thumb.tildacdn.com/tild3735-6265-4561-a332-333964613866/-/format/webp/Carnival_half.png",
        name: "Carvinal",
        price: "56 795 $"
    },
    {
        id: 2,
        image: "https://www.cars.com/i/large/in/v2/stock_photos/0081caf9-fb87-489d-814e-aabcaab4c872/1061b47d-8c59-411b-86a6-2961e0d918ec.png",
        name: "Optima Specs",
        price: "23 389 $"
    },
    {
        id: 3,
        image: "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/cms/uploads/jouitzsbznig0iex22oa",
        name: "Seltos",
        price:"44 900 $"
    },
    {
        id: 4,
        image: "https://kia.irbis-auto.ru/uploads/auto_catalog/910x/master-data/overviews/GY/20222022/prestige/SWP/14.png",
        name: "Sportage",
        price:"38 959 $"
    },
    {
        id: 5,
        image: "https://thumb.tildacdn.com/tild3735-6265-4561-a332-333964613866/-/format/webp/Carnival_half.png",
        name: "Carvinal",
        price: "56 795 $"
    },
    {
        id: 6,
        image: "https://www.cars.com/i/large/in/v2/stock_photos/0081caf9-fb87-489d-814e-aabcaab4c872/1061b47d-8c59-411b-86a6-2961e0d918ec.png",
        name: "Optima Specs",
        price: "23 389 $"
    },
    {
        id: 7,
        image: "https://www.sim-kia.ru/upload/img/21-1_600-370.png",
        name: "Kia k9",
        price:"39 184 $"
    },
    {
        id: 8,
        image: "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/cms/uploads/jouitzsbznig0iex22oa",
        name: "Seltos",
        price:"44 900 $"
    },
    {
        id: 9,
        image: "https://kia.irbis-auto.ru/uploads/auto_catalog/910x/master-data/overviews/GY/20222022/prestige/SWP/14.png",
        name: "Sportage",
        price:"38 959 $"
    },
]

let box = document.querySelector(".box")

let shoppinProduct = products.map((item) => {
    return `
       <div class="boxes">
          <div class="content-box">
             <img src="${item.image}"/>
          </div>
          <div class="box-content">
             <h3>${item.name}</h3>
             <p>${item.price}</p>
          </div>
          <button id="btn">Авто в наличии</button>
       </div>
    `
})
box.innerHTML += shoppinProduct.join("");

let openShopping = document.querySelector(".open-Shopping");
let closeShopping = document.querySelector(".close-Shopping")
let modal = document.querySelector(".modal")

openShopping.onclick = function() {
    modal.style.display = "block"
}
closeShopping.onclick = function() {
    modal.style.display = "none"
}