// Implement a function `dfs` that accepts two arguments: an adjacency
// list representing an undirected graph, and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

function dfs(adjList, source) {
  const stack = [source];
  let visted = new Set();

  while (stack.length > 0) {
    let vertex = stack.pop();
    let neighbors = adjList.get(vertex);
    
    for (let neighbor of neighbors) {
      if (!visted.has(neighbor)) stack.push(neighbor);
    }
    console.log(vertex);
    visted.add(vertex);

  }
}

const adjList = new Map();
adjList.set(1, [2]);
adjList.set(2, [1, 3]);
adjList.set(3, [2]);

dfs(adjList, 1); // 1, 2, 3