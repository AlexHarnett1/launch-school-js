// Move header above main
let main = document.body.children[0];
let header = document.body.children[1];
document.body.insertBefore(header, main);

// Move h1 out of main and into header
let h1 = main.firstElementChild;
header.insertBefore(h1, header.firstElementChild);

let content = document.getElementById('content');
content.firstElementChild.appendChild(content.lastElementChild);
content.firstElementChild.appendChild(content.lastElementChild);