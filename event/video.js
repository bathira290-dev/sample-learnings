let video = document.getElementById("video");

let play = document.getElementById("Play");
let pause = document.getElementById("pause");
let stop = document.getElementById("Stop");

play.addEventListener("click", function () {
    video.play();
});

pause.addEventListener("click", function () {
    video.pause();
});

stop.addEventListener("click", function () {
    video.pause();
    video.currentTime = 0;
});