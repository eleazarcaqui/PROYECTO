window.addEventListener('DOMContentLoaded', () => {
  // Agregar la clase 'active' al primer título
  titles[0].classList.add('active');
  const firstContent = titles[0].nextElementSibling;
  firstContent.classList.add('active');
  title2[0].classList.add('active');
});

const title2 = document.querySelectorAll('.timeline-title');
const icons = document.querySelectorAll('.timeline-title .bi.bi-chevron-compact-down');
const titles = document.querySelectorAll('.timeline-title .title');
const contents = document.querySelectorAll('.timeline-title .content');

title2.forEach((title, index) => {
  title.addEventListener('click', () => {
    // Remover la clase 'active' de todos los elementos de título
    title2.forEach(item => {
      item.classList.remove('active');
    });

    // Agregar la clase 'active' solo al elemento de título actual
    title.classList.add('active');

    // Cerrar todos los demás elementos de acordeón
    titles.forEach((t, i) => {
      if (i !== index) {
        const content = t.nextElementSibling;
        content.classList.remove('active');
        t.classList.remove('active');
      }
    });
  });
});

icons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    const content = contents[index];
    const isActive = content.classList.contains('active');

    // Mostrar/ocultar contenido al hacer clic en el icono
    contents.forEach(c => {
      c.classList.remove('active');
    });

    // Remover la clase 'active' de todos los elementos de título
    titles.forEach(title => {
      title.classList.remove('active');
    });

    if (!isActive) {
      content.classList.add('active');
      titles[index].classList.add('active');
    }
  });
});
const titles3 = document.querySelectorAll('#timeline .title');

  // Agregar evento de clic a cada elemento de título
  titles3.forEach((title, index) => {
    title.addEventListener('click', () => {
      titles3.forEach((t, i) => {
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
    document.getElementById("image3").style.display = "none"
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