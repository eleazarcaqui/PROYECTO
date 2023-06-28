document.addEventListener("DOMContentLoaded", function() {


    var primerItem = document.getElementsByClassName("item")[0];


    cargar(primerItem);
   
});

function cargar(item) {
    quitarBordes();
    quitarFondo();
    item.style.border = "3px solid white";
    item.style.backgroundColor = "#ee464646";

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
let writing = str => {
    let arrFromStr = str.split('');
    let i = 0;
    let  printStr = setInterval (function(){
    if(arrFromStr[i] === ''){
    document.body.innerHtml += arrFromStr[i];
    document.body.innerHtml += arrFromStr[i + 1];
    i += 2;
    }else{
    document.body.innerHtml += arrFromStr[i];
    i++;
    }
    if (i === arrFromStr.length){
    clearInterval (printStr);
    }
    
    },500);
};
    writing('Para crear una máquina de escribir con varias líneas utilizando HTML');