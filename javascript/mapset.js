//console.log(user_name, hub, restStudentInfo);

// array -> collection of elements -> dup.
// set -> Collection of unique elements

const arr2 = [1, 2, 3, 45, 6, 2, 3];
console.log(arr2);

const set = new Set();

set.add(10);
set.add(20);
set.add(30);

console.log(set.has(100))

set.delete(20);
console.log("Size of set: ", set.size);
set.clear();

console.log(set);

// [1,2,3,4,2,5,1,7,3,2,1];

const uniqueElements = new Set([1, 2, 3, 4, 2, 5, 1, 7, 3, 2, 1]);

// console.log([...uniqueElements]);
console.log(Array.from(uniqueElements))

// [1, 2, 3]; => [1,2,3]
// {1,2,3} => [1,2,3]
// { age: 20, place: "kkd"} => {age: 20, place: "kkd"}

// loop -> for of, for in

const numbers = [80, 34, 72, 91, 61, 90];

for (const number of numbers){
    console.log(number);
}

const obj2 = {
    name: "Amal",
    age: 20,
    place: "Kozhikode"
}

for (const key in obj2){
    console.log(obj2[key]);
}


for (const sv of uniqueElements) {
    console.log(sv);
}

// Map -> key value pair

const map = new Map();

map.set("name", "Amal");
map.set("age", 20);
map.set("city", "Kozhikode");

map.set("age", 30)

console.log(map.get("name"))

map.delete("age");

console.log(map.has("age"));

console.log(map.size);

// map.clear();

console.log(map); // [ [key, value], [key, value], [key, value] ]

for (const val of map.keys()) {
    console.log(val);
}