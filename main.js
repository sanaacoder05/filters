noseX=0;
noseY=0;
spx=0;
spy=0;
function preload() {
  std = loadImage("https://i.postimg.cc/Qdm83DBS/My-project-1.png");
 sp= loadImage("https://i.postimg.cc/XY4jmqvp/My-project.png");
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video =createCapture(VIDEO);
  video.size(500,500);
  video.hide();
  posenet= ml5.poseNet(video,modelLoaded);
  posenet.on('pose',gotPoses);
}
function modelLoaded(){
  console.log('posenet is initialized');
}

function gotPoses(images){
 if(images.length > 0){
  console.log(images);
  noseX = images[0].pose.nose.x-23;
  noseY = images[0].pose.nose.y+24;
 spx = images[0].pose.nose.x-25;
  spy = images[0].pose.nose.y;

 }
 
}
///std ===lip gloss/
function draw() {
image(video,0 ,0 ,500,500);
image(std,noseX,noseY,70,39);
image(sp,spx,spy,80,70);
}



function take_snapshot(){    
  save('myFilterImage.png');
}