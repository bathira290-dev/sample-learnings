const arr = [1, 2, 3, 4, 5, 6, 4];

console.log(arr.length);
console.log(arr.at(2));
console.log(arr.indexOf(5, 4));
console.log(arr.includes(30))

arr.push(7, 10, 40);
arr.pop();

arr.unshift(0, -1, -2, 5);
arr.shift();

arr[2] = 50;
// splice

console.log(arr.splice(2, 0, 100, 200, 300));

console.log(arr);

console.log(arr.reverse())

console.log(arr.join(""));

// number hide

const phone = 8943730291;
const phoneString = phone.toString()
const phoneStart = phoneString.slice(0, 2)
const phoneEnd = phoneString.slice(-2)
const ph = phoneStart + "********" + phoneEnd
console.log(ph);

// email hide
const email = "john12387@example.com";

// joh*******@gmail.com

const emailArr = email.split("@");
const username = emailArr[0];
const domain = emailArr[1];

const usernameStart = username.slice(0, -5);
const hide = usernameStart + "********";

const newEmail = hide + "@" + domain;
console.log(newEmail);

// array methods -> yarra sdohtem

const txt = "array methods";
const sp = txt.split(" ");
const res = [];
for (let i = 0; i < sp.length; i++){
    const rev = sp[i].split("").reverse().join(""); // yarra
    res.push(rev);
}

console.log(res.join(" "));
