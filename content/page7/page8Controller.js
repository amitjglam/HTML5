/*Global Variables*/

//var objDrag = new Array();
//var arr = new Array(3,4,1,8,5,2,0) // Correct Answer Array

var arr = new Array(3,1,5,0,2,4) // Correct Answer Array

var aDragOgX = new Array(300,300,209.2,209.2,209.2,209.2)
var aDragOgY = new Array(130,188,246,304,360,420.4)

var aDropOgX = new Array(319,319,319,319,319,319)
var aDropOgY = new Array(115,173,230,289,345,405)

var count = 0;
var aStageShape = new Array()

var aDragLinkX = new Array(215,215,215,215,215,215,215,215,215)
var aDragLinkY = new Array(130,188,246,304,360,420.4)

var objDrop = new Array();
var oFeedbackText

var UserTry=0;
var Matched=true;
var EnableTry=false;
var ActivityCounter=0;
var aStatus = new Array();

function createFeedback(txt)
{
	oFeedbackText.text = txt
	exportRoot['mcFeedBack'].addChild(oFeedbackText)
	exportRoot['mcFeedBack'].visible = true;
	exportRoot.setChildIndex(exportRoot['mcFeedBack'],exportRoot.getNumChildren() - 1)
}


function initActivity()
{
	
	oFeedbackText = new createjs.Text("", "16px Whitney Semibold");
	oFeedbackText.lineHeight = 18;
	oFeedbackText.lineWidth = 240;
	oFeedbackText.x = 50
	oFeedbackText.y = 100
	exportRoot['mcFeedBack'].addChild(oFeedbackText)
	
	addEvents();
	AddButtonEvents();
	//exportRoot['mcFeedBack'].visible =false;

	for(var i=0;i<6;i++)
	{
		var s = new createjs.Shape()
		exportRoot.addChild(s)
		aStageShape.push(s) //For Drawing Line
	}
	
	EnableTryAgain(false);
	EnableSubmit(false);
}

function AddButtonEvents()
{
	
  	exportRoot['mcSubmit'].onClick=OnSubmitClick;
	exportRoot['mcTryAgain'].onClick=OnTryAgainClick;
	exportRoot['mcSolve'].onClick=OnSolveClick;
	
}

function addEvents()
{
	for(var i=0;i<6;i++)
	{
		exportRoot['mcDrag'+i].onPress = onStartDrag
		exportRoot['mcDrag'+i].id = i;
		exportRoot['mcDrag'+i].oX = exportRoot['mcDrag'+i].x
		exportRoot['mcDrag'+i].oY = exportRoot['mcDrag'+i].y
		exportRoot['mcDrop'+i].index = i
		objDrop.push(exportRoot['mcDrop'+i])
		
		var oStatus = new lib.mcStatus()
		oStatus.x = 35
		oStatus.visible = false
		exportRoot['mcDrag'+i].addChild(oStatus)
		aStatus.push(oStatus)
		
	}
}

function onStartDrag(e)
{
	//stage.swapChildrenAt(stage.getChildIndex(e.target),stage.getNumChildren()-1)
	 exportRoot.setChildIndex(e.target, exportRoot.getNumChildren() - 1); // To get object on top layer of exportRoot/Stage
	
	if(e.target.drop != null)
	{
		e.target.drop.bFilled = false
		e.target.drop = null
	}
	
	e.onMouseMove = function(ev)
	{
	  fnDragging(e,ev)
	}
	e.onMouseUp = function (ev)
	{
		var oDrop = ifHit(ev)
		if(oDrop != null && oDrop.bFilled != true)
		{
			//alert("matched")
			e.target.x = oDrop.x
			e.target.y = oDrop.y
			oDrop.bFilled = true
			e.target.drop = oDrop
			count++;
			createConnectingLine(e)
		}
		else
		{
		   // alert("not match, return to original place")
			e.target.x = aDragLinkX[e.target.id]		
			e.target.y = aDragLinkY[e.target.id]	
			createConnectingLine(e)	
			aStageShape[e.target.id].graphics.clear();
						
		}
		
		if(count!=0)
		{
			EnableSubmit(true);
		}
	}

}

function ifHit(ev)
{
	var oDrop = null;
	for(var i=0;i<objDrop.length;i++)
	{
		var lastPt = objDrop[i].globalToLocal(ev.stageX, ev.stageY);
		if(objDrop[i].hitTest(lastPt.x, lastPt.y))
		{
			oDrop = objDrop[i]
			break;
		}
	}	
	return oDrop;
}


