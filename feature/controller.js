var canvas, stage, exportRoot, images;

function init() {
	canvas = document.getElementById("canvas");
	images = {};

	var manifest = [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap11.png", id:"Bitmap11"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap3_1.png", id:"Bitmap3_1"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap4_1.png", id:"Bitmap4_1"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap5_1.png", id:"Bitmap5_1"},
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/Bitmap6_1.png", id:"Bitmap6_1"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/DogAnim01.png", id:"DogAnim01"},
		{src:"images/DogAnim02.png", id:"DogAnim02"},
		{src:"images/DogAnim03.png", id:"DogAnim03"},
		{src:"images/DogAnim04.png", id:"DogAnim04"},
		{src:"images/DogAnim05.png", id:"DogAnim05"},
		{src:"images/DogAnim06.png", id:"DogAnim06"},
		{src:"images/DogAnim07.png", id:"DogAnim07"},
		{src:"images/DogAnim08.png", id:"DogAnim08"},
		{src:"images/DogAnim09.png", id:"DogAnim09"},
		{src:"images/dogStatic.png", id:"dogStatic"},
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
	exportRoot = new lib.Base();
	
	stage = new Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	Ticker.setFPS(24);
	Ticker.addListener(window);
	exportRoot['grass_value']['acceleration']['txt'].text = "0.00 m/s²"
	exportRoot['fadeScreen']['mcPlay'].onClick = namingTargets
}

var increaseCounter =0;

