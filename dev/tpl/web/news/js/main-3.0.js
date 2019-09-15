//自动调整输入框高度
$(function(){
    $('textarea').live('keyup',function(e){
        autosize(document.querySelectorAll('textarea'));

    });
});

/*
$(function(){
    $('textarea').live('keyup',function(e){
      

        var clth = this.clientHeight;
        var curh = $(this).height();
        var sclh = this.scrollHeight;
        var minh = parseInt($(this).css("min-height"));
        var oldV = $(this).attr("old-value");
        var newV = $(this).val();
        if(!minh){
            $(this).css("min-height", curh+"px");
        }
        if (sclh > clth){
            $(this).height(curh + sclh - clth);
        }else if (oldV && oldV.length > newV.length){
            var lh = parseInt($(this).css("line-height"));
            if(!lh) lh = parseInt($(this).css("font-size"));
            if(!lh) lh = 10;
            while(true){
                curh = $(this).height();
                if(curh <= minh)break;
                curh = curh - lh ;pubComment
                if (curh <= minh)curh = minh;    
                $(this).height(curh); 
                clth = this.clientHeight;
                sclh = this.scrollHeight;
                if (sclh > clth){
                    $(this).height($(this).height() + sclh - clth);
                    break;
                }
            }
        }
        $(this).attr("old-value", newV);
    });
    
    $(".tiptitleImg").live('click', function (e) {
      var contId = $(this).attr("data-id");
      e.preventDefault();
      document.getElementById("clk"+contId).click();
    });
});
*/
/**/
var pubUrl = "/www/comment.msp";
var favUrl = "/www/addFavorite.msp";
var traceUrl="/www/addTrack.msp";
var priseUrl = "/www/commentPraise.msp";
var cancelFavUrl = "/www/deleteFavorite.msp";
var removeCommentUrl ="/www/removeComment.msp";


//type:1-删除;2-关闭;3-点赞;4-开启
function optTopic(topicId,type){
    var status = $("#topic"+topicId).attr("status");
    if(status == 1 && type == 1){
        return;
    }
    if(status == 4 && type == 2){
        return;
    }
    $.ajax({
      type : "post",
      url : "/www/optTopic.msp",
        data : "topicId=" + topicId+"&otype="+type,
      timeout : 30000,
      dataType : "json",
      success : function(data) {
        if (data.resultCode == "1") {
                if(type == 1){
                    $('#'+topicId).remove();
                    if($("#ask_topic_content").children("li").length ==0){
                        $(".ask_body").append('<div class="ask_topic_none2">还没有创建的话题哦，有什么想要和大家分享和探讨的，快去行动吧！<a href="ask_topic_create.jsp" >去创建</a></div>');
                    }
                }
                if(type == 2){
                    $(".ask_creator_askbt").html('<a id="topic'+topicId+'" href="javascript:optTopic('+topicId+',4);">开放提问</a>');
                    $("#topicstatus").html('已关闭提问');
                    $("#topic"+topicId).attr("status","1");
                }
                if(type == 3){
                    var isDetail = $('#'+topicId).attr("isdetail");
                    var times = parseInt($('#'+topicId).attr("times"));
                    
                    if(times > 1000){
                        $('#'+topicId).attr("onclick","javascript:;");
                    }
                    else{
                        $('#'+topicId).attr("onclick","javascript:;").html(data.praiseTimes);
                    }
                    
                    if(isDetail == 1){
                        $('#'+topicId).removeClass("zan").addClass("zan_ok").attr("href","javascript:;");
                    }
                    else{
                        $('#'+topicId).addClass("zan");
                    }
                }
                if(type == 4){
                    
                    $(".ask_creator_askbt").html('<a id="topic'+topicId+'" href="javascript:optTopic('+topicId+',2);">关闭提问</a>');                
                    $("#topicstatus").html('进行中...');
                    $("#topic"+topicId).attr("status","2");
                }
            
        }else if(data.resultCode == 2){
                  lgwdsshow();
            } else {                                
                $("#topic"+topicId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});   
            }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        $("#topic"+topicId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
        }
    });
}

function removeNotice(type, contid, index, commentId, commentType, isLogin){
    if(isLogin == false){
        lgwdsshow();
        return;
    }
    if(index.length == 0){
        index="''";
    }
    $("#bg_overlay").css('display','block');
    $(document.body).append("<div class=\"lg_wds\" id=\"deleteNotice\" style=\"padding-bottom:20px;\">"
    +"    <div class=\"lg_wds_title\">提示</div>"
    +"    <div class=\"lg_wds_prompt\">是否确认删除此发言？</div>"
    +"    <div class=\"lg_wds_bt2\" id=\"removeComment\">确 定</div>"
    +"    <div class=\"lg_wds_bt3 modal_close\" onclick=\"closeNotice()\">取 消</div>"
    +"    <div class=\"wds_close modal_close\" onclick=\"closeNotice()\"></div>"
    +"</div>");
    $("#removeComment").attr("onclick","javascript:removeComment("+type+","+contid+","+index+","+commentId+","+commentType+");");

}

//type:1 跟踪 2 收藏
function removeAllNotice(isLogin,type){
    if(isLogin == false){
        lgwdsshow();
        return;
    }

    if(type == 1){
        $("#bg_overlay").css('display','block');
        $(document.body).append("<div class=\"lg_wds\" id=\"removeAllTrackNotice\" style=\"padding-bottom:20px;\">"
        +"    <div class=\"lg_wds_title\">提示</div>"
        +"    <div class=\"lg_wds_prompt\">是否确定取消所有跟踪？</div>"
        +"    <div class=\"lg_wds_bt2\" id=\"removeAllTrack\">确 定</div>"
        +"    <div class=\"lg_wds_bt3 modal_close\" onclick=\"closeTrackNotice()\">取 消</div>"
        +"    <div class=\"wds_close modal_close\" onclick=\"closeTrackNotice()\"></div>"
        +"</div>");
        $("#removeAllTrack").attr("onclick","javascript:cancelAllTrack();");
    }
    else if(type == 2){
        $("#bg_overlay").css('display','block');
        $(document.body).append("<div class=\"lg_wds\" id=\"removeAllFavoritesNotice\" style=\"padding-bottom:20px;\">"
        +"    <div class=\"lg_wds_title\">提示</div>"
        +"    <div class=\"lg_wds_prompt\">是否确定删除所有收藏？</div>"
        +"    <div class=\"lg_wds_bt2\" id=\"removeAllFavorites\">确 定</div>"
        +"    <div class=\"lg_wds_bt3 modal_close\" onclick=\"closeFavoritesNotice()\">取 消</div>"
        +"    <div class=\"wds_close modal_close\" onclick=\"closeFavoritesNotice()\"></div>"
        +"</div>");
        $("#removeAllFavorites").attr("onclick","javascript:cancelAllFavorites();");
    }
    
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
            if (data.resultCode == "1") {
                $.ajax({          
                   url: jspurl,
                   data:"commentId="+commentId+ "&allAttents=${allAttents}"+"&index="+index+"&contid="+contid,
                   cache: false,
                   success: function(html){
                        if(document.getElementById(element) != null){
                            $("#"+element).html(html);
                        }
                   }
                }); 
            }else if(data.resultCode == 2){
                  lgwdsshow();
            }else {   
                $("#"+element).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});         
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown){
            $("#"+element).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});  
        }
    });
}

