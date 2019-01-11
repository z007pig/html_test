var timedd = false;
// var aaa= eval(document.getElementById('jud')).value;
// var myAuto = document.getElementById('myaudio');
$(document).ready(function(){
	var myAuto = document.getElementById('myaudio');
	$("#fgd").click(function(){
			// $("#wenzi").trigger(oncert());
			// myAuto.play(); //开始播放
			 // newRemind("消息提示音测试", "有新警报", "消息提示音测试", 1000)
			 if(timedd){}
			else{timedd = setInterval("huan()",1000)}
	});
	$("#ggd").click(function(){
		// myAuto.pause();  //结束播放
			$("#newpic").html("正常").css("color","#555");
			 document.title = "消息提示音测试";
			clearInterval(timedd);
			timedd=false;
			$("#wenzi").css("color","#ff0000");
	});
	
	$("#onec").one("click", oncert);
	
});
//头部title轮播。 
var tiee = true;
function huan(){ 
	if(tiee){
		 document.title = "消息提示音测试";
		 $("#newpic").html("&nbsp;");
		 $("#cgcolor").css("background-color","#fff");
		 return tiee=false;
	}
	else{
		document.title = "有新警报!!!";
		$("#newpic").html("警报！警报！").css("color","#ff0000");
		 $("#cgcolor").css("background-color","#ff0000");
		return tiee=true;
	}

}
function oncert(){
	$("#wenzi").css("color","#555");
}
		
	