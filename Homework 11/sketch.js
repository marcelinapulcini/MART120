var characterX = 50;
var characterY = 50;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeV = 100
var shapeW = 300
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(600, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(200,165,100);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,20);
    // left border
    rect(0,0,20,height);
    // bottom border
    rect(0, height,width, -20);
    // right upper border
    rect(width,0,-20,height-50);

    // exit message
    textSize(20);
    text("EXIT THIS WAY", width-175,height-75
)

    //character
    fill(100,100,200);
    square(characterX,characterY, 55);

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

    // potential enemy 1
    fill(200,200,200);
    // draw the shape
    circle(shapeX, shapeY, 15);

    // potential enemy 2
    fill(200,120,300);
    // draw the shape
    square(shapeV,shapeW,30);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    // move the shape
    shapeV += shapeXSpeed;
    shapeW += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeV > width)
    {
        shapeV = 0;
    }
    if(shapeV < 0)
    {
        shapeV = width;
    }
    if(shapeW > height)
    {
        shapeW = 0;
    }
    if(shapeW < 0)
    {
        shapeW = height;
    }

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(30);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(200,50,150);
    square(mouseShapeX, mouseShapeY, 30);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
