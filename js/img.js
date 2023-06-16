document.addEventListener("DOMContentLoaded", function() {


    var primerItem = document.getElementsByClassName("item")[0];


    cargar(primerItem);
});

function cargar(item) {
    quitarBordes();
    quitarFondo();
    item.style.border = "2px solid red";
    item.style.backgroundColor = "white";

    function quitarBordes() {
        var items = document.getElementsByClassName("item");
        for (i = 0; i < items.length; i++) {
            items[i].style.border = "none";
        }

    }

    function quitarFondo() {
        var items2 = document.getElementsByClassName("item");
        for (i = 0; i < items2.length; i++) {
            items2[i].style.backgroundColor = "transparent";
        }

    }
}