function tick()
{
	if(enableEvents)
	{
		increaseCounter++;
		if(increaseCounter=5000)
		{
			increaseCounter =0;
			timeCount++;
			disSpeed()
		}		
	}
	stage.update();
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


var boxCount = 0;
var dogCount = 0;
var velocity = 0;
var massDog = 22; 
var massSled = 20; 
var massBox = 20;
var forceDog = 40;
var timeScaleFactor = 0.25 ;
var muS,muK,totalMass,normalForce,staticForce,kineticForce,accOfSledDogs,accDog,accValue,velocity,t,velocityDog,recur;
var destination = {x:800};
var duration =1990;
var muArray =[[0.1,0.2],[0.2,0.3],[0.5,0.6]];
var interval;
var timeCount =0;
var enableEvents =false;
var aAudio = ['../audio/feature0.mp3']
var oAudio = new Audio(aAudio[0])


function namingTargets()
{
	exportRoot['fadeScreen'].visible=false;
	oAudio.play();
	exportRoot['mcSnow'].onClick = handlePanelEvents
	exportRoot['mcGrass'].onClick = handlePanelEvents
	exportRoot['mcRoad'].onClick = handlePanelEvents
	
	exportRoot['mcSnow'].name = 'snow';
	exportRoot['mcGrass'].name = 'grass';
	exportRoot['mcRoad'].name = 'road';
	exportRoot['boxInc'].name ='boxInc';  	  
	exportRoot['boxDec'].name ='boxDec';
	exportRoot['dogInc'].name ='dogInc';
	exportRoot['dogDec'].name ='dogDec';
	exportRoot['startBtn'].name ='startBtn';
	exportRoot['resetBtn'].name ='resetBtn';
}

function addEvents()
{	
	exportRoot['boxInc'].onClick =onBoxInc
	exportRoot['boxDec'].onClick =onBoxDec
	
	exportRoot['dogInc'].onClick =onDogInc
	exportRoot['dogDec'].onClick =onDogDec
	
	exportRoot['startBtn'].onClick =onStart;
	exportRoot['resetBtn'].onClick =onReset;
}

function handlePanelEvents(e)
{
	addEvents();
	switch(e.target.name)
	{
		case 'snow':
		{
			hideAllScreen();
			exportRoot['mcSnow_1'].visible= true;
			muK = 0.1;
			muS = 0.2;
			screen = exportRoot['mcSnow_1'];
			break;
		}
		case 'grass':
		{
			hideAllScreen();
			exportRoot['mcGrass_1'].visible= true;
			muK = 0.2;
			muS = 0.3;
			screen = exportRoot['mcGrass_1'];
			break;
		}
		case 'road':
		{
			hideAllScreen();
			exportRoot['mcRoad_1'].visible= true;
			muK = 0.5;
			muS = 0.6;
			screen = exportRoot['mcRoad_1'];
			break;
		}
}
}

function hideAllScreen()
{
	exportRoot['mcSnow_1'].visible= false;
	exportRoot['mcGrass_1'].visible= false;
	exportRoot['mcRoad_1'].visible= false;
}

function onBoxInc()
		{
			if(boxCount<4)
			{
				exportRoot['box_mc'].gotoAndStop(boxCount+1);
				exportRoot['upArrow'].gotoAndStop(boxCount+1);
				exportRoot['downArrow'].gotoAndStop(boxCount+1);
				boxCount +=1;
				exportRoot['boxCount'].text=boxCount;
			}
			
			if(boxCount ==4)
			{
				
			}			
		}
		
function onBoxDec()
		{
			if(boxCount>0)
			{
				boxCount -= 1;
				exportRoot['box_mc'].gotoAndStop(boxCount);
				exportRoot['upArrow'].gotoAndStop(boxCount);
				exportRoot['downArrow'].gotoAndStop(boxCount);
				exportRoot['boxCount'].text=boxCount;
			}
			
			if(boxCount == 0)
			{
				exportRoot['boxCount'].text= '0';
			}
		}

function onDogInc()
		{
			if(dogCount<9)
			{
				dogCount += 1;
				for(var k=0;k<dogCount;k++)
				{
					exportRoot['mcDog'+k].visible =true;
					exportRoot['mcDogStrip'+k].visible =true;
				}
				exportRoot['dogCount'].text=dogCount;
			}
			
			if(dogCount == 9)
			{
				
			}			
		}
		
function onDogDec()
		{
			if(dogCount>0)
			{
				dogCount -= 1;
				for(k=dogCount-1;k<8;k++)
				{
					exportRoot['mcDog'+(k+1)].visible =false;
					exportRoot['mcDogStrip'+(k+1)].visible =false;
				}
				exportRoot['dogCount'].text=dogCount;
			}
			
			if(dogCount == 0)
			{
				exportRoot['dogCount'].text= '0';
			}		
		}


function onStart()
{
		enableEvents =true;
		removeAllEvents();
		calSpeed();
		timeCount = 0;
		if((dogCount>0&&screen!=null)&&(accValue!=0))
		{
			exportRoot['Arrow'].visible = true;
			exportRoot['Arrow1'].visible = true;
			for(i=0;i<dogCount;i++)
			{
				exportRoot['mcDog'+i].gotoAndStop(5);
			}
			runBackground();
			interval = setInterval(stopAnim,2000);
		}
		else
		{
			for(i=0;i<dogCount;i++)
			{
				exportRoot['mcDog'+i].gotoAndStop(4);
			}
			interval = setInterval(stopAnim,1600);
		}
}

function stopAnim()
{
			enableEvents = false;
			exportRoot['startBtn'].visible =false;
			exportRoot['resetBtn'].visible = true;
			for(i=0;i<dogCount;i++)
			{
				exportRoot['mcDog'+i].gotoAndStop(3);
			}
			clearInterval(interval);
}


function onReset()
{
	addEvents();
	exportRoot['mcSnow'].onClick = handlePanelEvents
	exportRoot['mcGrass'].onClick = handlePanelEvents
	exportRoot['mcRoad'].onClick = handlePanelEvents
	exportRoot['startBtn'].visible =true;
	exportRoot['resetBtn'].visible = false;
	exportRoot['Arrow'].visible = false;
	exportRoot['Arrow1'].visible = false;
	exportRoot['grass_value']['velocity']['txt'].text = "0.00 m/s"
	exportRoot['grass_value']['acceleration']['txt'].text = "0.00 m/s²"

	if(screen==exportRoot['mcSnow_1'])
	{
		screen.x=1460;
	}
	else if(screen==exportRoot['mcGrass_1'])
	{
		screen.x=1460;
	}
	else if(screen==exportRoot['mcRoad_1'])
	{
		screen.x=1460;
	}
}

function runBackground()
		{			
			timeCount++;	
			disSpeed();
			Tween.get(screen, {override: true})
			.to(destination, duration);				
		}
		

function calSpeed()
		{
			totalMass    = massSled + (dogCount*massDog) + (boxCount*massBox);
			normalForce  = (massSled + (boxCount*massBox) )*9.81; 
			staticForce  = muS * normalForce; 
			kineticForce = muK * normalForce;		
			accOfSledDogs = (forceDog*dogCount - kineticForce )/totalMass;	
			accDog = accOfSledDogs *100000;			
			accValue = accDog/100000;	
			if( !((screen == exportRoot['mcSnow_1'] && dogCount > boxCount) || (screen == exportRoot['mcRoad_1'] && ( (dogCount > "2" &&  boxCount == "0" ) || (dogCount > "5" &&  boxCount == "1" ) || (dogCount > "8" &&  boxCount == "2" ))) || 
			   	(screen == exportRoot['mcGrass_1'] && ( (dogCount > "1" &&  boxCount == "0" ) || (dogCount > "2" &&  boxCount == "1" ) || (dogCount > "4" &&  boxCount == "2" ) || (dogCount > "5" &&  boxCount == "3" ) || (dogCount > "7" &&  boxCount == "4" )))) )
			{
				accValue = 0;
			}
			
			
		}
		
function disSpeed()
		{	
			t = (timeCount * 100)/1000;			
			recur = velRec(t-1);			
			velocity = accValue*t*timeScaleFactor+recur ;			
			velDog = velocity *100000;
			velocity = velDog/100000;
				if(accValue > 0)
				{
					exportRoot['grass_value']['acceleration']['txt'].text = accValue.toFixed(2)+" m/s²";
					exportRoot['grass_value']['velocity']['txt'].text = velocity.toFixed(2) + " m/s";
				}
				else
				{
					exportRoot['grass_value']['acceleration']['txt'].text = "0.00 m/s²";
					exportRoot['grass_value']['velocity']['txt'].text = "0.00 m/s";
				}						
		}
		
function velRec(num)
		{
			if(num>0)
			{
				num =  accValue*(num+0.25)*timeScaleFactor+ velRec(num-1);
			}
			else
			{
				return 0;
			}
			return num;
		}


function removeAllEvents()
{
	exportRoot['mcSnow'].onClick = null;
	exportRoot['mcGrass'].onClick = null;
	exportRoot['mcRoad'].onClick = null;
	
	exportRoot['boxInc'].onClick =null;
	exportRoot['boxDec'].onClick =null;
	
	exportRoot['dogInc'].onClick =null;
	exportRoot['dogDec'].onClick =null;
	
	exportRoot['startBtn'].onClick =null;
	
}