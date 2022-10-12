var hotel = {
    nombrehotel: "",
    location: "",
    score: "",
    secret: "",
}

hotel.nombrehotel = "Hotel Alzamora"

document.getElementById("name-hotel").innerHTML = "Hotel: " + hotel.nombrehotel;

hotel.location = "Avenida Alzamora Nº6";

document.getElementById("location-hotel").innerHTML = "Localización: " + hotel.location;

hotel.score = prompt("Introduce una puntuación para el hotel del 1 al 5");

document.getElementById("score").innerHTML = "Puntuación: " + hotel.score + " Estrellas";

//reseña

hotel.secret = confirm("Deseas que se muestre tu reseña?");

document.getElementById("check").checked = hotel.secret;

// Usuario: elige un hotel de los que le sugiero

//var hoteles = {
// Mencey: {
    //    nombre= "Mencey",
    //    localizacion: "Tenerife",
    //    img: "",
//},
//Lani: {
    //    nombre= "Lani",
    //    localizacion: "Madrid",
    //    img: "",
//},
//};

// var selectedHotel = prompt("Indica el nombre del hotel: Mencey o Lani");



//document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].nombre;
//document.getElementById("location-hotel"").innerHTML = "Localización: " hoteles[selectedHotel]["localizacion"];
//document.getElementById("").src = hoteles[selectedHotel].img;

// var stars = {
// una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>,
// dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
// tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
// cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
// cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
//}

//var rating = prompt("Cuántas estrellas?: una, dos, tres, cuatro, cinco");

//document.getElementById("score").innerHTML = stars[rating];