/*
  Start with the id
    - Get the node from id
  
  Take the element's parent, store that as 'parent'
    and get all childNodes, map those to an array and add it to the master array


*/

function domTreeTracer(nodeId) {
  let domTree = [];
  
  let getSiblings = (node) => {
    let parent = node.parentElement;
    let siblings = [];
    let currChild = parent.firstElementChild;
    let foundGrandParent = false;

    for (let i = 0; i < parent.childElementCount; i++) {
      siblings.push(currChild.tagName);
      if (currChild.id === '1') foundGrandParent = true
      currChild = currChild.nextElementSibling;
    }
    
    domTree.push(siblings);
    if (!foundGrandParent) getSiblings(parent);
  }

  let firstNode = document.getElementById(nodeId);
  getSiblings(firstNode);
  return domTree;
}

domTreeTracer(1);
domTreeTracer(2);
domTreeTracer(22);

// domTreeTracer(1);
// =[["ARTICLE"]]
//   > domTreeTracer(2);
// =[["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
//   > domTreeTracer(22);
// =[["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"],
// ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]