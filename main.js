noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    video = createCanvas(300, 300);
    video.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    background('blue');
    document.getElementById("square_side").innerHTML = "Width And Height of a Sqaure will be = " + difference +"px"
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}


function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(results)
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWrist);
        console.log("leftWristX =" + leftWristX + "  rightWristX = "+ rightWristX +" difference =  " + difference);
    }
}



