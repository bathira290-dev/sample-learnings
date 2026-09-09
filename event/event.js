// const btn = document.getElementById('btn');
// console.log(btn);
 
// btn.addEventListener('click', function() {
//     // code can be executed here when the button is clicked
//     console.log('context menu is open');
// });

// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
//     console.log(event);
//     console.log('context menu is open');
// })

// document.addEventListener("keydown", function (event) {
//     if (event.shiftKey && event.altKey && event.code == "Enter") {
//         console.log("Shift + Alt + Enter is pressed");
//     }
// })

// document.addEventListener("dblclick", function (event) {
//     console.log("Double click detected");
// });

// document.addEventListener("mousemove", function (e) {
//     console.log(e);// style create in  mosue move event and also this  used to get pointer of the devices
// })

// document.addEventListener("keyup", function (ev) {
//     if (ev.key === "Escape") {
//         console.log("Escape key is pressed");
//     }
// });



// const mouseFollow = document.createElement('div');
// const ms = mouseFollow.style;
// ms.height = '10px';
// ms.width = '10px';
// ms.backgroundColor = 'red';
// ms.position = 'absolute';
// ms.top = '0px';
// ms.left = '0px';
// ms.transition = 'top 0.1s, left 0.1s';
// document.body.appendChild(mouseFollow);


// document.addEventListener("mousemove", function (event) {
//     ms.top = event.clientY + 'px';
//     ms.left = event.clientX + 'px';
// });


      
const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(event);
    console.log("context menu is open");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username, password);
});


document.addEventListener("keydown", function (event) {

    if (event.shiftKey && event.altKey && event.code == "Enter") {

        console.log("Shift + Alt + Enter is pressed");

        const un = document.getElementById("username");
        const word_count = document.getElementById("word_count");

        un.addEventListener("input", function (event) {

            console.log(event.target.value);

            const len = event.target.value.length;

            if (len < 5) {
                word_count.innerText = "Min 5 char.";
            } else {
                word_count.innerText = "";
            }
        });
    }
});


document.addEventListener("mousemove", function (e) {
    console.log(e);
});


// video play ,paused, stop
 const vid = document.getElementById ("")