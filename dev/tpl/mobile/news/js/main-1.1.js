/**/
pubUrl = "/wap/comment.msp";
favUrl = "/wap/addFavorite.msp";
traceUrl="/wap/addTrack.msp";
priseUrl = "/wap/commentPraise.msp";
cancelFavUrl = "/wap/deleteFavorite.msp";

var getPics;
var flag = 1;
var flagA = 1; 
var bqfReg = new RegExp("[\ud83c-\ud83d]");  //表情符号
var useragent = navigator.userAgent.toLowerCase();
var backUrl=document.referrer; //history.back();
var host = "/" + window.location.host; //"thepaper"
var host2 = document.domain;
function goback() {
	if(backUrl != "" && backUrl.indexOf(host) == 0){
		if(useragent.indexOf("360browser")>-1){
			window.history.back().reload();
			window.setTimeout(function(){window.location.href = backUrl;},600);
		} else {
			window.history.back();
			window.setTimeout(function(){window.location.href = backUrl;},600);
		}
	} else {
		window.location = '/m/';
	}
}

function ToTencent(title,picUrl,type){
		//var _t = encodeURI(title);
        var pp = encodeURI("");
	if(type == 2){
		var _t = encodeURI("【"+title+"】");//专题
	} else if(type == 3){
		var _t = encodeURI("【"+title+"】");//直播
	} else if(type == 4){
		var _t = encodeURI("【"+title+"】");//图集
	} else if(type == 5){
		var _t = encodeURI("【"+title+"】");//问吧
	} else {
		var _t = encodeURI("【"+title+"】");
	}
		var _url = encodeURIComponent(document.location);
		var _appkey = encodeURI("801495950");//你从腾讯获得的appkey
		var _pic = encodeURI(picUrl);//（例如：var _pic='图片url1|图片url2|图片url3....）
		var _site = '';//你的网站地址
		var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
		window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function ToSina(title,picUrl,type){
		//var _t = encodeURI(title);
        var pp = encodeURI("");
	if(type == 2){
		var _t = encodeURI("【"+title+"】");
	} else if(type == 3){
		var _t = encodeURI("【"+title+"】");
	} else if(type == 4){
		var _t = encodeURI("【"+title+"】");
	} else if(type == 5){
		var _t = encodeURI("【"+title+"】");
	} else {
		var _t = encodeURI("【"+title+"】");
	}

		var _url = encodeURIComponent(document.location);
		var _appkey = encodeURI("441808809");
		var _pic = encodeURI(picUrl);
		var _site = '';
		var _u = 'http://service.weibo.com/share/share.php?url='+_url+'&appkey='+_appkey+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
		window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function Torenren(title,picUrl,description,type){
		var _t = encodeURI(title);
	if(type == 2){
		var _t2 = encodeURI("【"+title+"】");
	} else if(type == 3){
		var _t2 = encodeURI("【"+title+"】");
	} else if(type == 4){
		var _t2 = encodeURI("【"+title+"】");
	} else if(type == 5){
		var _t2 = encodeURI("【"+title+"】");
	} else {
		var _t2 = encodeURI("【"+title+"】");
	}

		var _url = encodeURIComponent(document.location);
		var _appkey = encodeURI("266744");
		var _pic = encodeURI(picUrl);
		var _site = '';
		var _d = !description? _t : encodeURI(description);
        var _u = 'http://www.douban.com/share/service?name='+_t2+'&title='+_t2+'&text='+_d+'&href='+_url+'&url='+_url+'&image='+_pic+'&bm=1&v=1';
		window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function ToQzone(title,picUrl,type,summary){
		var _t = encodeURI(title);
	if(type == 2){
		var _t2 = encodeURIComponent("【"+title+"】");
	} else if(type == 3){
		var _t2 = encodeURIComponent("【"+title+"】");
	} else if(type == 4){
		var _t2 = encodeURIComponent("【"+title+"】");
	} else if(type == 5){
		var _t2 = encodeURIComponent("【"+title+"】");
	} else {
		var _t2 = encodeURIComponent("【"+title+"】");
	}
		var _url = encodeURIComponent(document.location);
		var _pic = encodeURIComponent(picUrl);
		var _summary = encodeURIComponent(summary);
		var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+_url+'&pics='+_pic+'&summary='+_summary+'&showcount=0&title='+_t2;
		window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function trim(string){   
  	return  string.replace(/( +)$/g,"").replace(/^( +)/g,"");   
}

// 转换为数字 
function intval(v){
	v = parseInt(v);
	return isNaN(v) ? 0 : v;
} 
// 获取元素信息 
function getPos(e){
	var l = 0;
	var t = 0;
	var w = intval(e.style.width);
	var h = intval(e.style.height);
	var wb = e.offsetWidth;
	var hb = e.offsetHeight;
	while (e.offsetParent) {
		l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
		t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
		e = e.offsetParent;
	}
	l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
	t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
	return {
		x: l,
		y: t,
		w: w,
		h: h,
		wb: wb,
		hb: hb
	};
} 
// 获取滚动条信息   
function getScroll(){
	var t, l, w, h;
	if (document.documentElement && document.documentElement.scrollTop) {
		t = document.documentElement.scrollTop;
		l = document.documentElement.scrollLeft;
		w = document.documentElement.scrollWidth;
		h = document.documentElement.scrollHeight;
	}
	else
		if (document.body) {
			t = document.body.scrollTop;
			l = document.body.scrollLeft;
			w = document.body.scrollWidth;
			h = document.body.scrollHeight;
		}
	return {
		t: t,
		l: l,
		w: w,
		h: h
	};
} 
// 锚点(Anchor)间平滑跳转
//el : 目标锚点 ID
//duration : 持续时间，以毫秒为单位，越小越快
function scroller(el, duration){
	if (typeof el != 'object') {
		el = document.getElementById(el);
	}
	if (!el)
		return;
	var z = this;
	z.el = el;
	z.p = getPos(el);
	z.s = getScroll();
	z.clear = function(){
		window.clearInterval(z.timer);
		z.timer = null
	};
	z.t = (new Date).getTime();
	z.step = function(){
		var t = (new Date).getTime();
		var p = (t - z.t) / duration;
		if (t >= duration + z.t) {
			z.clear();
			window.setTimeout(function(){
				z.scroll(z.p.y, z.p.x)
			}, 13);
		}
		else {
			st = ((-Math.cos(p * Math.PI) / 2) + 0.5) * (z.p.y - z.s.t) + z.s.t;
			sl = ((-Math.cos(p * Math.PI) / 2) + 0.5) * (z.p.x - z.s.l) + z.s.l;
			z.scroll(st, sl);
		}
	};
	z.scroll = function(t, l){
		window.scrollTo(l, t)
	};
	z.timer = window.setInterval(function(){
		z.step();
	}, 13);
}

function pubQuestion(contid, commentType,isLogin,isatlas){
if(isLogin != true){
        lgwdsshow();
        return;
}
var  temp = $("#aswText").val();
if(bqfReg.test(temp)){
    mlAlert("请不要输入表情符号!")
    return;
}
var content = encodeURIComponent(temp.trim());
$("#aswText").val("");
if (commentType)
        $.ajax({
            type : "post",
            url : pubUrl,
            data : "c=" + contid + "&commentType=" + commentType + "&content="+ content,
            timeout : 30000,
            dataType : "json",
            success : function(data) {
            if (data.resultCode == "1") {
				if (commentType == 2){
					$.ajax({          
						url: "newDetail_aq.jsp",
						data:"contid="+contid+"&isatlas="+isatlas,
						cache: false,
						success: function(html){
							$("#aq_commt").html(html);
						}
					});
				}
            } else {
				if(data.resultCode == "11"){
					mlAlert(data.resultMsg);
					$("#aswText").val("");
				}else{
					mlAlert(data.resultMsg);
					$("#aswText").val(temp); 
				}
                  
            }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                	mlAlert("系统出错");
                	$("#aswText").val(temp);
            }
        });
}


function pubComment(contid,commentType,isLogin){
if(isLogin != true){
        lgwdsshow();
        return;
}
var content = $("#commText").val().trim();
if(bqfReg.test(content)){
    mlAlert("请不要输入表情符号!")
    return;
}
var contents=encodeURIComponent(content||'');
    $.ajax({
  		type : "post" ,
  		url : pubUrl,
		data : "c=" + contid + "&commentType=" + commentType + "&content="+ contents,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {
  				if (commentType == 1){	                           
  				$.ajax({          
					url: "newDetail_commt.jsp",
					data:"contid="+contid,
					cache: false,
					success: function(html){
						$("#commt_list").html(html);
					}
  				});
					$("#commText").val("");
  				}
  			} else if(data.resultCode == "11"){
  				mlAlert(data.resultMsg);
  				$("#commText").val("");
  			} else if(data.resultCode == "2"){
  				lgwdsshow();
  			}else{
  				mlAlert(data.resultMsg);
  				$("#commText").val(content);
  			}
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown){
  			mlAlert("系统出错"); 
  			$("#commText").val(content);
  		}
    });	
}


function replyComment(contid,commentType,isLogin,parentId,ot){
if(isLogin != true){
        lgwdsshow();
        return;
}
var content = $("#commText"+parentId).val().trim();
if(bqfReg.test(content)){
	mlAlert("请不要输入表情符号!")
	return;
}
var contents=encodeURIComponent(content);
        $.ajax( {
  		type : "post",
  		url : pubUrl,
		data : "c=" + contid + "&commentType=" + commentType + "&content="+ contents + "&parentId="+parentId + "&ot="+ot,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {
  				if (commentType == 1){	                           
  				$.ajax({          
					url: "newDetail_commt.jsp",
					data:"contid="+contid+"&ot="+ot,
					cache: false,
					success: function(html){
						$("#commt_list").html(html);
					}
  				});
					$("#commText"+parentId).val("");
  				}   else if(commentType == 3 && ot == 3){
					$("#commText"+parentId).val("");
					window.location.reload();
  				}                             			
  			} else if(data.resultCode == "2"){
  				lgwdsshow();
  			} else if(data.resultCode == "11"){//输入的内容将在审核后发表
				mlAlert(data.resultMsg);
  				$("#commText"+parentId).val("");  
  			} else {   
				mlAlert(data.resultMsg);
  				$("#commText").val(content);                           		
			}
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown) {
  			mlAlert("系统出错"); 
  			$("#commText").val(content);
  		}
        });
}

function followComment(contid, commentType,parentId){
var content = $("#input_text"+parentId).val().trim();
if(bqfReg.test(content)){
	mlAlert("请不要输入表情符号!")
	return;
}
var contents=encodeURIComponent(content);
	$.ajax( {
  		type : "post",
  		url : pubUrl,
		data :  "c="+contid+"&commentType=" + commentType + "&content="+ contents + "&parentId="+parentId,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {
  				window.location.reload();                              
  			} else if(data.resultCode == "2"){
  				lgwdsshow();
  			} else {                                
  				mlAlert(data.resultMsg);
			}
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown) {
  			mlAlert("系统出错"); 
  		}
	  });
}

function pubAnswer(contid, parentId,isLogin){
if(isLogin != true){
        lgwdsshow();
        return;
}
var content = $("#input_ians" + parentId).val().trim();
if(bqfReg.test(content)){
	mlAlert("请不要输入表情符号!")
	return;
}
$("#input_ians" + parentId).val("");
if(content == ''){
	mlAlert('请输入你的答案！');
	$("#danwenti").removeAttr("style");
	return ;
}
var contents=encodeURIComponent(content);
    $.ajax({
        type : "post",
        url : "/wap/comment.msp",
        data : "c=" + contid + "&commentType=3" + "&content="+ contents + "&parentId="+parentId,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {
                $("textarea").val("");
                window.location.reload();
            }else if (data.resultCode == "2") {
				lgwdsshow();
            } else {
				if(data.resultCode == "11"){
					mlAlert(data.resultMsg);
				$("#input_ians" + parentId).val("");
				}else{
					 mlAlert(data.resultMsg);
				$("#input_ians" + parentId).val(content); 
				}

            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            mlAlert("系统出错");
			$("#input_ians" + parentId).val(content);
        }
    });
}

function replyanswer(contid,commentType,qeId,parentId,isLogin,ot){
    if(isLogin != true){
	lgwdsshow();
	return;
    }
    var content = $("#commText" + parentId).val().trim();
    if(content.length  == 0){
        mlAlert("请输入评论内容！");
        return;
    }
    if(content.length  > 800){
        mlAlert("对不起，评论不能超过800个字符！");
        return;
    }
    var contents=encodeURIComponent(content);
    $.ajax({
  		type : "post",
  		url : "/wap/comment.msp",
  		data : "c=" + contid + "&commentType=" + commentType + "&content=" + contents + "&quoteId=" + parentId + "&parentId=" + qeId+"&ot="+ot,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {
				$("textarea").val("");
				window.location.reload();
  			}else if(data.resultCode == 2){
				lgwdsshow();
			} else {        
				if(data.resultCode == 11){
  					$("#commText" + parentId).val('');
					$("#commText" + parentId).blur();
				}
				mlAlert(data.resultMsg);
			}
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown){
  			mlAlert('对不起，系统忙，请稍后再试！');
  		}
    });	
}

