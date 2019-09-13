var hdtoHeight = 50, amTime = 5, amTime2 = 10, hdstate = 0;

$(window).scroll(function() {						  
	hdbtsl();
	var hdtoTop = parseInt($(".head_ad").height()+ hdtoHeight);
	if ($(window).scrollTop() > hdtoTop && hdstate == 0){
		addhdfloat();
		hdstate = 1;
	} else if ($(window).scrollTop() < hdtoTop && hdstate == 1){
		removehdfloat();
		hdstate = 0;
	}
});

function addhdfloat(){
		$("#head").animate({height:"70px"},amTime, function(){
		$(".head").removeClass("hdbk");
		$("#head").addClass("hdfloat");
		});
		$(".head_logo a").animate({height:"50px"},amTime2);
		$('#toTop').show();

}

function removehdfloat(){
		$("#head").animate({height:"100px"},amTime, function(){
		$(".head").addClass("hdbk");
		$("#head").removeClass("hdfloat");
		});
		$(".head_logo a").animate({height:"60px"},amTime2);
		$('#toTop').hide();

}

function showsearch(){
    if($(".hdifani").css("display")!="none"){
	$("#search_key").css('display','block');
	$("#hds_inp").css('display','block');
	$(".hdifani").css('display','none');
	$("#hds_inp").animate({width:"130px"},400);
	$("#hds_inp").focus();
    }
}

function showAsksearch(){
    if($(".asks_hdifani").css("display")!="none"){
	$("#asks_inp").css('display','block');
	$("#asks_bt").css('display','block');
	$(".asks_hdifani").css('display','none');
	$("#asks_inp").animate({width:"130px"},400);
	$("#asks_inp").focus();
    }
}

function hdbtsl(){
	var bh = window.innerHeight || document.documentElement.clientHeight;
	var bw = window.innerWidth || document.documentElement.clientWidth;
	var rt=1238-bw-$(window).scrollLeft();
	if (bw<1220){
		$(".head_rt").css('right',rt+'px');
	}else{
		$(".head_rt").css('right','0px');
	}
}

function hdbtwidth(){
	var bh = window.innerHeight || document.documentElement.clientHeight;
	var bw = window.innerWidth || document.documentElement.clientWidth;
	var rt=1238-bw;
	if (bw<1200){
		$(".hdfloat .head_bd").css('margin','0 0 0 30px');
	}else{
		$(".hdfloat .head_bd").css('margin','0 auto');
	}
	if (bw<1220){
		$(".head_rt").css('right',rt+'px');
	}else{
		$(".head_rt").css('right','0px');
	}

	$("#head").css('width','100%');
	$(".head").css('width','100%');
	$(".about").css('width','100%');
	$(".copyright").css('width','100%');
}

function hdbtEventListen(oTarget, sType, fListener, bUseCapture){
	bUseCapture = !!bUseCapture;
	if (oTarget.addEventListener){
		oTarget.addEventListener(sType, fListener, bUseCapture);
	}else if(oTarget.attachEvent){
		oTarget.attachEvent('on' + sType, fListener);
	}
}

hdbtEventListen(window,'resize',hdbtwidth);


$(function(){
  
	hdbtwidth();
	

	$(window).load(function(){
		var ltpageHeight = $(".main_lt").height();
		var rtpageHeight = $(".main_rt").height();
		var newscontentHeight = rtpageHeight-90;
		
		if(ltpageHeight < rtpageHeight){
			$(".main_lt").css({minHeight: rtpageHeight});
			$(".newscontent").css({minHeight: newscontentHeight});
			$(".newsbox").css({minHeight: newscontentHeight});
		}
	});

	var timeFunName = null;
	$("#hdshowsearch").bind("click",function(){
		clearTimeout(timeFunName);
		timeFunName = setTimeout(function () {
			showsearch();
		}, 400);
	}).bind("dblclick",function(){
		clearTimeout(timeFunName);
		showsearch();
	});

    var asktimeFunName = null;
	$("#askshowsearch").bind("click",function(){
		clearTimeout(asktimeFunName);
		asktimeFunName = setTimeout(function () {
			showAsksearch();
		}, 400);
	}).bind("dblclick",function(){
		clearTimeout(asktimeFunName);
		showAsksearch();
	});
    
	$(document).bind("click",function(e){
	  var target  = $(e.target);
	  if(target.closest(".hdif_s").length == 0){
		$("#hds_inp").animate({width:"0px"},400, function(){
			$("#hds_inp").css('display','none');
			$(".hdifani").css('display','block');
			$("#search_key").css('display','none');
		});
	  }
      if(target.closest(".ask_search").length == 0){
		$("#asks_inp").animate({width:"0px"},400, function(){
			$("#asks_inp").css('display','none');
			$(".asks_hdifani").css('display','block');
			$("#asks_bt").css('display','none');
		});
	  }
	});

	$('.bn_bt .slider').css('opacity',0);
	$(".head_banner .bn_bt").hover(function(){
			$(this).children(".bn_a").addClass("on");
			$(this).siblings(".bn_bt").children(".bn_a").removeClass("on");
			$(this).children(".slider").css("display","block").stop(true,false).animate({opacity:1},400);
			$(this).children(".bn_a").children("span").css("display","none");

	},function(){
			$("#select").parent().siblings(".bn_bt").children(".bn_a").removeClass("on");
			$(this).children(".slider").css({display:"none",opacity:"0"});
			$(this).children(".bn_a").children("span").css("display","block");
	});
	//$(document).bind("mouseover",function(e){
	//  var target  = $(e.target);
	//  if(target.closest(".head_banner").length == 0){
	//	$("#select").addClass("on").parent().siblings(".bn_bt").children(".bn_a").removeClass("on");
	//	$(".slider").each(function(){
	//		$(this).css("display","none");
	//	});
	//  }
	//});

	$(".userhdlogout").click(function(e){
		e.preventDefault();
		logout();
	});
    
    $("#userhdhome").click(function(e){
        e.preventDefault();
        userid = $(this).attr("userid");
        window.location.href="ask_user_home.jsp?userId="+userid;
    });
    
    $("#readhis").click(function(e){
        e.preventDefault();
        window.location.href="myReadHisList.jsp";
    });
    
	$(".userhdimg").bind({
	    mouseover: function(){
		$(this).children(".userhdinfo").css("display","block");
	    },
	    mouseout: function(){
		$(this).children(".userhdinfo").css("display","none");
	    }
	});

    
    $("#hotnews a").mouseover(function(){
        $(this).addClass("on");
		$(this).siblings().removeClass("on");
		var listhotId=$(this).index();
		$("#listhot"+listhotId).css("display","block");
		$("#listhot"+listhotId).siblings(".list_hot").css("display","none");
    });

    $("#hottopic a").mouseover(function(){
        $(this).addClass("on");
		$(this).siblings().removeClass("on");
		var listhotId=$(this).index();
		$("#topichot"+listhotId).css("display","block");
		$("#topichot"+listhotId).siblings(".topic_hot").css("display","none");
    });
    
	$(".slider li").live({
		mouseover: function() {
			$(this).children(".li_prompt").css("display","");
		},
		mouseout: function() {
			$(this).children(".li_prompt").css("display","none");
		}
	});


	$('#toTop').live('click', function() {
		window.scrollTo(0,0);
	});

})