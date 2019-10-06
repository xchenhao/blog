<link rel="stylesheet" type="text/css" href="/theme/news/css/info.css"/>
<style type="text/css">
    .searchMenu {
        margin-top: 30px;
        position: relative;
        height: 49px;
    }

    .searchMenu ul {
        list-style: none;
        margin: 0px;
        padding: 0px;
        width: 672px;
    }

    .searchMenu ul li {
        float: left;
    }

    .searchMenu ul li {
        background-color: #f0f0f0;
        color: #dde4ec;
        display: block;
        line-height: 49px;
        width: 134px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        text-decoration: none;
        white-space: nowrap;
    }

    .searchMenu ul li a {
        text-decoration: none;
        color: #000;
        font-family: "微软亚黑";
        font-size: 18px;
    }

    .searchMenuSelected {
        background-color: #FFF !important;
        border-top: 2px #0ca1e8 solid;
        font-weight: bold;
    }

    .searchMenu ul li a:active {
        background-color: #fff;
        color: #cfdbe6;
        text-decoration: none;
    }

    .has_children {
        float: right;
    }

    #selectTimeOrder {
        border: 1px solid #b9bab7;
        width: 78px;
    }

    #selectTimeOrder dl dt {
        margin: 0 0;
        line-height: 28px;
    }

    #selectTimeOrder dl {
        margin: 0;
    }

    #selectTimeOrder dl dt hover {
        background-color: #f0f0f0;
    }

    .selectTimeOrderBg {
        background-color: #f0f0f0;
    }

    .has_children span {
        float: right;
    }

    .has_children a {
        float: right;
        width: 300px;
    }

    .selectedOrder {
        color: #0ca1e8;
    }

    .selectedOrder a {
        color: #0ca1e8;
    }

    .timeOrderBg {
        background: url(/theme/news/img/searchToggle.gif) center center no-repeat;
        background-size: 100%;
    }

    .search_pph_panel {
        min-height: unset;
        padding-bottom: 0;
    }
</style>

<script type="text/javascript">
    $(document).ready(function () {
        var bn_bt = $(".index .bn_a");
        bn_bt.addClass("on").attr("id", "select");

        $("#search_key").on("click", function () {
            $("#searchResult").submit();
        })
    });
</script>

<div class="bdwd main clearfix">
    <div class="main_lt search_pph">
        <div class="search_pph_panel">
            <div class="search_input clearfix">
                <form action="searchResult.jsp" id="searchResultForm">
                    <span class="search_source">正在搜索</span>
                    <input type="text" value="长" id="hds_inp" class="sc_inp" name="inpsearch" maxlength="20">
                    <input type="hidden" value="all_0:" id="searchPre" name="searchPre">
                    <input type="hidden" value="3" id="orderType" name="orderType">
                    <input type="hidden" value="1" id="userType" name="userType">
                    <input type="submit" value="" id="search_key" class="sc_bt">
                </form>
            </div>
            <!-- 非问吧 -->
            <div class="searchMenu" id="searchMenuId">
                <ul>
                    <li><a href="javascript:void(0);">新闻</a></li>
                    <li><a href="javascript:void(0);">标题</a></li>
                    <li><a href="javascript:void(0);">正文</a></li>
                    <li><a href="javascript:void(0);">问吧</a></li>
                    <li><a href="javascript:void(0);">澎湃号</a></li>
                    <li><a href="javascript:void(0);">用户</a></li>
                </ul>
            </div>

            <div class="search_tips">找到约<span>78985</span>个结果<img src="/theme/news/img/search_arrow.png"/>
            </div>
            <div style="height:auto;" id="searchSelectDiv">
                <div style="width:60px;font-size:12px;float:right;font-size:12px;text-align:right;" id="selectByScore"
                     class="selectedOrder">按相关度
                </div>
                <div class="has_children" style="width:80px;float:right;margin-right:15px;height::56px;"
                     id="selectTimeDiv">
                    <div style="cursor:pointer;text-align:right;" id="selectByTime">按时间&nbsp;<span class="timeOrderBg"
                                                                                                   style="width:13px;">&nbsp;&nbsp;</span>
                    </div>
                    <div id="selectTimeOrder" style="display:none;">
                        <dl>
                            <dt style="cursor:pointer;text-align:center;" id="timeDescId">从新到旧</dt>
                            <dt style="cursor:pointer;text-align:center;" id="timeAscId">从旧到新</dt>
                        </dl>
                    </div>
                </div>
            </div>

            <div id="mainContent" class="s_p_r_list">
                <div class="search_res">
                    <h2>
                        <a href="newsDetail_forward_4609816" target="_blank"><span class="highlight">长</span>三角铁路今迎国庆假期返程客流高峰，增开旅客列车274列</a>
                    </h2>
                    <p>…<span class="highlight">长</span>三角铁路迎来返程客流高峰。 段利雷 图今年国庆假期，<span class="highlight">长</span>三角铁路旅游流、探亲流等多流交织叠加，呈现火爆之势。
                        澎湃新闻（www.thepaper.cn）记者从中国铁路…</p>
                    <div class="search_trbs">
                        <span class="trbszan" style="user-select: auto;">65</span>
                        <span>1小时前</span>
                        <a href="list_25422" target="_blank">浦江头条</a>
                    </div>
                </div>
                <div class="search_res">
                    <h2>
                        <a href="newsDetail_forward_4609816" target="_blank"><span class="highlight">长</span>三角铁路今迎国庆假期返程客流高峰，增开旅客列车274列</a>
                    </h2>
                    <p>…<span class="highlight">长</span>三角铁路迎来返程客流高峰。 段利雷 图今年国庆假期，<span class="highlight">长</span>三角铁路旅游流、探亲流等多流交织叠加，呈现火爆之势。
                        澎湃新闻（www.thepaper.cn）记者从中国铁路…</p>
                    <div class="search_trbs">
                        <span class="trbszan" style="user-select: auto;">65</span>
                        <span>1小时前</span>
                        <a href="list_25422" target="_blank">浦江头条</a>
                    </div>
                </div>
                <div class="search_res">
                    <h2>
                        <a href="newsDetail_forward_4609816" target="_blank"><span class="highlight">长</span>三角铁路今迎国庆假期返程客流高峰，增开旅客列车274列</a>
                    </h2>
                    <p>…<span class="highlight">长</span>三角铁路迎来返程客流高峰。 段利雷 图今年国庆假期，<span class="highlight">长</span>三角铁路旅游流、探亲流等多流交织叠加，呈现火爆之势。
                        澎湃新闻（www.thepaper.cn）记者从中国铁路…</p>
                    <div class="search_trbs">
                        <span class="trbszan" style="user-select: auto;">65</span>
                        <span>1小时前</span>
                        <a href="list_25422" target="_blank">浦江头条</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<style>
    .main_ltad:hover img {
        -webkit-transform: scale(1.1);
        transform: scale(1.1)
    }

    .main_ltad img {
        transition: all 1.0s;
        -webkit-transition: all 1.0s
    }
