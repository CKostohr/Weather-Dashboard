var magicBtn = document.getElementById("magicBtn");
magicBtn.addEventListener("click", getCity);

function getCity(event) {
    event.preventDefault();
    $('#results').text("");
    $("#forecast").text("");
    var city = document.getElementById("searchInput").value;
    localStorage.setItem("city, city");
    var cityEl = document.getElementById("city");
    var previousCityBtn = document.createElement("button");
    localStorage.getItem(city);
    previousCityBtn.textContent = city;
    previousCityBtn.setAttribute("class", "previousCityBtn");

}