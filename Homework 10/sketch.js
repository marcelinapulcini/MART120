var redColor = 123;
var greenColor = 39;
var blueColor = 21;

var leftlegx = 230;
var leftlegy = 400;
var rightlegx = 350;
var rightlegy = 400;
var legdirection = 1;

var leftarmx = 150;
var leftarmy = 250;
var rightarmx = 320;
var rightarmy = 250;
var armdirection = 2;

var size = 22;
var count = 0;
var sizeDirection = 2;


function setup()
{
    createCanvas(600,600);
}

function draw()
{
    background(redColor,greenColor,blueColor);
    textSize(size)
    fill (blueColor)
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Howdy Friends!", 230,50);

    // right arm
    fill(246, 230, 200);
    rect(rightarmx,rightarmy,150,20);
    rightarmy+=armdirection;
    if(rightarmy >= 300 || rightarmy <= 250)
    {
        armdirection *= -1;
    }
    // left arm
    rect(leftarmx,leftarmy,150,20);
    leftarmy+=armdirection;
    if(leftarmy >= 300 || leftarmy <= 250)
    {
        armdirection *= -1;
    }
    // left leg
    rect(leftlegx,leftlegy,30,100);
    leftlegx+=legdirection;
    if(leftlegx >= 400 || leftlegx <= 200)
    {
        legdirection *= -1;
    }
    // right leg
    rect(rightlegx,rightlegy,30,100);
    rightlegx+=legdirection;
    if(rightlegx >= 400 || rightlegx <= 200)
    {
        legdirection *= -1;
    }

    //dress
    fill (11,84,100);
    triangle(150, 400, 300, 150, 450, 400);

    // head
    fill(246, 230, 200);
    ellipse(300,150,100,150);
   
    // left eye
    fill(100,100,100);
    ellipse(285,130,20,10);

    // right eye
    fill(100,100,100);
    ellipse(315,130,20,10);

    // nose
    fill (200,175,80);
    triangle(290,160,300,140,310,160);
    
    // mouth
    fill(182,15,71);
    ellipse(300,180,30,10);

    // hair
    strokeWeight(5); 
    line(300,70,200,250);
    line(300,70,400,250);
   
    
    fill(0,0,0);
    textSize(16);
    text("Marcelina Pulcini",250,550);


}
  