function pubFollow(contid, commentType,parentId){
var content = $("#text_"+parentId).val().trim();
if(bqfReg.test(content)){
	mlAlert("请不要输入表情符号!")
	return;
}
var contents=encodeURIComponent(content);
    $.ajax( {
  		type : "post",
  		url : pubUrl,
		data : "c=" + contid + "&commentType=" + commentType + "&content="+ contents + "&parentId="+parentId,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {                              
				$("#cur_ans").removeClass("cur");
				$("#comm_span").addClass("cur");
				$.ajax({  
					url:"../jsp/newDetail_commt.jsp",
					cache: false,
					data:"contid="+contid,
					success: function(html){
						if(document.getElementById("news_aski") != null){
							document.getElementById("aq_commt").removeChild(document.getElementById("news_aski"));
						}                 
						$("#aq_commt").append(html);
					}
				}); 			
			} else if(data.resultCode == "2"){

  				lgwdsshow();

  			}else {
  				mlAlert(data.resultMsg);
         }
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown) {
  			mlAlert("系统出错"); 
  	  }
  	});
}

function checkAswMore(commentId,recordTota){
	var a_pagesize = 10, a_pageidx = 1, a_begin = 1, a_recordTotal = recordTota;
	if(document.getElementById("asw_more"+commentId) != null){
          document.getElementById("hot_ans_other"+commentId).removeChild(document.getElementById("asw_more"+commentId));
          return;
	}
	$.ajax({
		 url: "../jsp/newDetail_moreAq.jsp",
		 data:"commentId="+commentId+"&pagesize="+a_pagesize+"&pageidx="+a_pageidx,
		 cache: false,
		 success: function(html){
				data = $.trim(html);
				if (data == ''){
					
				}else{
					var tempCount = a_recordTotal - (a_pageidx * a_pagesize);
					if(tempCount > 0){
						$("#hot_ans_more_other"+commentId).remove();
						$("#hot_ans_other"+commentId).append(html);
						$("#hot_ans_other"+commentId).append('<p class="hot_ans_more" id="hot_ans_more_other'+commentId+'"><a href="javascript:checkAswMore('+commentId+','+recordTota+')">查看此问题的另外'+tempCount+'个回答</a></p>');
						a_pageidx ++ ;
						a_begin = 0 ;
					}
				}
		}
	});
}

