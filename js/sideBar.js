define(function (require,exports,modules) {
	//	搜索框的事件
	//		搜索框输入出现删除图标
	exports.inpEvt=function(inpJqObj,clrJqObj) {
		inpJqObj.keyup(function () {
			if ($(this).val()!="") {
				clrJqObj.css("visibility","visible");
			}else{
				clrJqObj.css("visibility","hidden");
			}
		});
	}
	//		点击删除图标清空文本框并且隐藏图标
	exports.clrEvt=function(inpJqObj,clrJqObj) {
		clrJqObj.click(function () {
			inpJqObj.val("");
			clrJqObj.css("visibility","hidden");
		});
	}
});