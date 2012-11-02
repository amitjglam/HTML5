// JavaScript Document

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

	for(var i=0;i<7;i++)
	{
		var s = new createjs.Shape()
		exportRoot.addChild(s)
		aStageShape.push(s) //For Drawing Line
	}
	
	EnableTryAgain(false);
	EnableSubmit(false);
}