function cancelTrack(contid,count){
    if (contid)
        $.ajax( {
        type : "post",
        url : "/wap/cancelTrack.msp",
        data : "contIds=" + contid,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {
				if(count > 1){
					$('#'+contid).remove();
				}
				if(count == 1){
					window.location.reload();
				}
            } else if(data.resultCode == "2"){
  				lgwdsshow();
            } else {
				mlAlert(data.resultMsg);
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            mlAlert("系统出错");
        }
    });
}

function reply(commentId){
	if (flag == 1){
		$("#comm_textarea"+commentId).fadeIn("slow");
		$("#comm_textarea"+commentId).style.display="block";
		flag = 0;
		return;
	}
	$("#comm_textarea"+commentId).hide();
	flag = 1;
}

function letmeAnswer(commentId){
	if(flagA == 1){
		$("#ians_textarea"+commentId).fadeIn("slow");
        flagA = 0;
        return;
    } 
    $("#ians_textarea"+commentId).hide();
    flagA = 1;
}

function favoriteCont2(){  
    var obj = $("#shoucang");
    var contid = $('#hidden_contid').val();
    $.ajax({
        type : "post",
        url : favUrl,
        data : "c=" + contid,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1" || data.resultMsg == "重复收藏") {
                obj[0].href="javascript:cancelFavoriteCont();";
                obj.html('<img src="../img/love_big_f.png" alt="" /><span>已收藏</span>');
            } else {
                $("#shoucang").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});  
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            $("#shoucang").leanModal({closeButton: ".modal_close",title:'错误提示',content:'系统出错'});
        }
    });
}

