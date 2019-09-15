// JavaScript Document
var wwwstore = window.localStorage;
function login() {

    var loginName = $('#login_name').val();
    var psw = $('#login_pwd').val();
    var vcode= $('#dynCode').val();
    var remember_me = $('#login_remember_me') && $('#login_remember_me')[0].checked ? "1" : "";

    loginName=encodeURIComponent(loginName);
    psw=encodeURIComponent(psw);
    vcode=encodeURIComponent(vcode);

    if(checkLogin()){
    $.ajax({
        type: "post",
        url: "/www/login.msp",
        data: "loginName=" + loginName + "&psw=" + psw + "&vcode=" + vcode + "&remember_me=" + remember_me + "&isVerify=0",
        timeout: 30000,
        dataType: "json",
        success: function (data) {
            if (data.resultCode == "1") {
                $("#login_result").html("登录成功");
                $("#login_result").css("color", "#ff0000");
                getMsgMark();
                window.setTimeout(function(){window.location.reload();},300);
            }else if(data.resultMsg == "9999"){
                $("#login_result").html("用户名或密码错误");
                document.getElementById('annexCode').src = '/www/RandomPicture?'+new Date().getTime();$('#dynCode').val('');
                $('#dynCode').val('');                        
                $("#login_result").css("color", "#ff0000");
            }else{
                
                document.getElementById('annexCode').src = '/www/RandomPicture?'+new Date().getTime();$('#dynCode').val('');                         
                $('#dynCode').val('');
                 
                if (data.resultMsg != null && data.resultMsg != '') {
                    $("#login_result").html(data.resultMsg);
                    $("#login_result").css("color", "#ff0000");
                } else {
                    $("#login_result").html("登录失败");
                    $("#login_result").css("color", "#ff0000");
                }
                
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#login_result").html("登录失败，请稍后再试！");
            $("#login_result").css("color", "#ff0000");
            
        }
    });
  }
}

function checkLogin(){
   if($('#login_name').val()=="" || $('#login_name').val()=="手机号/电子邮箱"){
     $('#login_result').html("请输入手机号/电子邮箱").css("color","#ff0000");
        return false;
   }
   if($('#login_pwd').val()==""){
     $('#login_result').html("请输入密码").css("color","#ff0000");
        return false;
   }

    if(/^\w{4}(\w{2})?$/.test($('#dynCode').val())){
        $('#login_result').html("");
        return true;
    }else if($('#dynCode').val() == "" || $('#dynCode').val() == "验证码"){
        $('#login_result').html("请输入验证码").css("color","#ff0000");
        return false;
    }else{
        $('#login_result').html("请输入4位验证码").css("color","#ff0000");
        return false;
    }
}

function login2(type) {

    var loginName = $('#lg_wds_name').val();
    var psw = $('#lg_wds_pwd').val();
    var vcode= $('#lg_wds_dynCode').val();
    var remember_me = $('#remember_me') && $('#remember_me')[0].checked ? "1" : "";
    var origName = loginName;
    loginName=encodeURIComponent(loginName);
    psw=encodeURIComponent(psw);
    vcode=encodeURIComponent(vcode);
    
    if(checkLogin2()){
    $.ajax({
        type: "post",
        url: "/www/login.msp",
        data: "loginName=" + loginName + "&psw=" + psw + "&vcode=" + vcode + "&remember_me=" + remember_me + "&isVerify=0",
        timeout: 30000,
        dataType: "json",
        success: function (data) {
            if (data.resultCode == "1") {
                $("#login_msg").html("登录成功");
                if("1"==remember_me){
                  setLoginCookie(origName);
                }else{
                  delLoginCookie();
                }
                getMsgMark();
                if(type == 1){
                    window.location.href="ask_topic_create.jsp";
                }
                else{
                    window.setTimeout(function(){window.location.reload();},300);
                }
                
            }else if(data.resultMsg == "9999"){
                $("#login_msg").html("用户名或密码错误");
                document.getElementById('annexCode2').src = '/www/RandomPicture?'+new Date().getTime();
                $('#lg_wds_dynCode').val('');                        
                
            }else{
                
                document.getElementById('annexCode2').src = '/www/RandomPicture?'+new Date().getTime();                      
                $('#lg_wds_dynCode').val('');
                 
                if (data.resultMsg != null && data.resultMsg != '') {
                    $("#login_msg").html(data.resultMsg);
                    
                } else {
                    $("#login_msg").html("登录失败");
                    
                }
                
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#login_msg").html("登录失败，请稍后再试！");
            
            
        }
    });
  }
}

function checkLogin2(){
   if($('#lg_wds_name').val()=="" || $('#lg_wds_name').val()=="手机号/电子邮箱"){
     $('#login_msg').html("请输入手机号/电子邮箱");
        return false;
   }
   if($('#lg_wds_pwd').val()==""){
     $('#login_msg').html("请输入密码");
        return false;
   }

    if(/^\w{4}(\w{2})?$/.test($('#lg_wds_dynCode').val())){
        $('#login_msg').html("");
        return true;
    }else if($('#lg_wds_dynCode').val() == "" || $('#lg_wds_dynCode').val() == "请输入图片中的字符"){
        $('#login_msg').html("请输入图片中的字符");
        return false;
    }else{
        $('#login_msg').html("请输入图片中的字符");
        return false;
    }
}


function register() {

    var userName = $('#register_user').val();
    var mail = $('#register_mail').val();
    var pwd = $('#register_pwd').val();
    var pwdAgain = $('#register_pwd_ag').val();
    
    if(checkregister()){
    mail=encodeURIComponent(mail);
    userName=encodeURIComponent(userName);
    pwd=encodeURIComponent(pwd);
    pwdAgain=encodeURIComponent(pwdAgain); 
      $.ajax({
        type: "post",
        url: "/www/register.msp",
        data: "userName=" + userName + "&mail=" + mail + "&pwd=" + pwd + "&pwdAgain=" + pwdAgain,
        timeout: 30000,
        dataType: "json",
        success: function (data) {

            if (data.resultCode == "1") {
                $("#register_result").html("注册成功");
                $("#register_result").css("color", "#ff0000");
                re_login(mail,pwd);

            } else {
                if (data.resultMsg != null && data.resultMsg != '') {
                    $("#register_result").html(data.resultMsg);
                    $("#register_result").css("color", "#ff0000");
                } else {
                    $("#register_result").html("注册失败，请稍后再试！");
                    $("#register_result").css("color", "#ff0000");
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#login_result").html("注册失败，请稍后再试！");
            $("#login_result").css("color", "#ff0000");
            
        }            });
    }
}
function checkregister(){
       
     if($('#register_mail').val()=="" || $('#register_mail').val()=="邮箱"){
       $('#register_result').html("邮箱不能为空").css("color","#ff0000");
          return false;
     }
     
     else if($('#register_user').val()=="" || $('#lregister_user').val()=="用户名"){
       $('#register_result').html("用户名不能为空").css("color","#ff0000");
          return false;
     }
     

     else if($('#register_pwd').val()=="" || $('#register_pwd').val()=="密码"){
       $('#register_result').html("密码不能为空").css("color","#ff0000");
          return false;
     }

     else if($('#register_pwd_ag').val()=="" || $('#register_pwd_ag').val()=="确认密码"){
       $('#register_result').html("确认密码不能为空").css("color","#ff0000");
          return false;
     }

     else if($('#register_pwd_ag').val() != $('#register_pwd').val()){
       $('#register_result').html("两次密码输入不一致").css("color","#ff0000");
          return false;
     }
    
     
    else if($('#register_pwd').val().length <6 || $('#register_pwd').val().length >12){
       $('#register_result').html("密码格式错误，请输入6-12个数字或字母").css("color","#ff0000");
          return false;
     }

    else if(/[\u4E00-\u9FA5]/i.test($('#register_pwd').val())){
       $('#register_result').html("密码不能包含中文").css("color","#ff0000");
          return false;
     }

     else if(!document.getElementById("iagree").checked){
         $('#register_result').html("未同意相关注册协议！").css("color","#ff0000");
         return false;
     }
     else{
          return true;
     }
}

//注销 退出
function logout(){
var logoutUrl = "/www/logout.msp";
$.ajax({
   type       :   "post",
   url        :   logoutUrl,
   timeout    :   30000,
   dataType   :   "json",
   success    :   function(data){
                      if(data.resultCode == "1"){
                          $('#dynCode').val('');
                          
                          wwwstore.setItem("trackmark",0);
                          wwwstore.setItem("questionmark",0);
                          wwwstore.setItem("attendmark",0);
                          wwwstore.setItem("attendTopicMark",0);
                          wwwstore.setItem("createdTopicMark",0);
                          window.location.reload();
                          //window.location.href="/";
                      }else{
                         try{
                         }catch(e){}  
                     }
                      
                  },
   error      :   function(XMLHttpRequest, textStatus, errorThrown){
                  }
});
}

//专题、图集页面注销 退出
function specialLogout(){
var logoutUrl = "/www/logout.msp";
$.ajax({
             type       :   "post",
             url        :   logoutUrl,
             timeout    :   30000,
             dataType   :   "json",
             success    :   function(data){
                                if(data.resultCode == "1"){
                                    $('#dynCode').val('');
                                    wwwstore.setItem("trackmark",0);
                                    wwwstore.setItem("questionmark",0);
                                    wwwstore.setItem("attendmark",0);
                                    wwwstore.setItem("attendTopicMark",0);
                                    wwwstore.setItem("createdTopicMark",0);
                                    window.location.reload(); 
                                }else{
                                   try{
                                   }catch(e){}  
                               }
                                
                            },
             error      :   function(XMLHttpRequest, textStatus, errorThrown){
                            }
         });
}

//注册成功后登录
function re_login(userName,Password){
  
  $.ajax({
      type: "post",
      url: "/www/login.msp",
      data: "loginName=" + userName + "&psw=" + Password + "&isVerify=1",
      timeout: 30000,
      dataType: "json",
      success: function (data) {
          if (data.resultCode == "1") {
               getMsgMark();
               window.location.reload();
           }
           else if(data.resultMsg == "9999"){
           
           }
      else{
              if (data.resultMsg != null && data.resultMsg != '') {

              } else {

              }
              
          }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
          
      }
  });
}

//第三方登录
function weibologin(type){
var backUrl = encodeURIComponent(document.location);
var url = "/www/weiboAuthUrl.msp?weiboType="+type+"&backUrl="+backUrl;
  $.ajax({
       type       :   "post",
       url        :   url,
       timeout    :   30000,
       dataType   :   "json",
       success    :   function(data){
                          if(data.resultCode == "1"){
                              getMsgMark();
                              window.location=data.authUrl; 
                          }else{
                             try{
                             }catch(e){}  
                         }
                          
                      },
       error      :   function(XMLHttpRequest, textStatus, errorThrown){
                      }
  });
}

function getForgetpwdCode() {
    var dynCode = $("#forgetpwddyn");
    if(dynCode.attr("data-disabled")=="false"){
      return;
    }
    dynCode.attr("data-disabled","false");


    var mail = $('#forgetpwd_mail').val();
    var vcode = $('#findpwd_dynCode').val();
    var verType = 3;//验证码类型：1-  注册;2- 修改邮箱;3- 忘记密码

    
    if(mail == "" || mail == "手机号/电子邮箱"){
     $('#forgetpwd_msg').html("请输入手机号/电子邮箱");
     dynCode.attr("data-disabled","true");
     return;
    }
    
    if(vcode == "" || vcode == "请输入图片中的字符"){
     $('#forgetpwd_msg').html("请输入图片中的字符");
     dynCode.attr("data-disabled","true");
     return;
    }
    $.ajax({
        type: "post",
        url: "/www/getVerCode.msp",
        data: "verType=" + verType + "&mail=" + mail +"&vcode=" + vcode,
        timeout: 30000,
        dataType: "json",
        success: function (data) {
            if (data.resultCode == "1") {
                //document.getElementById('annexCode4').src = '/www/RandomPicture?' + new Date().getTime();
                dynCode.attr("data-disabled","true");
                if (dynCode.text() == "获取验证码"){
                    dynCode.css('background-color','#7a7a7a').text(60);
                     dynCode.attr("data-disabled","false");
                        var reduceTime = setInterval(function(){
                               dynCode.text(parseInt(dynCode.text())-1);             if (parseInt(dynCode.text())<=0){
                                        dynCode.css('background-color','#00a5eb').text("获取验证码");
                                        dynCode.attr("data-disabled","true");
                                        clearInterval(reduceTime);
                                   }
                           },1000);
                }
                $("#forgetpwd_msg").html(data.resultMsg);
            }else{
                document.getElementById('annexCode4').src = '/www/RandomPicture?' + new Date().getTime();
                $('#findpwd_dynCode').val('');
                $('#findpwd_dynCode').blur();
                $("#forgetpwd_msg").html(data.resultMsg);
                            dynCode.attr("data-disabled","true");
                
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#forgetpwd_msg").html("验证码发送失败，请稍后再试！");
                            dynCode.attr("data-disabled","true");
        }
    });

}

function getRegisterCode() {
    var dynCode = $("#registerdyn");
    if(dynCode.attr("data-disabled")=="false"){
      return;
    }
    dynCode.attr("data-disabled","false");

    var mail = $('#registerwds_mail').val();
    var vcode = $('#register_dynCode').val();
    var verType = 1;//验证码类型：1-  注册;2- 修改邮箱;3- 忘记密码

    if(mail == "" || mail == "手机号/电子邮箱"){
     $('#register_msg').html("请输入手机号/电子邮箱");
     dynCode.attr("data-disabled","true");
     return;
    } 
    
    if(vcode == "" || vcode == "请输入图片中的字符"){
     $('#register_msg').html("请输入图片中的字符");
     dynCode.attr("data-disabled","true");
     return;
    }
    $.ajax({
        type: "post",
        url: "/www/getVerCode.msp",
        data: "verType=" + verType + "&mail=" + mail +"&vcode=" + vcode,
        timeout: 30000,
        dataType: "json",
        success: function (data) {
            // dynCode.attr("data-disabled","true");
            if (data.resultCode == "1") {
                //document.getElementById('annexCode3').src = '/www/RandomPicture?' + new Date().getTime();
                $("#register_msg").html(data.resultMsg);
                 if (dynCode.text() == "获取邀请码"){
                    dynCode.css('background-color','#7a7a7a').text(60);
                    dynCode.attr("data-disabled","false");
                    var reduceTime = setInterval(function(){
                    dynCode.text(parseInt(dynCode.text())-1);             if (parseInt(dynCode.text())<=0){
                            dynCode.css('background-color','#00a5eb').text("获取邀请码");
                            dynCode.attr("data-disabled","true");
                            clearInterval(reduceTime);
                             }
                           },1000);
                     }
            }else{
                document.getElementById('annexCode3').src = '/www/RandomPicture?' + new Date().getTime();
                $('#register_dynCode').val('');
                $("#register_dynCode").blur();
                $("#register_msg").html(data.resultMsg);
                            dynCode.attr("data-disabled","true");  
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            dynCode.attr("data-disabled","true");
            $("#register_msg").html("验证码发送失败，请稍后再试！");
        }
    });

}

function registermsgwdsshow(){
  var mail = $('#registerwds_mail').val();
  var verCode = $('#registerwds_dynCode').val();
  var verType = 1;//验证码类型：1-  注册;2- 修改邮箱;3- 忘记密码
  
  if(mail == "" || mail == "手机号/电子邮箱"){
     $('#register_msg').html("请输入手机号/电子邮箱");
        return;
  }
  
  if(verCode == "" || verCode == "输入邀请码"){
     $('#register_msg').html("请输入邀请码");
        return;
  }
  
  mail=encodeURIComponent(mail);
  $.ajax({
        type: "post",
        url: "/www/checkVerCode.msp",
        data: "verType=" + verType + "&mail=" + mail + "&verCode=" + verCode,
        timeout: 30000,
        dataType: "json",
        success: function (data) {
            if (data.resultCode == "1") {
                $(document.body).append("<div class=\"lg_wds\" id=\"registermsgwds\" style=\"padding-bottom:20px;\">"
                +"  <div class=\"lg_wds_title\">注册</div>"
                +"  <div class=\"lg_wds_prompt\">请填写以下注册信息</div>"
                +"  <div class=\"lg_wds_inp\" style=\"margin-top:0px;\"><input id=\"registermsg_name\" type=\"text\" class=\"wds_input\" tabindex=\"1\" onFocus=\"if(this.value==\'设置用户名\'){this.value=\'\';document.getElementById(\'registermsg_name\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'设置用户名\';document.getElementById(\'registermsg_name\').style.color=\'#999\';};\" value=\"设置用户名\"></div>"
                +"  <div class=\"lg_wds_prompt2\">请输入4-20个字符</div>"
                +"  <div class=\"lg_wds_inp\" style=\"margin-top:0px;\"><input id=\"registermsg_pwd\" type=\"password\" class=\"wds_input\" tabindex=\"2\" style=\"display: none;\" onblur=\"showText(\'registermsg_pwd_text\',\'registermsg_pwd\',\'密码\');\" ><input style=\"color: #999;\" class=\"wds_input\" tabindex=\"2\" id=\"registermsg_pwd_text\" type=\"text\" value=\"密码\" onfocus=\"showPassWord(\'registermsg_pwd_text\',\'registermsg_pwd\')\" onkeydown=\"javascript:if(event.keyCode == 13) {register2();return false;};\"></div>"
                +"  <div class=\"lg_wds_prompt2\">请输入6-12个数字或字母</div>"
                +"  <div class=\"lg_wds_rmmi\">"
                +"    <span class=\"lg_rem\"><input type=\"checkbox\" id=\"register_agreement\" checked=\"checked\">&nbsp;&nbsp;同意相关<font onclick=\"agreementshow()\" style=\"color:#00a5eb;cursor: pointer;\">注册协议</font></span>"
                +"  </div>"
                +"  <div class=\"lg_wds_agreement\"  id=\"agreementtxt\" style=\"display:none;\">"
                +"<h2>澎湃新闻网用户使用协议及管理规章制度</h2>"
                +"<span></span>在您决定注册成为澎湃新闻网（以下称\"澎湃\"）的用户前，请认真阅读本条例。一经完成注册程序，即视为您已同意接受本条例所有内容。如您不同意本服务条款任意内容，请不要注册或使用澎湃新闻网的服务。<br><br>"
                +""
                +"<span></span>注册成功后，您不得利用澎湃服务制作、上载、复制、发布、传播或转载如下内容：<br>"
                +"<span></span>1、反对宪法所确定的基本原则的；<br>"
                +"<span></span>2、危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；<br>"
                +"<span></span>3、损害国家荣誉和利益的；<br>"
                +"<span></span>4、煽动民族仇恨、民族歧视，破坏民族团结的；<br>"
                +"<span></span>5、破坏国家宗教政策，宣扬邪教和封建迷信的；<br>"
                +"<span></span>6、散布谣言，扰乱社会秩序，破坏社会稳定的；<br>"
                +"<span></span>7、散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br>"
                +"<span></span>8、侮辱或者诽谤他人，侵害他人合法权益的；<br>"
                +"<span></span>9、含有法律、行政法规禁止的其他内容的信息。<br>"
                +"<span></span>有违上述内容者，澎湃有权不经您同意，直接修改、屏蔽、删除用户发布的信息或停止其帐号使用权限。本网站管理规则详细内容请阅读以下细则。澎湃拥有全部解释权。<br><br>"
                +""
                +"<span></span>一 特别提示<br>"
                +"<span></span>澎湃新闻网（/www.thepaper.cn）同意按照本协议的规定及其不时发布的操作规则提供基于互联网以及移动网的相关服务（以下称\"网络服务\"），为获得网络服务，服务使用人（以下称\"用户\"）应当同意本协议的全部条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中点击\"同意\"按钮即表示用户完全接受本协议项下的全部条款。<br>"
                +"<span></span>用户应当以真实身份信息注册账号。用户注册成功后，澎湃将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。<br>"
                +"<span></span>用户须对在澎湃的注册信息的真实性、合法性、有效性承担全部责任，用户不得冒充他人；不得利用他人的名义发布任何信息；不得恶意使用注册帐号导致其他用户误认；否则澎湃有权立即停止提供服务，收回其帐号并由用户独自承担由此而产生的一切法律责任。<br>"
                +"<span></span>用户直接或通过各类方式（如 RSS 源和站外 API 引用等）间接使用澎湃服务和数据的行为，都将被视作已无条件接受本协议全部内容；若用户对本协议的任何条款存在异议，请停止使用澎湃所提供的全部服务。<br>"
                +"<span></span>澎湃内设有通往其他网站和网页的链接，但这些网站和网页并非由澎湃经营或控制，澎湃不承担责任。用户启动任何此类链接或网页，离开澎湃进入其他网站或网页，所有风险自负，澎湃不承担一切责任和债务。<br>"
                +"<span></span>用户注册成功后，在使用澎湃服务的过程中，澎湃有权基于用户的操作行为进行非商业性的调查研究。<br><br>"
                +""
                +"<span></span>二 服务内容<br>"
                +"<span></span>澎湃网络服务的具体内容由澎湃根据实际情况提供，例如新闻、视频、搜索、图片、论坛(BBS)、发表新闻评论等。<br>"
                +"<span></span>用户理解，澎湃仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由用户自行负担。<br><br>"
                +""
                +"<span></span>三 服务变更、中断或终止<br>"
                +"<span></span>鉴于网络服务的特殊性，用户同意澎湃有权随时变更、中断或终止部分或全部的网络服务。澎湃无需通知用户，也无需对任何用户或任何第三方承担任何责任。<br>"
                +"<span></span>用户理解，澎湃需要定期或不定期地对提供网络服务的平台（如互联网网站、移动网络等）或相关的设备进行检修或者维护，如因此类情况而造成收费网络服务在合理时间内的中断，澎湃无需为此承担任何责任，但澎湃应尽可能事先进行通告。<br>"
                +"<span></span>如发生下列任何一种情形，澎湃有权随时中断或终止向用户提供本协议项下的网络服务而无需对用户或任何第三方承担任何责任：<br> "
                +"<span></span>1 用户提供的个人资料不真实；<br>"
                +"<span></span>2 用户违反本协议中规定的使用规则。<br><br>"
                +""
                +"<span></span>四 一般使用规则<br>"
                +"<span></span>用户在申请使用澎湃网络服务时，必须向澎湃提供准确的个人资料，如个人资料有任何变动，必须及时更新。<br>"
                +"<span></span>用户有权修改其个人账户中各项可修改信息，自行选择昵称和录入介绍性文字，自行决定是否提供非必填项的内容；<br>"
                +"<span></span>用户不应将其帐号、密码转让或出借予他人使用。如用户发现其帐号遭他人非法使用，应立即通知澎湃。因黑客行为或用户的保管疏忽导致帐号、密码遭他人非法使用，澎湃不承担任何责任。<br>"
                +"<span></span>用户同意澎湃有权在提供网络服务过程中以各种方式投放各种商业性广告或其他任何类型的商业信息，并且用户同意接受澎湃通过电子邮件或其他方式向用户发送商品促销或其他相关商业信息。<br>"
                +"<span></span>对于用户通过澎湃网络服务（包括但不限于论坛、新闻评论、问答社区）上传到澎湃网站上可公开获取区域的任何内容，用户同意澎湃在全世界范围内具有免费的、永久性的、不可撤销的、非独家的和完全再许可的权利和许可，以使用、复制、修改、改编、出版、翻译、据以创作衍生作品、传播、表演和展示此等内容（整体或部分），和/或将此等内容编入当前已知的或以后开发的其他任何形式的作品、媒体或技术中。<br>"
                +"<span></span>用户在使用澎湃网络服务过程中，必须遵循以下原则：<br>"
                +"<span></span>1 遵守中国有关的法律和法规；<br>"
                +"<span></span>2 遵守所有与网络服务有关的网络协议、规定和程序；<br>"
                +"<span></span>3 不得为任何非法目的而使用网络服务系统；<br>"
                +"<span></span>4 不得以任何形式使用澎湃网络服务侵犯澎湃的商业利益，包括并不限于发布非经澎湃许可的商业广告；<br>"
                +"<span></span>5 不得利用澎湃网络服务系统进行任何可能对互联网或移动网正常运转造成不利影响的行为；<br>"
                +"<span></span>6 不得利用澎湃提供的网络服务上传、展示或传播任何虚假的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；<br>"
                +"<span></span>7 不得侵犯其他任何第三方的专利权、著作权、商标权、名誉权或其他任何合法权益；<br>"
                +"<span></span>8 不得利用澎湃网络服务系统进行任何不利于澎湃的行为；<br>"
                +"<span></span>如用户在使用网络服务时违反任何上述规定，澎湃或其授权的人有权要求用户改正或直接采取一切必要的措施（包括但不限于更改或删除用户张贴的内容等、暂停或终止用户使用网络服务的权利）以减轻用户不当行为造成的影响。<br>"
                +"<span></span>澎湃针对某些特定的澎湃网络服务的使用通过各种方式（包括但不限于网页公告、电子邮件、短信提醒等）作出的任何声明、通知、警示等内容视为本协议的一部分，用户如使用该等澎湃网络服务，视为用户同意该等声明、通知、警示的内容。<br><br>"
                +""
                +"<span></span>五 跟帖评论规则<br>"
                +"<span></span>本协议所称跟帖评论服务，是指通过运营网络互动传播技术平台，供用户对本网站传播的各类信息发表评论意见（包括但不限于语音、文字、图片、音频、视频等信息）的服务。<br>"
                +"<span></span>用户使用澎湃跟帖评论，问答社区等服务将自觉遵守不得逾越法律法规、社会主义制度、国家利益、公民合法权益、社会公共秩序、道德风尚和信息真实性等“七条底线”。<br>"
                +"<span></span>用户不发表下列信息：<br>"
                +"<span></span>1 反对宪法确定的基本原则的；<br>"
                +"<span></span>2 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；<br>"
                +"<span></span>3 损害国家荣誉和利益的；<br>"
                +"<span></span>4 煽动民族仇恨、民族歧视，破坏民族团结的；<br>"
                +"<span></span>5 煽动地域歧视、地域仇恨的；<br>"
                +"<span></span>6 破坏国家宗教政策，宣扬邪教和迷信的；<br>"
                +"<span></span>7 散布谣言，扰乱社会秩序、破坏社会稳定的；<br>"
                +"<span></span>8 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br>"
                +"<span></span>9 侮辱或者诽谤他人，侵害他人合法权益的；<br>"
                +"<span></span>10 对他人进行暴力恐吓、威胁，实施人肉搜索的；<br>"
                +"<span></span>11 未获得未满18周岁未成年人法定监护人的书面同意，传播该未成年人的隐私信息的；<br>"
                +"<span></span>12 散布污言秽语，损害社会公序良俗的；<br>"
                +"<span></span>13 侵犯他人知识产权的；<br>"
                +"<span></span>14 散布商业广告，或类似的商业招揽信息；<br>"
                +"<span></span>15 使用本网站常用语言文字以外的其他语言文字评论的；<br>"
                +"<span></span>16 与所评论的信息毫无关系的；<br>"
                +"<span></span>17 所发表的信息毫无意义的，或刻意使用字符组合以逃避技术审核的；<br>"
                +"<span></span>18 法律、法规和规章禁止传播的其他信息。<br>"
                +"<span></span>对违反上述承诺的用户，本网站将视情况采取预先警示、拒绝发布、删除跟帖、短期禁止发言直至永久关闭账号等管理措施。对涉嫌违法犯罪的跟帖评论将保存在案、并在接受有关政府部门调查时如实报告。<br><br>"
                +"　　"
                +"<span></span>六 知识产权<br>"
                +"<span></span>澎湃提供的网络服务中包含的任何文本、图片、图形、音频和/或视频资料均受版权、商标和/或其它财产所有权法律的保护，未经相关权利人同意，上述资料均不得在任何媒体直接或间接发布、播放、出于播放或发布目的而改写或再发行，或者被用于其他任何商业目的。所有这些资料或资料的任何部分仅可作为私人和非商业用途而保存在某台计算机内。澎湃不就由上述资料产生或在传送或递交全部或部分上述资料过程中产生的延误、不准确、错误和遗漏或从中产生或由此产生的任何损害赔偿，以任何形式，向用户或任何第三方负责。<br>"
                +"<span></span>澎湃为提供网络服务而使用的任何软件（包括但不限于软件中所含的任何图象、照片、动画、录像、录音、音乐、文字和附加程序、随附的帮助材料）的一切权利均属于该软件的著作权人，未经该软件的著作权人许可，用户不得对该软件进行反向工程（reverse engineer）、反向编译（decompile）或反汇编（disassemble）。<br>"
                +"<span></span>未经澎湃新闻网及/或相关权利人明确书面授权，任何人不得复制、转载、摘编、修改、链接、转帖澎湃新闻网的内容，或在非澎湃新闻网所属的服务器上做镜像或以其他任何方式进行使用。<br>"
                +"<span></span>获得合法授权的，应在授权范围内使用，必须为作者署名并注明“来源：澎湃新闻”字样，并按有关国际公约和中华人民共和国法律的有关规定向相关权利人支付版权费用。违反上述声明者，澎湃新闻将依法追究其相关法律责任。<br>"
                +"<span></span>对于本站所有形式的原创内容，本站有结集出版的权利。<br>"
                +"<span></span>澎湃新闻网对于用户所发布的内容所引发的版权、署名权疑议、纠纷，不承担任何责任。<br>"
                +"<span></span>澎湃新闻网所转载、链接的内容，出于传递更多信息之目的，并不意味着赞同其观点或证实其内容的真实性。<br>"
                +"<span></span>澎湃的特约评论稿，仅代表评论人个人观点，并不代表澎湃观点。<br><br>"
                +""
                +"<span></span>七 隐私保护<br>"
                +"<span></span>保护用户隐私是澎湃的一项基本政策，澎湃保证不对外公开或向第三方提供单个用户的注册资料及用户在使用网络服务时存储在澎湃的非公开内容，但下列情况除外：<br>"
                +"<span></span>1 事先获得用户的明确授权；<br>"
                +"<span></span>2 根据有关的法律法规要求；<br>"
                +"<span></span>3 按照相关政府主管部门的要求；<br>"
                +"<span></span>4 为维护社会公众的利益；<br>"
                +"<span></span>5 为维护澎湃的合法权益。<br>"
                +"<span></span>澎湃可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与澎湃同等的保护用户隐私的责任，则澎湃有权将用户的注册资料等提供给该第三方。<br>"
                +"<span></span>在不透露单个用户隐私资料的前提下，澎湃有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。<br><br>"
                +""
                +"<span></span>八 免责声明<br>"
                +"<span></span>用户明确同意其使用澎湃网络服务所存在的风险将完全由其自己承担；因其使用澎湃网络服务而产生的一切后果也由其自己承担，澎湃对用户不承担任何责任。<br>"
                +"<span></span>用户在澎湃发表的内容仅表明其个人的立场和观点，并不代表澎湃的立场或观点。作为内容的发表者，需自行对所发表内容负责，因所发表内容引发的一切纠纷，由该内容的发表者承担全部法律及连带责任。澎湃不承担任何法律及连带责任。<br>"
                +"<span></span>澎湃不担保网络服务一定能满足用户的要求，也不担保网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作担保。<br>"
                +"<span></span>澎湃不保证为向用户提供便利而设置的外部链接的准确性和完整性，同时，对于该等外部链接指向的不由澎湃实际控制的任何网页上的内容，澎湃不承担任何责任。<br>"
                +"<span></span>对于因不可抗力或澎湃不能控制的原因造成的网络服务中断或其它缺陷，澎湃不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。<br>"
                +"<span></span>用户同意，对于澎湃向用户提供的下列产品或者服务的质量缺陷本身及其引发的任何损失，澎湃无需承担任何责任：<br>"
                +"<span></span>澎湃向用户免费提供的各项网络服务；<br>"
                +"<span></span>澎湃向用户赠送的任何产品或者服务；<br>"
                +"<span></span>澎湃向收费网络服务用户附赠的各种产品或者服务。<br><br>"
                +""
                +"<span></span>九 违约赔偿<br>"
                +"<span></span>如因澎湃违反有关法律、法规或本协议项下的任何条款而给用户造成损失，澎湃同意承担由此造成的损害赔偿责任。<br>"
                +"<span></span>用户同意保障和维护澎湃及其他用户的利益，如因用户违反有关法律、法规或本服务条款的任何条款而给澎湃或任何其他第三人造成损失，用户同意承担由此造成的损害赔偿责任。 澎湃对用户使用网络服务所产生的任何直接、间接、偶然、特殊及继起的损害不负责任，这些损害可能来自：不正当使用网络服务、在网上购买商品或进行同类型服务、在网上进行交易、非法使用网络服务或用户传送的信息有所变动。<br><br>"
                +""
                +"<span></span>十 协议修改<br>"
                +"<span></span>根据互联网的发展和有关法律、法规及规范性文件的变化，或者因业务发展需要，澎湃有权随时修改本协议的任何条款，一旦本协议的内容发生变动，澎湃将会直接在澎湃网站上公布修改之后的协议内容，该公布行为视为澎湃已经通知用户修改内容。澎湃也可通过其他适当方式向用户提示修改内容。<br>"
                +"<span></span>如果不同意澎湃对本协议相关条款所做的修改，用户有权停止使用网络服务。如果用户继续使用网络服务，则视为用户接受澎湃对本协议相关条款所做的修改。<br><br>"
                +""
                +"<span></span>十一 通知送达<br>"
                +"<span></span>本协议项下澎湃对于用户所有的通知均可通过网页公告、电子邮件、手机短信或常规的信件传送等方式进行；该等通知于发送之日视为已送达收件人。<br>"
                +"<span></span>用户对于澎湃的通知应当通过澎湃对外正式公布的通信地址、传真号码、电子邮件地址等联系信息进行送达。<br><br>"
                +""
                +"<span></span>十二 法律管辖<br>"
                +"<span></span>本协议的订立、执行和解释及争议的解决均应适用中国法律并受中国法院管辖。<br>"
                +"<span></span>如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向澎湃所在地的人民法院提起诉讼。<br><br>"
                +""
                +"<span></span>十三 其他规定<br>"
                +"<span></span>本协议构成双方对本协议之约定事项及其他有关事宜的完整协议，除本协议规定的之外，未赋予本协议各方其他权利。<br>"
                +"<span></span>如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。<br>"
                +"<span></span>本协议中的标题仅为方便而设，在解释本协议时应被忽略。<br>"
                +"<span></span>澎湃对本协议拥有最终的解释权。<br>"
                +"  </div>"
                +"  <div class=\"lg_wds_ts\" id=\"register2_msg\"></div>"
                +"  <div class=\"lg_wds_bt\" onclick=\"register2()\">完 成</div>"
                +"  <div class=\"lg_wds_tplg\" style=\"margin-top:12px;\">"
                +"    <span>已有账户，马上<font onclick=\"lgwdsshow()\" style=\"color:#00a5eb;cursor: pointer;\">登录</font></span>"
                +"    <a href=\"javascript:weibologin(\'DOUBAN\');\"><img width=\"32\" height=\"32\" src=\"../img/log_renren.png\"></a>"
                +"    <a href=\"javascript:weibologin(\'TENCENT\');\"><img width=\"32\" height=\"32\" src=\"../img/log_qq.png\"></a>"
                +"    <a href=\"javascript:weibologin(\'SINA\');\"><img width=\"32\" height=\"32\" src=\"../img/log_weibo.png\"></a>"
                +"    <a href=\"javascript:weibologin(\'WEIXIN\');\"><img width=\"32\" height=\"32\" src=\"../img/log_weixin.png\" ></a>"
                +"    <span style=\"float:right;margin-right: 8px;\">社交账号直接登录</span>"
                +"  </div>"
                +"  <div class=\"wds_close\" onclick=\"registermsgwdscancer()\"></div>"
                +""
                +"</div>");
            
                $("#registermsgwds").siblings(".lg_wds").css("display","none");
                $("#bg_overlay").css('display','block');
                //$("#registermsgwds").css('display','');
                $('#registermsg_name').val('');
                $('#registermsg_name').blur();
                $('#registermsg_pwd').val('');
                $('#registermsg_pwd').blur();

                $('#register2_msg').html("");            
            }else{
                
                $("#register_msg").html(data.resultMsg);
                
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#register_msg").html("验证码发送失败，请稍后再试！");
        }
    });
  
  
}

function register2() {
    var mail = $('#registerwds_mail').val();
    var verCode = $('#registerwds_dynCode').val();
    
    var sname = $('#registermsg_name').val();
    var pwd = $('#registermsg_pwd').val();
    
    
     if(sname =="" || sname == "设置用户名"){
       $('#register2_msg').html("请设置用户名");
       return;
     }
     

     if(pwd =="" || pwd == "密码"){
       $('#register2_msg').html("请输入密码");
          return;
     }

    if(pwd.length <6 || pwd.length >12){
       $('#register2_msg').html("密码格式错误，请输入6-12个数字或字母");
          return;
     }

    if(/[\u4E00-\u9FA5]/i.test(pwd)){
       $('#register2_msg').html("密码不能包含中文");
          return;
     }

     if(!document.getElementById("register_agreement").checked){
         $('#register2_msg').html("未同意相关注册协议！");
         return;
     }
    
    mail=encodeURIComponent(mail);
    verCode=encodeURIComponent(verCode);
    sname=encodeURIComponent(sname);
    pwd=encodeURIComponent(pwd);

      $.ajax({
        type: "post",
        url: "/www/register.msp",
        data: "userName=" + sname + "&mail=" + mail + "&pwd=" + pwd + "&verCode=" + verCode + "&pwdAgain=" + pwd,
        timeout: 30000,
        dataType: "json",
        success: function (data) {

            if (data.resultCode == "1") {
                $("#register2_msg").html(data.resultMsg);
                re_login(mail,pwd);

            } else {
                if (data.resultMsg != null && data.resultMsg != '') {
                    $("#register2_msg").html(data.resultMsg);
                    
                } else {
                    $("#register2_msg").html("注册失败，请稍后再试！");
                    
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#register2_msg").html("注册失败，请稍后再试！");
        }            
        });

}

function findPwd(){
  var mail = $('#forgetpwd_mail').val();
  var verCode = $('#forgetpwd_dynCode').val();
  var verType = 3;//验证码类型：1-  注册;2- 修改邮箱;3- 忘记密码
  
  if(mail == "" || mail == "手机号/电子邮箱"){
     $('#forgetpwd_msg').html("请输入手机号/电子邮箱");
        return;
  }
  
  if(verCode == "" || verCode == "输入验证码"){
     $('#forgetpwd_msg').html("请输入验证码");
        return;
  }
  
  mail=encodeURIComponent(mail);
  $.ajax({
        type: "post",
        url: "/www/checkVerCode.msp",
        data: "verType=" + verType + "&mail=" + mail + "&verCode=" + verCode,
        timeout: 30000,
        dataType: "json",
        success: function (data) {
            if (data.resultCode == "1") {
                $(document.body).append("<div class=\"lg_wds\" id=\"forgetpwdlgwds\" style=\"padding-bottom:20px;\">"
                +"  <div class=\"lg_wds_title\">忘记密码</div>"
                +"  <div class=\"lg_wds_prompt\">您的密码已重置，请输入新密码</div>"
                +"  <div class=\"lg_wds_inp\"><input id=\"forgetpwdlg_pwd\" type=\"password\" value=\"\" class=\"wds_input\" placeholder=\"新密码\" tabindex=\"1\"></div>"
                +"  <div class=\"lg_wds_prompt2\">请输入6-12个数字或字母</div>"
                +"  <div class=\"lg_wds_ts\" id=\"resetpwd_msg\"></div>"
                +"  <div class=\"lg_wds_bt\" onclick=\"resetPwd()\">完 成</div>"
                +"  <div class=\"lg_wds_tplg\" style=\"margin-top:12px;\">"
                +"    <span>已有账户，马上<font onclick=\"lgwdsshow()\" style=\"cursor: pointer;color:#00a5eb;\">登录</font></span>"
                +"    <a href=\"javascript:weibologin(\'DOUBAN\');\"><img width=\"32\" height=\"32\" src=\"../img/log_renren.png\"></a>"
                +"    <a href=\"javascript:weibologin(\'TENCENT\');\"><img width=\"32\" height=\"32\" src=\"../img/log_qq.png\"></a>"
                +"    <a href=\"javascript:weibologin(\'SINA\');\"><img width=\"32\" height=\"32\" src=\"../img/log_weibo.png\"></a>"
                +"    <a href=\"javascript:weibologin(\'WEIXIN\');\"><img width=\"32\" height=\"32\" src=\"../img/log_weixin.png\" ></a>"
                +"    <span style=\"float:right;margin-right: 8px;\">社交账号直接登录</span>"
                +"  </div>"
                +"  <div class=\"wds_close\" onclick=\"forgetpwdlgcancer()\"></div>"
                +""
                +"</div>");
                $("#forgetpwdlgwds").siblings(".lg_wds").css("display","none");
                $("#bg_overlay").css('display','block');
                //$("#forgetpwdlgwds").css('display','');
            }else{
                
                $("#forgetpwd_msg").html(data.resultMsg);
                
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#forgetpwd_msg").html("验证失败，请稍后再试！");
        }
    });
  
  
}

function resetPwd(){
  var pwd = $('#forgetpwdlg_pwd').val();
  var mail = $('#forgetpwd_mail').val();
  var verCode = $('#forgetpwd_dynCode').val();
  
  if(pwd == ""){
     $('#resetpwd_msg').html("请输入新密码");
        return;
  }
  
  pwd=encodeURIComponent(pwd);
  mail=encodeURIComponent(mail);
  verCode=encodeURIComponent(verCode);
  
  $.ajax({
        type: "post",
        url: "/www/resetPwd.msp",
        data: "pwd=" + pwd + "&mail=" + mail + "&verCode=" + verCode,
        timeout: 30000,
        dataType: "json",
        success: function (data) {
            if (data.resultCode == "1") {
                $("#resetpwd_msg").html(data.resultMsg);
                re_login(mail,pwd);
            }else{
                
                $("#resetpwd_msg").html(data.resultMsg);
                
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#resetpwd_msg").html("新密码设置失败，请稍后再试！");
        }
    });
  
  
}

function getmodifymailCode() {
    var dynCode = $("#modifymaildyn");
    if(dynCode.attr("data-disabled")=="false"){
      return;
    }
    dynCode.attr("data-disabled","false");

    var vcode = $('#modifymail_dynCode').val();
    var mail = $('#mdf_mail').val();
    var verType = 2;//验证码类型：1-  注册;2- 修改邮箱;3- 忘记密码

    if(mail == "" || mail == "邮箱"){
     $('#modifymail_msg').html("请输入邮箱");
     dynCode.attr("data-disabled","true");
     return;
    }

    if(vcode == "" || vcode == "请输入图片中的字符"){
     $(modifymail_msg).html("请输入图片中的字符");
     dynCode.attr("data-disabled","true");
     return;
    } 
    
    $.ajax({
        type: "post",
        url: "/www/getVerCode.msp",
        data: "verType=" + verType + "&mail=" + mail+"&vcode=" + vcode,
        timeout: 30000,
        dataType: "json",
        success: function (data) {
            // dynCode.attr("data-disabled","true");
            if (data.resultCode == "1") {
                // document.getElementById('annexCode6').src = '/www/RandomPicture?' + new Date().getTime();
                $("#modifymail_msg").html(data.resultMsg);
                  dynCode.attr("data-disabled","true");
                if (dynCode.text() == "获取验证码"){
                    dynCode.css('background-color','#7a7a7a').text(60);
                    dynCode.attr("data-disabled","false");
                    var reduceTime = setInterval(function(){
                    dynCode.text(parseInt(dynCode.text())-1);             if (parseInt(dynCode.text())<=0){
                            dynCode.css('background-color','#00a5eb').text("获取验证码");
                            dynCode.attr("data-disabled","true");
                            clearInterval(reduceTime);
                             }
                           },1000);
                     }

            }else{
                document.getElementById('annexCode6').src = '/www/RandomPicture?' + new Date().getTime();
                $('#modifymail_dynCode').val('');
                $('#modifymail_dynCode').blur();
                $("#modifymail_msg").html(data.resultMsg);
                dynCode.attr("data-disabled","true");
                
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            dynCode.attr("data-disabled","true");
            $("#modifymail_msg").html("验证码发送失败，请稍后再试！");
        }
    });

}

function updatemail() {

    var mail = $('#mdf_mail').val();
    var verCode = $('#mdf_mail_dynCode').val();
    var verType = 2;//验证码类型：1-  注册;2- 修改邮箱;3- 忘记密码

    if(mail == "" || mail == "邮箱"){
     $('#modifymail_msg').html("请输入邮箱");
        return;
    }

    if(verCode == "" || verCode == "输入验证码"){
     $('#modifymail_msg').html("请输入验证码");
        return;
    }
    
    $.ajax({
        type: "post",
        url: "/www/checkVerCode.msp",
        data: "verType=" + verType + "&mail=" + mail + "&verCode=" + verCode,
        timeout: 30000,
        dataType: "json",
        success: function (data) {
            if (data.resultCode == "1") {
                $("#modifymail_msg").html(data.resultMsg);
                //$("#modifymailwds").css('display','none');
                $("#modifymailwds").remove();
              $("#bg_overlay").css('display','none');
              $('#mail').html(mail);
                
            }else{
                
                $("#modifymail_msg").html(data.resultMsg);
                
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#modifymail_msg").html("验证码发送失败，请稍后再试！");
        }
    });

}

function getmodifyphoneCode() {
    var dynCode = $("#modifyphonedyn");
    if(dynCode.attr("data-disabled")=="false"){
      return;
    }
    dynCode.attr("data-disabled","false");
    
    var vcode = $('#modifyphone_dynCode').val();
    var phone = $('#mdf_phone').val();
    var verType = 4;//验证码类型：1-  注册;2- 修改邮箱;3- 忘记密码;4- 修改手机号

    if(phone == "" || phone == "手机号"){
        $('#modifyphone_msg').html("请输入手机号");
        dynCode.attr("data-disabled","true");
        return;
    }
    
    if(vcode == "" || vcode == "请输入图片中的字符"){
     $('#modifyphone_msg').html("请输入图片中的字符");
     dynCode.attr("data-disabled","true");
     return;
    }   

    
    $.ajax({
        type: "post",
        url: "/www/getVerCode.msp",
        data: "verType=" + verType + "&mail=" + phone +"&vcode=" + vcode,
        timeout: 30000,
        dataType: "json",
        success: function (data) {
            // dynCode.attr("data-disabled","true");
            if (data.resultCode == "1") {
                // document.getElementById('annexCode5').src = '/www/RandomPicture?' + new Date().getTime();
                $("#modifyphone_msg").html(data.resultMsg);
                dynCode.attr("data-disabled","true"); 
                 if (dynCode.text() == "获取验证码"){
                    dynCode.css('background-color','#7a7a7a').text(60);
                    dynCode.attr("data-disabled","false");
                    var reduceTime = setInterval(function(){
                    dynCode.text(parseInt(dynCode.text())-1);             if (parseInt(dynCode.text())<=0){
                            dynCode.css('background-color','#00a5eb').text("获取验证码");
                            dynCode.attr("data-disabled","true");
                            clearInterval(reduceTime);
                             }
                           },1000);
                     }
            }else{
                document.getElementById('annexCode5').src = '/www/RandomPicture?' + new Date().getTime();
                $('#modifyphone_dynCode').val('');
                $('#modifyphone_dynCode').blur();
                $("#modifyphone_msg").html(data.resultMsg);
                dynCode.attr("data-disabled","true");
                
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            dynCode.attr("data-disabled","true");
            $("#modifyphone_msg").html("验证码发送失败，请稍后再试！");
        }
    });

}

function updatephone() {

    var phone = $('#mdf_phone').val();
    var verCode = $('#mdf_phone_dynCode').val();
    var verType = 4;//验证码类型：1-  注册;2- 修改邮箱;3- 忘记密码;4- 修改手机号

    if(phone == "" || phone == "手机号"){
     $('#modifyphone_msg').html("请输入手机号");
        return;
    }

    if(verCode == "" || verCode == "输入验证码"){
     $('#modifyphone_msg').html("请输入验证码");
        return;
    }
    
    $.ajax({
        type: "post",
        url: "/www/checkVerCode.msp",
        data: "verType=" + verType + "&mail=" + phone + "&verCode=" + verCode,
        timeout: 30000,
        dataType: "json",
        success: function (data) {
            if (data.resultCode == "1") {
                $("#modifyphone_msg").html(data.resultMsg);
                //$("#modifyphonewds").css('display','none');
                $("#modifyphonewds").remove();
              $("#bg_overlay").css('display','none');
              $('#phone').html(phone);
                
            }else{
                
                $("#modifyphone_msg").html(data.resultMsg);
                
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#modifyphone_msg").html("验证码发送失败，请稍后再试！");
        }
    });

}

function getMsgMark() {
    $.ajax({
        type: "post",
        url: "/www/getMsgMark.msp",
        data: "",
        timeout: 30000,
        dataType: "json",
        success: function (data) {
            if (data.resultCode == "1") {
                if (data.data.status == 1) {
                    wwwstore.setItem("trackmark",data.data.trackMark);
                    wwwstore.setItem("questionmark",data.data.questionMark);
                    wwwstore.setItem("attendmark",data.data.attendMark);
                    wwwstore.setItem("attendTopicMark",data.data.attendTopicMark);
                    wwwstore.setItem("createdTopicMark",data.data.createdTopicMark);
                    wwwstore.setItem("replyedMark",data.data.replyedMark);
                    wwwstore.setItem("letterMark",data.data.letterMark);
                }else{
                    window.setTimeout(function(){getMsgMark();},1000);              
                }
            }else{
                wwwstore.setItem("trackmark",0);
                wwwstore.setItem("questionmark",0);
                wwwstore.setItem("attendmark",0);
                wwwstore.setItem("attendTopicMark",0);
                wwwstore.setItem("createdTopicMark",0);
                wwwstore.setItem("replyedMark",0);
                wwwstore.setItem("letterMark",0);
            }
            
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
                wwwstore.setItem("trackmark",0);
                wwwstore.setItem("questionmark",0);
                wwwstore.setItem("attendmark",0);
                wwwstore.setItem("attendTopicMark",0);
                wwwstore.setItem("createdTopicMark",0);
                wwwstore.setItem("replyedMark",0);
                wwwstore.setItem("letterMark",0);
        }
    });

}


function setMsgMark() {
    var track=parseInt(wwwstore.getItem("trackmark"));
    var question=parseInt(wwwstore.getItem("questionmark"));
    var attend=parseInt(wwwstore.getItem("attendmark"));
    var attendTopic=parseInt(wwwstore.getItem("attendTopicMark"));
    var createdTopic=parseInt(wwwstore.getItem("createdTopicMark"));
    var replyed=parseInt(wwwstore.getItem("replyedMark"));
    var letter=parseInt(wwwstore.getItem("letterMark"));
    if (track > 0) {
        $("#track_mark").css('display','');
    }else if (track == 0){
        $("#track_mark").css('display','none');
    }

    if (question > 0 || attend > 0 || replyed > 0 || letter > 0){
        $("#question_mark").css('display','');
    }
    if (question == 0 && attend == 0 && replyed == 0 && letter == 0){
        $("#question_mark").css('display','none');
    }

    if (attendTopic > 0 || createdTopic > 0){
        $("#topic_mark").css('display','');
    }else if (attendTopic == 0 && createdTopic == 0){
        $("#topic_mark").css('display','none');
    }

}

function setRedPoint() {
    $("#question_mark").css('display','none');
    var question=parseInt(wwwstore.getItem("questionmark"));
    var attend=parseInt(wwwstore.getItem("attendmark"));
    var replyed=parseInt(wwwstore.getItem("replyedMark"));
    var letter=parseInt(wwwstore.getItem("letterMark"));
    
    if(question > 0){
        $("#personal_question").append('<em class="qipao"></em>');
    }
    
    if(attend > 0){
        $("#personal_guanzhu").append('<em class="qipao"></em>');
    }
    
    if(replyed > 0){
        if(replyed >= 10){
            $("#personal_replyTome").append('<em class="qipao qipao1">9+</em>');
        }
        else{
            $("#personal_replyTome").append('<em class="qipao qipao1">'+replyed+'</em>');
        }
    }
    if(letter > 0){
        if(letter >= 10){
            $("#personal_privateLetter").append('<em class="qipao qipao1">9+</em>');
        }
        else{
            $("#personal_privateLetter").append('<em class="qipao qipao1">'+letter+'</em>');
        }
    }
}

function clearMsgMark(id) {

    if (id == 1) {
        wwwstore.setItem("trackmark",0);
    }else if (id == 2){
        wwwstore.setItem("questionmark",0);
    }else if (id == 3){
        wwwstore.setItem("attendTopicMark",0);
        wwwstore.setItem("createdTopicMark",0);
    }else if (id == 4){
        wwwstore.setItem("attendmark",0);
    }else if (id == 5){
        wwwstore.setItem("replyedMark",0);
    }else if (id == 6){
        wwwstore.setItem("letterMark",0);
    }
    setMsgMark();

}

//弹出登录框
function lgwdsshow(type){
  
    if(!type){
        var type = 0;
    }
    togglePopBox("<div class=\"lg_wds lg_wds:hover\" id=\"loginwds\">"
    +"  <div class=\"lg_wds_title\">登录</div>"
    +"  <div class=\"lg_wds_prompt\">澎友先来登录吧！</div>"
    +"  <div class=\"lg_wds_tplg\">"
    +"    <span style=\"font-weight: bold;\">社交账号直接登录</span>"
    +"    <a href=\"javascript:weibologin(\'DOUBAN\');\"><img width=\"32\" height=\"32\" src=\"../img/log_renren.png\"></a>"
    +"    <a href=\"javascript:weibologin(\'TENCENT\');\"><img width=\"32\" height=\"32\" src=\"../img/log_qq.png\"></a>"
    +"    <a href=\"javascript:weibologin(\'SINA\');\"><img width=\"32\" height=\"32\" src=\"../img/log_weibo.png\"></a>"
    +"    <a href=\"javascript:weibologin(\'WEIXIN\');\"><img width=\"32\" height=\"32\" src=\"../img/log_weixin.png\" ></a>"
    +"  </div>"
    +"  <div class=\"lg_wds_inp\" style=\"margin-top:18px;\"><input id=\"lg_wds_name\" type=\"text\" value=\"手机号/电子邮箱\" class=\"wds_input\" tabindex=\"1\" onFocus=\"if(this.value==\'手机号/电子邮箱\'){this.value=\'\';document.getElementById(\'lg_wds_name\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'手机号/电子邮箱\';document.getElementById(\'lg_wds_name\').style.color=\'#999\';};\" value=\"手机号/电子邮箱\"></div>"
    +"  <div class=\"lg_wds_inp\"><input id=\"lg_wds_pwd\" type=\"password\" class=\"wds_input\" tabindex=\"2\" style=\"display: none;\" onblur=\"\" ><input style=\"color: #999;\" class=\"wds_input\" tabindex=\"2\" id=\"lg_wds_pwd_text\" type=\"text\" value=\"密码\" onfocus=\"showPassWord(\'lg_wds_pwd_text\',\'lg_wds_pwd\')\"></div>"
    +"  <div class=\"lg_wds_inp\">"
    +"    <input id=\"lg_wds_dynCode\" type=\"text\" value=\"请输入图片中的字符\" class=\"wds_input\" style=\"width:260px;\" tabindex=\"3\" onFocus=\"if(this.value==\'请输入图片中的字符\'){this.value=\'\';document.getElementById(\'lg_wds_dynCode\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'请输入图片中的字符\';document.getElementById(\'lg_wds_dynCode\').style.color=\'#999\';};\" onkeydown=\"javascript:if(event.keyCode == 13) {login2("+type+");return false;};\">"
    +"    <span class=\"lg_wds_dynCode\">"
    +"      <a href=\"javascript:void(0)\" onClick=\"document.getElementById(\'annexCode2\').src = \'/www/RandomPicture?\'+new Date().getTime();$(\'#lg_wds_dynCode\').val(\'请输入图片中的字符\');\">"
    +"        <img src=\"/www/RandomPicture\" height=\"32\" id=\"annexCode2\"> &nbsp;&nbsp;换一张"
    +"      </a>"
    +"    </span>"
    +"  </div>"
    +"  <div class=\"lg_wds_ts\" id=\"login_msg\"></div>"
    +"  <div class=\"lg_wds_bt\" onclick=\"login2("+type+")\" style=\"cursor: pointer;\">登 录</div>"
    +"  <div class=\"lg_wds_rmmi\">"
    +"    <span class=\"lg_rem\"><input type=\"checkbox\" id=\"remember_me\" style=\"vertical-align: middle; margin-top: -3px;\" checked=\"checked\">&nbsp;&nbsp;记住我</span>"
    +"    <span class=\"lg_reg\" onclick=\"registerwdsshow()\" style=\"cursor: pointer;\">注册</span>"
    +"    <span class=\"lg_forget\" onclick=\"forgetpwdshow()\" style=\"cursor: pointer;\">忘记密码</span>"
    +"    "
    +"  </div>"
    +"  <div class=\"wds_close\" onclick=\"lgwdscancer()\"></div>"
    +""
    +"</div>");
  
    document.getElementById('annexCode2').src = '/www/RandomPicture?'+new Date().getTime();
    $('#lg_wds_dynCode').val('');
    $("#lg_wds_dynCode").blur();
    $("#lg_wds_name").val("");
    $("#lg_wds_name").blur();
    $("#lg_wds_pwd").val("");
    $("#lg_wds_pwd").blur();
    $('#login_msg').html("");
    var loginName="";
    var loginName = getLoginCookie();
    if(loginName!=null && loginName!=""){
      $("#lg_wds_name").val(loginName);
    }
    //$("#lg_wds_name").focus();
}

//关闭登录框
function lgwdscancer(){
    //$("#loginwds").css('display','none');
    //$("#bg_overlay").css('display','none');
    //$("#loginwds").remove();
    //$("#loginwds").fadeOut("slow");
    //$("#bg_overlay").fadeOut("slow");
    togglePopBox();
}

//显示注册窗口
function registerwdsshow(){
    //if($("#loginwds").length > 0){
    //    $("#loginwds").remove();
    //}
    togglePopBox("<div class=\"lg_wds lg_wds:hover\" id=\"registerwds\" style=\"padding-bottom:20px;\">"
    +"  <div class=\"lg_wds_title\">注册</div>"
    +"  <div class=\"lg_wds_prompt\">请填写以下注册信息</div>"
    +"    <div class=\"lg_wds_inp\">"
    +"    <input tabindex=\"1\" id=\"register_dynCode\" type=\"text\" value=\"请输入图片中的字符\" class=\"wds_input\" style=\"width:260px;\" onFocus=\"if(this.value==\'请输入图片中的字符\'){this.value=\'\';document.getElementById(\'register_dynCode\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'请输入图片中的字符\';document.getElementById(\'register_dynCode\').style.color=\'#999\';};\">"
    +"    <span class=\"lg_wds_dynCode\">"
    +"      <a href=\"javascript:void(0)\" onClick=\"document.getElementById(\'annexCode3\').src = \'/www/RandomPicture?\'+new Date().getTime();$(\'#register_dynCode\').val(\'请输入图片中的字符\');\">"
    +"        <img src=\"/www/RandomPicture\" height=\"32\" id=\"annexCode3\"> &nbsp;&nbsp;换一张"
    +"      </a>"
    +"    </span>"
    +"  </div>"
    +"  <div class=\"lg_wds_inp\">"
    +"    <input id=\"registerwds_mail\" type=\"text\" class=\"wds_input\" style=\"width:320px;\" tabindex=\"2\" onFocus=\"if(this.value==\'手机号/电子邮箱\'){this.value=\'\';document.getElementById(\'registerwds_mail\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'手机号/电子邮箱\';document.getElementById(\'registerwds_mail\').style.color=\'#999\';};\" value=\"手机号/电子邮箱\">"
    +"    <span class=\"getdynCode_wds\" id=\"registerdyn\" onClick=\"getRegisterCode()\">获取邀请码</span>"
    +"  </div>"
    +"  <div class=\"lg_wds_inp\"><input id=\"registerwds_dynCode\" type=\"text\" class=\"wds_input\" tabindex=\"3\" onFocus=\"if(this.value==\'输入邀请码\'){this.value=\'\';document.getElementById(\'registerwds_dynCode\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'输入邀请码\';document.getElementById(\'registerwds_dynCode\').style.color=\'#999\';};\" value=\"输入邀请码\" onkeydown=\"javascript:if(event.keyCode == 13) {registermsgwdsshow();return false;};\"></div>"
    +"  <div class=\"lg_wds_ts\" id=\"register_msg\"></div>"
    +"  <div class=\"lg_wds_bt\" onclick=\"registermsgwdsshow()\">注 册</div>"
    +"  <div class=\"lg_wds_tplg\" style=\"margin-top:12px;\">"
    +"    <span>已有账户，马上<font onclick=\"lgwdsshow()\" style=\"color:#00a5eb;cursor: pointer;\">登录</font></span>"
    +"    <a href=\"javascript:weibologin(\'DOUBAN\');\"><img width=\"32\" height=\"32\" src=\"../img/log_renren.png\"></a>"
    +"    <a href=\"javascript:weibologin(\'TENCENT\');\"><img width=\"32\" height=\"32\" src=\"../img/log_qq.png\"></a>"
    +"    <a href=\"javascript:weibologin(\'SINA\');\"><img width=\"32\" height=\"32\" src=\"../img/log_weibo.png\"></a>"
    +"    <a href=\"javascript:weibologin(\'WEIXIN\');\"><img width=\"32\" height=\"32\" src=\"../img/log_weixin.png\" ></a>"
    +"    <span style=\"float:right;margin-right: 8px;\">社交账号直接登录</span>"
    +"  </div>"
    +"  <div class=\"wds_close\" onclick=\"registerwdscancer()\"></div>"
    +""
    +"</div>");
    
    //$("#registerwds").siblings(".lg_wds").css("display","none");
    //$("#bg_overlay").css('display','block');
    //$("#registerwds").css('display','');
    document.getElementById('annexCode3').src = '/www/RandomPicture?'+new Date().getTime();$('#register_dynCode').val('');
    $("#register_dynCode").blur();
    $('#registerwds_mail').val('');
    $('#registerwds_mail').blur();
    $('#registerwds_dynCode').val('');
    $('#registerwds_dynCode').blur();
    $('#register_msg').html("");
}

//关闭注册窗口
function registerwdscancer(){
    //$("#registerwds").css('display','none');
    //$("#registerwds").remove();
    //$("#bg_overlay").css('display','none');
    togglePopBox();
}

//显示忘记密码
function forgetpwdshow(){

    togglePopBox("<div class=\"lg_wds\" id=\"forgetpwdwds\" style=\"padding-bottom:20px;\">"
    +"  <div class=\"lg_wds_title\">忘记密码</div>"
    +"  <div class=\"lg_wds_prompt\">请输入注册时的手机号或电子邮箱</div>"
    +"    <div class=\"lg_wds_inp\">"
    +"    <input id=\"findpwd_dynCode\" type=\"text\" value=\"请输入图片中的字符\" class=\"wds_input\" style=\"width:260px;\" tabindex=\"1\" onFocus=\"if(this.value==\'请输入图片中的字符\'){this.value=\'\';document.getElementById(\'findpwd_dynCode\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'请输入图片中的字符\';document.getElementById(\'findpwd_dynCode\').style.color=\'#999\';};\">"
    +"    <span class=\"lg_wds_dynCode\">"
    +"      <a href=\"javascript:void(0)\" onClick=\"document.getElementById(\'annexCode4\').src = \'/www/RandomPicture?\'+new Date().getTime();$(\'#findpwd_dynCode\').val(\'请输入图片中的字符\');\">"
    +"        <img src=\"/www/RandomPicture\" height=\"32\" id=\"annexCode4\"> &nbsp;&nbsp;换一张"
    +"      </a>"
    +"    </span>"
    +"  </div>"
    +"  <div class=\"lg_wds_inp\">"
    +"                <span class=\"getdynCode_wds\" id=\"forgetpwddyn\" onClick=\"getForgetpwdCode()\">获取验证码</span>"
    +"    <input id=\"forgetpwd_mail\" type=\"text\" class=\"wds_input\" style=\"width:320px;\" tabindex=\"2\" onFocus=\"if(this.value==\'手机号/电子邮箱\'){this.value=\'\';document.getElementById(\'forgetpwd_mail\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'手机号/电子邮箱\';document.getElementById(\'forgetpwd_mail\').style.color=\'#999\';};\" value=\"手机号/电子邮箱\">"
    +"    "
    +"  </div>"
    +"  <div class=\"lg_wds_inp\"><input id=\"forgetpwd_dynCode\" type=\"text\" class=\"wds_input\" tabindex=\"3\" onFocus=\"if(this.value==\'输入验证码\'){this.value=\'\';document.getElementById(\'mdf_mail_dynCode\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'输入验证码\';document.getElementById(\'mdf_mail_dynCode\').style.color=\'#999\';};\" value=\"输入验证码\" onkeydown=\"javascript:if(event.keyCode == 13) {findPwd();return false;};\"></div>"
    +"  <div class=\"lg_wds_ts\" id=\"forgetpwd_msg\"></div>"
    +"  <div class=\"lg_wds_bt\" onClick=\"findPwd()\">提 交</div>"
    +"  <div class=\"lg_wds_tplg\" style=\"margin-top:12px;\">"
    +"    <span>已有账户，马上<font onclick=\"lgwdsshow()\" style=\"color:#00a5eb;cursor: pointer;\">登录</font></span>"
    +"    <a href=\"javascript:weibologin(\'DOUBAN\');\"><img width=\"32\" height=\"32\" src=\"../img/log_renren.png\"></a>"
    +"    <a href=\"javascript:weibologin(\'TENCENT\');\"><img width=\"32\" height=\"32\" src=\"../img/log_qq.png\"></a>"
    +"    <a href=\"javascript:weibologin(\'SINA\');\"><img width=\"32\" height=\"32\" src=\"../img/log_weibo.png\"></a>"
    +"    <a href=\"javascript:weibologin(\'WEIXIN\');\"><img width=\"32\" height=\"32\" src=\"../img/log_weixin.png\" ></a>"
    +"    <span style=\"float:right;margin-right: 8px;\">社交账号直接登录</span>"
    +"  </div>"
    +"  <div class=\"wds_close\" onclick=\"forgetpwdcancer()\"></div>"
    +""
    +"</div>");
    //$("#forgetpwdwds").siblings(".lg_wds").css("display","none");
    //$("#bg_overlay").css('display','block');
    //$("#forgetpwdwds").css('display','');
    document.getElementById('annexCode4').src = '/www/RandomPicture?'+new Date().getTime();$('#findpwd_dynCode').val('');
    //$("#findpwd_dynCode").blur();
    //$("#forgetpwd_mail").blur();
    //$("#forgetpwd_dynCode").val("");
    //$("#forgetpwd_dynCode").blur();
    //$('#forgetpwd_msg').html("");
}

//关闭忘记密码窗口
function forgetpwdcancer(){
  //$("#forgetpwdwds").css('display','none');
    //$("#forgetpwdwds").remove();
  //$("#bg_overlay").css('display','none');
    togglePopBox();
}

function forgetpwdlgcancer(){
  //$("#forgetpwdlgwds").css('display','none');
    $("#forgetpwdlgwds").remove();
  $("#bg_overlay").css('display','none');
}

//显示设置手机
function modifyphoneshow(){
    togglePopBox("<div class=\"lg_wds\" id=\"modifyphonewds\" style=\"padding-bottom:20px;\">"
    +"  <div class=\"lg_wds_title\">修改手机</div>"
    +"  <div class=\"lg_wds_prompt\">请输入新手机</div>"
    +"    <div class=\"lg_wds_inp\">"
    +"    <input id=\"modifyphone_dynCode\" type=\"text\" value=\"请输入图片中的字符\" class=\"wds_input\" style=\"width:260px;\" tabindex=\"1\" onFocus=\"if(this.value==\'请输入图片中的字符\'){this.value=\'\';document.getElementById(\'modifyphone_dynCode\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'请输入图片中的字符\';document.getElementById(\'modifyphone_dynCode\').style.color=\'#999\';};\">"
    +"    <span class=\"lg_wds_dynCode\">"
    +"      <a href=\"javascript:void(0)\" onClick=\"document.getElementById(\'annexCode5\').src = \'/www/RandomPicture?\'+new Date().getTime();$(\'#modifyphone_dynCode\').val(\'请输入图片中的字符\');\">"
    +"        <img src=\"/www/RandomPicture\" height=\"32\" id=\"annexCode5\"> &nbsp;&nbsp;换一张"
    +"      </a>"
    +"    </span>"
    +"  </div>"
    +"  <div class=\"lg_wds_inp\">"
    +"                <span class=\"getdynCode_wds\" id=\"modifyphonedyn\" onClick=\"getmodifyphoneCode()\">获取验证码</span>"
    +"    <input id=\"mdf_phone\" type=\"text\" class=\"wds_input\" style=\"width:330px;\" tabindex=\"2\" onFocus=\"if(this.value==\'手机号\'){this.value=\'\';document.getElementById(\'mdf_phone\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'手机号\';document.getElementById(\'mdf_phone\').style.color=\'#999\';};\" value=\"手机号\">"
    +"    "
    +"  </div>"
    +"  <div class=\"lg_wds_inp\"><input id=\"mdf_phone_dynCode\" type=\"text\" class=\"wds_input\" tabindex=\"3\" onFocus=\"if(this.value==\'输入验证码\'){this.value=\'\';document.getElementById(\'mdf_phone_dynCode\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'输入验证码\';document.getElementById(\'mdf_phone_dynCode\').style.color=\'#999\';};\" value=\"输入验证码\"></div>"
    +"  <div class=\"lg_wds_ts\" id=\"modifyphone_msg\"></div>"
    +"  <div class=\"lg_wds_bt\" onClick=\"updatephone()\">提 交</div>"
    +"  <div class=\"wds_close\" onclick=\"modifyphonecancer()\"></div>"
    +""
    +"</div>");
  //$("#modifyphonewds").siblings(".lg_wds").css("display","none");
  //$("#bg_overlay").css('display','block');
  //$("#modifyphonewds").css('display','');
}

//关闭设置手机
function modifyphonecancer(){
  //$("#modifyphonewds").css('display','none');
    //$("#modifyphonewds").remove();
  //$("#bg_overlay").css('display','none');
    togglePopBox();
}

//显示设置邮箱
function modifymailshow(){
    togglePopBox("<div class=\"lg_wds\" id=\"modifymailwds\" style=\"padding-bottom:20px;\">"
    +"  <div class=\"lg_wds_title\">修改邮箱</div>"
    +"  <div class=\"lg_wds_prompt\">请输入新邮箱</div>"
    +"    <div class=\"lg_wds_inp\">"
    +"    <input id=\"modifymail_dynCode\" type=\"text\" value=\"请输入图片中的字符\" class=\"wds_input\" style=\"width:260px;\" tabindex=\"1\" onFocus=\"if(this.value==\'请输入图片中的字符\'){this.value=\'\';document.getElementById(\'modifymail_dynCode\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'请输入图片中的字符\';document.getElementById(\'modifymail_dynCode\').style.color=\'#999\';};\">"
    +"    <span class=\"lg_wds_dynCode\">"
    +"      <a href=\"javascript:void(0)\" onClick=\"document.getElementById(\'annexCode6\').src = \'/www/RandomPicture?\'+new Date().getTime();$(\'#modifymail_dynCode\').val(\'请输入图片中的字符\');\">"
    +"        <img src=\"/www/RandomPicture\" height=\"32\" id=\"annexCode6\"> &nbsp;&nbsp;换一张"
    +"      </a>"
    +"    </span>"
    +"  </div>"
    +"  <div class=\"lg_wds_inp\">"
    +"                <span class=\"getdynCode_wds\" id=\"modifymaildyn\" onClick=\"getmodifymailCode()\">获取验证码</span>"
    +"    <input id=\"mdf_mail\" type=\"text\" class=\"wds_input\" style=\"width:330px;\" tabindex=\"1\" onFocus=\"if(this.value==\'邮箱\'){this.value=\'\';document.getElementById(\'mdf_mail\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'邮箱\';document.getElementById(\'mdf_mail\').style.color=\'#999\';};\" value=\"邮箱\">"
    +"    "
    +"  </div>"
    +"  <div class=\"lg_wds_inp\"><input id=\"mdf_mail_dynCode\" type=\"text\" class=\"wds_input\" tabindex=\"2\" onFocus=\"if(this.value==\'输入验证码\'){this.value=\'\';document.getElementById(\'mdf_mail_dynCode\').style.color=\'#333\';}\" onBlur=\"if(this.value==\'\'){this.value=\'输入验证码\';document.getElementById(\'mdf_mail_dynCode\').style.color=\'#999\';};\" value=\"输入验证码\"></div>"
    +"  <div class=\"lg_wds_ts\" id=\"modifymail_msg\"></div>"
    +"  <div class=\"lg_wds_bt\" onClick=\"updatemail()\">提 交</div>"
    +"  <div class=\"wds_close\" onclick=\"modifymailcancer()\"></div>"
    +""
    +"</div>");
  //$("#modifymailwds").siblings(".lg_wds").css("display","none");
  //$("#bg_overlay").css('display','block');
  //$("#modifymailwds").css('display','');
}

//关闭设置邮箱
function modifymailcancer(){
  //$("#modifymailwds").css('display','none');
    //$("#modifymailwds").remove();
  //$("#bg_overlay").css('display','none');
    togglePopBox();
}


function togglePopBox(html){
    var mode='close', showedBox,showingBox;
    if($(".pop_box").length > 0 ){
        showedBox=$(".pop_box").first();
    }
    if(!!html){
        mode='show';
        if(showedBox)mode='rotate';
    }
    switch(mode){
    case 'show':
        $(document.body).append(html);
        showingBox=$(document.body).children().last();
        showingBox.addClass("pop_box");
        $("#bg_overlay").css('display','block').addClass("pop_bg_fade_in");
        showingBox.addClass("show-slip");
        setTimeout(function(){
            showingBox.removeClass("show-slip");   
            $("#bg_overlay").removeClass("pop_bg_fade_in");
        },200);
        return;
    case 'close':
        if(!showedBox)return ;
        showedBox.addClass("show-slip_out");
        $("#bg_overlay").addClass("pop_bg_fade_out");
        setTimeout(function(){
            showedBox.remove();  
            $("#bg_overlay").css('display','none').removeClass("pop_bg_fade_out");
        },150);
        return ;
    case 'rotate':
        $(document.body).append(html);
        showingBox=$(document.body).children().last();
        showingBox.addClass("pop_box");
        showedBox.addClass("switching-flip");
        showingBox.addClass("switching-flip_out");
        setTimeout(function(){
            showedBox.remove();    
        },400);
        setTimeout(function(){
            showingBox.removeClass("switching-flip_out");
        },800);
    }
}
var loginNameCookie = "paper_ckname";
//
function getLoginCookie()
{
  var arr,reg=new RegExp("(^| )"+loginNameCookie+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return decodeURI(arr[2]);
  else
    return null;
}
function setLoginCookie(value)
{
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = loginNameCookie + "="+ encodeURI(value) + ";expires=" + exp.toGMTString();
}
function delLoginCookie()
{
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getLoginCookie();
  if(cval!=null)
    document.cookie= loginNameCookie + "="+cval+";expires="+exp.toGMTString();
}