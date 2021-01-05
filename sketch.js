var min, sec, hr 
var minangle, secangle, hrangle




function setup() {

  angleMode(DEGREES);

  createCanvas(800,400);
}

function draw() {
  background(0);
hr= hour()
min= minute()
sec= second()
translate(400,200)
rotate(-90)
hrangle= map(hr%12,0,12, 0,360)
minangle=map(min,0,60,0,360)
secangle=map(sec,0,60,0,360)
push()
rotate(hrangle)
stroke("blue")
strokeWeight(7)
line(0,0,50,0)
pop()
push()
rotate(minangle)
stroke("green")
strokeWeight(7)
line(0,0,75,0)
pop()
push()
rotate(secangle)
stroke("red")
strokeWeight(7)
line(0,0,100,0)
pop()
strokeWeight(10)
noFill()
    stroke("blue")
    arc(0,0,260,260,0,hrangle)
    stroke("red")
    arc(0,0,300,300,0,secangle)
    stroke("green")
    arc(0,0,280,280,0,minangle)
  drawSprites();
}