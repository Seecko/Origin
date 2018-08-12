$("#useremail").change(changeEmail);
$("#userpass").change(changeEmail);

function changeEmail () {
	if (checkEmail($("#useremail").val())) {
		allow=true;
		$(".login-content-form-msg").hide();
		inpAlr(true);
	}else{
		allow=false;
		$(".login-content-form-msg").html("无效的电子邮件地址").show();
		inpAlr(false);
	}
}

function inpAlr (bool) {
	if (bool) {
		$(".icon-alertcircle").css({display:"none"});
		$(".login-content-form input").removeAttr("style");
	} else{
		$(".icon-alertcircle").css({display:"block"});
		$(".login-content-form input").attr("style","border:2px solid #f56c2d");
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

let showPass=false;
$(".login-content-form-userpass>span").click(function () {
	if (!showPass) {
		showPass=true;
		$(this).html("隐藏");
		$(this).prev().attr("type","text");
	} else{
		showPass=false;
		$(this).html("显示");
		$(this).prev().attr("type","password");
	}
})

let allow=false;
let remenberMe=false;

$(".remenberCheck").click(function () {
	if (!remenberMe) {
		remenberMe=true;
		$(".remenberCheck").css({backgroundColor:"#df3d00",borderColor:"#df3d00"});
	} else{
		remenberMe=false;
		$(".remenberCheck").css({backgroundColor:"#fff",borderColor:"#c3c6ce"});
	}
})

$(".login-content-form-login").click(function () {
	if (allow) {
		if (!remenberMe) {
			loginPost();
		} else{
			loginPost(7);
		}
	}
})

function loginPost (day) {
	$.post("http://localhost/origin/php/login.php",{useremail:$("#useremail").val(),userpass:$("#userpass").val()},function (exist) {
		if (exist==-1) {
			allow=false;
			$(".login-content-form-msg").html("用户不存在，请注册").show();
			inpAlr(false);
		}else if (exist==0) {
			allow=false;
			$(".login-content-form-msg").html("密码错误，请重新输入").show();
			inpAlr(false);
		}else if(exist==1){
			inpAlr(true);
			if(day==null){
				seajs.use("cookieTools",function(cookieTools) {
					cookieTools.setCookie("useremail",$("#useremail").val());
					cookieTools.setCookie("userpass",$("#userpass").val());
				})
				window.opener.location.reload();
				window.close();
			}else{
				seajs.use("cookieTools",function(cookieTools) {
					cookieTools.setCookie("useremail",$("#useremail").val(),Number(day));
					cookieTools.setCookie("userpass",$("#userpass").val(),Number(day));
				})
				window.opener.location.reload();
				window.close();
			}
		}
	})
}