//commentType 2-新闻答问；3-话题答问
function pubQuestion(contid, commentType, isLogin, showHot){
    if(isLogin == false){
      lgwdsshow();
      return;
    }

    if($("#aswText").val().length  == 0){
      $("#aswText").leanModal({closeButton: ".modal_close",title:'错误提示',content:'请输入提问内容！'});
        return;
    }
    if($("#aswText").val().length  > 140){
      $("#aswText").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，提问不能超过140个字符'});
        return;
    }
    var content = encodeURIComponent($("#aswText").val());
    var data = "c=" + contid + "&commentType=" + commentType + "&content="+ content;
    if(commentType == 3){
        data = "ot=3"+"&c=" + contid + "&commentType=2" + "&content="+ content;
    }
    
        if (commentType)
        $.ajax({
            type : "post",
            url : pubUrl,
            data : data,
            timeout : 30000,
            dataType : "json",
            success : function(data) {
                if (data.resultCode == 1) {
                    if (commentType == 2){
                        $.ajax({          
                        url: "newDetail_aq.jsp",
                        data:"contid="+contid+"&showHot="+showHot,
                        cache: false,
                        success: function(html){
                          if(document.getElementById("news_aski") != null){
                            document.getElementById("aq_commt").removeChild(document.getElementById("news_aski"));
                            $(window).unbind('.infscr');
                          }
                          $("#aq_commt").append(html);
                        }
                        });
                    }
                    else if (commentType == 3){
                        $("#aswText").leanModal({closeButton: ".modal_close",title:'提示',content:data.resultMsg});
                        $("#aswText").val('');
                        $("#aswText").blur();
                        var oldCount = $("#questionCount").text().replace(/[^0-9]/ig,"");
                        var tempCount = parseInt(oldCount)+1;
                        var newStr = $("#questionCount").html().replace(oldCount,tempCount);
                        $("#questionCount").html(newStr);
                        var isattened = $("#guanzhu"+contid).attr("isattened");
                        var userId = $("#guanzhu"+contid).attr("userId");
                        if(isattened == 0 && getCookie(userId) == -1){
                            document.cookie = userId+'=userId';
                            $(".modal_close").attr("onclick","javascript:attentionNotice("+contid+");");
                        }
                        
                    }                     
                } else if(data.resultCode == 2){
                  lgwdsshow();
                } else {
                    if(data.resultCode == 11 || commentType == 3){
                        $("#aswText").val('');
                        $("#aswText").blur();
                    }                                
                    $("#aswText").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                $("#aswText").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
            }
        });
}

function pubComment(contid, commentType,isLogin){
    if(isLogin == false){
        lgwdsshow();
        return;
    }
    var commText = $("#commText");
    var content = $("#commText").val();
        commText.next().next().attr('disabled','true');

    if(content.length  == 0){
      commText.next().next().removeAttr('disabled');
      $("#commText").leanModal({closeButton: ".modal_close",title:'错误提示',content:'请输入评论内容！'});
        return;
    }
    if(content.length  > 800){
       commText.next().next().removeAttr('disabled');
      $("#commText").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，评论不能超过800个字符'});
        return;
    }
    content=encodeURIComponent(content||'');
    $.ajax({
      type : "post",
      url : pubUrl,
      data : "c=" + contid + "&commentType=" + commentType + "&content="+ content,
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
                   commText.next().next().removeAttr('disabled');
                     if(document.getElementById("commtid") != null){
                          document.getElementById("aq_commt").removeChild(document.getElementById("commtid"));
                          $(window).unbind('.infscr');
                     }
                     $("#aq_commt").append(html);
                 }
              });                                
          }                              
        }
        else if(data.resultCode == 2){
           commText.next().next().removeAttr('disabled');
          lgwdsshow();
        } 
        else {        
              if(data.resultCode == 11){
                  $(".input_aqw").val('');
                  $("#commText").blur();
              }                        
              $("#commText").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
              commText.next().next().removeAttr('disabled');
        }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown){
         commText.next().next().removeAttr('disabled');
        $("#commText").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
      }
    }); 
}

function replyComment(contid,commentType,isLogin,parentId){
    if(isLogin == false){
        lgwdsshow();
        return;
    }
  
    var content = $("#commText" + parentId).val();
    $("#commText" + parentId).next().next().attr('disabled','true');
    if(content.length  == 0){
       $("#commText" + parentId).next().next().removeAttr('disabled');
      $("#commText").leanModal({closeButton: ".modal_close",title:'错误提示',content:'请输入评论内容！'});
        return;
    }
    if(content.length  > 800){
      $("#commText" + parentId).next().next().removeAttr('disabled');
      $("#commText").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，评论不能超过800个字符'});
        return;
    }
    content=encodeURIComponent(content||'');
    $.ajax({
      type : "post",
      url : pubUrl,
      data : "c=" + contid + "&commentType=" + commentType + "&content=" + content + "&quoteId=" + parentId,
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
                  $("#commText" + parentId).next().next().removeAttr('disabled');
                     if(document.getElementById("commtid") != null){
                          document.getElementById("aq_commt").removeChild(document.getElementById("commtid"));
                          $(window).unbind('.infscr');
                     }
                     $("#aq_commt").append(html);
                 }
              });                                
          }                              
        }
        else if(data.resultCode == 2){
            lgwdsshow();
            $("#commText" + parentId).next().next().removeAttr('disabled');
        } 
        else {        
              if(data.resultCode == 11){
                  $(".input_aqw").val('');
                  $("#commText").blur();
              }                        
              $("#commText").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
              $("#commText" + parentId).next().next().removeAttr('disabled');
        }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown){
         $("#commText" + parentId).next().next().removeAttr('disabled');
        $("#commText").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
      }
    }); 
}

function followComment(contid, commentType,parentId){
    var content = $("#input_text"+parentId).val();
    $.ajax( {
      type : "post",
      url : pubUrl,
      data :  "c="+contid+"&commentType=" + commentType + "&content="+ content + "&parentId="+parentId,
      timeout : 30000,
      dataType : "json",
      success : function(data) {
        if (data.resultCode == "1") {
          window.location.reload();                              
        }else if(data.resultCode == 2){
                  lgwdsshow();
        }else {
            if(data.resultCode == 11){
                $("#input_text"+parentId).val('');
                $("#input_text"+parentId).blur();
            }                                
           $("#input_text"+parentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
        }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        $("#input_text"+parentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
      }
    });
}

function pubAnswer(contid, commentType,parentId){
    var content = $("#input_ians"+parentId).val();
          content=encodeURIComponent(content||'');
    $.ajax( {
      type : "post",
      url : pubUrl,
      data : "c=" + contid + "&commentType=" + commentType + "&content="+ content + "&parentId="+parentId,
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
                       if(document.getElementById("commtid") != null){
                            document.getElementById("aq_commt").removeChild(document.getElementById("commtid"));
                            $(window).unbind('.infscr');
                       }
                       $("#aq_commt").append(html);
                   }
                });                                
            } else {
                $.ajax({          
                   url: "newDetail_aq.jsp",
                   data:"contid="+contid,
                   cache: false,
                   success: function(html){
                       if(document.getElementById("news_aski") != null){
                            document.getElementById("aq_commt").removeChild(document.getElementById("news_aski"));
                            $(window).unbind('.infscr');
                       }
                       $("#aq_commt").append(html);
                   }
                }); 
            }
        }else if(data.resultCode == 2){
                  lgwdsshow();
        } else {
              if(data.resultCode == 11){
                  $("#input_ians"+parentId).val('');
                  $("#input_ians"+parentId).blur();
              }
              $("#input_ians"+parentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});                                                 
        }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown){
        $("#input_ians"+parentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
      }
    });
}

function pubFollow(contid, commentType,parentId){
    var content = $("#text_"+parentId).val();
          
    $.ajax( {
      type : "post",
      url : pubUrl,
      data : "c=" + contid + "&commentType=" + commentType + "&content="+ content + "&parentId="+parentId,
      timeout : 30000,
      dataType : "json",
      success : function(data) {
          if (data.resultCode == "1") {                              
              $("#cur_ans").removeClass("cur");
              $("#comm_span").addClass("cur");
              $.ajax({  
                url:"newDetail_commt.jsp",
                cache: false,
                data:"contid="+contid,
                success: function(html){
                  if(document.getElementById("news_aski") != null){
                     document.getElementById("aq_commt").removeChild(document.getElementById("news_aski"));
                     $(window).unbind('.infscr');
                  }                 
                   $("#aq_commt").append(html);
                }
             });      
         }else if(data.resultCode == 2){
                  lgwdsshow();
         }else {
            if(data.resultCode == 11){
                $("#text_"+parentId).val('');
                $("#text_"+parentId).blur();
            }
            $("#text_"+parentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
         }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        $("#text_"+parentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
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
                      
                      //$("#hot_ans_more_other"+commentId).html('<a href="javascript:checkAswMore('+commentId+')">收起更多回答</a>');
                      a_pageidx ++ ;
                      a_begin = 0 ;
                    }
                    
                }
                   
            }
     });
}


