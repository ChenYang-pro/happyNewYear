var fireworks = [];
var gravity;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    colorMode(HSB)
    gravity = createVector(0, 0.2)
    stroke(255)
    strokeWeight(4)
    background(0)
}

function draw() {
    colorMode(RGB)
    background(0, 0, 0, 25)
    if (random(1) < 0.1) {
        fireworks.push(new Firework())
    }
    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update()
        fireworks[i].show()
        if (fireworks[i].done()) {
            fireworks.splice(i, 1)
        }
    }
}

// function clickHandle(e) {
//     const x = e.clientX, y = e.clientY;
//     fireworks.push(new Firework(x,y))
// }

// document.body.addEventListener("click", clickHandle)