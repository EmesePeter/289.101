/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red while the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/



var puck = document.getElementById('puck');

var puck_x = 210;
var puck_y = 210;

var speed = 50;


puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';



function logCoordinates() {
    console.log('x=' + puck_x + ' y=' + puck_y);
}

function checkCollision() {
    // collision detection code goes here
    //console.log('check');

    if (puck_x >= 250 && 350) {
        console.log('collision!');
    }
}



document.getElementById('left').addEventListener('click', () => {
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
});

document.getElementById('right').addEventListener('click', () => {
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
});

document.getElementById('up').addEventListener('click', () => {
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
});

document.getElementById('down').addEventListener('click', () => {
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
});














