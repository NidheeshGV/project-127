Bts_butter="";
Bts_dynamite="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,530);
}

function preload(){
    Bts_butter=loadSound("BTS-Butter-(TrendyBeatz.com).mp3");
    Bts_dynamite=loadSound("BTS-Dynamite-(TrendyBeatz.com).mp3");
    }
    