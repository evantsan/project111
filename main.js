Webcam.set({
    width:'350', height:'300', image_format:'png', png_format:90
});
camera = document.getElementById('camera');
Webcam.attach('#camera');
function capture()
{
Webcam.snap(function (data_uri){
document.getElementById('result').innerHTML = "<img id='i1' src="+data_uri+">"
})
}
console.log("ml5 version",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zD5CohosA/model.json",modelLoaded);
function modelLoaded()
{
console.log("model has been successfully loaded");
}