function reply(commentId){
   var obj = $("#comm_textarea"+commentId);
    if(obj.css("display")=="none"){
        obj.fadeIn("slow");
        obj.siblings(".ansright_time").children("a").last().css({color: "#00a5e8"});
        obj.siblings("h3").children(".ans_zan").children("a").last().css({color: "#00a5e8"});
        return;
    }
    if(obj.css("display")=="block"){
        obj.siblings(".ansright_time").children("a").last().css({color: "#a0a0a0"});
        obj.siblings("h3").children(".ans_zan").children("a").last().css({color: "#a0a0a0"});
        obj.hide();
    }
    
     var quickObj = $("#commquick_textarea"+commentId);
                quickObj.hide();
}


function quickreply(commentId){
   var obj = $("#commquick_textarea"+commentId);
    if(obj.css("display")=="none"){
        obj.fadeIn("slow");
        obj.siblings(".ansright_time").children("a").last().css({color: "#00a5e8"});
        obj.siblings("h3").children(".ans_zan").children("a").last().css({color: "#00a5e8"});
        return;
    }
    if(obj.css("display")=="block"){
        obj.siblings(".ansright_time").children("a").last().css({color: "#a0a0a0"});
        obj.siblings("h3").children(".ans_zan").children("a").last().css({color: "#a0a0a0"});
        obj.hide();

    }
     $("#comm_textarea"+commentId).find("button").css("background-color","#00a5e8");
     $("#ians_textarea"+commentId).find("button").css("background-color","#00a5e8");
     $("#ians_textarea"+commentId).find("button").removeAttr("disabled");
}



function letmeAnswer(commentId){
    var obj = $("#ians_textarea"+commentId);
    if(obj.css("display")=="none"){
        obj.fadeIn("slow");
        obj.siblings(".qustime").children("a").first().css({color: "#00a5e8"});
        if($("#no_ans").attr("class") == "cur"){
          obj.parent().siblings(".qusright").children("h3").children(".qusright_att").children("a").last().css({color: "#00a5e8"});  
        }
        else{
            obj.parent().siblings(".qusright").children("h3").children(".qusright_att").children("a").first().css({color: "#00a5e8"});
        }
        
        return;
    }
    if(obj.css("display")=="block"){
        obj.siblings(".qustime").children("a").first().css({color: "#a0a0a0"});
        if($("#no_ans").attr("class") == "cur"){
            obj.parent().siblings(".qusright").children("h3").children(".qusright_att").children("a").last().css({color: "#a0a0a0"});
        }
        else{
            obj.parent().siblings(".qusright").children("h3").children(".qusright_att").children("a").first().css({color: "#a0a0a0"});
        }
        
        obj.hide();
    }
}

function favoriteCont2(isLogin,type){
    if(isLogin == false){
        lgwdsshow();
        return;
    }  
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
                //obj[0].href="javascript:cancelFavoriteCont();";
                //obj.html('<img src="../img/love_big_f.png" alt="" /><span>已收藏</span>');
                //obj.html('已收藏');
                if(type == 7){
                    obj.html('已收藏').attr("href","javascript:cancelFavoriteCont("+isLogin+","+type+");").removeClass("shoucang").addClass("shoucang_ok");
                }
                else{
                    obj.html('已收藏').attr("href","javascript:cancelFavoriteCont("+isLogin+","+type+");").removeClass("shoucang").addClass("shoucang_ok");
                }
                
            }else if(data.resultCode == 2){
                  lgwdsshow();
            } else {
                $("#shoucang").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg}); 
                //alert(data.resultMsg);      
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            $("#shoucang").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
        }
    });
}

function priseCommt(commentId, priseTimes, isIndex){
  
    $.ajax( {
      type : "post",
      url : priseUrl,
        data : "commentId=" + commentId,
      timeout : 30000,
      dataType : "json",
      success : function(data) {
        if (data.resultCode == "1") {
            
                if(isIndex >= 0){
                    if(priseTimes >1000){
                        $('#'+commentId+isIndex).children("span").addClass("zan").attr("onclick","javascript:;");
                    }
                    else{
                        $('#'+commentId+isIndex).html('<span class="zan"></span><p>'+data.praiseTimes+'</p>');
                    }
                    
                }
                else{
                    if(typeof($('#'+commentId).attr("onclick")) != "undefined"){
                        if(priseTimes >1000){
                            $('#'+commentId).addClass("zan").attr("onclick","javascript:;");
                        }
                        else{
                            $('#'+commentId).addClass("zan").attr("onclick","javascript:;").html(data.praiseTimes);
                        }
                        
                    }
                    else{
                        if(priseTimes >1000){
                            $('#'+commentId).addClass("zan").attr("href","javascript:;");
                        }
                        else{
                            $('#'+commentId).addClass("zan").attr("href","javascript:;").html(data.praiseTimes);
                        }
                        
                    }
                    
                }
      
        } else {                                
                $("#"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
        }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        $("#"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
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
          if(priseTimes > 1000){
                    $('#hotqa'+commentId).addClass("zan").attr("href","javascript:;");
                }
                else{
                    $('#hotqa'+commentId).addClass("zan").attr("href","javascript:;").html(data.praiseTimes);
                }
          

        } else {
          $("#hotqa"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});                                
        }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        $("#hotqa"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
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
                $('#'+commentId).html('<img src="../img/love_com.png" alt="" /><span>'+data.praiseTimes+
                '</span><a href="javascript:reply('+commentId+')" id="comm_reply">回复</a>');
            } else {      
          $("#"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});                          
              
            }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        $("#"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
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
        $("#"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
      }
    });
}

function cancelFavoriteCont(isLogin,type){
    if(isLogin == false){
        lgwdsshow();
        return;
    }
    var obj = $("#shoucang");
    var contid = $('#hidden_contid').val(); 
    $.ajax({
        type : "post",
        url : "/www/deleteFavorite.msp",
        data : "c=" + contid,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {
                //obj[0].href="javascript:favoriteCont2();";
                //obj.html('<img src="../img/love_big.png" alt="" /><span>收藏</span>');
                if(type == 7){
                        obj.html('收藏').attr("href","javascript:favoriteCont2("+isLogin+","+type+");").removeClass("shoucang_ok").addClass("shoucang");
                }
                else{
                        obj.html('收藏').attr("href","javascript:favoriteCont2("+isLogin+","+type+");").removeClass("shoucang_ok").addClass("shoucang");
                }
                
            }else if(data.resultCode == 2){
                  lgwdsshow();
            } else {                                
                $("#shoucang").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});  
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
           $("#shoucang").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
        }
    });
}

function cancelTrack(contid,count){
    if (contid)
        $.ajax( {
        type : "post",
        url : "/www/cancelTrack.msp",
        data : "contIds=" + contid,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {           
                //window.location.reload();
              if(count > 1){
                    $('#'+contid).remove();
              }
                
              if(count == 1){
               window.location.reload();
              }
            } else {                                
                 $("#favorites"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});     
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            $("#favorites"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
        }
    });
}

function cancelAllTrack(){
    closeTrackNotice();
    $.ajax({
        type : "post",
        url : "/www/cancelTrack.msp",
        data : "",
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {           
                window.location.reload();
              
            } else {                                
                 $("#track_delall").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});     
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            $("#track_delall").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
        }
    });
}

