<div id="displayBox"><!--显示框-->
    <div id="scrollBox"><!--显示框>滚动的箱子-->
        <img src="http://hdcms.com/attachment/2017/07/27/7721501147561.jpg" referrerpolicy="no-referrer">
        <img src="https://image1.thepaper.cn/image/32/931/439.jpg" referrerpolicy="no-referrer">
        <img src="https://image1.thepaper.cn/image/32/976/703.jpg" referrerpolicy="no-referrer">
        <img src="https://image1.thepaper.cn/image/32/987/20.jpg" referrerpolicy="no-referrer">
        <img src="https://image.thepaper.cn/image/31/651/500.jpg" referrerpolicy="no-referrer">
        <img src="http://hdcms.com/attachment/2017/07/27/7721501147561.jpg" referrerpolicy="no-referrer"><!--复制的第一张-->
    </div>

    <ul id="scrollBtn"><!--显示框>小圆点按钮-->
        <li class="cur"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>

    <a href="javascript:" class="arrowBtn left iconfont">&#xe620;</a><!--显示框>左右前后退按钮-->
    <a href="javascript:" class="arrowBtn right iconfont">&#xe624;</a>
</div>
<div class="bdwd main clearfix">
    <div class="pjax-wrapper">
        <div class="pjax-content">
            <div class="prev-content">
                <div class="pjax-loading" style="height: 305px;">
                    <div class="loading-view"></div>
                </div>
            </div>
            <div id="main_lt" class="main_lt">
                <div class="pdtt01">
                    <div class="pdtt_lt">
                        <a href="" class="tiptitleImg" target="_blank">
                            <img src="http://hdcms.com/attachment/2017/07/27/7721501147561.jpg"
                                 alt="{{$field['title']}}">
                        </a>
                    </div>
                    <div class="pdtt_rt">
                        <div class="pdtt_rtbd">
                            <h2><a href="{{$field['url']}}" target="_blank">上海：建设张江综合性国家科学中心，成为世界一流科学城</a></h2>
                            <p>目前，张江科学城建设规划已完成编制。张江科学城规划面积约９４平方公里，总的定位是科学特征明显、科技要...</p>
                        </div>
                        <div class="pdtt_trbs">
                            <a href="/" target="_blank">科技湃</a>
                            <span> 2017-07-27 17:26:49</span>
                            <div class="trbstxt">热门</div>
                        </div>
                    </div>
                </div>

                <div class="main_ltad"></div>

                <div class="news_slide">
                    <div class="newsslidebd" id="newsslidebd">
                        <span id="news_masonry"></span>
                        <span id="news_list"></span>
                    </div>
                </div>

                <div id="mainContent">
                    <div class="newsbox" id="masonryContent">
                        <?php foreach ($articles as $art): ?>
                            <div class="news_li">
                                <div class="news_tu">
                                    <a href="/article/<?= $art['id'] ?>" class="tiptitleImg" target="_blank">
                                        <img src="<?= $art['cover'] ?>" alt="<?= $art['title'] ?>"
                                             referrerpolicy="no-referrer">
                                    </a>
                                </div>
                                <h2>
                                    <a href="/article/<?= $art['id'] ?>" target="_blank"><?= $art['title'] ?></a>
                                </h2>
                                <p><?= $art['intro'] ?></p>
                                <div class="pdtt_trbs">
                                    <a href="/category/<?= $art['category_id'] ?>"
                                       target="_blank"><?= $art['category_name'] ?? '' ?></a>
                                    <span><?= $art['create_time'] ?></span>
                                    <span class="trbszan">
                                    <span id="sourceId::<?= $art['id'] ?>"
                                          class="cy_cmt_count"><?= $art['comment_num'] ?? 0 ?></span>
                                </span>
                                </div>
                            </div>
                        <?php endforeach ?>


                        <script id="cy_cmt_num"
                                src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cyt8rNSI2"></script>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <?= $this->render('_right_bar_index') ?>
</div>

