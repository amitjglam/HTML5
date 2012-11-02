// JavaScript Document for Critical Thinking

/*-------------------------------------------1: Global Variables - Starts  --------------------------------------------*/
var PageNo = 0; // For Next/Back Purpose, holds Current Page Number
var TextBoard; // variable to hold Div where audio words will be displayed
var MyAudio; //To hold dynamic created Audio Element.

//Array to store path of Pages to be loaded in iFrame : 11 Pages 0 - 10
var ArrayPage=['content/page0/index.html','content/page1/index.html','content/page2/index.html','content/page3/index.html',
             'content/page4/index.html','content/page5/index.html','content/page6/index.html','content/page7/index.html',
			 'content/page8/index.html','content/page9/index.html','content/page10/index.html'];

//Array stores Audio Path : No Audio: 0,4,5,9   Audio for : 1,2,3,6,7,8,10 
var AudioPath=["","audio/page1.mp3","audio/page2.mp3","audio/page3.mp3","","","audio/page7.mp3","audio/page8.mp3","audio/page9.mp3","","audio/page11.mp3"];

//Array stores audio timing Total 11 Audios, 0 - 10
var AudioTime=[
[[]],
[[0.001,7.765],[8.171,12.930],[13.244,18.363],[19.306,24.020],[24.648,29.542],[29.812,37.355],[37.579,43.551],[44.179,48.085]],
[[0.001,4.462]],
[[0.001,4.999],[5.795,9.167]],
[[]],
[[]],
[[0.001,4.152],[4.464,13.968],[14.640,22.704],[23.448,28.800],[28.900,37.260]],
[[0.001,6.601],[7.175,11.111],[11.357,17.343],[17.917,26.404],[26.978,30.299],[30.500,34.416]],
[[0.001,4.500],[4.556,9.208],[9.250,14.878],[14.962,17.662],[18.562,23.616]],
[[]],
[[0.001,2.743],[3.292,9.712],[10.316,12.127],[12.731,21.126],[21.620,27.437],[28.041,35.174],[35.394,41.156],[41.430,45.436]]
];

//Array stores audio Words/Lines (Line treated as words)
var AudioWords=[
[[]],

[
["Developing and strengthening critical thinking skills is a primary area of focus at CSU Global"],
["Every class you take will incorporate critical thinking assignments,"],
["so it is important that you understand critical thinking and how to apply it."],
["So,  what exactly is the definition of critical thinking?"],
["Three leading experts and authors of well known publications :"],
["Robert Ennis, Richard Paul, and Michael Scriven all have different definitions of critical thinking-"],
["click on their books to retrieve a summary of each of their views on critical thinking."],
["When you are done, click the next button to continue."]
],

[
["Take a look at this 5 minute overview on Critical Thinking."]
],

[
["Answer the next three questions related to what was presented in the video."],
["Please note there is no audio with the questions."]
],

[[]],

[[]],

[
["Your instructors  at CSU Global will not tell you how to think,"],
["but they will expect you to apply the information learned in your class to your unique academic focus and or career situation."],
["On the screen you will find a list of best practices and not so best practices to applying critical thinking."],
["Click and drag the best practices underneath the Best Practices heading."],
["Move the not so best practices to the trash. When complete, click Submit."]
],


[
["It is important to recognize the key skills utilized when one applies critical thinking."],
["On the left, there are key critical thinking skills,"],
["and on the right are some questions that are asked in accordance with applying the skill."],
["Try to match the skill to how it is applied by dragging the letter to the space next to the correct application of the skill."],
["You will have two tries to complete this correctly."],
["Click Submit to submit your answers."]
],

[
["See If you can recognize the critical thinking skills that are being"],
["applied in the next two scenarios involving Jennifer and Nathan."],
["You will have two opportunities with each scenario to get the answer correct"],
["and then you will be provided with feedback"],
["Please note that there is no audio for this or the next scenario."]
],

[[]],

[
["How did you do with the scenarios?"],
["Can you think of some critical thinking best practices that were demonstrated by Jennifer?"],
["How about by Nathan?"],
["Remember, every class you take will incorporate critical thinking assignments, typically four to six of them."],
["Writing strong critical papers is a learned skill that improves with practice."],
["With an increased awareness to consider all angles, a commitment to keep an open mind,"],
["and an ability to employ key critical thinking skills and best practices,"],
["you be well on your way to critical thinking success!"]
]

];

/*-------------------------------------------1: Global Variables - Ends  --------------------------------------------*/

