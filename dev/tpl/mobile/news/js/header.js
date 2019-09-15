var bindTab =function(heads, tabs, curHeadCName, curTabCName, context){
		var old = 0, cur = 0;
        old = $('.cur-state').index();
        if (!heads || !tabs) {
            return;
        }
        heads = $(heads, context);
        tabs = $(tabs, context);
        //tabs.hide().eq(0).show(); 
        
        heads.parent().click(function(event) {
            var target = event.target,
                oldTab, curTab;
            cur = heads.index(target);
            cur == -1 && heads.each(function(i, h) {
                heads.eq(i).find(target).length && (cur = i);
            })
            if (cur == old) {
                return;
            }
            if (cur != -1) {
                oldTab = tabs.eq(old).hide();
                curTab = tabs.eq(cur).show();
                if (curHeadCName) {
                    heads.eq(old).removeClass(curHeadCName);
                    heads.eq(old).siblings("li").removeClass(curHeadCName);
                    heads.eq(cur).addClass(curHeadCName);
                }
                old = cur;
            }
        }).end();

	}	
	$(function(){

		
		// 主要参数列表 
		var $burger = $("#burger");
		var ski = 0;
		var timeout;
		var timeout1;
		var sheight = $(window).height();
		var upa =$(".upv30-icon").height();
		var flsize;
		var disScroll, lastScrollTop = 0, delat = 5, navHight = $(".header-v4").outerHeight();
        var burtop = 0,burski = 0;
		//判断head出现的元素
		var isdiscont =$('#isdiscont').val();
		if(isdiscont == "" || isdiscont == undefined){
			isdiscont = "0";

		}
		//touch for upordown
		function touchScroll() {
		    var a = $(this).scrollTop();
		    Math.abs(a - lastScrollTop) <= delat || 
		    (a > navHight && a > lastScrollTop ? 
		    $(".header-v4").slideUp("150") : a + $(window).height() < $(document).height() && 
		    $(".header-v4").slideDown("150"), lastScrollTop = a);
		}

		//alert(isdiscont);
		if(isdiscont == '0'){//首页汉堡
			$('.burger-p').show();
			
		}else if(isdiscont == '1'){//分类
			$('.fl-icon').show();
			$('.bg-opacity30').click(function(){
				$("#v3cont_id").css("height","auto");
				//$(".sy-downward-sort").slideToggle();
				$(".sy-downward").eq(1).slideToggle();
				$(".bg-opacity30").hide();
				ski = 0;
			});
			
		}else if(isdiscont == '2'){//直播
			$('.zb-icon').show();
		}else if(isdiscont == '3'){//右侧分享按钮
			$('.zt-icon-p').show();
			
		}else if(isdiscont == 'index'){//只有首页生效
			$('.burger-p').show();
			//当滚动条的位置处于距顶部600像素以上时，顶部导航出现，否则消失
			// $(window).scroll(function () { 
			// if ($(window).scrollTop() < 600) { 
			// 	$(".header-v4").slideDown("150");
			// }
			// else {
			// 	$(".header-v4").slideUp("150");
			// } 
			// });
		}else if(isdiscont == '4'){//右侧文字位  新闻问答详情页右侧
			$('.logon-shuline').hide();
			$('.toptit-cont').hide();
			$('#news_right_cont').show();
		}else if(isdiscont == '5'){//右侧图片位
			$('.right-img').show();

		}else if(isdiscont == '6'){//右侧位空

		}else if(isdiscont == '7'){//右侧位空 话题问答详情页右侧
			$('#ask_right_cont').show();
		}else if(isdiscont == '8'){//应用于正文详情页
			$('.burger-p').show();
			
			//当滚动条的位置处于距顶部600像素以上时，顶部导航出现，否则消失
			// $(window).scroll(function () { 
			// if ($(window).scrollTop() < 600) { 
			// 	$(".header-v4").slideDown("150");
			// }
			// else {
			// 	$(".header-v4").slideUp("150");
			// } 
			// });
		}
		if(isdiscont != "1"){
			//点击压暗关闭分享
			$('.bg-opacity30').click(function(){
				$('.bg-opacity30').hide();
				$('.v3-shareBox').slideToggle();
				ski = 0;
			});
		}
		
			$(window).scroll(function() {
			    disScroll = !0;
			});
			setInterval(function() {
				if(burski == 0){
			   		disScroll && (touchScroll(), disScroll = !1);
			   	}else{
			   		$(".header-v4").show();
			   	}
			},
			250);
		
		$(".sy-downward").css("height",sheight);
		$(".sy-downward-cont").css("height",sheight-upa);
		$(".sy-downward-sort").hide();
		$(".sy-downward-sort").css('height',$('.sy-downward-sort').height()/1.8);
		flsize = Number($(".sy-downward-flcont").children().size());
		if(flsize >2){
			//alert(flsize);
			$(".sy-downward-sort").css('height',$('.sy-downward-sort').height()+70);
		}
		//alert($(".sy-downward-sort").height());
		//分享
		$('#fx').click(function(){
			if(ski == 0){
				$('.bg-opacity30').show();
				$(".header-v4").slideDown("150");
				$('.v3-shareBox').slideDown("150");
				ski = 1;
			}else{
				$('.bg-opacity30').hide();
				$('.v3-shareBox').slideUp("150");
				ski = 0;
			}
			

		});
		$('.v3-shareBox span').click(function(){
			$('.bg-opacity30').hide();
			$('.v3-shareBox').slideUp("150");
			ski = 0;
		});
		$('.fl-icon').click(function(){
			if(ski == 0){
				var th = $(".header-v4").height();
				var tph =Number(sheight -th);
				//alert(tph);
				$("#v3cont_id").css({"height":tph,"overflow":"hidden"});
				$(".sy-downward").eq(1).slideToggle();
				$(".bg-opacity30").show();
				//$("#v3cont_id").hide();
				ski = 1;
				burski = 1;
			}else{
				$("#v3cont_id").css("height","auto");
				//$(".sy-downward-sort").slideToggle();
				$(".sy-downward").eq(1).slideToggle();
				$(".bg-opacity30").hide();
				ski = 0;
				burski = 0;
			}
			
		});
		$('.retract-up').click(function(){
			if(ski ==1){
				$("#v3cont_id").css("height","auto");
			    $(".sy-downward").eq(1).slideToggle();
			    $(".bg-opacity30").hide();
			    ski = 0;
			    burski = 1;
			}else{
				$("#v3cont_id").css("height","auto");
				$(".sy-downward").eq(1).slideToggle();
			    $(".bg-opacity30").hide();
			    ski = 0;
			    burski = 1;
			}
			
		});

		$burger.click(function(){
				burtop = burtop;
				if(ski == 0){
					$(".burger").addClass("transform");
					$(".sy-downward").eq(0).fadeIn("150");
                    clearTimeout(timeout);
                    //获取当前定位
                    burtop = $(window).scrollTop();
                    timeout = setTimeout(function(){$("#v3cont_id").hide();},500);
					var uph =$(".user-view-info").height();
					$(".cont-list").css("height",sheight-uph);

					//反色
					$('.header-v4 .logo a').css("background-image","url('./template/mobile/news/img/logo_wap_v3-white.png')");
					clearTimeout(timeout1);
					timeout1 = setTimeout(function(){$('.header-v4 .header-container').css("background-color","#3e3e46");},150);
					$('.burger div').css("background-color","#fff");
					$('.sy-downward').css("top","43px");
					if($(window).width()>=640){
						$('.sy-downward').css("top","81px");
					}
					// $('.user-view-info').css("margin-top","16px");
					//文字加反色
					$('.header-v4 .toptit-cont').css("color","#fff");
					ski = 1;
					burski = 1;
					if(isdiscont == '3' || isdiscont == '0'){
						$('.bg-opacity30').hide();
						$('.v3-shareBox').hide();
					}
					

				}else{
					$(".burger").removeClass("transform");
					$(".sy-downward").eq(0).fadeOut("150");
                   clearTimeout(timeout);
                   timeout = setTimeout(function(){$("#v3cont_id").show();$(window).scrollTop(burtop);},50);
                   var uph =$(".user-view-info").height();
                   $(".cont-list").css("height",sheight-uph);
                   //反色
					$('.header-v4 .logo a').css("background-image","url('./template/mobile/news/img/logo.png')");
					clearTimeout(timeout1);
					timeout1 = setTimeout(function(){$('.header-v4 .header-container').css("background-color","#fff");},150);
					$('.burger div').css("background-color","#333");
					$('.sy-downward').css("top","44px");
					if($(window).width()>=640){
						$('.sy-downward').css("top","83px");
					}
					// $('.user-view-info').css("margin-top","29px");
					//文字加反色
					$('.header-v4 .toptit-cont').css("color","#000");
					ski = 0;
					burski = 0;
				}
				
			});
		//tab切换初始化
		    $('.scrolly:has(.sections-nav)').each(function(_, el) {
		        var ctrlSelector = '.sections-nav li',
		            tabSelector = '.sections-list';
		        bindTab(ctrlSelector, tabSelector, 'cur-state', 'cur', el);
		    });
		    	
		    
		    function Tiplength(Plun,Tshi,Max){
		    	Plun.blur(function(){
		    		$('.tj-plOrhf .tj-plOrhf-cont em').hide();
		    	var Length=Plun.val().length;
		    	         if(Length > Max){
		    	           the_value=Plun.val().substring(0,Max);
		    		   Plun.val(the_value);
		    	           var Over=0;
		    	         }else{
		    	           var Over=Max-Length;
		    	         }
		    	           Tshi.html("提示：当前还能输入<font style='color:red;'>"+Over+"</font>个汉字");
		    	});
		    	Plun.keyup(function(){
		    		$('.tj-plOrhf .tj-plOrhf-cont em').hide();
		    	var Length=Plun.val().length;
		    	         if(Length > Max){
		    	           the_value=Plun.val().substring(0,Max);
		    		   Plun.val(the_value);
		    	           var Over=0;
		    	         }else{
		    	           var Over=Max-Length;
		    	         }
		    	           Tshi.html("提示：当前还能输入<font style='color:red;'>"+Over+"</font>个汉字");
		    	});
		    }
		    //发表评论字数提示
		    Tiplength($("#suggestContent"),$("#v3-pl p"),140);
		    Tiplength($("#suggestContent1"),$("#v3-zw p"),140);
		    Tiplength($("#suggestContent"),$("#wb-tishi"),140);
		    
		    //评论追问切换
		    $('.tj-plOrhf-nav span').eq(0).click(function(){$('.tj-plOrhf-nav span').eq(0).addClass('cur-color');$('.tj-plOrhf-nav span').eq(1).removeClass('cur-color');$('#v3-zw').hide();$('#v3-pl').show();});
		    $('.tj-plOrhf-nav span').eq(1).click(function(){$('.tj-plOrhf-nav span').eq(1).addClass('cur-color');$('.tj-plOrhf-nav span').eq(0).removeClass('cur-color');$('#v3-zw').show();$('#v3-pl').hide();});
		   $('.top-img h2.pos').css('height',$('.top-img h2.pos a').height()+$('.top-state-strip').height());
		   $(window).resize(function(){
		   		$('.top-img h2.pos').css('height',$('.top-img h2.pos a').height()+$('.top-state-strip').height());
		         // resizer($(this));  //do sonrthing
		     });
		   //关闭下载
		   $('.close-1').click(function(){
		   		$('#pp-download-box').hide();
		   });
		   //alert(isNaN($('.ws-box p').html()));
		   $('.ask_ulist').css("padding-top","15px");
		   // $('#backtotop').attr("href","");
		   $('#backtotop').click(function(){
		   		// $('#backtotop').attr("href","#");
		   		var scrtop = $(window).scrollTop();
		   		var time,wct;
		   		var x_scrtop = parseInt(scrtop/100);
		   		//alert(scrtop+','+x_scrtop);
		   		//$(window).scrollTop(0);
		   			if(scrtop<=100){
		   				$(window).scrollTop(0);
		   			}else if(scrtop<=1000){
		   				time = setInterval(function(){
		   				scrtop = scrtop-100;
		   				$(window).scrollTop(scrtop);
		   				//alert(scrtop);
		   				if(scrtop <= 0){
		   					clearInterval(time);   			
		   				}
		   				},10);
		   			}else if(scrtop>1000){
		   				$(window).scrollTop(1000);
		   				scrtop =1000;
		   				time = setInterval(function(){
		   				scrtop = scrtop-100;
		   				$(window).scrollTop(scrtop);
		   				//alert(scrtop);
		   				if(scrtop <= 0){
		   					clearInterval(time);   			
		   				}
		   				},20);

		   			}
                    return false;		
		   });
		   //正文upd font
		   var updAK = 0;
		   $('#FTS-opt').click(function(){
		   		if(updAK == 0){
		   			$(this).css("background-image","url('../img/v3-a-.png')");
		   			$('.news_part *').css({"font-size":"20px","line-height":"34px"});
		   			$('.news_part').css({"font-size":"20px","line-height":"34px"});
		   			$('.news_part .contheight').css("height","26px");
		   			updAK = 1;
		   		}else{
		   			$(this).css("background-image","url('../img/v3-a+.png')");
		   			$('.news_part *').css({"font-size":"16px","line-height":"26px"});
		   			$('.news_part').css({"font-size":"16px","line-height":"26px"});
		   			$('.news_part .contheight').css("height","20px");
		   			updAK = 0;
		   		}
		   		
		   });

	});
