// Hash Tables

const store = {};

store.apple = 0.67;
store.milk = 1.49;
store.avocado = 1.49;

console.log(store);

// Using hashe tables for lookups
const voted = {};

const check_voter = (name) => {
  if (voted[name]) {
    console.log('Kick them out!');
  } else {
    voted[name] = true;
    console.log('Let them vote!');
  }
};

check_voter('tom');
check_voter('mike');
check_voter('mike');

// Using hash tbables as a chache
const getDataFromServer = (url) => {
  // ...
};

const chache = {};

const get_page = (url) => {
  if (cache[url]) {
    return chache[url];
  }

  data = getDataFromServer(url);
  cache[url];
  return data;
};
