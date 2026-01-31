var cities = ["Delhi", "Dbg"];

function LoadCities() {
    document.getElementById("lstCities").innerHTML="";
    cities.map(function(city) {
        var option = document.createElement("option");
        option.text = city;
        option.value = city;
        document.getElementById("lstCities").appendChild(option);
    })
    document.getElementById("lblCount").innerHTML = `Total Number of Cities: ${cities.length}`;
}

function bodyload(){
    LoadCities();
}
function AddClick() {
    var cityName = document.getElementById("txtCity").value;
    var cityIndex = cities.indexOf(cityName);
    if(cityIndex == -1) {
        cities.push(cityName);
        alert(`${cityName} Added Successfully..`);
        document.getElementById("txtCity").value="";
        LoadCities();
    } else {
        alert(`${cityName} Exists`);
    }
}
function SortAsc() {
    cities.sort();
    LoadCities();
}
function SortDsc() {
    cities.sort();
    cities.reverse();
    LoadCities();
}

//! Delete City
function RemoveClick() {
    var selectedCity = document.getElementById("lstCities").value;
    var cityIndex = cities.indexOf(selectedCity);
    var flag = confirm(`Are you sure want to delete ${selectedCity}`);
    if(flag==true) {
        cities.splice(cityIndex, 1);
        LoadCities();
    }
}

//! All Clear City
function ClearClick() {
    cities = [];
    LoadCities();
}