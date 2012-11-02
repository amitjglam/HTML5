

var arr = new Array([0,1,2,3,4,5],[1,0,2,3,4,5],[2,1,0,3,4,5],[3,1,2,0,4,5],[6,7,8,9,10,11],[7,8,6,9,10,11],[8,7,8,6,10,11])
var UserTry=0;

var objDrop = new Array();
function initActivity()
{
	exportRoot['mcFeedBack'].visible = false
	 addEvents()
	exportRoot["mcSubmit"].alpha=1.0;
	exportRoot["mcTryAgain"].alpha=0.5;	
	
}


function addEvents()
{
	for(var i=0;i<7;i++)
	{
		exportRoot['mcDrag'+i].onPress = onStartDrag
		exportRoot['mcDrag'+i].id = i;
		exportRoot['mcDrag'+i].oX = exportRoot['mcDrag'+i].x
		exportRoot['mcDrag'+i].oY = exportRoot['mcDrag'+i].y
		var oStatus = new lib.mcStatus()
		exportRoot['mcDrag'+i].addChild(oStatus)
		exportRoot['mcDrag'+i].status = oStatus
		oStatus.visible = false
		/*
		var oStatus = new lib.mcStatus()
		oStatus.x = 35
		oStatus.visible = false
		exportRoot['mcDrag'+i].addChild(oStatus)
		aStatus.push(oStatus)
		*/
	}
	
	for(var i=0;i<12;i++)
	{
		exportRoot['mcDrop'+i].index = i
		objDrop.push(exportRoot['mcDrop'+i])
	}
	
	EnableTryAgain(false);
	//EnableSubmit(false);
	
	exportRoot["mcSolve"].onClick=OnSolveClick;
	
	
	
}


function OnSubmitClick()
{
	UserTry++;
	var bCorrect = true
		for(var i=0;i<7;i++)
	  {
		   exportRoot['mcDrag'+i].status.visible = true
		  // console.log(ifCorrect(exportRoot['mcDrag'+i].drop.index,i)+" :: "+i)
		  if(ifCorrect(exportRoot['mcDrag'+i].drop.index,i))
		  {
			 
			  exportRoot['mcDrag'+i].status.gotoAndStop(2)
			  
		  }
		  else
		  {
			   exportRoot['mcDrag'+i].status.gotoAndStop(1)
			   bCorrect = false
		  }
		  
		  exportRoot['mcDrag'+i].onPress = null;
	  }
	 
	 if(bCorrect)
	 {
		 exportRoot.setChildIndex( exportRoot['mcFeedBack'],exportRoot.getNumChildren()-1)
		 exportRoot['mcFeedBack'].visible = true
	 }
	 
	  	
	
	if(UserTry>=2)
	{	
		exportRoot["mcSubmit"].alpha=0.5;
		exportRoot["mcTryAgain"].alpha=0.5;
		EnableSubmit(false);
	    EnableTryAgain(false);
	}
	else
	{
		 EnableSubmit(false);
	  EnableTryAgain(true);
	}

}





function ifCorrect(nCurrentDrop,nID)
{
	var bExist = false
	for(var i=0;i<arr[nID].length;i++)
	{
		
		if(nCurrentDrop == arr[nID][i])
		{
			bExist = true
			
			break;
		}
		////console.log(nCurrentDrop+" :::::::: "+nID+" ::::::::::::: "+arr[nID])
		//break;
	}
	
	return bExist;
}

function OnSolveClick()
{	
	//alert("hello");
	for(var i=0;i<7;i++)
		{
			exportRoot.setChildIndex(exportRoot['mcDrag'+i],exportRoot.getNumChildren()-1)
			exportRoot['mcDrag'+i].x = exportRoot['mcDrop'+arr[i][0]].x
			exportRoot['mcDrag'+i].y = exportRoot['mcDrop'+arr[i][0]].y
			
			exportRoot['mcDrag'+i].onPress = null;
			exportRoot['mcDrag'+i].status.visible = false
		}
		
		  EnableTryAgain(false);
		  EnableSubmit(false);
		
}


function OnTryAgainClick()
{
	if(UserTry==1)
	{
		for(var i=0;i<7;i++)
		{
			exportRoot['mcDrag'+i].x = exportRoot['mcDrag'+i].oX
			exportRoot['mcDrag'+i].y = exportRoot['mcDrag'+i].oY
			exportRoot['mcDrag'+i].drop.bFilled = false
			exportRoot['mcDrag'+i].drop = null
			exportRoot['mcDrag'+i].onPress = onStartDrag;
			exportRoot['mcDrag'+i].status.visible = false
		}
		EnableTryAgain(false);
		EnableSubmit(true);
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
	
	EnableSubmit(true);
}


function fnDragging(e,ev)
{
	var nID = e.target.id
	e.target.x = ev.stageX;
	e.target.y = ev.stageY;
	//createConnectingLine(e)
	//console.log('dragging')
	update = true;
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
		var count = 0
		if(oDrop != null && oDrop.bFilled != true)
		{
			//alert("matched")
			e.target.x = oDrop.x
			e.target.y = oDrop.y
			oDrop.bFilled = true
			e.target.drop = oDrop
			count++;
		}
		else
		{
		   // alert("not match, return to original place")
			e.target.x = e.target.oX		
			e.target.y = e.target.oY
		
						
		}
		
		if(count!=0)
		{
			EnableSubmit(true);
		}
	}

}


