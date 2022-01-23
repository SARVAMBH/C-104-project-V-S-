Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
     Webcam.snap(function(data_uri){
         document.getElementById("snapshot").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
     });
}

console.log("ml5 version:" , ml5.version);

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XlMoGKstY/model.json',modelLoaded);

function modelLoaded()
{
    console.log('modelLoaded');
}