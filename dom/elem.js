// ----------------------------------------------------------------
// const element = document.getElementById("demo_id");

// console.log(element.innerHTML);

// // element.innerText = "HEY";
// element.innerHTML = "<b><u>Hey</u></b>";

// // background-color

// const changeToRed = () => {
//     element.style.backgroundColor = "red";
// }

// ----------------------------------------------------------------
const elements = document.getElementsByClassName("demo");

console.log(elements);

console.log(elements[2].innerText);

elements[2].innerText = "Changed";

elements[2].style.color = "green";

for (let i = 0; i < elements.length; i++){
    elements[i].innerHTML = "<b>Text changed</b>";
    elements[i].style.color = "gray"
    elements[i].style.fontSize = "40px";
}

// ---------------------------------------------------------------------------
document.getElementsByTagName(); // operations same as getElementsByClassName

document.querySelector(); // only one element
document.querySelectorAll(); // collection of elements


const elem_1 = document.querySelector(".demo");

console.log(elem_1); // operations same as getElementById()

// -----------------

const elem_2 = document.querySelectorAll(".demo");

console.log(elem_2); // operations same as getElementByClassName();

//----------------------------------------------------------------------------
const elem_3 = document.getElementsByTagName("demo");

console.log(elem_3);
console.log(elem_3[2].innerText);

elem_3[2].innerText = "Changed";

for (let i = 0; i < elem_3.length; i++) {
    elem_3[i].innerHTML = "<b>Text changed</b>";
    elem_3[i].style.color = "gray";
    elem_3[i].style.fontSize = "40px";
}

// ---------------------------------------------------------------------------

// const elem_4 = document.querySelectorAll("demo");

// console.log(elem_4);
// console.log(elem_4[2].innerText);
//------------------------------

const elem_5 = document.querySelector("demo");

console.log(elem_5);