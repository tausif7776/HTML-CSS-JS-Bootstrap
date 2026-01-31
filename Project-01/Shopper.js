

// Load all categories
function LoadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
    .then(response => response.json())
    .then(categories => {

        categories.unshift("all");

        let select = document.getElementById("lstCategories");
        select.innerHTML = "";

        categories.forEach(category => {
            let option = document.createElement("option");
            option.text = category.toUpperCase();
            option.value = category;
            select.appendChild(option);
        });
    });
}

// Load products
function LoadProducts(url) {
    fetch(url)
    .then(response => response.json())
    .then(products => {

        let main = document.querySelector("main");
        main.innerHTML = "";

        products.forEach(product => {
            let div = document.createElement("div");
            div.className = "card p-2 m-2";
            div.style.width = "200px";

            div.innerHTML = `
                <img src="${product.image}" height="140" class="card-img-top">
                <div class="card-header" style="height:140px">
                    ${product.title}
                </div>
                <div class="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd>$${product.price}</dd>
                        <dt>Rating</dt>
                        <dd>
                            ${product.rating.rate}
                            <span class="bi bi-star-fill text-success"></span>
                            [${product.rating.count}]
                        </dd>
                    </dl>
                </div>
                <div class="card-footer">
                    <button onclick="AddClick(${product.id})" class="btn btn-danger w-100">
                        <span class="bi bi-cart4"></span> Add to Cart
                    </button>
                </div>
            `;

            main.appendChild(div);
        });
    });
}

// Page load
function bodyload() {
    LoadCategories();
    LoadProducts("https://fakestoreapi.com/products");
    GetCartCount();
}

// Category change
function CategoryChange() {
    let category = document.getElementById("lstCategories").value;

    if (category === "all") {
        LoadProducts("https://fakestoreapi.com/products");
    } else {
        LoadProducts(`https://fakestoreapi.com/products/category/${category}`);
    }
}

var cartItems = [];

function GetCartCount() {
    document.getElementById("lblCount").innerHTML = cartItems.length;
}

function AddClick(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(product){
        cartItems.push(product);
        alert(`${product.title}\nAdded to Cart`);
        GetCartCount();
    })
}

function ShowCart() {
    document.querySelector("tbody").innerHTML = "";
    cartItems.map(function(item) {
        var tr = document.createElement("tr");
        var tdTitle = document.createElement("td");
        var tdImage = document.createElement("td");
        var tdPrice = document.createElement("td");

        tdTitle.innerHTML = item.title;
        tdPrice.innerHTML = item.price;
        tdImage.innerHTML = `<img width="50" height="50" src=${item.image}>`;

        tr.appendChild(tdTitle);
        tr.appendChild(tdPrice);
        tr.appendChild(tdImage);

        document.querySelector("tbody").appendChild(tr);
    })
}