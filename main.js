noseX=0;
noseY=0;
spx=0;
spy=0;
function preload() {
  std = loadImage("https://postimg.cc/XptG5PGm");
 sp= loadImage("https://postimg.cc/Snp955S8");
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
  noseX = images[0].pose.nose.x-250;
  noseY = images[0].pose.nose.y-300;
 spx = images[0].pose.nose.x;
  spy = images[0].pose.nose.y;

 }
 
}

function draw() {
image(video,0 ,0 ,500,500);
image(std,noseX,noseY,500,305);
image(sp,spx,spy,280,200);
}



function take_snapshot(){    
  save('myFilterImage.png');
}