<style>
    @font-face {
        /*左右箭头按钮的字体库*/
        font-family: 'iconfont';
        src: url('../theme/news/font/iconfont.eot');
        src: url('../theme/news/font/iconfont.eot?#iefix') format('embedded-opentype'),
        url('../theme/news/font/iconfont.woff') format('woff'),
        url('../theme/news/font/iconfont.ttf') format('truetype'),
        url('../theme/news/font/iconfont.svg#iconfont') format('svg');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }

    #displayBox { /*显示框*/
        width: 1020px;
        height: 555px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        box-shadow: 0 6px 15px rgba(255, 255, 255, 0.5);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    #displayBox #scrollBox { /*显示框>滚动的箱子*/
        /*width: 5100px;*/
        /*width: 6220px;*/
        width: 6250px;
        height: 555px;
        position: absolute;
        left: 0;
        top: 0;
    }

    #displayBox #scrollBox img { /*显示框>滚动的箱子>装下的图片*/
        width: 1020px;
        height: 555px;
        float: left;
    }

    #displayBox #scrollBtn { /*显示框>小圆点按钮组*/
        position: absolute;
        bottom: 50px;
        left: 50%;
        margin-left: -68px;
    }

    #displayBox #scrollBtn li {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        cursor: pointer;
        float: left;
        margin-right: 15px;
        list-style: none;
    }

    #displayBox #scrollBtn li:last-child {
        margin-right: 0;
    }

    #displayBox #scrollBtn li.cur { /*相应图片显示时对应的小圆点按钮变红*/
        background: red;
        box-shadow: 0 0 2px gold;
    }

    #displayBox .arrowBtn { /*显示框>小箭头按钮前后退功能*/
        display: block;
        width: 36px;
        height: 60px;
        background: rgba(255, 255, 255, 0.3);
        position: absolute;
        top: 50%;
        margin-top: -60px;
        font-size: 30px;
        color: #fff;
        font-weight: 700;
        text-align: center;
        line-height: 60px;
        text-decoration: none;
    }

    #displayBox .arrowBtn.left {
        /*left: 0;*/
        left: -36px;
    }

    #displayBox .arrowBtn.right {
        /*right: 0;*/
        right: -36px;
    }

    #displayBox .arrowBtn:hover {
        color: red;
        background: rgba(255, 255, 255, 0.8);
    }
</style>
<script>
    $(function () {
        (function scollBanner() {
            var num = 0;//大总管变量

            function fn_scroll() {//滚动函数
                // num++;
                if (num >= 6) {
                    $('#scrollBox').css({'left': '0px'});
                    num = 1;
                }
                if (num < 0) {
                    $('#scrollBox').css({'left': '-5100px'});
                    num = 4;
                }
                var newLeft = num * -1020 + 'px';
                $('#scrollBox').stop().animate({'left': newLeft}, 1000);

                if (num == 5) {//使小圆点相当变动
                    $('#scrollBtn li').eq(0).addClass('cur').siblings('li').removeClass('cur');
                } else {
                    $('#scrollBtn li').eq(num).addClass('cur').siblings('li').removeClass('cur');
                }
            }

            var timer_scroll;

            function fn_timer() {//自动滚动函数
                timer_scroll = setInterval(function () {
                    num++;
                    fn_scroll();
                }, 2000)
            }

            fn_timer();

            $('#scrollBtn li').hover(function () {//小圆点hover相应图片展示
                clearInterval(timer_scroll);
                num = $(this).index();
                fn_scroll();
            }, function () {
                fn_timer();
            })

            $('#displayBox').hover(function () {//小箭头移入移出显隐
                $('.arrowBtn.left').stop().animate({'left': '0px'}, 500);
                $('.arrowBtn.right').stop().animate({'right': '0px'}, 500);
            }, function () {
                $('.arrowBtn.left').stop().animate({'left': '-36px'}, 500);
                $('.arrowBtn.right').stop().animate({'right': '-36px'}, 500);
            })

            var timer_b2;
            $('.arrowBtn').click(function () {//小箭头点击使相应图片显示
                var xuhao = $(this).index();
                clearInterval(timer_scroll);
                clearTimeout(timer_b2);
                timer_b2 = setTimeout(function () {//避免快速点击使图片晃动
                    if (xuhao == 2) {
                        num--;
                        fn_scroll();
                    } else {
                        num++;
                        fn_scroll();
                    }
                }, 200)
            })

            $('.arrowBtn').mouseleave(function () {//鼠标移出使图片自动滚动恢复
                clearInterval(timer_scroll);
                fn_timer();
            })
        })()
    })
</script>