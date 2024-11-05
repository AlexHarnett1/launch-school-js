function makeList() {
  let list = [];
  return {
    add(item) {
      if (list.indexOf(item) === -1) {
        list.push(item);
        console.log(item + ' added!');
      }
    },
    list() {
      if (list.length === 0) {
        console.log('The list is empty');
      } else {
        list.forEach(listItem => console.log(listItem));
      }
    },
    remove(item) {
      if (list.indexOf(item) !== -1) {
        list.splice(list.indexOf(item), 1);
        console.log(item + ' removed!');
      }
    },
  }
}

let list = makeList();
list.add('peas'); // peas added!
list.list();
// peas

list.add('corn'); //corn added!
list.list();
// peas
// corn
list.remove('peas'); // peas removed!
list.list();
// corn