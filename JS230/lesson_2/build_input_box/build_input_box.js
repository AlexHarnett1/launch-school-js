document.addEventListener('DOMContentLoaded', () => {
  let cursorBlinker;
  function startBlinkingCursor() {
    cursorBlinker = setInterval(() => {
      if (!textField.classList.contains('cursor')) {
        setTimeout(textField.classList.add('cursor'), 500);
      } else {
        setTimeout(textField.classList.remove('cursor'), 500);
      }
    }, 500);
  }

  let textField = document.querySelector('.text-field');
  let content = document.querySelector('.content');

  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');
    if (!cursorBlinker) {
      startBlinkingCursor();
    }
  });

  document.addEventListener('click', event => {
    clearInterval(cursorBlinker);
    cursorBlinker = null;
    if (textField.classList.contains('focused')) {
      textField.classList.remove('focused');
      textField.classList.remove('cursor');
    }
  });

  document.addEventListener('keydown', event => {
    if (textField.classList.contains('focused')) {
      if (event.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, content.textContent.length - 1);
      } else {
        content.textContent += event.key;
      }
    }
  });
});