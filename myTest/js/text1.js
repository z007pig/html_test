var starx;
var stary;
var overx;
var overy;
var starX;
var starY;
var overX;
var overY;
var zhu_width;
var zhu_height;
var win_height;
var win_width;
var n=0;
var texta="<div></div>";
var ggg=new Object();
ggg.val=1;
var ddd;
$(document).ready(function(){

	function setr(obj){
			
		obj.val=2;
		alert(obj.val);
		
	};
	setr(ggg);
	alert(ggg.val);

	
	win_height= window.innerHeight;  //页面高度
	win_width= window.innerWidth;   //页面宽度
	$(".box1").mousedown(function(e){
		starx = e.originalEvent.x;  //起始点 x轴值
		stary = e.originalEvent.y;  //起始点 y轴值
		$(".box1").mousemove(function(e){
		overx = e.originalEvent.x;  //终点 x轴值
		overy = e.originalEvent.y;  //终点 y轴值
		zhu_width = Math.abs(overx-starx);  //取绝对值
		zhu_height = Math.abs(overy-stary); //取绝对值

		//judge(starx,stary,overx,overy,starX,starY,overX,overY); 这样定义为何不行？？？
		judge();
		$(".zhu").width(zhu_width).height(zhu_height).css({"top":starY,"left":starX,});
		$(".top").height(starY);
		$(".left").width(starX).height(zhu_height).css("top",starY);
		$(".bottom").height(win_height-overY);
		$(".right").width(win_width-overX).height(zhu_height).css("top",starY);
		$(".box1 div").show();
		$(".zhu").show();
		});
	});
	$(".box1").mouseup(function(e){
		overx = e.originalEvent.x;  //终点 x轴值
		overy = e.originalEvent.y;  //终点 y轴值
		zhu_width = Math.abs(overx-starx);  //取绝对值
		zhu_height = Math.abs(overy-stary); //取绝对值

		//judge(starx,stary,overx,overy,starX,starY,overX,overY); 这样定义为何不行？？？
		judge();
		$(".zhu").width(zhu_width).height(zhu_height).css({"top":starY,"left":starX,});
		$(".top").height(starY);
		$(".left").width(starX).height(zhu_height).css("top",starY);
		$(".bottom").height(win_height-overY);
		$(".right").width(win_width-overX).height(zhu_height).css("top",starY);
		$(".box1 div").show();
		$(".zhu").show();
		return false;
	});
	//点击阴影还原
	$(".box1 div").click(function(){
		$(".box1 div").hide(); //4个阴影块隐藏
		$(".zhu").hide();  //截取框隐藏
		$(".zhu").children().remove();//子截取框删除
		n=0; //n还原
	});
	
	//多次截取
	$(".zhu").mousedown(function(e){
		starx = e.offsetX;
		stary = e.offsetY;
	});
	$(".zhu").mouseup(function(e){
		overx = e.offsetX;
		overy = e.offsetY;
		zhu_width = Math.abs(overx-starx);  //取绝对值
		zhu_height = Math.abs(overy-stary);  //取绝对值
		judge();
		$(".zhu").append(texta);
		$(".zhu").find("div").eq(n).width(zhu_width).height(zhu_height).css({"top":starY,"left":starX,});//"border":"1px solid #ff0000","position":"absolute"
		n++;
	}); 
	
	//子集内部截取（有问题）
	$(".zhu").delegate("div","mousedown",function(e){
		starx = e.offsetX;
		stary = e.offsetY;
		e.stopPropagation();
	});
	$(".zhu").delegate("div","mouseup",function(e){
		overx = e.offsetX;
		overy = e.offsetY;
		zhu_width = Math.abs(overx-starx);  //取绝对值
		zhu_height = Math.abs(overy-stary);  //取绝对值
		judge();
		$(this).append(texta);
		$(this).find("div").width(zhu_width).height(zhu_height).css({"top":starY,"left":starX,});
		e.stopPropagation();
	});
});
// function judge(sx,sy,ox,oy,sX,sY,oX,oY){
	// //从上到下，从下到上，从左到右，从右到左。判断整合。
	// if(ox>sx){sX=sx; oX=ox; }
	// else{sX=ox;oX=sx;}
	// if(oy>sy){sY=sy; oY=oy; }
	// else{sY=oy; oY=sy;}
	// return sX,sY,oX,oY;
	// //通过以上转换，X轴起点在上，终点在下。Y轴起点在上，终点在下。
	// //将所有方式转化成：X轴从左到右，Y轴从左到右。
// }
function judge(){
	//从上到下，从下到上，从左到右，从右到左。判断整合。
	if(overx>starx){starX=starx; overX=overx; }
	else{starX=overx;overX=starx;}
	if(overy>stary){starY=stary; overY=overy; }
	else{starY=overy; overY=stary;}
	// return starX,starY,overX,overY;
	//通过以上转换，X轴起点在上，终点在下。Y轴起点在上，终点在下。
	//将所有方式转化成：X轴从左到右，Y轴从左到右。
}