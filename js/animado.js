document.addEventListener("DOMContentLoaded", function() {


    var primerItem = document.getElementsByClassName("item")[0];


    cargar(primerItem);
   
});

function cargar(item) {
    quitarBordes();
    quitarFondo();
    item.style.border = "3px solid white";
    item.style.backgroundColor = "rgba(166,166,166)";

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
const buttons = document.querySelectorAll('.ver-mas');
const imageElements = document.querySelectorAll('.imagen');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const imageElementsToShow = Array.from(imageElements).slice(index * 2, index * 2 + 2);

    imageElementsToShow.forEach(imageElement => {
      imageElement.classList.toggle('showImage');
    });

    if (button.textContent === 'Ver menos') {
        button.textContent = 'Ver más';
      } else {
        button.textContent = 'Ver menos';
      }
  });
});
document.querySelectorAll('#temario .lista a').forEach((elemento) => {
	elemento.addEventListener('click', () => {
		document.querySelector('#temario .activo').classList.remove('activo');
		elemento.parentElement.classList.add('activo');
	});
});

window.addEventListener('DOMContentLoaded', function() {
  var typingContainer = document.querySelector('.card-description');
  var text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis accusamus pariatur eaque sapiente quia laudantium enim facere obcaecati adipisci dignissimos quam voluptas nostrum. dolore ipsam reprehenderit voluptates praesentium perferendis i?';
  var speed = 50; // Velocidad de escritura en milisegundos
  var index = 0;

  function typeWriter() {
    if (index < text.length) {
      typingContainer.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    } else {
      typingContainer.querySelector('.cursor').style.display = 'inline-block';
    }
  }

  typeWriter();
});