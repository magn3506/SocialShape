// This is just a sandbox file to test things out


s=150 
x+=0.06; //Beat speed, higher = faster, keep below 1.0
y=3*(cos(x)+sin(x/2))+s;

background(255,192,203);
translate(width/2, height/2-y+50);
rotate(PI/4.0);
square(0,0,y);
circle(y/2,0,y);
circle(0,y/2,y);