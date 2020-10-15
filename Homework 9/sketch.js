function setup()
{
    createCanvas(600, 600);
}

function draw()
{
    background(400,100,100);
    textSize(22)
    text("Howdy Friends!", 230,50);

    // right arm
    fill(246, 230, 200);
    rect(320,250,150,20);
    // left arm
    rect(150,250,150,20);
    // left leg
    rect(230,400,30,100);
    // right leg
    rect(350,400,30,100);

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
  