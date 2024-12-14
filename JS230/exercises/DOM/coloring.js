function colorGeneration(indentation) {
  if (indentation <= 0) return;
  let body = document.querySelector('body');

  highlightBox([body], indentation);
}

function highlightBox(elements, indentation) {
  if (elements.length === 0) return;
  let elementsArray = Array.prototype.slice.call(elements);
  if (indentation === 0) {
    elementsArray.forEach(element => {
      element.classList.add('generation-color');
    });
  } else {
    elementsArray.forEach(element => {
      highlightBox(element.children, indentation - 1);
    });
  }
}




colorGeneration(1);
