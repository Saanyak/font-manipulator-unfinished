difference = 0;
rightWristx = 0;
leftWristx = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Is Initiolized And Loaded");
}

function draw() {
    background("#1167f2");
    fill("#84aff5");
    text("Saanya",50,100);
    textSize(difference);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        difference = floor(leftWristx-rightWristx);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        console.log("Difference = "+difference);
        console.log("rightwrist_x = "+results[0].pose.rightWrist.x+" rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftWrist.x+" leftwrist_y = "+results[0].pose.leftWrist.y);
    }
}