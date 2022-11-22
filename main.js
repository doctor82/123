noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(500,500)
canvas.position(560,100);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
if(results.length>0){
console.log(results);
//noseX=results[0].pose.nose.x;
//noseY=results[0].pose.nose.y;
//console.log("Nose X  : "+noseX+" , Nose Y: "+noseY);

leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
console.log(" Left Wrist X  : "+leftWristX+" , Right Wrist x : "+rightWristX+" , Difference: "+difference);
}

}
function modelLoaded(){
console.log("PoseNet Is Initialized");
}

function draw(){
background("grey");
document.getElementById("square_side").innerHTML="Font size will be - "+difference+" px";
fill("#254880");
stroke("#254880");
textSize(difference);
text("Shiva",50,400);

}