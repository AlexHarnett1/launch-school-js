function makeList() {
  let list = [];
  return function (item) {
    if (item === undefined) {
      if (list.length === 0) {
        console.log('The list is empty');
      } else {
        list.forEach(listItem => console.log(listItem));
      }
    } else if (list.indexOf(item) < 0) {
      list.push(item);
      console.log(item + ' added!');
    } else {
      list.splice(list.indexOf(item), 1);
      console.log(item + ' removed!');
    }
  }
}

let list = makeList();
list(); // The list is empty.
list('make breakfast'); // make breakfast added!
list('read book');  //read book added!
list();
// make breakfast
// read book
list('make breakfast'); //make breakfast removed!

list(); //read book
/*
> let list = makeList();
> list();
The list is empty.
> list('make breakfast');
make breakfast added!
  > list('read book');
read book added!
  > list();
make breakfast
read book
  > list('make breakfast');
make breakfast removed!
  > list();
read book
*/