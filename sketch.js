var sound1 
function preload(){
  sound1 = loadSound ("Reminiscence.mp3")  
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#edf2f4")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}
var w=100;
var fc
function draw() {
  background("#fefae0");
  rectMode(CENTER) //讓方框的座標以方框中心為主
  noFill()
  if(sound1.isPlaying())
  {
   fc = map(analyzer.getLevel(),0,1,0,100)
  }
  else
  {
   fc = map(mouseX,0,width,0,100)
  }
  stroke("#b5838d")
  for(var y=50;y<=height+50;y=y+w){
  for(var x=50;x<=width+(w/2);x=x+w){
  stroke("#e5989b")
  ellipse(x,y,w+fc)
  stroke("#b5838d")
  ellipse(x,y,50+fc)
  stroke("#ffddd2")
  rect(x,y,w)
  stroke("#ffcdb2")
  rect(x+40,y+40,30+fc)
  }
  }
}
function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}