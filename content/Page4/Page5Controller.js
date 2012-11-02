
var sAnswer =  "0,0,1,1,1"
var aUserAnswer = [0,0,0,0,0]
var nTry = 2
var userTry = 0
var Check=false;

function initActivity()
{
	exportRoot['mcFeedback'].visible = false
	addButtonEvents()
	exportRoot['mcTryAgain'].visible = false
	exportRoot['mcSubmitBtn'].alpha = 1;
}


function addButtonEvents()
{
	for(var i=0;i<5;i++)
	{
		exportRoot['mcOption'+i].onClick = handleButtonEvents;
		exportRoot['mcOption'+i].selected = false
		exportRoot['mcOption'+i].id = i
	}
	
	exportRoot['mcSubmitBtn'].onClick = checkAnswer
	exportRoot['mcTryAgain'].onClick = onTryAgain
}

function handleButtonEvents(e)
{
	if(e.target.selected)
	{
		e.target.gotoAndStop(0)
		e.target.selected = false
		aUserAnswer[e.target.id] = 0
	}
	else
	{
		e.target.gotoAndStop(1)
		e.target.selected = true
		aUserAnswer[e.target.id] = 1
	}
	
	Check=true;
}

function checkAnswer()
{	
	if(Check==true)
	{
			userTry++;
		 exportRoot['mcFeedback'].visible = true
		
	
		if(aUserAnswer.toString() == sAnswer)
		{
			exportRoot['mcFeedback'].gotoAndStop(0);
			disableAll()
			
		}
		else
		{
			if(userTry == 2)
			{
				exportRoot['mcFeedback'].gotoAndStop(2)
				disableAll()
			}
			else if(userTry == 1)
			{
				exportRoot['mcFeedback'].gotoAndStop(1)
				exportRoot['mcTryAgain'].visible = true
				exportRoot['mcSubmitBtn'].visible = false
			}
		}
	}
	else
	{
		
	}
	
	
}

function onTryAgain()
{
	exportRoot['mcTryAgain'].visible = false
	exportRoot['mcSubmitBtn'].visible = true
	exportRoot['mcFeedback'].visible = false
	
	for(var i=0;i<5;i++)
	{
		exportRoot['mcOption'+i].gotoAndStop(0);
	}
	aUserAnswer = [0,0,0,0,0]
	
	Check=false;
}


function disableAll()
{
	for(var i=0;i<5;i++)
	{
		exportRoot['mcOption'+i].onClick = null;
	}
	exportRoot['mcSubmitBtn'].onClick = null
	exportRoot['mcSubmitBtn'].alpha = 0.5;
}
	
	
	
