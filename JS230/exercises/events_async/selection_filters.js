let clearButton = document.getElementById('clear');
let classificationMenu = document.getElementById('animal-classifications');
let classifications = classificationMenu.children;
let animalMenu = document.getElementById('animals');
let animals = Array.prototype.slice.call(animalMenu.children);

classificationMenu.addEventListener('change', (event) => {
  let classificationOptionValue = event.target.value;
  console.log(classificationOptionValue);
  let classificationOption = classificationMenu.querySelector(`option[value='${classificationOptionValue}']`);
  console.log(classificationOption);
  classificationOption.selected = true;
  hideAnimalOptions(classificationOptionValue);
});

animalMenu.addEventListener('change', (event) => {
  let animalOption = event.target.value;

});

clearButton.addEventListener('click', (event) => {
  classifications[0]
});

function hideAnimalOptions(classification) {
  let animalsToKeep = [];
  if (classification === 'Vertebrate') {
    animalsToKeep = ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'];
  } else if (classification === 'Warm-blooded') {
    animalsToKeep = ['Bear', 'Whale', 'Ostrich'];
  } else if (classification === 'Cold-blooded') {
    animalsToKeep = ['Turtle', 'Salmon'];
  } else if (classification === 'Mammal') {
    animalsToKeep = ['Bear','Whale'];
  } else if (classification === 'Bird') {
    animalsToKeep = ['Ostrich'];
  } else {
    animalsToKeep = ['Classifications', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'];
  }

  let firstFound = false;
  animals.forEach(animal => {
    if (animalsToKeep.includes(animal.value)) {
      animal.hidden = false;
      if (!firstFound) {
        animal.selected = true;
        firstFound = true;
      }
    } else {
      animal.hidden = true;
      animal.selected = false;
    }
  });

  animalMenu.children[0].selected = true;
}

function hideClassificationOptions(animal) {

}