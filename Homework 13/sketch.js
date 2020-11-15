var characterX = 50;
var characterY = 50;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(600, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }
}

function draw()
{
    background(200,165,100);
    stroke(0);
    fill(0);
    
    //drawboarders
    drawboarders()

    //exitmessage
    exitmessage();

    //create player
    createplayer();
    moveplayer();

    //createthreat
    createthreat();

    //drawcircle
    drawcircle();

    //youwin
    youwin();
    
} // need to close the draw function

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function createplayer()
{
    fill(100,100,200);
    square(characterX,characterY, 55);
}

function moveplayer()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }
}

function createthreat()
{
// potential enemy
    fill(13, 145, 14);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
// move the shape
shapeXs[i] += shapeXSpeeds[i];
shapeYs[i] += shapeYSpeeds[i];
// check to see if the shape has gone out of bounds
if (shapeXs[i] > width) {
    shapeXs[i] = 0;
}
if (shapeXs[i] < 0) {
    shapeXs[i] = width;
}
if (shapeYs[i] > height) {
    shapeYs[i] = 0;
}
if (shapeYs[i] < 0) {
    shapeYs[i] = height;
}
}
} // close the createthreat function
function drawcircle()
{
    // create the shape based on the mouse click
    fill(200,50,150);
    circle(mouseShapeX, mouseShapeY, 30);
}

function drawboarders()
{
    // top border
    rect(0,0,width,20);
    // left border
    rect(0,0,20,height);
    // bottom border
    rect(0, height,width, -20);
    // right upper border
    rect(width,0,-20,height-50);
}


function exitmessage()
{
        // exit message
        textSize(20);
        text("EXIT THIS WAY", width-175,height-75)
}
//} had an extra { for exitmessage

function youwin()
{
    // check to see if the character has left the exit
    if(characterX > width-100 && characterY > width-100)
    {
        fill(0);
        stroke(5);
        textSize(30);
        text("You Win!", width/2-50, height/2-50);
    }
}

// needed to create the getRandomNumber function
function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 1;
}