const buttons = document.querySelectorAll('.ver-mas');
const imageElements = document.querySelectorAll('.imagen');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const imageElement = imageElements[index];
    const buttonText = button.textContent;

    imageElement.classList.toggle('showImage');

    if (imageElement.classList.contains('showImage')) {
      button.textContent = 'Ver menos';
    } else {
      button.textContent = 'Ver más';
    }
  });
});