var newRemindFlag = 1; //启动闪烁 
/* 
 pageTitle:原页面的标题 
 showRemind:闪烁时显示的东东：如【新提醒】 
 hideRemind:闪烁时隐藏的东东：如【　　　】 
 time:闪烁间隔的时间 
 */ 
function newRemind(pageTitle, showRemind, hideRemind, time) { 
    if (newRemindFlag == 1) { 
        document.title = showRemind ; 
        newRemindFlag = 2; 
    } else { 
        document.title = hideRemind ; 
        newRemindFlag = 1; 
    } 
    setTimeout("newRemind('" + pageTitle + "','" + showRemind + "','" + hideRemind + "'," + time + ")", time); 
}
function  qqq(){
				if(sss=1){ document.title = "消息提示音测试";sss=2}
				else{document.title = "有新警报";sss=1}
			};	