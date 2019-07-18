// declare some variables
let myPosX = 25;
let myPosY = 25;
let mySpeed = 3;

let enemyPosX, enemyPosY;
let enemyWidth = 50, enemyHeight = 50;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

function setup() {
    createCanvas(500, 500);
    background(0);
    textSize(15);

    // switch rectMode
    rectMode(CENTER);

    // determine the random starting position of enemy
    enemyPosX = random(25, 475);
    enemyPosY = random(100, 475);

}

function draw() {
    // refresh the background
    background(0);
    
    // draw the red enemy
    fill(255, 0, 0);
    rect(enemyPosX, enemyPosY, enemyWidth, enemyHeight);
    
    // draw myself
    fill(0, 0, 255);
    rect(myPosX, myPosY, 50, 50);

    // if the LEFT_ARROW is pressed
    if (keyIsDown(LEFT_ARROW)) {
        myPosX -= mySpeed;
    }

    // if the RIGHT_ARROW is pressed
    if (keyIsDown(RIGHT_ARROW)) {
        myPosX += mySpeed;
    }

    // if the UP_ARROW is pressed
    if (keyIsDown(UP_ARROW)) {
        myPosY -= mySpeed;
    }

    // if the DOWN_ARROW is pressed
    if (keyIsDown(DOWN_ARROW)) {
        myPosY += mySpeed;
    }

    // restrict myself within the canvas
    if (myPosX <= 25) {
        myPosX = 25;
    }

    if (myPosX >= 475) {
        myPosX = 475;
    }

    if (myPosY <= 25) {
        myPosY = 25;
    }

    if (myPosY >= 475) {
        myPosY = 475;
    }

    // know my edges 
    myLeft = myPosX - 25;
    myRight = myPosX + 25;
    myTop = myPosY - 25;
    myBottom = myPosY + 25;

    // define enemy edges
    enemyLeft = enemyPosX - 25;
    enemyRight = enemyPosX + 25;
    enemyTop = enemyPosY - 25;
    enemyBottom = enemyPosY + 25;

    // detect collision! (or rather, detect non-collision)
    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
        // do nothing
    }

    else {
        // there IS collision!!!
        console.log("Collision!");

        // output text to the user 
        fill(random(255), random(255), random(255));
        text("I'm colliding with my enemy. Ouch!", 255, 480);
    }
}