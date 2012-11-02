/*--------  Global Variables  ---------*/

var RightAnswer=[1,0,0,1];
var ArrayUserAns=[0,0,0,0];
var UserTry=0;
var clicked =false;
function initActivity()
{	
	exportRoot['mcFeedBack'].visible =false;
	AddButtonEvents();
	//alert("Hello");
}

function AddButtonEvents()
{
   for(var i=0; i<4;i++)	
   {
	   exportRoot['mcOption'+i].onClick= OnCheckBoxClick;
	   exportRoot['mcOption'+i].selected=false;
	   exportRoot['mcOption'+i].id=i;	   
   }
	
	exportRoot['mcSubmitBtn'].onClick=OnSubmitClick;
	exportRoot['mcTryAgainBtn'].onClick=OnTryAgainClick;
	exportRoot['mcSolveBtn'].onClick=OnSolveClick;
		
}

function OnCheckBoxClick(e)
{
	//alert("hello");
   if(e.target.selected)
	{
		e.target.gotoAndStop(0)
		e.target.selected = false
		ArrayUserAns[e.target.id] = 0
		clicked =false
	}
	else
	{
		clicked =true
		e.target.gotoAndStop(1)
		e.target.selected = true
		ArrayUserAns[e.target.id] = 1
	}	
}

function OnSubmitClick()
{
	if(clicked==true)
	{
		UserTry++;
	//alert(ArrayUserAns.toString())	;
	//alert(RightAnswer.toString())	;
	if(ArrayUserAns.toString() == RightAnswer.toString())
	{
		exportRoot['mcFeedBack'].visible=true;		
		DisableAll();
		
	}
	else
	{
		if(UserTry == 2)
		{			
			DisableAll();
			exportRoot['mcSubmitBtn'].alpha=0.5;
	        exportRoot['mcTryAgainBtn'].alpha=0.5;
		}
		else if(UserTry == 1)
		{
			OnTryAgainClick()		
			clicked =false
		}
	}
	
	}
}

function OnTryAgainClick()
{
	for(var i=0;i<4;i++)
	{
		exportRoot['mcOption'+i].selected=false;  //Set All CheckBox to Uncheck State
		exportRoot['mcOption'+i].gotoAndStop(0);
		ArrayUserAns[i]=0; // Reset UserAnswerArray to Initial State
	}	
}

function OnSolveClick()
{
   for(var i=0;i<4;i++)
	{
		exportRoot['mcOption'+i].gotoAndStop(RightAnswer[i]);
		
	}		
  
}

function DisableAll()
{
	for(var i=0;i<4;i++)
	{
		exportRoot['mcOption'+i].onClick = null;
	}
	exportRoot['mcSubmitBtn'].onClick = null;
	exportRoot['mcTryAgainBtn'].onClick = null;
	//exportRoot['mcSolveBtn'].onClick = null;
	clicked =false;
}

