const arr = [1, 2, 3, 4, 5];

// const fn = arr[0];
// const sn = arr[1];

const [fn, sn, tn, fnm, fin] = arr;

console.log(fn, sn, tn, fnm, fin);

// obj

const ob = { 
    name: "John",
    age: 20,
    city: "TVM",
    sample: "hai",

}

// const name = ob.name;
// const age = ob.age;
// const city = ob.city;

const { name, city: changedName, age, sample = "hello" } = ob;

console.log(name, age, changedName, sample);

// spread, rest

const st1 = {
    name: "Amal",
    mark: 80
}

const st2 = {
    name: "Aswin"
}

const { name: st_name, mark = 0 } = st2;
console.log(st_name, mark);

// ...
const array = [1, 2, 3];
const newArr = [...array];
newArr.push(4);
console.log(array, newArr);

const userObj = { name: "Amal", age: 30 };
const user = {...userObj};
user.name = "Aswin"
console.log(userObj, user);

// rest

const users = ["user1", "user2", "user3", "user4", "user5"];

const [u1, u2, ...restUsers] = users;

console.log(u1, u2);
console.log(restUsers);


const student_1 = { name: "Alex", age: 20, course: "AI WEB", hub: "Kozhikode" };

const { name: user_name, hub, ...restStudentInfo } = student_1;

console.log(user_name, hub, restStudentInfo);