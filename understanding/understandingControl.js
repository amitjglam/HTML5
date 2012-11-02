var canvas, stage, exportRoot, images;
var aAudio = ['../audio/understanding0.mp3','../audio/understanding1.mp3','../audio/understanding2.mp3','../audio/understanding3.mp3','../audio/understanding4.mp3','../audio/understanding5.mp3',
'../audio/understanding6.mp3','../audio/understanding7.mp3','../audio/understanding8.mp3']
var oAudio = new Audio(aAudio[0])

function init() {
	canvas = document.getElementById("canvas");
	images = {};

	var manifest = [
		{src:"images/arrr.png", id:"arrr"},
		{src:"images/bg.png", id:"bg"},
		{src:"images/bg2.png", id:"bg2"},
		{src:"images/bg3.png", id:"bg3"},
		{src:"images/bg4.png", id:"bg4"},
		{src:"images/bgGrey.png", id:"bgGrey"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap14.png", id:"Bitmap14"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/boxHighlight.png", id:"boxHighlight"},
		{src:"images/cross.png", id:"cross"},
		{src:"images/DogAnim08.png", id:"DogAnim08"},
		{src:"images/forArrow.png", id:"forArrow"},
		{src:"images/fourBoxes.png", id:"fourBoxes"},
		{src:"images/frame.png", id:"frame"},
		{src:"images/greenBg.png", id:"greenBg"},
		{src:"images/learMore1.png", id:"learMore1"},
		{src:"images/learnMore2.png", id:"learnMore2"},
		{src:"images/play_1.png", id:"play_1"},
		{src:"images/redCircle.png", id:"redCircle"},
		{src:"images/sledge.png", id:"sledge"},
		{src:"images/tick.png", id:"tick"},
		{src:"images/upArrow.png", id:"upArrow"},
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
	exportRoot = new lib.understanding();

	stage = new Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	Ticker.setFPS(24);
	Ticker.addListener(stage);

       initStartScreen();
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


function initStartScreen()
{
    for(var i=0;i<4;i++)
        {
            exportRoot['understanding']['tick'+i].visible = false;
            exportRoot['understanding']['learnMore_'+i].visible = false;
        }
        exportRoot['understanding']['btnSubmit'].visible = false;
        exportRoot['understanding']['learnMoreClose'].visible = false;
        exportRoot['understanding']['instance']['mcPlay'].onClick = hideScreen;
}
function addUnderstandingEvents()
{
	for(var i=0 ; i<4;i++)
	{
		exportRoot['understanding']['panel_'+i].onClick = handlePanelEvents
		exportRoot['understanding']['panel_'+i].id = i
	}

	exportRoot['understanding']['learnMoreClose'].onClick = handleCloseEvent
	exportRoot['understanding']['btnSubmit'].onClick = checkAnswer;
       
}
function hideScreen()
{
         exportRoot['understanding']['instance'].visible = false;
          oAudio.play();
        addUnderstandingEvents();
}

function handleCloseEvent()
{
	resetLearnMore();
	exportRoot['understanding']['learnMoreClose'].visible = false;
	exportRoot['understanding']['learnMorePopup'].visible = false;
        oAudio.pause();
}


function addlearnMoreEvents()
{
	for(var i=0 ; i<4;i++)
	{
		exportRoot['understanding']['learnMore_'+i].onClick = handleLearnMoreEvents
		exportRoot['understanding']['learnMore_'+i].id = i;
                exportRoot['understanding']['learnMore_'+i].visible = true;
	}
	
	exportRoot['understanding']['learnMorePopup'].visible = true;
	exportRoot['understanding']['learnMorePopup'].gotoAndStop(0);
}

function handlePanelEvents(e)
{
	
       resetAll();
       ID = e.target.id;
      
       
       exportRoot['understanding']['panel_'+ID].gotoAndStop(1);
       exportRoot['understanding']['btnSubmit'].visible = true;
       
}
function checkAnswer()
{
   oAudio.pause();
   oAudio = new Audio(aAudio[1+ID])
   oAudio.play();
   exportRoot['understanding']['panel_'+ID].onClick = null;
   exportRoot['understanding']['btnSubmit'].visible = false; 
   exportRoot['understanding']['tick'+ID].visible = true;
   exportRoot['understanding']['panel_'+ID].gotoAndStop(0);
  if(ID ==2)
       {
           for(var i=0 ; i<4;i++)
			{
				exportRoot['understanding']['tick'+i].visible = true;
				exportRoot['understanding']['panel_'+i].onClick = null;
				exportRoot['understanding']['learnMore_'+i].gotoAndStop(0);
			}	
				addlearnMoreEvents();	
       }
}

function handleLearnMoreEvents(e)
{
	resetLearnMore();
        var nID = e.target.id;
        
        oAudio.pause();
        oAudio = new Audio(aAudio[5+nID])
        oAudio.play();
        exportRoot['understanding']['learnMore_'+nID].gotoAndStop(1);
        exportRoot['understanding']['learnMoreClose'].visible = true;
	exportRoot['understanding']['learnMorePopup'].visible=true;
	exportRoot['understanding']['learnMorePopup'].gotoAndStop( nID+1);
        
}
function resetAll()
{
     for(var i=0 ; i<4;i++)
	{
				
		exportRoot['understanding']['panel_'+i].gotoAndStop(0);
				
	}	
}
function resetLearnMore()
{
    for(var i=0;i<4;i++)
        {
            exportRoot['understanding']['learnMore_'+i].gotoAndStop(0);
        }
}