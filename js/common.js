$(function () {
	init();
});

function init () {
	$(".indexNav").load("sideBar.html .sideBarLoad",function(){
		seajs.use("sideBar",function(sideJs) {
			sideJs.inpEvt($(".search").find("input"),$(".icon-clear"));
			sideJs.clrEvt($(".search").find("input"),$(".icon-clear"));
		})
		$(".indexContent").load("welcome.html .welcomeLoad",function(){
			$(".indexFooter").load("footer.html .footerLoad",function() {
				$("a").click(aClick);
			});
		});
	});
}
//阻止a链接跳转并且在right加载链接里的页面
//并且判断如果是点击的为注册、登陆页面，则不跳转，改为打开新页面
//未完成,需要先清除之前页面的html,css和js,并且加载新页面的css，html和js
function aClick(event) {
	if (event.preventDefault) {
		event.preventDefault();
	} else{
		window.event.returnValue=false;
	}
	if ($(this).parent().hasClass("login")) {
		window.open($(this).attr("href"),'','height=700px,width=480px,top=0,left='+($(window).width()-480)/2+'px,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
	}else{
		$(".indexContent").load($(this).attr("href"));
	}
}
