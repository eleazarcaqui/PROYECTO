
const title2 = document.querySelectorAll('.timeline-title');

title2.forEach(title => {
    title.addEventListener('click', () => {
        // Remover la clase 'active' de todos los elementos de título
        title2.forEach(item => {
            item.classList.remove('active');
        });

        // Agregar la clase 'active' solo al elemento de título actual
        title.classList.add('active');
    });
});
// Obtener todos los elementos de título
const titles = document.querySelectorAll('#timeline .title');

function toggleAccordion() {
    const accordion = document.getElementById('accordion');
    accordion.classList.toggle('active');
  }

  document.querySelectorAll('#temario .lista h2').forEach((elemento) => {
	elemento.addEventListener('click', () => {
		document.querySelector('#temario .active').classList.remove('active');
		elemento.parentElement.classList.add('active');
	});
});
  // Agregar evento de clic a cada elemento de título
  titles.forEach((title, index) => {
    title.addEventListener('click', () => {
      // Obtener el elemento de contenido correspondiente al título
      const content = title.nextElementSibling;
  
      // Mostrar/ocultar contenido al hacer clic en el título
      content.classList.toggle('active');
  
     // Remover la clase 'active' de todos los elementos de título
      titles.forEach((t, i) => {
        if (i !== index) {
          t.classList.remove('active');
        }
      });
  
      // Agregar la clase 'active' al elemento de título actual
      title.classList.add('active');
    });
  });
  function image1() {
    document.getElementById("image1").style.display = "block"
    document.getElementById("image2").style.display = "none"
    document.getElementById("image4").style.display = "none"
    document.getElementById("image4").style.display = "none"
    document.getElementById("image5").style.display = "none"
    document.getElementById("image6").style.display = "none"

  }
  function image2() {
    document.getElementById("image1").style.display = "none"
    document.getElementById("image2").style.display = "block"
    document.getElementById("image3").style.display = "none"
    document.getElementById("image4").style.display = "none"
    document.getElementById("image5").style.display = "none"
    document.getElementById("image6").style.display = "none"

  }
  function image3() {
    document.getElementById("image1").style.display = "none"
    document.getElementById("image2").style.display = "none"
    document.getElementById("image3").style.display = "block"
    document.getElementById("image4").style.display = "none"
    document.getElementById("image5").style.display = "none"
    document.getElementById("image6").style.display = "none"

  }
  function image4() {
    document.getElementById("image1").style.display = "none"
    document.getElementById("image2").style.display = "none"
    document.getElementById("image3").style.display = "none"
    document.getElementById("image4").style.display = "block"
    document.getElementById("image5").style.display = "none"
    document.getElementById("image6").style.display = "none"

  }
  function image5() {
    document.getElementById("image1").style.display = "none"
    document.getElementById("image2").style.display = "none"
    document.getElementById("image3").style.display = "none"
    document.getElementById("image4").style.display = "none"
    document.getElementById("image5").style.display = "block"
    document.getElementById("image6").style.display = "none"

  }
  function image6() {
    document.getElementById("image1").style.display = "none"
    document.getElementById("image2").style.display = "none"
    document.getElementById("image3").style.display = "none"
    document.getElementById("image4").style.display = "none"
    document.getElementById("image5").style.display = "none"
    document.getElementById("image6").style.display = "block"

  }