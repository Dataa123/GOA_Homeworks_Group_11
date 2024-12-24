// map
const arr1 = ["Hello", "world", "Today", "is", "a", "good", "day"];
const arrMap1 = arr1.map((str) => {return "#" + str[0].toUpperCase() + str.slice(1) + "!"});

console.log(arrMap1);

// filter
const arr2 = [20, 14, 15, 0, 5, 3, 9, 21, 80, 81];
const arrMap2 = arr2.filter((num) => {return num % 3 === 0});

console.log(arrMap2);

// reduce
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrMap3 = arr3.reduce((preVal, curVal) => {return preVal + curVal}, 5);

console.log(arrMap3);

// forEach
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr4.forEach((x) => console.log(x));