/*-------------------------------------------2:  Main Function (document Ready) Starts  ---------------------------------------------*/
$(document).ready(function(){
						   
PageNo=0;
var ValueNav="";
//var MyAudio; // To hold dynamic created Audio Element.

$("iframe#IDisplay").attr("src",ArrayPage[PageNo]);
LoadAudio();  // Function to load audio and Play

/* Handle Back/Next - Starts*/
TextBoard=document.getElementById("DivTextBoard");
TextBoard.innerHTML="";

//alert(AudioTime[0][3][0]);
/*------  Navigation click - Starts -------*/
	  $("div.Navigation").click(function(){		  
		  
			   var ValueNav=$(this).attr("value"); //Retrieve the attribute value of Div		   
			   
			   switch (ValueNav)    //Switch Case for Back/Next Controls according to ValueNav
			   {		  
				   case 'Play':	
							  {
									// Change Play - To-  Pause Image.
									$("div#DivPlay").css("background-image","url(images/Pause.png)");
									$("div#DivPlay").attr("Value","Pause");            			 
									MyAudio.play(); // Play the Audio						
									break;
							  }
					  
				   case 'Pause':
							  {	
									// Change Pause - To -  Play Image.
								   $("div#DivPlay").css("background-image","url(images/Play.png)");
								   $("div#DivPlay").attr("Value","Play"); 
								   MyAudio.pause(); // Set Audio to Pause
							       break;	
							  }
					  
				 
				  
				   case 'Back':
							 {											     
									NavNextBack(ValueNav);				  
									if(PageNo<=0)
									{
									   /*setting opacity & filter value of Back to Fade*/ 
									  $("div#DivBack").css("opacity","0.4");
									  $("div#DivBack").css("filter","alpha(opacity=40)");
									}
									else
									{		
										 // For removing TextBoard on Empty Audio
										 if((PageNo==0) || (PageNo==4) || (PageNo==5))
										 {
										   HideTextBoard();
										 }
										 else
										 {
											ShowTextBoard();
										 }
												  
									  /*setting opacity & filter value of Back to normal*/
									  $("div#DivBack").css("opacity","1.0");
									  $("div#DivBack").css("filter","alpha(opacity=100)");
									  /*setting opacity & filter value of Next to normal*/
									  $("div#DivNext").css("opacity","1.0");
									  $("div#DivNext").css("filter","alpha(opacity=100)");
									}					  
								  break;
							 }
					  
				   case 'Next':
							 {								  
								   NavNextBack(ValueNav);
								   if(PageNo>=10)
									{
									   /*setting opacity & filter value of Next to Fade*/
									  $("div#DivNext").css("opacity","0.4");
									  $("div#DivNext").css("filter","alpha(opacity=40)");
									}
									else	
									  {								
										  // For removing TextBoard on Empty Audio
										 if((PageNo==0) || (PageNo==4) || (PageNo==5))
										 {
										   HideTextBoard();
										 }
										 else
										 {
											ShowTextBoard();  
										 }
										  
										/*setting opacity & filter value of Next to normal*/
										$("div#DivNext").css("opacity","1.0");
										$("div#DivNext").css("filter","alpha(opacity=100)");
										/*setting opacity & filter value of Back to normal*/
										$("div#DivBack").css("opacity","1.0");
										$("div#DivBack").css("filter","alpha(opacity=100)");
									  }			
									break;
							 }
				   default:			 			       
			   }		
		  
	  });
/*------  Navigation click - Ends -------*/	  
	
});
/*------------------------------------------------2:  Main Function Ends  ---------------------------------------------*/

/*------------------------------------------------3: User Functions  --------------------------------------------------*/
// 1: To be used in Next/Back Functionality
// PageNo is declared Globally
function NavNextBack(ValueNav)
{  
	 if(ValueNav == 'Next')
	   {		
		 if(PageNo<10)
		  {				 
			   PageNo++;			   
		  }	   
		}
	 else
		{		
		   if(PageNo>0)
			   {
				   PageNo--;				   
			   }			
		}	
	  //MyAudio.stop(); // Stop Audio of Current Page
	 $("iframe#IDisplay").attr("src",ArrayPage[PageNo]); // Set the src of iFrame from Array ArrayPage[]
	 ResetAudioControls(); // Reset audio Controls	
	 TextBoard.innerHTML="";  // Clear TextBoard
	 MyAudio.pause(); // Stop Audio of Current Page	 
     LoadAudio();
	 
}

//2: Function to load audio according to page.
function LoadAudio()
{	 
      MyAudio=new Audio(AudioPath[PageNo]); // Creating object of audio element.
      MyAudio.addEventListener("timeupdate", onAudioUpdate); //Adding EventListner to MyAudio Object	   
	//oAudio.addEventListener("load",playCurrentAudio);	
	//playAudioFile();	
}

//3: Function will work as Audio Plays.
function onAudioUpdate(e)
   {		   
		 var current = e.target.currentTime;
		 var total = e.target.duration;
		 var TimeCurrent =  parseFloat(current).toFixed(3); // Current Time
		 var TimeTotal =  parseFloat(total).toFixed(3); // Audio Duration			 
		 //document.getElementById('tracktime').innerHTML = Math.floor(TimeCurrent) + ' / ' + Math.floor(TimeTotal);
		 //Outer Loop will run Total no. of Time Interval in each Audio.: Here AudioTime[PageNo].length
		 for(var i=0;i<=AudioTime[PageNo].length;i++) 
		 {			
			if( (TimeCurrent>=AudioTime[PageNo][i][0]) && (TimeCurrent<=AudioTime[PageNo][i][1]) )
			  {					 
				 TextBoard.innerHTML=AudioWords[PageNo][i]; // Adding word to TextBoard.
			  }		
		 }				 
   }
   
//4: Function will display the TextBoard When there is audio available.
function ShowTextBoard()
{
   $("#DivTextBoard").css("opacity","1.0");
   $("#DivTextBoard").css("filter","alpha(opacity=100)");
   //$("DivTextBoard").css("background-image","url(images/TranscriptPatch.png)");  
   
}   

//5: Function will display the TextBoard When there is audio available.
function HideTextBoard()
{
  $("#DivTextBoard").css("opacity","0.0");
  $("#DivTextBoard").css("filter","alpha(opacity=0)");
  //$("DivTextBoard").css("background-image",""); 
}

//6: Function to Reset Play/Pause/Audio/Mute controls on new Page Load.
function ResetAudioControls()
{
		//Play Button	
	 $("div#DivPlay").css("background-image","url(images/Play.png)");
	 $("div#DivPlay").attr("Value","Play");
	    //Audio Button
	 $("div#DivAudio").css("background-image","url(images/AudioPlay.png)");
	 $("div#DivAudio").attr("Value","AudioPlay");	
}