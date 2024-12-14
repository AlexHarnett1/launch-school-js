function childNodes(parentId) {
  let parent = document.getElementById(parentId);
  let direct = parent.childNodes.length;
  let indirect = 0;

  let walk = function (node) {
    if (node !== parent) {
      indirect++;
    }
    node.childNodes.forEach(element => {
      walk(element);
    });
  }
  walk(parent);
  return [direct, indirect - direct];
}