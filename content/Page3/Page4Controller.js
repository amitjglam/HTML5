/*Global Variable*/

var Check=false;

function initActivity()
{
	exportRoot['mcFeedback'].visible = false
	exportRoot['mcSubmitBtn'].alpha = 1;
	addButtonEvents()

}


function addButtonEvents()
{
	exportRoot['mcRadio0'].onClick = handleButtonEvents;
	exportRoot['mcRadio1'].onClick = handleButtonEvents;
	exportRoot['mcSubmitBtn'].onClick = checkAnswer
}

function handleButtonEvents(e)
{
	exportRoot['mcRadio0'].gotoAndStop('unselected')
	exportRoot['mcRadio1'].gotoAndStop('unselected')
	e.target.gotoAndStop('selected')
	Check=true;
}


function checkAnswer(e)
{
	if(Check==true)
	{
	exportRoot['mcFeedback'].visible = true
	exportRoot['mcRadio0'].onClick = null;
	exportRoot['mcRadio1'].onClick = null;
	exportRoot['mcSubmitBtn'].alpha = .5;
	}
}