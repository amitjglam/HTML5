
var Answer=""; // Variable to hold True/False
var Check=false;

function initActivity()
{
  addButtonEvents();
  exportRoot['mcFeedBack'].visible=false;
  exportRoot['mcSubmitBtn'].alpha = 1;
  Answer="";
  
}

function addButtonEvents()
{
	exportRoot['mcRadio0'].onClick = handleButtonEvents;
	exportRoot['mcRadio1'].onClick = handleButtonEvents;
	
	exportRoot['mcRadio0'].id= 0;  // True
	exportRoot['mcRadio1'].id=1; // False
	exportRoot['mcSubmitBtn'].onClick = checkAnswer
}

function handleButtonEvents(e)
{
	exportRoot['mcRadio0'].gotoAndStop('unselected');
	exportRoot['mcRadio1'].gotoAndStop('unselected');
	e.target.gotoAndStop('selected');
	if(e.target.id==0) // True Selected
	{
	Answer="True";
	}
	else // False Selected
	{
	   Answer="False";
	}
	
	Check=true;
}


function checkAnswer(e)
{
	if(Check==true)
	{
		exportRoot['mcFeedBack'].visible = true;
	
	if(Answer=="False")
	{
		exportRoot['mcFeedBack'].gotoAndStop('FrameCorrect');
	}
	else
	{
		exportRoot['mcFeedBack'].gotoAndStop('FrameIncorrect');
	}
	
	exportRoot['mcRadio0'].onClick = null;
	exportRoot['mcRadio1'].onClick = null;
	exportRoot['mcSubmitBtn'].alpha = .5;
	Answer="";
	}
	
}

