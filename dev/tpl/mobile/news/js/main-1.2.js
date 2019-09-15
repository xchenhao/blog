var maxCtLen = 800;
var maxAqLen = 140;
var maxLen = 800;
var removeCommentUrl ="/wap/removeComment.msp";
/*热问答、专题*/
function showhide(cId) {
    if($("#c"+cId).css("display")=="none"){
        $("#m"+cId).addClass("more_up");
        $("#c"+cId).css('display','');
        $("#s"+cId).css('display','none');
    }else{
        $("#m"+cId).removeClass("more_up");
        $("#c"+cId).css('display','none');
        $("#s"+cId).css('display','');
    }
}
function checkLogin(){
if($("#loginstatus").val() != true && $("#bg_overlay").css("display")=="none" && $("#loginwds").css("display")=="none"){
        $("textarea").blur();
        lgwdsshow();
        return;
}
}
/*专题、详情页*/
function showhhotans(cId) {
	if($("#cm"+cId).css("display")=="none"){
		$("#hotm"+cId).addClass("qusans_bdrmoreup");
		$("#cm"+cId).css('display',''); 
		$("#sm"+cId).css('display','none');
	}else{
		$("#hotm"+cId).removeClass("qusans_bdrmoreup");
		$("#cm"+cId).css('display','none');
		$("#sm"+cId).css('display','');
	}
}

/*详情页*/
function xiaxian(){
	$("#wenda1").removeAttr("style");
	$("#xxbottom").attr("style","display:none");
	$("#realbottom").removeAttr("style");
}

/*详情页3003下载*/
function appdowncheck(id,contid){
    var result = true;
    var ua = window.navigator.userAgent.toLowerCase();
    if((ua.match(/MicroMessenger/i) == 'micromessenger')
        || ((ua.indexOf('android') > -1 || ua.indexOf('linux') > -1) && (ua.indexOf('qq') > -1 || (ua.indexOf('chrome') > -1 && ua.indexOf('360') == -1)))){
        result = false;
    }else{
        var url = "app.thepaper.cn://2|"+contid;
        var timeout, t = 1000;
        var t1 = Date.now();
        if(window.navigator.userAgent.match(/OS 9/i) != null){//适配ios9，不支持iframe方式，直接href
            try{
                window.location.href = url;
            }catch(e){
                result=false;
            }
        }else{
            var ifr = document.createElement("iframe");  
            ifr.setAttribute('src', url);  
            ifr.setAttribute('style', 'display:none');  
            document.body.appendChild(ifr);  
        }
        timeout = setTimeout(function () {
            var t2 = Date.now();
            if (!t1 || t2 - t1 < t + 50) {
                result = false;
            }  
        }, t);
    }
    setTimeout(function () {
        if(!result){
            var dUrl = $("#"+id).attr("data-url");
            if(dUrl.length < 5){
                dUrl="/download.jsp?id=3";
            }
            if($("#commt_list").html().length > 20 && $("#aq_commt").html().length > 20){
                window.location = dUrl;
            }else{
                window.setTimeout(function(){appdowncheck();},2000);
            }
        }
        document.body.removeChild(ifr);  
    }, 1500);
}

/*kuhua、uc详情页3003下载*/
function appdowncheckuc(id){
	var dUrl = $("#"+id).attr("data-url");
	if(dUrl.length < 5){
		dUrl="/download.jsp?id=3";
	}
	window.setTimeout(function(){window.location = dUrl;},2000);
}

/*话题app下载*/
function askappdowncheck(id,contid,contType){
    var result = true,url;
    var ua = window.navigator.userAgent.toLowerCase();
    if((ua.match(/MicroMessenger/i) == 'micromessenger')
        || ((ua.indexOf('android') > -1 || ua.indexOf('linux') > -1) && (ua.indexOf('qq') > -1 || (ua.indexOf('chrome') > -1 && ua.indexOf('360') == -1)))){
        result = false;
    }else{
        if(contType == 1){
            url = "app.thepaper.cn://2|"+contid;
        }
        else{
            url = "app.thepaper.cn://7|"+contid;    
        }
        var timeout, t = 1000;
        var t1 = Date.now();
        
        if(window.navigator.userAgent.match(/OS 9/i) != null){
            window.location.href = url;
        }else{
            var ifr = document.createElement("iframe"); 
            ifr.setAttribute('src', url);  
            ifr.setAttribute('style', 'display:none');  
            document.body.appendChild(ifr);  
        }
        timeout = setTimeout(function () {
            var t2 = Date.now();
            if (!t1 || t2 - t1 < t + 50) {
                result = false;
            }  
        }, t);
    }
    setTimeout(function () {
        if(!result){
            var dUrl = $("#"+id).attr("data-url");
            if(dUrl.length < 5){
                dUrl="/download.jsp?id=3";
            }
            window.setTimeout(function(){window.location = dUrl;},3000);
        }
        document.body.removeChild(ifr);  
    }, 1500);
}


