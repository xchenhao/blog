<div class="bdwd main clearfix">
    <div class="pjax-wrapper">
        <div class="pjax-content">
            <div class="prev-content">
                <div class="pjax-loading" style="height: 305px;">
                    <div class="loading-view"></div>
                </div>
            </div>
            <div id="main_lt" class="main_lt">
                <div id="displayBox"><!--显示框-->
                    <div id="scrollBox"><!--显示框>滚动的箱子-->
                        <?php foreach ($banners as $item): ?>
                        <div class="pdtt01">
                            <div class="pdtt_lt">
                                <a href="/article/<?= $item['id'] ?>" class="tiptitleImg" target="_blank">
                                    <img src="<?= $item['cover'] ?>" alt="<?= $item['title'] ?>" referrerpolicy="no-referrer">
                                </a>
                            </div>
                            <div class="pdtt_rt">
                                <div class="pdtt_rtbd">
                                    <h2><a href="/article/<?= $item['id'] ?>" target="_blank"><?= $item['title'] ?></a></h2>
                                    <p><?= $item['intro'] ?></p>
                                </div>
                                <div class="pdtt_trbs">
                                    <a href="/category/<?= $item['category_id'] ?>" target="_blank"><?= $item['category_name'] ?></a>
                                    <span><?= $item['create_time'] ?></span>
                                    <div class="trbstxt">热门</div>
                                </div>
                            </div>
                        </div>
                        <?php endforeach ?>
                    </div>

                    <ul id="scrollBtn"><!--显示框>小圆点按钮-->
                        <?php foreach ($banners as $item): ?>
                            <li></li>
                        <?php endforeach ?>
                    </ul>

                    <a href="javascript:" class="arrowBtn left iconfont">&#xe620;</a><!--显示框>左右前后退按钮-->
                    <a href="javascript:" class="arrowBtn right iconfont">&#xe624;</a>
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
                        <?php foreach ($articles['items'] as $art): ?>
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
                                    <span class="trbszan"><?= $art['comment_num'] ?? 0 ?></span>
                                    <div class="trbstxt">推荐</div>
                                </div>
                            </div>
                        <?php endforeach ?>

                        <script id="cy_cmt_num" src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cyt8rNSI2"></script>
                    </div>
                    <div class="pagination-box">
                        <?= \yii\widgets\LinkPager::widget([
                            'pagination' => $articles['pagination'],
                            'prevPageLabel' => false,
                            'firstPageLabel' => '首页',
                            'lastPageLabel' => '尾页',
                        ]) ?>
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
        width: 940px;
        height: 360px;
        margin: 0 auto 20px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 6px 15px rgba(255, 255, 255, 0.5);
    }

    #displayBox #scrollBox { /*显示框>滚动的箱子*/
        width: 10000px;  /* FIXME: 最长的宽度，宽度不应写死*/
        height: 360px;
        position: absolute;
        left: 0;
        top: 0;
    }

    #displayBox #scrollBox .pdtt01 { /*显示框>滚动的箱子>装下的图片*/
        float: left;
    }

    #displayBox #scrollBtn { /*显示框>小圆点按钮组*/
        position: absolute;
        bottom: 20px;
        left: 50%;
        padding: 3px 6px;
        border-radius: 20px;
        box-shadow: 0px 0px 15px 2px #b4b4b4;
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
        top: 60%;
        margin-top: -60px;
        font-size: 30px;
        color: #fff;
        font-weight: 700;
        text-align: center;
        line-height: 60px;
        text-decoration: none;
    }

    #displayBox .arrowBtn.left {
        left: -36px;
    }

    #displayBox .arrowBtn.right {
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

            var bannerCount = $('#scrollBox .pdtt01').length
            if (bannerCount <= 1) {
                $('#scrollBtn').css('display', 'none')
                return 0
            }

            $('#scrollBtn li').eq(0).addClass('cur');

            $('#scrollBox').append(
                '<div class="pdtt01">' +
                    $('#scrollBox .pdtt01').eq(0).html() +
                '</div>'
            )
            var num = 0;//大总管变量

            function fn_scroll() {//滚动函数
                if (num >= bannerCount + 1) {
                    $('#scrollBox').css({'left': '0px'});
                    num = 1;
                }
                if (num < 0) {
                    $('#scrollBox').css({'left': '-5100px'});
                    num = bannerCount - 1;
                }
                var newLeft = num * -940 + 'px';
                $('#scrollBox').stop().animate({'left': newLeft}, 2000);

                if (num == bannerCount) {//使小圆点相当变动
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
                }, 4500)
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