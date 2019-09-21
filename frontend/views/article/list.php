<div class="bdwd main clearfix">
    <div class="main_lt">
        <div class="list_head">
            <!--<div class="list_logo"><a href="list_25462"><img src="{{__TEMPLATE__}}/img/61.png" alt="中国政库"></a></div>-->
            <div class="list_name">
                <a href="#" style="color: #00a5e8;">读书</a>
            </div>
            <div class="list_abstract">&nbsp;</div>

        </div>

        <div class="main_ltad">
            <script type="text/javascript" src="/theme/news/js/de78abf8ad5b45b8b48db6f8c181f145.js"></script>
        </div>

        <div class="news_slide">
            <div class="newsslidebd" id="newsslidebd">
                <span id="news_masonry"></span>
                <span id="news_list"></span>
            </div>
        </div>

        <style>
            .news_li{
                position:absolute;
                height: 300px;
            }
            .news_li:nth-of-type(3n+1){
                left:0;
            }
            .news_li:nth-of-type(3n+2){
                left:313px;
            }
            .news_li:nth-of-type(3n+3){
                left:626px;
            }

            .news_li:nth-of-type(3n+3){
                left:626px;
            }
        </style>


        <div id="mainContent">
            <div class="newsbox" id="masonryContent" style="position: relative; width: 939px; height: 1150px;">
                <?php
                    $articles = [
                        [
                            'id' => 10,
                            'title' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                            'intro' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                            'thumb' => 'http://hdcms.com/attachment/2017/07/31/9241501503150.jpg',
                            'cat_name' => '读书',
                            'created_at' => '2017-07-31 20:13:17',
                            'cid' => 3,
                            'comment_num' => 3,
                        ],
                        [
                            'id' => 10,
                            'title' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                            'intro' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                            'thumb' => 'http://hdcms.com/attachment/2017/07/26/39711501069470.jpg',
                            'cat_name' => '读书',
                            'created_at' => '2017-07-26 19:45:45',
                            'cid' => 3,
                            'comment_num' => 7,
                        ],
                        [
                            'id' => 10,
                            'title' => '谢其章︱字小如蚁的《新民声半月刊》',
                            'intro' => '谢其章︱字小如蚁的《新民声半月刊》',
                            'thumb' => 'http://hdcms.com/attachment/2017/07/25/86411500917256.jpg',
                            'cat_name' => '读书',
                            'created_at' => '2017-07-24 23:09:38',
                            'cid' => 3,
                            'comment_num' => 4,
                        ],
                        [
                            'id' => 10,
                            'title' => '最新上线的京沪二手书平台：哪些作家的书有人卖没人买',
                            'intro' => '最新上线的京沪二手书平台：哪些作家的书有人卖没人买',
                            'thumb' => 'http://hdcms.com/attachment/2017/07/26/51891501069629.jpg',
                            'cat_name' => '读书',
                            'created_at' => '2017-07-26 19:48:00',
                            'cid' => 3,
                            'comment_num' => 1,
                        ],
                        [
                            'id' => 10,
                            'title' => '台湾学生如何学习马克思理论？',
                            'intro' => '台湾学生如何学习马克思理论？',
                            'thumb' => 'http://hdcms.com/attachment/2017/07/26/80601501070654.jpg',
                            'cat_name' => '读书',
                            'created_at' => '2017-07-26 20:05:05',
                            'cid' => 3,
                            'comment_num' => 2,
                        ],
                    ];
                ?>

                <?php foreach ($articles as $arc): ?>
                <div class="news_li" id="cont271">
                    <div class="news_tu">
                        <a href="/article/<?= $arc['id'] ?>" class="tiptitleImg" target="_blank">
                            <img src="<?= $arc['thumb'] ?>">
                        </a>
                    </div>
                    <h2><a href="/article/<?= $arc['id']?>" target="_blank"><?= $arc['title'] ?></a></h2>
                    <p><?= $arc['title'] ?></p>
                    <div class="pdtt_trbs">
                        <a href="/category/<?= $arc['cid'] ?>" target="_blank"><?= $arc['cat_name'] ?></a><span><?= $arc['created_at'] ?></span>
                        <span class="trbszan"><span id = "sourceId::<?= $arc['id'] ?>" class = "cy_cmt_count" ><?= $arc['comment_num'] ?></span></span>
                    </div>
                </div>
                    <?php endforeach ?>
                {{$arcModel->links()}}
                <!--<div class="news_li hidden" id="last1" lasttime="1500531475" pageindex="1" style="display: none !important; position: absolute; left: 0px; top: 1996px;"></div>-->
            </div>
        </div>

        <script>
            for(var i=0;i<$('.news_li').length; i++){
                var t = parseInt(i/3);
                $('.news_li').eq(i).css('top',t*384+'px');
            }
        </script>


        <script id="cy_cmt_num" src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cyt8rNSI2"></script>


        <!--<div id="addButton" class="add_more" style="display:block;">-->
        <!--<a id="next" href="/plus/index_scroll.php"></a>-->
        <!--</div>-->
    </div>

    <?= $this->render('_right_bar_list') ?>
</div>