function trackCont(isLogin){
    if(isLogin == false){
        lgwdsshow();
        return;
    }
    var obj = $("#genzong");
    if(obj.attr("data-disabled")=="false"){
        return;
    }
    obj.attr("data-disabled","false");
    
    var contid = $('#hidden_contid').val();
    $.ajax( {
        type : "post",
        url : traceUrl,
        data : "c=" + contid,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            obj.attr("data-disabled","true");
            if (data.resultCode == "1" || data.resultMsg == "已经跟踪") {
                //obj[0].href="javascript:cancelTrackCont();";
                //obj.html('<img src="../img/track_big_f.png" alt="" /><span>已跟踪</span>');
                $("#news_keyword").width(136);
                obj.html('已' + obj.html()).attr("href","javascript:cancelTrackCont("+isLogin+");").removeClass("genzong").addClass("genzong_ok");                      
            }else if(data.resultCode == 2){
                lgwdsshow();
            } else{                                
                $("#genzong").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});    
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            obj.attr("data-disabled","true");
            $("#genzong").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
        }
    });
}
function cancelTrackCont(isLogin){
    if(isLogin == false){
        lgwdsshow();
        return;
    }
    var obj = $("#genzong");
    if(obj.attr("data-disabled")=="false"){
        return;
    }
    obj.attr("data-disabled","false");
    var contid = $('#hidden_contid').val();
    $.ajax( {
        type : "post",
        url : "/www/cancelTrack.msp",
        data : "c=" + contid,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            obj.attr("data-disabled","true");
            if (data.resultCode == "1") {
                //obj[0].href="javascript:trackCont();";
                //obj.html('<img src="../img/track_big.png" alt="" /><span>跟踪</span>');
                $("#news_keyword").width(148);
                obj.html(obj.html().substring(1)).attr("href","javascript:trackCont("+isLogin+");").removeClass("genzong_ok").addClass("genzong");
            } else if(data.resultCode == 2){
                lgwdsshow();
            }else{                                
                $("#genzong").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg}); 
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            obj.attr("data-disabled","true");
            $("#genzong").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
        }
    });
}

function voteCont(type){ 
    var obj = $("#zan");
    var contid = $('#hidden_contid').val();
    $.ajax( {
        type : "post",
        url : "/www/addVote.msp",
        data : "contentId=" + contid,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {
                //obj[0].href="javascript:void(0);";                              
                //obj.html('<img src="../img/zan_big_f.png" alt="" /><span>'+data.voteTimes+'</span>');
                if(type == 7){
                    obj.html(data.voteTimes).attr("href","javascript:void(0);").removeClass("zan").addClass("zan_ok");
                }
                else{
                    obj.html(data.voteTimes).attr("href","javascript:void(0);").removeClass("zan").addClass("zan_ok");
                }
                
            } else {                                
                $("#zan").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
                //alert(data.resultMsg);      
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            $("#zan").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
        }
    });
}

function addAttention(commentId, isLogin,type){
    if(isLogin == false){
      lgwdsshow();
      return;
    }

    var obj = $("#guanzhu"+commentId);
    var objId = "guanzhu"+commentId;
    $.ajax( {
      type : "post",
      url : "/www/addAttention.msp",
        data : "commentId=" + commentId+"&ot=" + type,
      timeout : 30000,
      dataType : "json",
      success : function(data) {
        if (data.resultCode == "1") {
                if(type == 0){
                    obj[0].href="javascript:canAttention("+commentId+","+isLogin+",0)";
                    obj.html('已关注'); 
                }
                else if(type == 1){
                    obj.attr("onclick","javascript:canAttention("+commentId+","+isLogin+",1);");
                    obj.addClass("trbs_ygz wgz");
                    closeAttentionNotice();
                    $("#guanzhu"+commentId).attr("isattened","1");
                }              
        }else if(data.resultCode == 2){
                  lgwdsshow();
            } else {                     
                    $("#guanzhu"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});             
            }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        $("#guanzhu"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
      }
    });
}

function canAttention(commentId, isLogin,type){
    if(isLogin == false){
      lgwdsshow();
      return;
    }
    var obj = $("#guanzhu"+commentId);
    var objId = "guanzhu"+commentId;
    $.ajax( {
      type : "post",
      url : "/www/cancelAttention.msp",
        data : "commentId=" + commentId+"&ot=" + type,
      timeout : 30000,
      dataType : "json",
      success : function(data) {
        if (data.resultCode == "1") {
                if(type == 0){
                    obj[0].href="javascript:addAttention("+commentId+","+isLogin+",0)";
                    obj.html('关注');
                }
                else if(type == 1){
                    obj.attr("onclick","javascript:addAttention("+commentId+","+isLogin+",1);");
                    obj.removeClass("wgz");
                    $("#guanzhu"+commentId).attr("isattened","0");
                }  
                 
        }else if(data.resultCode == 2){
                  lgwdsshow();
        } else {                                
              $("#guanzhu"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});     
        }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        $("#guanzhu"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
      }
    });
}

function cancelAttention(commentId,type){     
    $.ajax( {
      type : "post",
      url : "/www/cancelAttention.msp",
        data : "commentId=" + commentId+"&ot="+type,
      timeout : 30000,
      dataType : "json",
      success : function(data) {
        if (data.resultCode == "1") {
              //window.location.reload(); 
              $('#'+commentId).remove();
              if(type == 1){
                if($("#ask_topic_content").children("li").length ==0){
                    $(".ask_body").append('<div class="ask_topic_none2">还没有关注的话题哦，快去问吧逛逛吧！<a href="ask_index.jsp">去问吧</a>');
                }
              }
              else if(type == 0){
                if($("#attention_content").children(".qag_li").length ==0){
                    $(".newscontent").append('<div class="track_tips clearfix"><p style="width:394px;">看问答时，点击（关注）按钮，关注一个问题，这里将集纳对该问题的新旧回答。</p><img src="../img/noguanzhu_info.png" style="width:230px;" /></div>');
                }
              }
        }else if(data.resultCode == 2){
                  lgwdsshow();
        } else {                                
              $("#guanzhu"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});   
        }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        $("#guanzhu"+commentId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
      }
    });
}

function cancelAllFavorites(){
    closeFavoritesNotice();
    $.ajax({
        type : "post",
        url : cancelFavUrl,
        data : "",
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {           
                window.location.reload();
              
            } else {                                
                 $("#favorites_delall").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});     
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            $("#favorites_delall").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
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
      } else if(data.resultCode == 2){
            lgwdsshow();
      }else {                                
           $('#favorites'+contid).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
      }
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
      $('#favorites'+contid).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
    }
  })
}

function showCancelbutton(contId){
       //alert($('#'+contId).style);
       $('#favorites'+contId).show();
       $("#f"+contId).css({ background: "#f1f1f1" });
}

function hideCancelbutton(contId){
       $('#favorites'+contId).hide();
       $("#f"+contId).css({ background: "none" });
}