function priseCommt(commentId, priseTimes){
	$('#'+commentId).html('<span class="num_ask num_zan_f">'+(priseTimes+1)+'</span>');
	$('#'+commentId).removeAttr("href");
	$.ajax({
  		type : "post",
  		url : priseUrl,
  		data : "commentId=" + commentId,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {

  			} else {                              
				//$("#"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
				$('#'+commentId).attr("href","javascript:priseCommt("+commentId+","+priseTimes+"})");
				$('#'+commentId).html('<span class="num_ask num_zan">'+priseTimes+'</span>');
  			}
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown) {
			$('#'+commentId).attr("href","javascript:priseCommt("+commentId+","+priseTimes+"})");
			$('#'+commentId).html('<span class="num_ask num_zan">'+priseTimes+'</span>');
 			//$("#"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'系统出错'});
  	  }
	});
}

function priseCommtHotqa(commentId, priseTimes){
	$('#'+commentId).html(priseTimes+'<em class="zan"></em>');
        $('#'+commentId).addClass("cur");


        //$('#'+commentId).children("em").addClass("zan");
	$('#'+commentId).removeAttr("onclick");

	$.ajax( {
  		type : "post",
  		url : priseUrl,
  		data : "commentId=" + commentId,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {
				//$('#'+commentId).html("<img src='../img/ydw_zan_y.png' alt='赞'><p>"+priseTimes+"</p>");
				//$('#'+commentId).removeAttr("onclick");
  			} else {
				//
  			}
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown) {
			//
  	  }
	});
}

