$(document).ready(function(){
	setInterval(killad,1000);
	$(".navigation_main .list_item_hassub:odd a span").css("color","#ff0000");
	$(".navigation_main .list_item_hassub:first a span").css("color","#ff0000");
	$(".search_ipt").val("aaaaaaaa");
	$(".mod_figure_h_175:eq(0) li:eq(0) img").attr("src",$(".mod_figure_h_175:eq(0) li:eq(1) img").attr("src"));
	$(".mod_figure_h_175:eq(0) li:eq(0) span em").html("hello");
	$(".mod_figure_h_175:eq(0) li:eq(0) span em").append($(".mod_figure_h_175:eq(0) li:eq(1) span em").text());
	//css("border","1px solid #ff0000");
});
function killad()
{
	$("span[id*='_AdSame']").css("display","none");
}