var box_red;
var box_green

//var MouseEvent: {
  //new (type: string, eventInitDict?: MouseEventInit): MouseEvent;
  //prototype: MouseEvent;
//}
function setup() {
  createCanvas(400,400);
  
  box_red = createButton("RED");
  box_red.position(100,200)
  box_red.mousePressed(red_press);
  box_green = createButton("GREEN");
  box_green.position(300,200)
  box_green.mousePressed(green_press);
  
}


function red_press(){
  r=255
  g=0
  b=0
}
function green_press(){
  r=0
  g=255
  b=0
}
function draw() 
{
  background(50);


  drawSprites();
}




