function bodyload() {
    fetch("../data/products.json")
    .then(function(response){
        return response.json();
    })
    .then(function(product){
        document.getElementById("imgProduct").src = product.image; 
        document.getElementById("lblTitle").innerHTML = product.title.fontcolor('blue');
        document.getElementById("lblRatings").innerHTML = `<span class="bg-success p-2 text-white rounded rounded-2 me-3"> ${product.ratings.rate}<span class="bi bi-star-fill"></span></span> <b> ${product.ratings.count} ratings &  ${product.ratings.reviews} reviews </b>`;


        //! Mobile Features Display
        product.features.map(function(feature){
            var li = document.createElement("li");
            li.innerHTML = feature;
            document.getElementById("lblFeatures").appendChild(li);
        });

        

        //! Price Display
        document.getElementById("lblPrice").innerHTML = (product.price).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
    })
}