</style>

<script type="text/javascript">
    $(document).ready(function () {
        $(".search_ptips_sx").on("click", function () {
            if ($(".search_user_sx").hasClass("hide")) {
                $(".search_user_sx").show().removeClass("hide");
            } else {
                $(".search_user_sx").hide().addClass("hide");
            }
        })
        $("#searchAllPph").on("click", function () {
            $("#searchPre").val(paramArray[5]);
            $("#userType").val(3);
            $("#searchResultForm").submit();
        })
        $(".search_user_sx div").on("click", function () {
            var type = $(this).data("type");
            $("#userType").val(type);
            $("#searchResultForm").submit();
        })
    });

    var paramArray = ["all_0:", "contentName_0:", "content_0:", "topic", "pph", "user"];
    var searchPre = paramArray[0];
    searchPre = "all_0:";
    $("#searchMenuId ul li").each(function (index) {
        $(this).bind("click", function (e) {
            $("#searchPre").val(paramArray[index]);
            $("#searchResultForm").submit();
        });
        $(this).mouseover(function () {
            clearAll();
            $(this).addClass("searchMenuSelected");
        });
    });

    $("#selectTimeDiv").mouseleave(function () {
        $("#selectTimeOrder").css("display", "none");
        $("#selectTimeOrder").css("z-index", "");
        $("#selectTimeOrder").css("position", "");
    });

    $("#selectByTime").mouseover(function () {
        showSelectDiv();
    });

    function showSelectDiv() {
        $("#selectTimeOrder").css("display", "block");
        $("#selectTimeOrder").css("z-index", "999");
        $("#selectTimeOrder").css("background-color", "#FFF");
        $("#selectTimeOrder").css("position", "absolute");
    }

    $("#timeDescId").bind("click", function (e) {
        $("#orderType").val("1");
        $("#searchResultForm").submit();
        setSearchCookie(1);
    });

    $("#timeAscId").bind("click", function (e) {
        $("#orderType").val("2");
        $("#searchResultForm").submit();
        setSearchCookie(2);
    });

    $("#timeDescId").mouseover(function () {
        $(this).addClass("selectTimeOrderBg");
        $("#timeAscId").removeClass("selectTimeOrderBg");
    });
    $("#timeAscId").mouseover(function () {
        $(this).addClass("selectTimeOrderBg");
        $("#timeDescId").removeClass("selectTimeOrderBg");
    });
    selectDefault();

    function selectDefault() {
        clearAll();
        if (searchPre == "") {
            $("#searchMenuId ul li:eq(0)").addClass("searchMenuSelected");
        } else {
            $.each(paramArray, function (ind) {
                if (this == searchPre) {
                    $("#searchMenuId ul li:eq(" + ind + ")").addClass("searchMenuSelected");
                }
            });
        }
    }

    function clearAll() {
        $("#searchMenuId ul li").each(function (index) {
            $(this).removeClass("searchMenuSelected");
        });
    }

    $("#searchMenuId ul").mouseout(function () {
        selectDefault();
    });
</script>