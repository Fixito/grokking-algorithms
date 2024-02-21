//* Graph

const graph = {};

graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

console.log(graph);

//* Algorithm

const personIsSeller = (name) => name.at(-1) === 'm';

const search = (name) => {
  const search_queue = [];
  search_queue.push(...graph[name]);
  const searched = [];

  while (search_queue.length) {
    const person = search_queue.shift();

    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      } else {
        search_queue.push(...graph[person]);
        searched.push(person);
      }
    }
  }

  return false;
};

console.log(search('you'));