//20160531add 
var downAppCookie = "paper_wapdown";
function closAllPageDownfixed(){
	$("#head_ask_app_down").html("").css('display','none');
	setAppDownCookie();	
}
//
function getCookie(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
		return decodeURI(arr[2]);
	else
		return null;
}
function delCookie(name)
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null){
		document.cookie= name + "="+cval+";expires="+exp.toGMTString();
	}
}
function setCookie(name,value,Days)
{	
	if(!Days)Days=1;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ encodeURI(value) + ";expires=" + exp.toGMTString();
}
//set appdown cookie one day
function setAppDownCookie(){
	setCookie(downAppCookie,"false",1);
}
$(document).ready(function(){
	var isOpen = getCookie(downAppCookie);
	if(isOpen==null || isOpen=="true"){
		$("#head_ask_app_down").css('display','block');
	}
});
/*话题app下载
1:首页 2:详情页 3专题 4直播 5图集 6 外链 7:话题 8，我的社区
*/
function allPageAppdowncheck(id,contid,contType){
    var result = true,url;
    var ua = window.navigator.userAgent.toLowerCase();
    if(contType == 1){
            url = "app.thepaper.cn://2|"+contid;
    }
    else{
            url = "app.thepaper.cn://7|"+contid;    
    }
    var timeout, t = 1000;
    var t1 = Date.now();
    var chromeIntent="";
    var isChrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);
    var isOpera = ua.match(/opera\/([\d.]+)/);
    var isFirefox = ua.match(/firefox\/([\d.]+)/);
    var isAndriod = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    var ifr =null;
    var isIphone = (ua.indexOf("iphone")!=-1)&&!isOpera;
    if(isIphone){
         window.location.href = url;
    }else{
    	if(isChrome ||isOpera ||isFirefox){
    	    var chromeIntent = "intent://app.thepaper.cn/#Intent;scheme="+url+";package=com.wondertek.paper;end";
            window.location.href = chromeIntent;  
    	}else{
    	    ifr = document.createElement("iframe"); 
            ifr.setAttribute('src', url);
            ifr.setAttribute('style', 'display:none');  
            document.body.appendChild(ifr); 
    	}
    }
    timeout = setTimeout(function () {
            var t2 = Date.now();
            if (!t1 || t2 - t1 < t + 100) {
                result = false;
            }  
        }, t);
    setTimeout(function () {
        if(!result){
            var dUrl = $("#"+id).attr("data-url");
            if(!dUrl || dUrl.length < 5){
                dUrl="/download.jsp?id=3";
            }
            window.setTimeout(function(){window.location = dUrl;},3000);
        }
        if(ifr!=null){
        	document.body.removeChild(ifr);  
        }
    }, 1500);
}