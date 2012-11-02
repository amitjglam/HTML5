/*Global Variables*/

var oCurrentBook; // To hold status of book : Close/Open

function initActivity()
{
	addButtonEvents();
	//alert("hello");
}

function addButtonEvents()
{
	for(var i=0; i<3;i++)	
   {
	   exportRoot["mcBookFrame"]['mcBook'+i].onClick= OnBookClick;	   
	   exportRoot["mcBookFrame"]['mcBook'+i].id=i;	   
   }	
	exportRoot['mcClose'].onClick=OnCloseClick;
	
	
}


function removeButtonEvents()
{
	for(var i=0; i<3;i++)	
   {
	   exportRoot["mcBookFrame"]['mcBook'+i].onClick= null;	   
	   
   }	
	
}


function OnCloseClick(e)
{
	oCurrentBook.gotoAndPlay('close');
	exportRoot['mcClose'].visible= false;
	addButtonEvents();
}


function OnBookClick(e)
{
	//alert(e.target.id)
	//exportRoot.onClick =null;
	removeButtonEvents()
	exportRoot["mcBookFrame"].setChildIndex(e.target, exportRoot["mcBookFrame"].getNumChildren() - 1);
	e.target.gotoAndPlay(1);
	exportRoot['mcClose'].visible = true;
	oCurrentBook = e.target;
	exportRoot.setChildIndex(exportRoot['mcClose'],exportRoot.getNumChildren() - 1);
}