function showShare(contId,title,picUrl,portalUrl){
  title = "'"+title+"'";
  picUrl = "'"+picUrl+"'";
  portalUrl = "'"+portalUrl+"'";
  $("#cont"+contId).css({ background: "#f1f1f1" });
  $("#index"+contId).append('<div class="share_live24" id="share"><a href="javascript:showTorenren('+contId+','+title+','+picUrl+','+portalUrl+');" id="share_share01"></a><a href="javascript:showToTencent('+contId+','+title+','+picUrl+','+portalUrl+');" id="share_share02" ></a><a href="javascript:showToSina('+contId+','+title+','+picUrl+','+portalUrl+');" id="share_share03"></a><span>分享到&nbsp;&nbsp;</span></div>');
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

function ToTencent(title,picUrl){
    var _url = encodeURIComponent(document.location);
        var pp = encodeURI("");
        var _t = encodeURI("【"+title+"】");
    var _appkey = encodeURI("801495950");//你从腾讯获得的appkey
    var _pic = encodeURI(picUrl);//（例如：var _pic='图片url1|图片url2|图片url3....）
    var _site = '';//你的网站地址
    var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function ToSina(title,picUrl){
    var _url = encodeURIComponent(document.location);
        var pp = encodeURI("");
        var _t = encodeURI("【"+title+"】");
    var _appkey = encodeURI("441808809");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _u = 'http://service.weibo.com/share/share.php?url='+_url+'&appkey='+_appkey+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function Torenren(title,picUrl,description){
    var _url = encodeURIComponent(document.location);
        var _t = encodeURI("【"+title+"】");
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    //var _u = '/share.renren.com/share/buttonshare.do?title='+_t+'&link='+_url+'&pic='+_pic;
    var _u = 'http://widget.renren.com/dialog/share?resourceUrl='+_url+'&srcUrl='+_url+'&title='+_t+'&pic='+_pic+'&description='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function Tozone(title,picUrl,description){
    var _url = encodeURIComponent(document.location);
        var _t = encodeURI("【"+title+"】");
        var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
        var _d = !description? _t : encodeURI(description);
    var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+_url+'&title='+_t+'&pics='+_pic+'&desc='+_d+'&summary='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function Todouban(title,picUrl,description){
    var _url = encodeURIComponent(document.location);
        var _t = encodeURI("【"+title+"】");
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
        var _u = 'http://www.douban.com/share/service?text='+_d+'&name='+_t+'&title='+_t+'&href='+_url+'&url='+_url+'&image='+_pic+'&bm=1&v=1';
        window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showToTencent(contId,title,picUrl,portalUrl){
    var localurl = portalUrl+"/plus/view.php?aid="+contId;
        var pp = encodeURI("");
        var _t = encodeURI("【"+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("801495950");//你从腾讯获得的appkey
    var _pic = encodeURI(picUrl);//（例如：var _pic='图片url1|图片url2|图片url3....）
    var _site = '';//你的网站地址
    var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showToSina(contId,title,picUrl,portalUrl){
    var localurl = portalUrl+"/plus/view.php?aid="+contId;
        var pp = encodeURI("");
        var _url = encodeURIComponent(localurl);
        var _t = encodeURI("【"+title+"】");
    var _appkey = encodeURI("441808809");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _u = 'http://service.weibo.com/share/share.php?url='+_url+'&appkey='+_appkey+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showTorenren(contId,title,picUrl,portalUrl,description){
    var localurl = portalUrl+"/plus/view.php?aid="+contId;
        var _t = encodeURI("【"+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    //var _u = '/share.renren.com/share/buttonshare.do?title='+_t+'&link='+_url+'&pic='+_pic;
    var _u = 'http://widget.renren.com/dialog/share?resourceUrl='+_url+'&srcUrl='+_url+'&title='+_t+'&pic='+_pic+'&description='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showToZone(contId,title,picUrl,portalUrl,description){
    var localurl = portalUrl+"/plus/view.php?aid="+contId;
        var _t = encodeURI("【"+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+_url+'&title='+_t+'&pics='+_pic+'&desc='+_d+'&summary='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showTodouban(contId,title,picUrl,portalUrl,description){
    var localurl = portalUrl+"/plus/view.php?aid="+contId;
        var _t = encodeURI("【"+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    var _u = 'http://www.douban.com/share/service?text='+_d+'&name='+_t+'&title='+_t+'&href='+_url+'&url='+_url+'&image='+_pic+'&bm=1&v=1';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function topicToTencent(title,picUrl){
    var _url = encodeURIComponent(document.location);
        var pp = encodeURI("");
        var _t = encodeURI("【"+title+"】");
    var _appkey = encodeURI("801495950");//你从腾讯获得的appkey
    var _pic = encodeURI(picUrl);//（例如：var _pic='图片url1|图片url2|图片url3....）
    var _site = '';//你的网站地址
    var _u = '/v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function topicToSina(title,picUrl){
    var _url = encodeURIComponent(document.location);
        var pp = encodeURI("");
        var _t = encodeURI("【"+title+"】");
    var _appkey = encodeURI("441808809");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _u = '/service.weibo.com/share/share.php?url='+_url+'&appkey='+_appkey+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function topicTorenren(title,picUrl,description){
    var _url = encodeURIComponent(document.location);
        var _t = encodeURI("【"+title+"】");
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? encodeURI(title) : encodeURI(description);
    //var _u = '/share.renren.com/share/buttonshare.do?title='+_t+'&link='+_url+'&pic='+_pic;
    var _u = '/widget.renren.com/dialog/share?resourceUrl='+_url+'&srcUrl='+_url+'&title='+_t+'&pic='+_pic+'&description='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function topicToZone(title,picUrl,description){
    var _url = encodeURIComponent(document.location);
        var _t = encodeURI("【"+title+"】");
    var _d = !description? encodeURI(title) : encodeURI(description);
    var _pic = encodeURI(picUrl);//（例如：var _pic='图片url1|图片url2|图片url3....）
    var _site = '';//你的网站地址
    var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+_url+'&title='+_t+'&pics='+_pic+'&desc='+_d+'&summary='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function topicTodouban(title,picUrl,description){
    var _url = encodeURIComponent(document.location);
        var _t = encodeURI("【"+title+"】");
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? encodeURI(title) : encodeURI(description);
    var _u = 'http://www.douban.com/share/service?text='+_d+'&name='+_t+'&title='+_t+'&href='+_url+'&url='+_url+'&image='+_pic+'&bm=1&v=1';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function askToTencent(contId,title,picUrl,portalUrl){
    var localurl = portalUrl+"/asktopic_detail_"+contId;
        var pp = encodeURI("");
        var _t = encodeURI("【"+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("801495950");//你从腾讯获得的appkey
    var _pic = encodeURI(picUrl);//（例如：var _pic='图片url1|图片url2|图片url3....）
    var _site = '';//你的网站地址
    var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function askToSina(contId,title,picUrl,portalUrl){
    var localurl = portalUrl+"/plus/view.php?aid="+contId;
        var pp = encodeURI("");
        var _url = encodeURIComponent(localurl);
        var _t = encodeURI("【"+title+"】");
    var _appkey = encodeURI("441808809");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _u = 'http://service.weibo.com/share/share.php?url='+_url+'&appkey='+_appkey+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function askTorenren(contId,title,picUrl,portalUrl,description){
    var localurl = portalUrl+"/plus/view.php?aid="+contId;
        var _t = encodeURI("【"+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    //var _u = '/share.renren.com/share/buttonshare.do?title='+_t+'&link='+_url+'&pic='+_pic;
    var _u = 'http://widget.renren.com/dialog/share?resourceUrl='+_url+'&srcUrl='+_url+'&title='+_t+'&pic='+_pic+'&description='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function askTodouban(contId,title,picUrl,portalUrl,description){
    var localurl = portalUrl+"/plus/view.php?aid="+contId;
        var _t = encodeURI("【"+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    var _u = 'http://www.douban.com/share/service?text='+_d+'&name='+_t+'&title='+_t+'&href='+_url+'&url='+_url+'&image='+_pic+'&bm=1&v=1';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function askToZone(contId,title,picUrl,portalUrl,description){
    var localurl = portalUrl+"/plus/view.php?aid="+contId;
        var _t = encodeURI("【"+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+_url+'&title='+_t+'&pics='+_pic+'&desc='+_d+'&summary='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}


function addHotAttention(commentId,index,isLogin){
    if(isLogin == false){
        lgwdsshow();
        return;
    }

    var obj = $("#guanzhu"+commentId+index);
    $.ajax( {
      type : "post",
      url : "/www/addAttention.msp",
      data : "commentId=" + commentId,
      timeout : 30000,
      dataType : "json",
      success : function(data) {
        if (data.resultCode == "1") {
              obj[0].href="javascript:canHotAttention("+commentId+","+index+")";
              obj.html('已关注');   
        } else if(data.resultCode == 2){
                  lgwdsshow();
        }else {                     
          $("#guanzhu"+commentId+index).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});             
        }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        $("#guanzhu"+commentId+index).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
      }
    });
}

function canHotAttention(commentId,index,isLogin){
    if(isLogin == false){
        lgwdsshow();
        return;
    }

    var obj = $("#guanzhu"+commentId+index);
    $.ajax( {
      type : "post",
      url : "/www/cancelAttention.msp",
      data : "commentId=" + commentId,
      timeout : 30000,
      dataType : "json",
      success : function(data) {
        if (data.resultCode == "1") {
              obj[0].href="javascript:addHotAttention("+commentId+","+index+")";
              obj.html('关注');   
        }else if(data.resultCode == 2){
                  lgwdsshow();
        } else {                                
              $("#guanzhu"+commentId+index).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});     
        }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        $("#guanzhu"+commentId+index).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
      }
    });
}

function loadorder(){

  $.ajax({
    type  : "post",
    url   : "../jsp/load_order.jsp?rt="+Math.random(),
    timeout : 30000,
    dataType  : "html",
    success:function(dataHtml){
      if(dataHtml.indexOf("lilt_pt")>-1){
        $("#slider5").html(dataHtml);

      } else {
        //alert("加载出错，请稍后再试");
      }
    },
    error:function(XMLHttpRequest, textStatus, errorThrown){
      //alert("加载失败，请稍后再试");
    }
  });

}

function forgetpwdlgshow(){
  $("#forgetpwdlgwds").siblings(".lg_wds").css("display","none");
  $("#bg_overlay").css('display','block');
  $("#forgetpwdlgwds").css('display','');
}

function registermsgwdscancer(){
  $("#registermsgwds").css('display','none');
  $("#bg_overlay").css('display','none');
}

function agreementshow(){
  //$("#agreementtxt").css('display','');
  $("#agreementtxt").toggle();
}

function closeTrackNotice(){
  //$("#removeAllTrackNotice").css('display','none');
    $("#removeAllTrackNotice").remove();
  $("#bg_overlay").css('display','none');
}

function closeFavoritesNotice(){
  //$("#removeAllFavoritesNotice").css('display','none');
    $("#removeAllFavoritesNotice").remove();
  $("#bg_overlay").css('display','none');
}

function closeNotice(){
  //$("#deleteNotice").css('display','none');
    $("#deleteNotice").remove();
  $("#bg_overlay").css('display','none');
}


function closeTopicNotice(){
  //$("#updateTopicNotice").css('display','none');
    $("#updateTopicNotice").remove();
  $("#bg_overlay").css('display','none');
}

function closeAttentionNotice(){
  //$("#attentionNotice").css('display','none');
    $("#attentionNotice").remove();
  $("#bg_overlay").css('display','none');
}

function attentionNotice(commentId){
    $("#bg_overlay").css('display','block');
    $(document.body).append("<div class=\"lg_wds\" id=\"attentionNotice\" style=\"padding-bottom:20px;\">"
    +"    <div class=\"lg_wds_title\">提示</div>"
    +"    <div class=\"lg_wds_prompt\">是否关注话题？</div>"
    +"    <div class=\"lg_wds_bt2\" id=\"attNotice\">马上关注</div>"
    +"    <div class=\"lg_wds_bt3 modal_close\" onclick=\"closeAttentionNotice()\">知道了</div>"
    +"    <div class=\"wds_close modal_close\" onclick=\"closeAttentionNotice()\"></div>"
    +"</div>");
    $("#attNotice").attr("onclick","javascript:addAttention("+commentId+",true,1);");
    $(".modal_close").removeAttr("onclick");
    $(".modal_close").attr("onclick","javascript:closeAttentionNotice();");
}

function showText(text,password,value){
  var pwdValue=document.getElementById(password).value;
  if(pwdValue==null||pwdValue.trim==""||pwdValue.length<1){
    document.getElementById(text).value=value;
    document.getElementById(text).style.display="";
    document.getElementById(password).style.display="none";
  }
}

function showPassWord(text,password){
  document.getElementById(text).style.display="none";
  document.getElementById(password).style.display="";
  document.getElementById(password).focus();
}

function clearReply(commentId){
    $("#icommt_commt"+commentId).hide();
}

function displayReply(commentId){
    if ($("#commText"+commentId).val() == ""){
         $("#icommt_commt"+commentId).show();
    } 
}

function disappearReply(commentId){
     $("#icommt_commt"+commentId).hide();       
     $("#commText"+commentId).focus(); 
}

//type=1 点问题；type=2 点回答
function pointReplyAnswer(contid, parentId, anId, isLogin, type){
    if(isLogin == false){
        lgwdsshow();
        return;
    }
    
    var content = $("#commText" + anId).val();
    
    if(content == ''){
        $("#commText" + anId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'请输入你的评论！'});
        return ;
    }
    if(content.length  > 800){
        $("#commText" + anId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，评论不能超过800个字符！'});
        return ;
    }
    content = $.trim(content);
    content=encodeURIComponent(content||'');
    
    var loadfile,loadData;
    if(type == 1){
      loadfile = "moreAnswer.jsp";
      loadData = "contid="+contid+"&commentid="+parentId;
    }
    else{
      loadfile = "moreAq.jsp";
      loadData = "contid="+contid+"&parentid="+parentId;
      
    }
    $.ajax({
        type : "post",
        url : pubUrl,
        data : "c=" + contid + "&commentType=3" + "&content=" + content + "&quoteId=" + anId + "&parentId=" + parentId,
        timeout : 30000,
        dataType : "json",
        success : function(data) {
            if (data.resultCode == "1") {
                var cid = data.comment.commentId;
                $.ajax({          
                   url: loadfile,
                   data: loadData,
                   cache: false,
                   success: function(html){
                       if(document.getElementById("news_aski") != null){
                           $('#news_aski').remove();
                       }
                       if(document.getElementById("more_que_about") != null){
                            $('#more_que_about').remove();
                       }
                       $("#aq_commt").append(html);
                       $("#commText" + anId).val('');
                       location.hash = "#news_aski";
                   }
                }); 
            } else {
                if(data.resultCode == 11){
                    $("#commText" + anId).val('');
                    $("#commText" + anId).blur();
                }
                $("#commText" + anId).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            $("#commText" + anId).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
        }
    });
}

function shareNews(wwwUrl){
  $(".news_li").each(function(){
      var contType = $(this).children(".pdtt_trbs").children(".trbstxt").text();
      var id = $(this).attr("id");
      
      var contId,title,picUrl,portalUrl,description;
      contId = id.substring(4,id.length);
      title = $(this).find("h2").text();
      title = $.trim(title);
      description = $(this).find("p").text();
      description = $.trim(description);
      if($(this).find("img")[0]){
        picUrl = $(this).find("img")[0].src;
        picUrl = $.trim(picUrl);
      }
      
      if(contType == "专题"){
        picUrl = "/file.thepaper.cn/www/v3/img/special_share_icon.jpg";
      }
      portalUrl = wwwUrl;
  
      title = "'"+title+"'";
      picUrl = "'"+picUrl+"'";
      portalUrl = "'"+portalUrl+"'";
      description = "'"+description+"'";
      $(this).hover(function(){
        //$("#cont"+contId).css({ background: "#f1f1f1" });
        $("#cont"+contId).append('<div class="news_share" id="share"><span>分享到</span><a href="javascript:showToSina('+contId+','+title+','+picUrl+','+portalUrl+');" class="share_sina"></a><a href="javascript:showToZone('+contId+','+title+','+picUrl+','+portalUrl+','+description+');" class="share_zone"></a><a href="javascript:showToTencent('+contId+','+title+','+picUrl+','+portalUrl+');" class="share_tx" ></a><a href="javascript:showTodouban('+contId+','+title+','+picUrl+','+portalUrl+','+description+');" class="share_rr"></a></div>');
      },function(){
            //$("#cont"+contId).css({ background: "none" });
            $("#share").remove();
      });
      
  });

}

function shareLivingNews(qqzone_t,qqzone_picurl){
  $(".living_news").each(function(){
    if($(this).attr("id")){
      var id = $(this).attr("id");
      var contId,title,picUrl,description,qqzone_title,qqzone_picUrl;
      contId = id.substring(4,id.length);
      title = $(this).find(".news_title").text();
      title = title.substring(0,title.length-5);
      picUrl = $(this).find(".picUrl").attr("id");
      description = $(this).find(".summary").attr("id");
    
      title = "'"+title+"'";
      picUrl = "'"+picUrl+"'";
      description = "'"+description+"'";
      qqzone_title = "'"+qqzone_t+"'";
      qqzone_picUrl = "'"+qqzone_picurl+"'";
    
      $(this).hover(function(){
        //$("#cont"+contId).css({ background: "#f1f1f1" });
        $("#cont"+contId).append('<div class="newslv_share" id="share"><span>分享到</span><a href="javascript:ToSina('+title+','+qqzone_picUrl+');" class="lvshare_sina" id="share_share05"></a><a href="javascript:Tozone('+qqzone_title+','+qqzone_picUrl+','+title+');" class="lvshare_zone" id="share_share04"></a><a href="javascript:ToTencent('+title+','+qqzone_picUrl+');" class="lvshare_tx" id="share_share02" ></a><a href="javascript:Todouban('+qqzone_title+','+qqzone_picUrl+','+title+');" class="lvshare_rr" id="share_share01"></a></div>');
      },function(){
            //$("#cont"+contId).css({ background: "none" });
            $("#share").remove();
      });
    }
  });

}

function shareTopNews(wwwUrl){
    if($(".pdtt01").length > 0){
        var id = $(".pdtt01").attr("id");
        var contId,title,picUrl,portalUrl,description;
        contId = id.substring(4,id.length);
        title = $(".pdtt_rtbd").find("h2").text();
        title = $.trim(title);
        description = $(".pdtt_rtbd").find("p").text();
        description = $.trim(description);
        if($(".pdtt_lt").find("img")[0]){
            picUrl = $(".pdtt_lt").find("img")[0].src;
            picUrl = $.trim(picUrl);
        }
        
        var contType = $(".pdtt01").children(".pdtt_rt").children(".pdtt_trbs").children(".trbstxt").text();
        if(contType == "专题"){
            picUrl = "/file.thepaper.cn/www/v3/img/special_share_icon.jpg";
        }
        
        portalUrl = wwwUrl;

        title = "'"+title+"'";
        picUrl = "'"+picUrl+"'";
        portalUrl = "'"+portalUrl+"'";
        description = "'"+description+"'";
        $(".pdtt01").hover(function(){
            //$(".pdtt01").css({ background: "#f1f1f1" });
            $(".pdtt_rt").append('<div class="news_share" id="share"><span>分享到</span><a href="javascript:showToSina('+contId+','+title+','+picUrl+','+portalUrl+');" class="share_sina"></a><a href="javascript:showToZone('+contId+','+title+','+picUrl+','+portalUrl+','+description+');" class="share_zone"></a><a href="javascript:showToTencent('+contId+','+title+','+picUrl+','+portalUrl+');" class="share_tx" ></a><a href="javascript:showTodouban('+contId+','+title+','+picUrl+','+portalUrl+','+description+');" class="share_rr"></a></div>');
        },function(){
            $(".pdtt01").removeAttr("style");
            $("#share").remove();
        });
    }
}

function shareTopic(wwwUrl,sharepic){
    $(".topic").each(function(){
        var id = $(this).children(".user_bd02").attr("id");

        var topicId,title,portalUrl,asklogo;
        topicId = id.substring(5,id.length);
        title = $(this).attr("title");
        title = $.trim(title);
        portalUrl = wwwUrl;

        title = "'"+title+"'";
        asklogo = "'"+sharepic+"'";
        portalUrl = "'"+portalUrl+"'";
        $(this).hover(function(){
            //$("#cont"+contId).css({ background: "#f1f1f1" });
            $("#topic"+topicId).append('<div class="ask_share" id="share"><span>分享到</span><a href="javascript:askToSina('+topicId+','+title+','+asklogo+','+portalUrl+');" class="share_sina"></a><a href="javascript:askToZone('+topicId+','+title+','+asklogo+','+portalUrl+');" class="share_zone"></a><a href="javascript:askToTencent('+topicId+','+title+','+asklogo+','+portalUrl+');" class="share_tx" ></a><a href="javascript:askTodouban('+topicId+','+title+','+asklogo+','+portalUrl+');" class="share_rr"></a></div>');
        },function(){
            //$("#cont"+contId).css({ background: "none" });
            $("#share").remove();
        });

    });
}

function addTryOrder(nodeid){
    $.ajax({
  type: "post",
  url: "/www/addNode.msp",
  data: "nodeId=" + nodeid,
  timeout: 30000,
  dataType: "json",
  success: function(data) {
                 if (data.resultCode == "1") {
                     $("#list_subscribe").attr("onclick","cacleTryOrder("+nodeid+")").html("已订阅");
                     loadorder();                              
                  }else {
                     data.resultMsg && alert(data.resultMsg);
                  }
  },
  error: function(XMLHttpRequest, textStatus, errorThrown) {
    alert("订阅失败");
  }
    });
}

function cacleTryOrder(nodeid){
    $.ajax({
  type: "post",
  url: "/www/cancelNode.msp",
  data: "nodeId=" + nodeid,
  timeout: 30000,
  dataType: "json",
  success: function(data) {
               if (data.resultCode == "1") {
                     $("#list_subscribe").attr("onclick","addTryOrder("+nodeid+")").html("订阅");
                     loadorder();
               } else {
                  data.resultMsg && alert(data.resultMsg);
               }
  },
  error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("订阅失败");
  }
    });
}

function hotianswer(contid, commentType, parentId, index, isLogin){
    if(isLogin == false){
        lgwdsshow();
        return;
    }
    
    var content = $("#input_ians" + parentId + index).val();
    
    if(content == ''){
        $("#iask_pub_btn2").leanModal({closeButton: ".modal_close",title:'错误提示',content:'请输入你的回答！'});
        return ;
    }
    if(content.length  > 800){
        $("#iask_pub_btn2").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，回答不能超过800个字符！'});
        return ;
    }
    content = $.trim(content);
    content=encodeURIComponent(content||'');
    $.ajax( {
    type : "post",
    url : pubUrl,
    data : "c=" + contid + "&commentType=" + commentType + "&content="+ content + "&parentId="+parentId,
    timeout : 30000,
    dataType : "json",
    success : function(data) {
        if (data.resultCode == "1") {
            //var commentId = data.comment.commentId;
            //console.debug(data.comment.commentId);
        $.ajax({          
           url: "../jsp/queryHotAnswer.jsp",
           data:"commentId="+parentId+ "&allAttents=${allAttents}"+"&index="+index+"&contid="+contid+"&userId=${userInfo.userId}"+"&showDelete=1",
           cache: false,
           success: function(html){
                if(document.getElementById("hot"+parentId+index) != null){
                    $("#hot"+parentId+index).empty();
                    $("#hot"+parentId+index).append(html);
                    $("#input_ians" + parentId + index).val('');
                }
           }
        }); 
        }else if(data.resultCode == 2){
              lgwdsshow();
        }else {   
            if(data.resultCode == 11){
                $("#input_ians" + parentId + index).val('');
                $("#input_ians" + parentId + index).blur();
            }
        $("#iask_pub_btn2").leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});         
                                                                
        }
    },
    error : function(XMLHttpRequest, textStatus, errorThrown){
        $("#iask_pub_btn2").leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});  
    }
    });
}

function replyHotan(contid,commentType,qeId,parentId,index,isLogin){
    if(isLogin == false){
        lgwdsshow();
        return;
    }
    
    var content = $("#commText" + parentId + index).val();
    
    if(content.length  == 0){
      $("#commText" + parentId + index).leanModal({closeButton: ".modal_close",title:'错误提示',content:'请输入评论内容！'});
        return;
    }
    if(content.length  > 800){
      $("#commText" + parentId + index).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，评论不能超过800个字符'});
        return;
    }
    content=encodeURIComponent(content||'');
    $.ajax({
      type : "post",
      url : pubUrl,
        data : "c=" + contid + "&commentType=" + commentType + "&content=" + content + "&quoteId=" + parentId + "&parentId=" + qeId,
      timeout : 30000,
      dataType : "json",
      success : function(data) {
        if (data.resultCode == "1") {
                                 
                $.ajax({          
                 url: "../jsp/queryHotAnswer.jsp",
                 data:"commentId="+qeId+ "&allAttents=${allAttents}"+"&index="+index+"&contid="+contid+"&userId=${userInfo.userId}"+"&showDelete=1",
                 cache: false,
                 success: function(html){
                    if(document.getElementById("hot"+qeId+index) != null){
                        $("#hot"+qeId+index).empty();
                        $("#hot"+qeId+index).append(html);
                        $("#commText" + parentId + index).val('');
                        location.hash = "#hot"+qeId+index;
                    }
                }
                });                                
                            
        } else if(data.resultCode == 2){
                  lgwdsshow();
            } else {        
                if(data.resultCode == 11){
                    $("#commText" + parentId + index).val('');
                    $("#commText" + parentId + index).blur();
                }                        
                $("#commText" + parentId + index).leanModal({closeButton: ".modal_close",title:'错误提示',content:data.resultMsg});
            }
      },
      error : function(XMLHttpRequest, textStatus, errorThrown){
        $("#commText" + parentId + index).leanModal({closeButton: ".modal_close",title:'错误提示',content:'对不起，系统忙，请稍后再试！'});
        }
    }); 
}


var h_pagesize = 10, h_pageidx = 1, h_begin = 0, h_commentId = "";
function loadHotMore(commentId,index,recordTota,answerId){
    var more_bt = $("#hot_ans_more_other"+commentId+"_"+index);

    if(more_bt.attr("data-disabled")=="false"){
        return;
    }
    more_bt.attr("data-disabled","false");

    var comind = "";
    comind += commentId;
    comind += index;
    if(h_commentId == ""){
        h_commentId = comind;
    }

    if(h_commentId != comind){
        h_pageidx = 1;
        h_commentId = comind;
    }

    if(document.getElementById("packup"+commentId+"_"+index) != null){
        $("#packup"+commentId+"_"+index).remove();
        $("#hot_ans_other"+commentId+"_"+index).html('');
        $("#hot_ans_other"+commentId+"_"+index).append('<div class="ansqus_more" id="hot_ans_more_other'+commentId+'_'+index+'" onclick="loadHotMore('+commentId+','+index+','+recordTota+','+answerId+')">查看此问题的另外'+recordTota+'个回答</div>');
        h_pageidx =1;
        var t = $("#hot"+commentId+index).offset().top; 
        $(window).scrollTop(t); 
        return;
    }
    $.ajax({
        url: "../jsp/newDetail_moreAq.jsp",
        data:"commentId="+commentId+"&pagesize="+h_pagesize+"&pageidx="+h_pageidx+"&answerId="+answerId+"&index="+index+"&hotType=1",
        cache: false,
        success: function(html){
            data = $.trim(html);
            more_bt.attr("data-disabled","true");
            if (data == ''){

            }else{
                var tempCount = recordTota - (h_pageidx * h_pagesize);
                if(tempCount > 0){
                    $("#hot_ans_more_other"+commentId+"_"+index).remove();
                    $("#hot_ans_other"+commentId+"_"+index).append(html);
                    $("#hot_ans_other"+commentId+"_"+index).append('<div class="ansqus_more" id="hot_ans_more_other'+commentId+'_'+index+'" onclick="loadHotMore('+commentId+','+index+','+recordTota+','+answerId+')">查看此问题的另外'+tempCount+'个回答</div>');

                    h_pageidx ++ ;
                    h_begin = 0 ;
                }else{
                    $("#hot_ans_more_other"+commentId+"_"+index).remove();
                    $("#hot_ans_other"+commentId+"_"+index).append(html);
                    $("#hot_ans_other"+commentId+"_"+index).append('<div class="ansqus_more" id="packup'+commentId+'_'+index+'" onclick="loadHotMore('+commentId+','+index+','+recordTota+','+answerId+')">收起全部回答</div>');
                }
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            more_bt.attr("data-disabled","true");
        }
    });
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

function getCookie(c_name){
    //通过String对象的indexOf()来检查这个cookie是否存在，不存在就为 -1　　　　
    return document.cookie.indexOf(c_name + "=");
}

function getItemElement(newElements) {
  var elems = [];
  for (var i=0;i<newElements.length;i++)
  {
    var elem = document.createElement('div');
    elem = newElements[i];
    //elem.className = newElements[i].className;
    //elem.id = newElements[i].id;
    //elem.appendChild(newElements[i]);
    elems.push(elem);
  }
  
  return elems;
}

function channel_onload(channelID){
    var vieType = wwwstore.getItem("vieType");
    var tempUrl;
    if (vieType!=null && vieType!=""){
        if(vieType == "scroll"){
           tempUrl = "channel_scroll.jsp";
        }
        else if(vieType == "masonry"){
            tempUrl = "channel_masonry.jsp"; 
        }
    }
    else{
       tempUrl = "channel_masonry.jsp"; 
    }
    $.ajax({          
        url: tempUrl,
        data:"channelID="+channelID,
        cache: false,
        success: function(html){
          $("#mainContent").append(html);
        }
    });

    $('#news_list').click(function(){
        if(document.getElementById("listContent") != null){
            return;
        }
        wwwstore.setItem("vieType","scroll");
        $(window).unbind('.infscr');
        $("#masonryContent").masonry('destroy');
        $("#newsslidebd").addClass("newslist");
        $.ajax({          
            url: "channel_scroll.jsp",
            data:"channelID="+channelID,
            cache: false,
            success: function(html){
                $('#mainContent').empty();
                $("#mainContent").append(html);

            }
        });
    });

    $('#news_masonry').click(function(){
        if(document.getElementById("masonryContent") != null){
            return;
        }
        wwwstore.setItem("vieType","masonry");
        $(window).unbind('.infscr');
        $("#newsslidebd").removeClass("newslist");
        $.ajax({          
            url: "channel_masonry.jsp",
            data:"channelID="+channelID,
            cache: false,
            success: function(html){
                $('#mainContent').empty();
                $("#mainContent").append(html);
            }
        });
    });    
}

function index_onload(){
    var vieType = wwwstore.getItem("vieType");
    var tempUrl;
    if(vieType == "scroll"){
       tempUrl = "/plus/index_scroll.php";
    }else{
       tempUrl = "/plus/index_masonry.php";
    }
    $.ajax({          
        url: tempUrl,
        data:"",
        cache: false,
        success: function(html){
          $("#mainContent").append(html);
        }
    });

    $('#news_list').click(function(){
        if(document.getElementById("listContent") != null){
            return;
        }

        wwwstore.setItem("vieType","scroll");
        $(window).unbind('.infscr');
        $("#masonryContent").masonry('destroy');
        $("#newsslidebd").addClass("newslist");
        $.ajax({          
            url: "/plus/index_scroll.php",
            data:"",
            cache: false,
            success: function(html){
                $('#mainContent').empty();
                $("#mainContent").append(html);

            }
        });
    });

    $('#news_masonry').click(function(){
        if(document.getElementById("masonryContent") != null){
            return;
        }
        wwwstore.setItem("vieType","masonry");
        $(window).unbind('.infscr');
        $("#newsslidebd").removeClass("newslist");
        $.ajax({          
            url: "/plus/index_masonry.php",
            data:"",
            cache: false,
            success: function(html){
                $('#mainContent').empty();
                $("#mainContent").append(html);
            }
        });
    });
}

function flushAd(ad0,ad1,ad2,ad3){   
/*
    if(ad0){
        $.get("/ad.thepaper.cn/s?z=paper&c="+ad0, function (data) {
          $('#head_ad').html(data);
        }, 'jsonp');
    }else{
        $('#head_ad').html("");
    }
*/
  /*  $("#rt_ad").html('<iframe width="196" height="160" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" src="/ad.thepaper.cn/s?z=paper&c='+ad1+'&op=1"></iframe>');
    $("#rt_ad2").html('<iframe width="196" height="260" id="adc6op1" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" src="/ad.thepaper.cn/s?z=paper&c='+ad2+'&op=1" ></iframe>');
*/
/*
    if(ad3){
        $.get("/ad.thepaper.cn/s?z=paper&c="+ad3, function (data) {
          $('#main_ltad').html(data);
        }, 'jsonp');
    }else{
        $('#main_ltad').html("");
    }
*/
}

function hidepjaxswitch(){
    var sUserAgent = navigator.userAgent.toLowerCase();
    var Pad = sUserAgent.match(/pad/i) == "pad";
    var iPad = sUserAgent.match(/ipad/i) == "ipad";
          
    if(Pad || iPad){
        $("#pjax-switch").css('display','none');
    } 
}
