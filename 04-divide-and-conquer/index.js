// Divide & Conquer (D&C)

const sum = (array) => {
  if (array.length === 0) return 0;
  return array[0] + sum(array.slice(1));
};

console.log(sum([2, 4, 6]));

const count = (array) => {
  if (array.length === 0) return 0;
  return 1 + count(array.slice(1));
};

console.log(count([2, 4, 6]));

const findMax = (array) => {
  if (array.length === 2)
    return array[0] > array[1] ? array[0] : array[1];
  const subMax = findMax(array.slice(1));
  return array[0] > subMax ? array[0] : subMax;
};

console.log(findMax([2, 4, 6]));

const quicksort = (array) => {
  if (array.length < 2) return array;
  const pivot = array[0];
  const less = array.slice(1).filter((num) => num <= pivot);
  const greater = array.slice(1).filter((num) => num > pivot);
  return [...quicksort(less), pivot, ...quicksort(greater)];
};

console.log(quicksort([10, 5, 2, 3]));
