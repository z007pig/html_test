$(document).ready(function(){
	var tempCanvas = document.getElementById("tempCanvas");
	var tempcontext = tempCanvas.getContext("2d");
	tempcontext.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
	var tempCanvascontext = tempCanvas.getContext("2d");
	var imageCanvas = document.getElementById("imageCanvas");
	var imageCanvascontext = imageCanvas.getContext("2d");
	tempcontext.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	var x = 0;
	var y = 0;
	var width = 425;
	var height = 291;
	var imageObj = new Image();
	imageObj.onload = function() {
		imageCanvascontext.drawImage(this, 0, 0);
		context.drawImage(imageCanvas,0,0);
	};
	imageObj.src =
	"images/tupain.jpg";
	var isclick=false;
	var startX=0;
	var startY=0;
	var endX=0;
	var endY=0;
	$("#myCanvas").mousedown(function(e){
		$(".info").html("x:"+e.offsetX+",y:"+e.offsetY);
		isclick=true;
		endX=startX=e.offsetX;
		endY=startY=e.offsetY;
	});
	$(".clearAll").click(function(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(imageCanvas,0,0);
	});
	$("#myCanvas").mousemove(function(e){
		if(isclick==true)
		{
			$(".info").html("x:"+e.offsetX+",y:"+e.offsetY);
			tempcontext.clearRect(0, 0, canvas.width, canvas.height);
			tempcontext.drawImage(imageCanvas, 0, 0);
			endX=e.offsetX;
			endY=e.offsetY;	
			tempcontext.beginPath();
			tempcontext.rect(startX, startY, endX-startX, endY-startY);
			tempcontext.lineWidth = 5;
			tempcontext.strokeStyle = 'black';
			tempcontext.stroke();
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(tempCanvas, 0, 0);			
		}
	});
	$("#myCanvas").mouseup(function(e){
		$(".info").html("x:"+e.offsetX+",y:"+e.offsetY);
		isclick=false;
	});
});
