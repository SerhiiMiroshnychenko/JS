//calling the function in window.onload to make sure the HTML is loaded
window.onload = function () {
    let x = 0, y = 0; // position
    let vx = 1, vy = 1; // direction
    let t = setInterval(move, 10); // timer
    let speedX = 1, speedY = 1; // default speed
    let container = 200; // default container size
    let box = 50; // default box size

    let speedXRange = document.getElementById('speedXRange');
    let speedXOutput = document.getElementById('speedXOutput');
    let speedYRange = document.getElementById('speedYRange');
    let speedYOutput = document.getElementById('speedYOutput');
    let containerDiv = document.getElementById('container');
    let containerRange = document.getElementById('containerRange');
    let containerOutput = document.getElementById('containerOutput');
    let boxDiv = document.getElementById('box');
    let boxRange = document.getElementById('boxRange');
    let boxOutput = document.getElementById('boxOutput');

    speedXRange.oninput = function () { //event handler
        speedXOutput.value = parseInt(speedXRange.value);
        speedX = speedXOutput.value;
    }

    speedYRange.oninput = function () { //event handler
        speedYOutput.value = parseInt(speedYRange.value);
        speedY = speedYOutput.value;
    }
    containerRange.oninput = function () { //event handler
        containerOutput.value = parseInt(containerRange.value);
        containerDiv.style.width = parseInt(containerRange.value);
        //containerDiv.style.height = parseInt(containerRange.value);
        container = containerRange.value;
    }
    boxRange.oninput = function () { //event handler
        boxOutput.value = parseInt(boxRange.value);
        boxDiv.style.width = parseInt(boxRange.value);
        boxDiv.style.height = parseInt(boxRange.value);
        box = boxRange.value;
    }


    function move() {
        x += (speedX * vx);
        y += (speedY * vy);
        if (x > container - box) {
            vx *= -1;
            x = container - box;
        } else if (x < 0) {
            vx *= -1;
            x = 0;
        }
        if (y > 200 - box) {
            vy *= -1;
            y = 200 - box;
        } else if (y < 0) {
            vy *= -1;
            y = 0;
        }
        boxDiv.style.left = x + 'px';
        boxDiv.style.top = y + 'px';
    }
};