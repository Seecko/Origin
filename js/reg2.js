$("input").change(function () {
	if(email&&id&&pass){
		$("#next").removeClass("btn-disabled").addClass("btn");
	}
});

let email=false;

function changeEmail () {
	if (checkEmail($("#useremail").val())) {
		$("#checkEmail").hide();
		inpAlr(true);
		if (regEmailPost()) {
			email=true;
		}else{
			email=false;
		}
	}else{
		$("#checkEmail").html("无效的电子邮件地址").show();
		inpAlr(false);
		email=false;
	}
}

function checkEmail (emailIn) {
	emailIn=emailIn.trim();
	if (emailIn.length!=0) {
		let reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if (reg.test(emailIn)) {
			return true;
		}else{
			return false;
		}
	}
}

$("#userpass").focus(function () {
	$(".checkPass").show();
});
$("#userpass").blur(function () {
	$(".checkPass").hide();
});

$("#userpass").keyup(checkPass);

let pass=false;

function checkPass () {
	let pass=$(this).val();
	let lon=false;
	let sml=false;
	let big=false;
	let num=false;
	if (pass.length>=8&&pass.length<=16) {
		lon=true;
		$(".checkPass-msg>p:nth-child(1) i").removeClass("icon-close").addClass("icon-check");
	}else{
		lon=false;
		$(".checkPass-msg>p:nth-child(1) i").removeClass("icon-check").addClass("icon-close");
	}
	if (pass.search(/[a-z]/)>-1) {
		sml=true;
		$(".checkPass-msg>p:nth-child(2) i").removeClass("icon-close").addClass("icon-check");
	}else{
		sml=false;
		$(".checkPass-msg>p:nth-child(2) i").removeClass("icon-check").addClass("icon-close");
	}
	if (pass.search(/[A-Z]/)>-1) {
		big=true;
		$(".checkPass-msg>p:nth-child(3) i").removeClass("icon-close").addClass("icon-check");
	}else{
		big=false;
		$(".checkPass-msg>p:nth-child(3) i").removeClass("icon-check").addClass("icon-close");
	}
	if (pass.search(/[0-9]/)>-1) {
		num=true;
		$(".checkPass-msg>p:nth-child(4) i").removeClass("icon-close").addClass("icon-check");
	}else{
		num=false;
		$(".checkPass-msg>p:nth-child(4) i").removeClass("icon-check").addClass("icon-close");
	}
	
	if(lon&&sml&&big&&num){
		$("#userpass").removeAttr("style");
		pass=true;
	}else{
		$("#userpass").attr("style","border:2px solid #f56c2d");
		pass=false;
	}
}

function inpAlr (bool) {
	if (bool) {
		$("#useremail").removeAttr("style");
	} else{
		$("#useremail").attr("style","border:2px solid #f56c2d");
	}
}

function regEmailPost () {
	$.post("http://localhost/origin/php/checkEmail.php",{useremail:$("#useremail").val()},function (exist) {
		if (exist==1) {
			$("#checkEmail").html("邮箱已存在，请更换").show();
			inpAlr(false);
			return false;
		}else if (exist==0) {
			seajs.use("cookieTools",function(cookieTools) {
				cookieTools.setCookie("useremail",$("#useremail").val());
			})
			inpAlr(true);
			return true;
		}
	})
}

let id=false;

function regIdPost () {
	$.post("http://localhost/origin/php/checkEmail.php",{userid:$("#userid").val()},function (exist) {
		if (exist==1) {
			$("#checkId").html("邮箱已存在，请更换").show();
			id=false;
		}else if (exist==0) {
			seajs.use("cookieTools",function(cookieTools) {
				cookieTools.setCookie("userid",$("#userid").val());
			})
			id=true;
		}
	})
}

$("#next").click(function () {
	if ($(this).hasClass("btn")) {
		seajs.use("cookieTools",function(cookieTools) {
			cookieTools.setCookie("useremail",$("#useremail").val());
			cookieTools.setCookie("userpass",$("#userpass").val());
			cookieTools.setCookie("userid",$("#userid").val());
			cookieTools.setCookie("firstname",$("#firstname").val());
			cookieTools.setCookie("lastname",$("#lastname").val());
		});
		window.location.href="reg3.html";
	}
});