function fnDragging(e,ev)
{
	var nID = e.target.id
	e.target.x = ev.stageX;
	e.target.y = ev.stageY;
	createConnectingLine(e)
	//console.log('dragging')
	update = true;
}


function createConnectingLine(e)
{
	var nID = e.target.id
	var currentShape = aStageShape[nID]
	var color = createjs.Graphics.getRGB(255,0, 0);
	aStageShape[nID].graphics.clear();
	currentShape.graphics.setStrokeStyle(2, 'round', 'round');
	currentShape.graphics.beginStroke(color);
	currentShape.graphics.moveTo(aDragLinkX[e.target.id]+22, aDragLinkY[e.target.id]);
	currentShape.graphics.lineTo(e.target.x, e.target.y);
}



function OnSubmitClick()
{
	UserTry++; // increase the user try	
	EnableSubmit(false)
	for(var i=0;i<6;i++)
	{
		aStatus[i].visible = true
		if(exportRoot['mcDrag'+i].drop != null)
		{				
			//console.log(exportRoot['mcDrag'+i].drop.index==arr[i])
			if(exportRoot['mcDrag'+i].drop.index==arr[i])
			{
				aStatus[i].gotoAndStop(0)
			}
			else
			{
				Matched=false
				
				aStatus[i].gotoAndStop(1)
			}
		}
		else
		{
			Matched=false
			aStatus[i].gotoAndStop(1)
		}
		exportRoot['mcDrag'+i].onPress = null
	}
	
	if(Matched)
	{
	  createFeedback("This is correct");
	}
	
	else
	{
	 
	  if(UserTry<2)
	  {
		  EnableTryAgain(true);
		  createFeedback("This is not correct! please try again");
	  }
	  else
	  {
		  EnableTryAgain(false);
		  createFeedback("This is not correct! click solve to see the answer");
	   }
	}
	
	//createFeedback("This is not correct")
	
}

function OnTryAgainClick()
{
	 EnableTryAgain(false);
	for(var i=0;i<6;i++)
	{
		aStageShape[i].graphics.clear();	
		aStatus[i].visible = false
		exportRoot['mcDrag'+i].x = exportRoot['mcDrag'+i].oX
		exportRoot['mcDrag'+i].y = exportRoot['mcDrag'+i].oY
		if(exportRoot['mcDrag'+i].drop != null)
		{
			exportRoot['mcDrag'+i].drop.bFilled = false
		}
		
		exportRoot['mcDrag'+i].onPress = onStartDrag
		
	}
}

function OnSolveClick()
{
	EnableSubmit(false)
	EnableTryAgain(false)
	for(var i=0;i<6;i++)
	{
		
		exportRoot['mcDrag'+i].x = exportRoot['mcDrop'+arr[i]].x
		exportRoot['mcDrag'+i].y = exportRoot['mcDrop'+arr[i]].y

		var nID = exportRoot['mcDrag'+i].id
		var currentShape = aStageShape[nID]
		var color = createjs.Graphics.getRGB(255,0, 0);
		aStageShape[nID].graphics.clear();
		currentShape.graphics.setStrokeStyle(2, 'round', 'round');
		currentShape.graphics.beginStroke(color);
		currentShape.graphics.moveTo(aDragLinkX[exportRoot['mcDrag'+i].id]+22, aDragLinkY[exportRoot['mcDrag'+i].id]);
		currentShape.graphics.lineTo(exportRoot['mcDrag'+i].x, exportRoot['mcDrag'+i].y);
		exportRoot.setChildIndex(exportRoot['mcDrag'+i], exportRoot.getNumChildren() - 1);
		exportRoot['mcDrag'+i].onPress = null
		//exportRoot['mcDrag'+i].onRelease = null
		aStatus[i].visible = false
	}
}

function ClearLines()
{
	for(var i=0;i<6;i++)
	{
		aStageShape[i].graphics.clear();				
	}
}

function EnableSubmit(MakeEnable)
{
	if(MakeEnable==true)
	{
		exportRoot["mcSubmit"].onClick=OnSubmitClick;
		exportRoot["mcSubmit"].alpha = 1
	}
	else
	{
		exportRoot["mcSubmit"].onClick=null;
		exportRoot["mcSubmit"].alpha = .5
	}
}

function EnableTryAgain(MakeEnable)
{
	if(MakeEnable==true)
	{
		exportRoot["mcTryAgain"].onClick=OnTryAgainClick;
		exportRoot["mcTryAgain"].alpha = 1
	}
	else
	{
		exportRoot["mcTryAgain"].onClick=null;
		exportRoot["mcTryAgain"].alpha = .5
	}
}