function priseHotqa(commentId, priseTimes){
	
    $.ajax( {
  		type : "post",
  		url : priseUrl,
		data : "commentId=" + commentId,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {
				$('#hotqa'+commentId).html('<span class="icon_love_f"></span><span class="num_love">'+data.praiseTimes+'</span>');
  			} else {
  				//$("#hotqa"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
			}
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown) {
  			//$("#hotqa"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'系统出错'});
  	  }
  	});
}

function priseCommtReply(commentId, priseTimes){	
    $.ajax( {
  		type : "post",
  		url : priseUrl,
		data : "commentId=" + commentId,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {
				$('#'+commentId).html('<img src="../img/love_com.png" alt="" /><span>'+data.praiseTimes+'</span><a href="javascript:reply('+commentId+')" id="comm_reply">回复</a>');
  			} else {
  				//$("#"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
			}
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown) {
  			//$("#"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'系统出错'});
  	  }
  	});
}

function prisePoint_question(commentId, priseTimes){
	
    $.ajax( {
  		type : "post",
  		url : priseUrl,
		data : "commentId=" + commentId,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {
				$('#'+commentId).html('<img src="../img/love_com.png" alt="" /><span class="letme_ans letme_ans2">'+data.praiseTimes+'</span>');
  			} else {
  				$("#"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
			}
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown) {
  			$("#"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'系统出错'});
  	  }
  	});
}

function cancelFavoriteCont(){
    var obj = $("#shoucang");
    var contid = $('#hidden_contid').val(); 
    $.ajax({
        type : "post",
        url : "/wap/deleteFavorite.msp",
        data : "c=" + contid,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {
                obj[0].href="javascript:favoriteCont2();";  
                obj.html('<img src="../img/love_big.png" alt="" /><span>收藏</span>');    
            } else {                                
                $("#shoucang").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});  
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
           $("#shoucang").leanModal({closeButton: ".modal_close",title:'错误提示',content:'系统出错'});
        }
    });
}


