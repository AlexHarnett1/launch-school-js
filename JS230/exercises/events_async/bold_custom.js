function makeBold(boldElement, callback) {
  boldElement.style.fontWeight = "bold";
  callback(boldElement);
}

let sectionElement = document.querySelector('section');
makeBold(sectionElement, function (elem) {
  elem.classList.add('highlight');
});

sectionElement.classList.contains('highlight');
sectionElement.style.fontWeight;
document.get

/*
> let sectionElement = document.querySelector('section');
> makeBold(sectionElement, function(elem) {
    elem.classList.add('highlight');
  });

> sectionElement.classList.contains('highlight');
= true
> sectionElement.style.fontWeight;
= "bold"
*/
