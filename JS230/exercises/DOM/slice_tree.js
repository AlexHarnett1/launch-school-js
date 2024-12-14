function sliceTree(startidx, endidx) {
  let startNode = document.getElementById(startidx);
  let endNode = startNode.querySelector(`[id='${endidx}']`)
  if (endNode === null) return undefined;

  let tree = [endNode.tagName];
  let currNode = endNode;
  while (currNode !== startNode) {
    currNode = currNode.parentElement;
    tree.unshift(currNode.tagName);
  }

  return tree;
}

console.log(sliceTree(1, 4));
console.log(sliceTree(1, 76));
console.log(sliceTree(2, 5));
console.log(sliceTree(5, 4));
console.log(sliceTree(1, 23));
console.log(sliceTree(1, 22));
console.log(sliceTree(11, 19));

/*
> sliceTree(1, 4);
= ["ARTICLE", "HEADER", "SPAN", "A"]
> sliceTree(1, 76);
= undefined
> sliceTree(2, 5);
= undefined
> sliceTree(5, 4);
= undefined
> sliceTree(1, 23);
= ["ARTICLE", "FOOTER"]
> sliceTree(1, 22);
= ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
> sliceTree(11, 19);
= ["SECTION", "P", "SPAN", "STRONG", "A"]
*/