$(function () {
	addYear();
	addMonth();
	addDay();
	$("#day").mousedown(changeDay);
	$(".agrement>span").click(acceptAgrement);
	$(window).click(checkNext);
	$("#next").click(pageTwo);
});

function addYear () {
	let date=new Date();
	let year=date.getFullYear();
	let yearOpt='<option value="0" selected>年</option>';
	for(let i=year;i>=year-100;i--){
		yearOpt=yearOpt+'<option value="'+i+'">'+i+'</option>';
	}
	$("#year").html(yearOpt);
}
function addMonth () {
	let monthOpt='<option value="0" selected>月</option>';
	for(let i=1;i<=12;i++){
		monthOpt=monthOpt+'<option value="'+i+'">'+i+'月</option>';
	}
	$("#month").html(monthOpt);
}
function addDay () {
	let dayOpt='<option value="0" selected>日</option>';
	for(let i=1;i<=31;i++){
		dayOpt=dayOpt+'<option value="'+i+'">'+i+'月</option>';
	}
	$("#day").html(dayOpt);
}
function changeDay () {
	let year=$("#year").val();
	let	month=Number($("#month").val());
	let bigMonth=[1,3,5,7,8,10,12];
	let dayOpt='<option value="0" selected>日</option>';
	if (bigMonth.indexOf(month)>-1) {
		for(let i=1;i<=31;i++){
			dayOpt=dayOpt+'<option value="'+i+'">'+i+'月</option>';
		}
		$("#day").html(dayOpt);
	}else if(((year%4==0&&year%100!=0)||year%400==0)&&month==2){
		for(let i=1;i<=29;i++){
			dayOpt=dayOpt+'<option value="'+i+'">'+i+'月</option>';
		}
		$("#day").html(dayOpt);
	}else if((bigMonth.indexOf(month)<0)&&month!=2){
		for(let i=1;i<=30;i++){
			dayOpt=dayOpt+'<option value="'+i+'">'+i+'月</option>';
		}
		$("#day").html(dayOpt);
	}else{
		for(let i=1;i<=28;i++){
			dayOpt=dayOpt+'<option value="'+i+'">'+i+'月</option>';
		}
		$("#day").html(dayOpt);
	}
}

let accAgr=false;
function acceptAgrement () {
	if(accAgr==false){
		accAgr=true;
		$(".agrement>span").css({backgroundColor:"#f56c2d",border:"1px solid #f56c2d"});
	}else{
		accAgr=false;
		$(".agrement>span").css({backgroundColor:"#fff",border:"1px solid #c3c6ce"});
	}
}

function checkNext () {
	if($("#lct").val()!=0&&$("#year").val()!=0&&$("#month").val()!=0&&$("#day").val()!=0&&accAgr==true){
		$("#next").removeClass("btn-disabled").addClass("btn");
	}else{
		if ($("#next").hasClass("btn")) {
			$("#next").removeClass("btn").addClass("btn-disabled");
		}
	}
}

function pageTwo () {
	if($("#next").hasClass("btn")){
		let userlocation=$("#lct").val();
		let userbirthday=$("#year").val()+"-"+$("#month").val()+"-"+$("#day").val();
		seajs.use("cookieTools",function(cookieTools) {
			cookieTools.setCookie("userlocation",userlocation);
			cookieTools.setCookie("userbirthday",userbirthday);
		})
		window.location.href="reg2.html";
	}
}