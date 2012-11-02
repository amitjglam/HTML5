var canvas, stage, exportRoot, images;
var aAudio = ['../audio/summary0.mp3','../audio/summary1.mp3','../audio/summary2.mp3','../audio/summary3.mp3']
var oAudio = new Audio(aAudio[0])

function init() {
	canvas = document.getElementById("canvas");
	images = {};

	var manifest = [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap10.png", id:"Bitmap10"},
		{src:"images/Bitmap11.png", id:"Bitmap11"},
		{src:"images/Bitmap12.png", id:"Bitmap12"},
		{src:"images/Bitmap13.png", id:"Bitmap13"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/Bitmap8.png", id:"Bitmap8"},
		{src:"images/Bitmap9.png", id:"Bitmap9"},
		{src:"images/play_1.png", id:"play_1"},
        {src:"images/CloseCaption.png", id:"CloseCaption"}
	];

	var loader = new PreloadJS(false);
	loader.onFileLoad = handleFileLoad;
	loader.onComplete = handleComplete;
	loader.onProgress = onProgressLoader;
	loader.loadManifest(manifest);
}

function handleFileLoad(o) {
	if (o.type == "image") { images[o.id] = o.result; }
}

function handleComplete() {
	var tDiv = document.getElementById('progText')
	var pDiv = document.getElementById('progressbar')
	//var vDiv = document.getElementById('testviewport')
	tDiv.style.visibility = 'hidden';
	pDiv.style.visibility = 'hidden';
	
	//vDiv.style.visibility = 'visible';
	exportRoot = new lib.summary();

	stage = new Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	Ticker.setFPS(24);
	Ticker.addListener(stage);
    exportRoot['summary']['fadeScreen']['mcPlay'].onClick =addEvents
}


function onProgressLoader(e)
{
	setProgress(Math.round(e*100))
	
}


function setProgress(per)
{
   
	document.getElementById('progText').innerHTML = '<b>loading assets '+per+'%</b>'
	
	$(function() {
	$( "#progressbar" ).progressbar({
		value: Number(per)
	});
	});
	//alert(per)
}



function addEvents()
{
	exportRoot['summary']['fadeScreen'].visible =false;
	oAudio.play();
    for(var i = 0;i<3;i++)
        {
            exportRoot['summary']['mcTab'+i].onClick = handlePressEvent
            exportRoot['summary']['box'+i].onClick = handlePressEvent
            exportRoot['summary']['mcTab'+i].id = i;
            exportRoot['summary']['box'+i].id = i;
        }
}
function handlePressEvent(e)
{
    resetAll();
    var ID = e.target.id;
    oAudio.pause();
    oAudio = new Audio(aAudio[1+ID])
    oAudio.play();
    exportRoot['summary']['mcTab'+ID].gotoAndStop(1);
    exportRoot['summary']['box'+ID].gotoAndStop(1);
    exportRoot['summary']['mcTab'+ID].onClick = null
    exportRoot['summary']['box'+ID].onClick = null
}
function resetAll()
{
    for(var i=0;i<3;i++)
        {
            exportRoot['summary']['mcTab'+i].gotoAndStop(0);
            exportRoot['summary']['box'+i].gotoAndStop(0);
            exportRoot['summary']['mcTab'+i].onClick = handlePressEvent
            exportRoot['summary']['box'+i].onClick = handlePressEvent
        }
}