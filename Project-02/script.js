const data = {
    "mobiles": [
        {
            "brand": "Samsung",
            "model": "Galaxy S23",
            "price": 74999,
            "finalPrice": 65999,
            "rating": 4.6,
            "image": "https://example.com/samsung-s23.jpg"
        },
        {
            "brand": "Apple",
            "model": "iPhone 14",
            "price": 79999,
            "finalPrice": 73999,
            "rating": 4.7,
            "image": "https://example.com/iphone14.jpg"
        },
        {
            "brand": "Redmi",
            "model": "Note 13 Pro",
            "price": 25999,
            "finalPrice": 20799,
            "rating": 4.4,
            "image": "https://example.com/redmi-note13pro.jpg"
        }
    ]
};

const container = document.getElementById("mobileContainer");

data.mobiles.forEach(mobile => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${mobile.image}" alt="${mobile.model}">
        <h3>${mobile.brand} ${mobile.model}</h3>
        <p class="rating">⭐ ${mobile.rating}</p>
        <p class="old-price">₹${mobile.price}</p>
        <p class="price">₹${mobile.finalPrice}</p>
    `;

    container.appendChild(card);
});
