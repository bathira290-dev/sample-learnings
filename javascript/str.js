const str = "  Hello World!  ";

console.log(str.length)
console.log(str[4])
console.log(str.at(2))
console.log(str.charAt(1))
console.log(str.indexOf("Hello"))
console.log(str.includes("Hello"))
console.log(str.startsWith("He"))
console.log(str.endsWith("World!"))

console.log(str.trim())
console.log(str.slice(6, 11))
console.log(str.slice(-4))
console.log(str.slice(0, -3))
console.log(str.replace("Hello", "Hey"))
console.log(str.replace("1" , "5"))
console.log(str.split("-"))
console.log(str.split(""))

let text = "hello"
console.log(text.toUpperCase())