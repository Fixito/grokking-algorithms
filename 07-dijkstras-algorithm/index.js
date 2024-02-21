//* Dijkstra's algorithm

// Graph
const graph = {};
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;

console.log(Object.keys(graph['start']));

console.log(graph['start']['a']);
console.log(graph['start']['b']);

graph['a'] = {};
graph['a']['fin'] = 1;

graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;

graph['fin'] = {};

console.log(graph);

// Costs
const infinity = Number.POSITIVE_INFINITY;
const costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = infinity;

console.log(costs);

// Parents
const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

console.log(parents);

// Processed
const processed = [];

const findLowestCostNode = (costs) => {
  let lowestCost = Number.POSITIVE_INFINITY;
  let lowestCostNode = null;

  for (let node in costs) {
    const cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }

  return lowestCostNode;
};

let node = findLowestCostNode(costs);

while (node !== null) {
  const cost = costs[node];
  const neighbors = graph[node];

  for (let n in neighbors) {
    const newCost = cost + neighbors[n];

    if (costs[n] > newCost) {
      costs[n] = newCost;
      parents[n] = node;
    }
  }

  processed.push(node);
  node = findLowestCostNode(costs);
}

console.log(parents);
