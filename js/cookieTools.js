define(function (require,exports,modules) {
	exports.setCookie=function (key,value,days) {
		var dat = new Date();
		dat.setDate(dat.getDate()+days);
		document.cookie = key+"="+escape(value)+";expires="+dat.toGMTString();
	}
	exports.getCookie=function (key) {
		var str=unescape(document.cookie);
		var arr = str.split("; ");
		for(var i in arr){
			if(arr[i].indexOf(key+"=")==0){
				var arrnew = arr[i].split("=");
				return arrnew[1];
			}
		}
		return null;
	};
	exports.delCookie=function (key) {
		setCookie(key,"",-1);
	};
});