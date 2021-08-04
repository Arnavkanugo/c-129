song="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
scoreleftWrist=0;
function preload(){
 
    song=loadSound("videoplayback (1).mp4");
}
function setup (){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotposes);
}
function draw (){
image(video,0,0,600,500);

}
function Play(){
song.play();
song.setVolume(1);
song.rate(1);

}
function Stop(){
song.stop();
}
function modelLoaded(){
    console.log("poseNet loaded");
}
function gotposes(results)
{
    if(results.length>0){
        console.log(results);
        scoreleftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist= "+scoreleftWrist);
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
console.log("leftwristx= "+leftwristx);
console.log("leftwristy= "+leftwristy);
rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
console.log("rightwristx= "+rightwristx);
console.log("rightwristy= "+rightwristy);
  }

}
function draw (){
    image(video,0,0,600,500);
    fill("#56BFE8");
    stroke("#56BFE8");
    if(scoreleftWrist>0.2) {
     circle(leftwristx,leftwristy);
    InNumberleftWristY=Number(leftWristY);
    remove_decimals=floor(InNumberleftWristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="volume="+volume;
    song.setVolume(volume);
    }
}