function voteCont(){ 
    var obj = $("#zan");
    var contid = $('#hidden_contid').val();
    $.ajax( {
        type : "post",
        url : "/wap/addVote.msp",
        data : "contentId=" + contid,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {
                obj[0].href="javascript:void(0);";                              
                obj.html('<img src="../img/zan_big_f.png" alt="" /><span>'+data.voteTimes+'</span>');  
            } else {                                
                $("#zan").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});  
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            $("#zan").leanModal({closeButton: ".modal_close",title:'错误提示',content:'系统出错'});
        }
    });
}

function voteContxq(cid,voteTimes){
    $("#news_praise").attr("href","javascript:void(0);");
    $("#news_praise").html('<em class="zan"></em>'+voteTimes);
    //$("#news_praise").children("em").addClass("zan");
    $.ajax( {
        type : "post",
        url : "/wap/addVote.msp",
        data : "contentId=" + cid,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {
                //$("#news_praise").attr("href","javascript:void(0);");
                //$("#news_praise").html('<img src="../img/ydw_xqfx_zan_y.png" alt="赞">'+data.voteTimes);  
            } else {
                //
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            //
        }
    });
}

function optTopic(cid,voteTimes){
    $("#topic_praise").attr("href","javascript:void(0);");
    $("#topic_praise").html('<em class="zan"></em>'+voteTimes);
    //$("#topic_praise").html('<img src="../img/ydw_xqfx_zan_y.png" alt="赞">'+voteTimes); 
    $.ajax( {
        type : "post",
        url : "/wap/optTopic.msp",
        data : "topicId=" + cid +"&otype=3",
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {
                //$("#topic_praise").attr("href","javascript:void(0);");
                //$("#topic_praise").html('<img src="../img/ydw_xqfx_zan_y.png" alt="赞">'+data.voteTimes);  
            } else {
                //
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            //
        }
    });
}

function voteContatlas(cid){
    $.ajax( {
        type : "post",
        url : "/wap/addVote.msp",
        data : "contentId=" + cid,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {
                $("#news_praise").attr("href","javascript:void(0);");
                $("#news_praise").html('<img src="../img/atlas_zan50_y.png"><p>'+data.voteTimes+'</p>'); 
            } else {
                //alert(data.resultMsg);
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            //
        }
    });
}


function addAttention(commentId){
    var obj = $("#guanzhu"+commentId);
    $.ajax( {
  		type : "post",
  		url : "/wap/addAttention.msp",
		data : "commentId=" + commentId,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {
				obj[0].href="javascript:canAttention("+commentId+")";
				obj.html('<span>已关注</span>');   
  			} else {                     
  				$("#guanzhu"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});           	
			}
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown) {
  			$("#guanzhu"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'系统出错'});
  	  }
  	});
}

function canAttention(commentId){
    var obj = $("#guanzhu"+commentId);
    $.ajax( {
  		type : "post",
  		url : "/wap/cancelAttention.msp",
		data : "commentId=" + commentId,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {
				obj[0].href="javascript:addAttention("+commentId+")";
				obj.html('<span>关注</span>');   
  			} else {                                
				$("#guanzhu"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg}); 		
			}
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown) {
  			$("#guanzhu"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'系统出错'});
		}
  	});
}

function cancelAttention(commentId){	    
    $.ajax( {
  		type : "post",
  		url : "/wap/cancelAttention.msp",
		data : "commentId=" + commentId,
  		timeout : 30000,
  		dataType : "json",
  		success : function(data) {
  			if (data.resultCode == "1") {
				$('#'+commentId).remove();                     
  			} else {                                
				alert(data.resultMsg); 		
			}
  		},
  		error : function(XMLHttpRequest, textStatus, errorThrown) {
  			mlAlert("系统出错");
		}
  	});
}

