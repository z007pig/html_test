
var toolManager = new ToolManager();
$(document).ready(function(){
	width=$("#myCanvas").width();
	height=$("#myCanvas").height();
	tempCanvas = document.getElementById("tempCanvas");
	tempCanvascontext = tempCanvas.getContext("2d");
	imageCanvas = document.getElementById("imageCanvas");
	imageCanvascontext = imageCanvas.getContext("2d");
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	$(".chooseFile input[name='submit']").click(function(){
			$(this).parent().ajaxSubmit({
            type: "POST",//提交类型  
            url: "upimg.php",//请求地址  
            success: function (data) {//请求成功后的函数  
				var imageObj = new Image();
				imageObj.src =data;
				imageObj.onload = function() {
					model.imageArray.push(this);
					toolManager.draw();
				};
				
            },  
            error: function (data) { alert(data.msg); },//请求失败的函数  
            async: true  
		});	
	});
	
	$(".drawrect").click(function(){
		toolManager.tool = new RectTool();		
	});
	var isclick=false;
	
	$("#myCanvas").mousedown(function(e){
		isclick=true;
		toolManager.mousedown(e);
	});
	$("#myCanvas").mousemove(function(e){
		if(isclick==true)
		{
			toolManager.mousemove(e);
		}
	});
	$("#myCanvas").mouseup(function(e){
		isclick=false;
		toolManager.mouseup(e);	
	});
})

function Rect()
{
	this.startX=0;
	this.startY=0;
	this.endX=0;
	this.endY=0;
	this.lineWidth=2;
	this.strokeStyle="red";
	this.isSelected=false;
	this.isValid=true;
	this.drawRect=function(tcontext){
		//context.drawImage(tempCanvas,0,0,width,height);
		tcontext.beginPath();
		tcontext.rect(this.startX, this.startY, this.endX-this.startX, this.endY-this.startY);
		tcontext.lineWidth =this.lineWidth;
		tcontext.strokeStyle = this.strokeStyle;
		tcontext.stroke();
	}
	this.drawRectController=function(tcontext)
	{
		tcontext.beginPath();
		tcontext.rect(this.startX-2, this.startY-2, 4,4);
		tcontext.rect(this.endX-2, this.endY-2, 4,4);
		tcontext.lineWidth =this.lineWidth;
		tcontext.strokeStyle = this.strokeStyle;
		tcontext.stroke();
	}
	this.selected=function(e)
	{
		var x=e.offsetX;
		var y=e.offsetY;
		if((this.startX-x)*(this.endX-x)<0 && (this.startY-y)*(this.endY-y)<0)
		{
			this.isSelected=true;
			for(pos in model.rectArray)
			{
				var rect = model.rectArray[pos];
				if(rect!=this)
				{
					rect.isSelected=false;
				}
			}
		}
		
	}
}
function Model(){
	this.rectArray=[];
	this.imageArray=[];
}
var model = new Model();
function RectTool()
{
	this.rect=null;
	this.mousedown = function(e){
		this.rect = new Rect();
		model.rectArray.push(this.rect);
		this.rect.endX=this.rect.startX=e.offsetX;
		this.rect.endY=this.rect.startY=e.offsetY;
	}
	this.mousemove = function(e){
		this.rect.endX=e.offsetX;
		this.rect.endY=e.offsetY;
		
		tempCanvascontext.clearRect(0, 0, canvas.width, canvas.height);
		tempCanvascontext.drawImage(imageCanvas,0,0,width,height);
		this.rect.drawRect(tempCanvascontext);
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(tempCanvas,0,0,width,height);
	}
	this.mouseup = function(e){
		this.rect.endX=e.offsetX;
		this.rect.endY=e.offsetY;
		toolManager.draw();
		toolManager.tool=new SelectTool();
	}
}
function SelectTool()
{
	this.mousedown = function(e){
		for(pos in model.rectArray)
		{
			var rect = model.rectArray[pos];
			rect.selected(e);
			if(rect.isSelected==true)
			{
				rect.isValid=false;
				toolManager.draw();
				rect.drawRect(tempCanvascontext);
				rect.drawRectController(tempCanvascontext);
				context.drawImage(tempCanvas,0,0,width,height);
				break;
				
			}
		}
	}
	this.mousemove = function(e){
		
	}
	this.mouseup = function(e){
		
	}
}
function MoveTool()
{
	this.mousedown = function(e){
		
	}
	this.mousemove = function(e){
		
	}
	this.mouseup = function(e){
		
	}
}

function ToolManager()
{
	this.tool=new SelectTool();
	this.mousedown = function(e){
		this.tool.mousedown(e);
	}
	this.mousemove = function(e,tcontext){
		this.tool.mousemove(e,tcontext);
	}
	this.mouseup = function(e){
		this.tool.mouseup(e);
	}
	this.draw=function(){
		imageCanvascontext.clearRect(0, 0, canvas.width, canvas.height);
		for(pos in model.imageArray)
		{
			var image=model.imageArray[pos];
			imageCanvascontext.drawImage(image, 0, 0,image.width,image.height);
		}
		//tempCanvascontext.drawImage(imageCanvas,0,0,width,height);
		for(pos in model.rectArray)
		{
			var rect=model.rectArray[pos];
			if(rect.isValid==true)
			{
				imageCanvascontext.beginPath();
				imageCanvascontext.rect(rect.startX, rect.startY, rect.endX-rect.startX, rect.endY-rect.startY);
				imageCanvascontext.lineWidth =rect.lineWidth;
				imageCanvascontext.strokeStyle = rect.strokeStyle;
				imageCanvascontext.stroke();
			}
		}
		context.drawImage(imageCanvas,0,0,width,height);
	};
}
/*
function MoveTopLeftTool()
{
	
}
function MoveTopLeftTool()
{
	
}
*/