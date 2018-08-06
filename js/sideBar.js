$(function () {
	inpEvt($(".search").find("input"),$(".icon-clear"));
	clrEvt($(".search").find("input"),$(".icon-clear"));
});

//	搜索框的事件
//		搜索框输入出现删除图标
function inpEvt (inpJqObj,clrJqObj) {
	inpJqObj.keyup(function () {
		if ($(this).val()!="") {
			clrJqObj.css("visibility","visible");
		}else{
			clrJqObj.css("visibility","hidden");
		}
	});
}
//		点击删除图标清空文本框并且隐藏图标
function clrEvt (inpJqObj,clrJqObj) {
	clrJqObj.click(function () {
		inpJqObj.val("");
		clrJqObj.css("visibility","hidden");
	});
}
//阻止a链接跳转并且在right加载链接里的页面
//未完成,需要先清除之前页面的html,css和js,并且加载新页面的css，html和js
$("a").click(function (event) {
	if (event.preventDefault) {
		event.preventDefault();
	} else{
		window.event.returnValue=false;
	}
	$(".indexContent").load($(this).attr("href"));
})
//				let sideBarCss=document.createElement("link");
//				sideBarCss.rel="stylesheet";
//				sideBarCss.type="text/css";
//				sideBarCss.href="css/sideBar.css";
//				$("head").append(sideBarCss);
//				let sideBarJs=document.createElement("script");
//				sideBarJs.type="text/javascript";
//				sideBarJs.src="js/sideBar.js";
//				$("html").append(sideBarJs);