noseY=0;
noseX=0;
difference=0;
leftwrist=0;
rightwrist=0;



function setup(){
    video = createCapture(VIDEO);
    video.size(550,400);
    canvas = createCanvas(550,400)
canvas.position(560,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
    background('#e864a6')
    fill('#61e61')
   
    textSize(difference);
    text('Aisha', noseX, noseY);
}

function modelLoaded(){
    console.log('Posenet is Initialized! ')

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseY=results[0].pose.nose.y;
        noseX=results[0].pose.nose.x;
       
        leftwrist = results[0].pose.leftWrist.x;
        rightwrist = results[0].pose.rightWrist.x;
        difference = floor(leftwrist - rightwrist);
    }
}