function cancelfavoriteCont(contid,count){	
     $.ajax( {
		type : "post",
		url : cancelFavUrl,
		data : "c=" + contid,
		timeout : 30000,
		dataType : "json",
		success : function(data) {
			if (data.resultCode == "1") {
				if(count > 1){
					$('#'+contid).remove();
				}
				if(count == 1){
					window.location.reload();
				}
			} else {                                
				$("#shoucang").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert("系统出错");
	    }
	});
}

function showCancelbutton(contId){
       $('#favorites'+contId).show();
       $("#f"+contId).css({ background: "#f1f1f1" });
}

function hideCancelbutton(contId){
       $('#favorites'+contId).hide();
       $("#f"+contId).css({ background: "none" });
}

function showShare(contId){
        $("#cont"+contId).css({ background: "#f1f1f1" });
	$("#index"+contId).append("<div class='share_live24' id='share'><a href='' id='share_share01'></a><a href='' id='share_share02' ></a><a href='' id='share_share03'></a><span>分享到&nbsp;&nbsp;</span></div>");
}

function removeShare(contId){
        $("#cont"+contId).css({ background: "none" });
	$("#share").remove();
}

function showAttentionCancel(contId){
       $('#guanzhu'+contId).show();
       $("#gz"+contId).css({ background: "#f1f1f1" });
}

function hideAttentionCancel(contId){
       $('#guanzhu'+contId).hide();
       $("#gz"+contId).css({ background: "none" });
}

function mlAlert(str,type){
	$("#tiptitleStr").css("lineHeight","26px");
	$("#overlay").css('display','').show();
	$("#tiptitle").css('display','').show();
	$("#tiptitleStr").text(str);
	if(type == 2){
		$("#tiptitleNO").css('display','').show();
	}

	var tiptitleHeight = $("#tiptitleStr").height();
	if(tiptitleHeight < 46){
		$("#tiptitleStr").css("lineHeight","46px");
	}else{
		//$("#tiptitleStr").css("lineHeight","26px");
	}
}

function closeNotice(){
	$("#overlay").css('display','none').hide();
	$("#tiptitle").css('display','none').hide();
	$("#tiptitleNO").css('display','none').hide();
	$("#tiptitleStr").text("");
	$(".tiptitleOK").attr("id","tiptitleOK");

	$(".tiptitleOK").attr("onClick","closeNotice()");
}

function removeNotice(type, contid, index, commentId, commentType, isLogin){
    if(isLogin == false){
        lgwdsshow();
        return;
    }
    if(index == ""){
        index="''";
    }

    mlAlert("是否确认删除此发言？",2);
    $(".tiptitleOK").attr("id","tiptitleOK_");
    $(".tiptitleOK").attr("onClick","removeComment("+type+","+contid+","+index+","+commentId+","+commentType+")");
/*
    if(window.confirm("是否确认删除此发言？")){
        removeComment(type, contid, index, commentId, commentType);
    }
*/

}

//type:1 热追问 2 新追问 3 评论 4 回答  5 话题追问  6 话题回答
function removeComment(type, contid, index, commentId, commentType){
    closeNotice();
    var element = "";
    var jspurl = "";
    
    if(type == "1"){
        jspurl = "../jsp/queryHotAnswer.jsp";
        element = "hot"+commentId+index;
    }
    else if(type == "2"){
        jspurl = "../jsp/queryNewAnswer.jsp";
        element = "new"+commentId;
    }
    else if(type == "3"){
        jspurl = "../jsp/queryCommt.jsp";
        element = "comment"+commentId;
    }
    else if(type == "4"){
        jspurl = "../jsp/queryReply.jsp";
        element = "answerId"+commentId;
    }
    else if(type == "5"){
        jspurl = "../jsp/query_ask_answered.jsp";
        element = "new"+commentId;
    }
    else if(type == "6"){
        jspurl = "../jsp/query_ask_reply.jsp";
        element = "answerId"+commentId;
    }
    else{
        return;
    }
    $.ajax( {
        type : "post",
        url : removeCommentUrl,
        data : "commentIds=" + commentId + "&commentType=" + commentType,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1"){
                   $("#ans_ct"+commentId).html("此发言已被用户删除");
            }else if(data.resultCode == 2){
                  lgwdsshow();
            }else {
                mlAlert(data.resultMsg);         
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown){

            mlAlert("对不起，系统忙，请稍后再试！");
        }
    });

}