function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    posenetmodel = ml5.poseNet(video, modelloaded);
    posenetmodel.on("pose", getResults)
}

function modelloaded() {
    console.log("Posenet has loaded");
}

function getResults(resultsarray) {
    if (resultsarray.length > 0) {
        console.log(resultsarray);
    }
}