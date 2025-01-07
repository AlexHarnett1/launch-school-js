document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');
  const bigImg = document.querySelector('figure').firstElementChild;
  console.log(bigImg);

  list.addEventListener('click', (event) => {
    const li = event.target.closest('li');

    if (li) {
      Array.from(list.children).forEach((child) => {
        child.removeAttribute('class'); // Remove the class attribute
      });
      li.classList.add('selected');

      bigImg.setAttribute('src', li.firstElementChild.getAttribute('src'));
    }
  });

});