function closedownfixed(){
	$(".app_fixed").html("").css('display','none');
}

/*详情页aq*/
function checkValue(){
	checkLogin();
	$("#iask_question").hide();
	var textArea = $("#aswText");
	if(textArea.val().length > maxAqLen) 
	textArea.val(textArea.val().substring(0, maxAqLen));
}

function clearDft(){
	$("#iask_question").hide();
}
function displayDft(){
	if ($("#aswText").val() == ""){
		$("#iask_question").show();
	}
}

function checkValueAsw(commentId) {
	checkLogin();
	$("#ians_tip"+commentId).hide();
	var textarea = $("#input_ians"+commentId);
	if (textarea.val().length > maxCtLen) 
	textarea.val(textarea.val().substring(0, maxCtLen));
}
function clearAswDft(commentId){
	$("#ians_tip"+commentId).hide();
}
function displayAswDft(commentId){
	if ($("#input_ians"+commentId).val() == ""){
		$("#ians_tip"+commentId).show();
	}
}

function disappear(commentId){
	$("#ians_tip"+commentId).hide();
	$("#input_ians"+commentId).focus();
}


function disappearNotic(){
	$(".tip_com").each(function(){
		 $(this).mouseover(function(){
			$(this).hide();
			$(this).prev("textarea").focus();

		 });
		 $(this).click(function(){
			$(this).hide();
			$(this).prev("textarea").focus();

		 });
	});
}

function zhankai(commentId){
	$("#huifu"+commentId).attr("style","display:none");
	$("#huifu"+commentId+"1").removeAttr("style");
}

function shouqi(commentId){
	$("#huifu"+commentId+"1").attr("style","display:none");
	$("#huifu"+commentId).removeAttr("style");
}

function rezhankai(commentId){
	$("#rehuifu"+commentId).attr("style","display:none");
	$("#rehuifu"+commentId+"1").removeAttr("style");
}

function reshouqi(commentId){
	$("#rehuifu"+commentId+"1").attr("style","display:none");
	$("#rehuifu"+commentId).removeAttr("style");
}

/*详情页commt*/
function showcommtwrite(cid){
	var ctop = document.documentElement.scrollTop || document.body.scrollTop;
	$("#com_write"+cid).toggle();
	if(document.getElementById("com_write"+cid).style.display!="none"){
	//window.scrollTo(0,ctop+100);
	$('body,html').animate({scrollTop: ctop+30}, 100);
	}else{
	$('body,html').animate({scrollTop: ctop-30}, 100);
	}
}

function checkValue2(){
	checkLogin();
	$("#icommt_commt").hide();
	var textArea = $("#commText");
	if(textArea.val().length > maxCtLen) 
	textArea.val(textArea.val().substring(0, maxCtLen));
}
function checkValueid(cid){
	checkLogin();
	$("#icommt_commt"+cid).hide();
	var textArea = $("#commText"+cid);
	if(textArea.val().length > maxCtLen) 
	textArea.val(textArea.val().substring(0, maxCtLen));
}
function clearCommDft(){
	$("#icommt_commt").hide();
}
function clearCommDftid(cid){
	$("#icommt_commt"+cid).hide();
}
function displayCommDft(){
    if ($("#commText").val() == ""){
         $("#icommt_commt").show();
    }	
}
function displayCommDftid(cid){
    if ($("#commText"+cid).val() == ""){
         $("#icommt_commt"+cid).show();
    }	
}
function clearRplDft(commentId){
	$("#iask_tip"+commentId).hide();
}
function displayRplDft(commentId){
    if ($("#input_ians"+commentId).val() == ""){
         $("#iask_tip"+commentId).show();
    }	
}
function disappearC(commentId){
	$("#iask_tip"+commentId).hide();       
	$("#input_ians"+commentId).focus(); 
}

function commzhankai(commnetId){
	$("#zkcomment"+commnetId).attr("style","display:none");
	$("#sqcomment"+commnetId).removeAttr("style");
}
function commshouqi(commnetId){
	$("#sqcomment"+commnetId).attr("style","display:none");
	$("#zkcomment"+commnetId).removeAttr("style");
}


function openComment(){
$(".gl_cont").live('click', function() {
        if($(this).hasClass("open")){
            $(this).removeClass("open");
        }
        else{
            $(this).addClass("open");
        }
    });
  
}