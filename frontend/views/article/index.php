<div class="bdwd main clearfix">
    <div class="pjax-wrapper">
        <div class="pjax-content">
            <div class="prev-content">
                <div class="pjax-loading" style="height: 305px;">
                    <div class="loading-view"></div>
                </div>
            </div>
            <div id="main_lt" class="main_lt">
                <!--首页大图-->
                <div class="pdtt01">

                <div class="pdtt_lt">
                    <a href="" class="tiptitleImg" target="_blank">
                        <img src="http://hdcms.com/attachment/2017/07/27/7721501147561.jpg" alt="{{$field['title']}}">
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
                    <!--结束：首页大图-->
            </div>


            <div class="main_ltad"></div>

            <div class="news_slide">
                <div class="newsslidebd" id="newsslidebd">
                    <span id="news_masonry"></span>
                    <span id="news_list"></span>
                </div>
            </div>

            <div id="mainContent">
                <div class="newsbox" id="masonryContent" style="position: relative; width: 939px; height: 740px;">

                    <style>
                        .news_li {
                            position: absolute;
                            height: 300px;
                        }

                        .news_li:nth-of-type(3n+1) {
                            left: 0;
                        }

                        .news_li:nth-of-type(3n+2) {
                            left: 313px;
                        }

                        .news_li:nth-of-type(3n+3) {
                            left: 626px;
                        }

                        .news_li:nth-of-type(3n+3) {
                            left: 626px;
                        }
                    </style>

                    <?php
                        $article = [
                            [
                                'id' => 10,
                                'cid' => 2,
                                'cat_name' => '科技湃',
                                'title' => '上海：建设张江综合性国家科学中心，成为世界一流科学城',
                                'intro' => '上海：建设张江综合性国家科学中心，成为世界一流科学城',
                                'thumb' => 'http://hdcms.com/attachment/2017/07/27/7721501147561.jpg',
                                'created_at' => '2017-07-27 17:26:49',
                                'comment_num' => 3,
                            ],
                            [
                                'id' => 10,
                                'cid' => 2,
                                'cat_name' => '读书',
                                'title' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                                'intro' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                                'thumb' => 'http://hdcms.com/attachment/2017/07/31/9241501503150.jpg',
                                'created_at' => '2017-07-31 20:13:17',
                                'comment_num' => 2,
                            ],
                            [
                                'id' => 10,
                                'cid' => 2,
                                'cat_name' => '读书',
                                'title' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                                'intro' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                                'thumb' => 'http://hdcms.com/attachment/2017/07/26/39711501069470.jpg',
                                'created_at' => '2017-07-26 19:45:45',
                                'comment_num' => 3,
                            ],
                            [
                                'id' => 10,
                                'cid' => 2,
                                'cat_name' => '读书',
                                'title' => '谢其章︱字小如蚁的《新民声半月刊》',
                                'intro' => '谢其章︱字小如蚁的《新民声半月刊》',
                                'thumb' => 'http://hdcms.com/attachment/2017/07/25/86411500917256.jpg',
                                'created_at' => '2017-07-24 23:09:38',
                                'comment_num' => 5,
                            ],
                            [
                                'id' => 10,
                                'cid' => 2,
                                'cat_name' => '读书',
                                'title' => '向荒野致敬：过去25年的25张户外探险奇照',
                                'intro' => '向荒野致敬：过去25年的25张户外探险奇照',
                                'thumb' => 'http://hdcms.com/attachment/2017/07/27/51171501088571.jpg',
                                'created_at' => '2017-07-27 01:04:29',
                                'comment_num' => 8,
                            ],
                            [
                                'id' => 10,
                                'cid' => 2,
                                'cat_name' => '财经上下游',
                                'title' => '商务部：正在对滴滴和优步中国合并案进行反垄断调查',
                                'intro' => '商务部：正在对滴滴和优步中国合并案进行反垄断调查',
                                'thumb' => 'http://hdcms.com/attachment/2017/07/27/23581501147172.jpeg',
                                'created_at' => '2017-07-27 17:21:19',
                                'comment_num' => 8,
                            ],
                        ];

                    ?>
                    <?php foreach($article as $art): ?>
                        <div class="news_li">
                            <div class="news_tu">
                                <a href="/article/<?= $art['id']?>" class="tiptitleImg" target="_blank">
                                    <img src="<?= $art['thumb'] ?>" alt="<?= $art['title'] ?>">
                                </a>
                            </div>
                            <h2>
                                <a href="/article/<?= $art['id'] ?>" target="_blank"><?= $art['title'] ?></a>
                            </h2>
                            <p><?= $art['intro'] ?></p>
                            <div class="pdtt_trbs">
                                <a href="/category/<?= $art['cid'] ?>" target="_blank"><?= $art['cat_name'] ?></a>
                                <span><?= $art['created_at'] ?></span>
                                <span class="trbszan">
                                    <span id="sourceId::<?= $art['id'] ?>" class="cy_cmt_count"><?= $art['comment_num'] ?></span>
                                </span>
                            </div>
                        </div>
                    <?php endforeach ?>

                    <script>
                        for (var i = 0; i < $('.news_li').length; i++) {
                            var t = parseInt(i / 3);
                            $('.news_li').eq(i).css('top', t * 384 + 'px');
                        }
                    </script>

                    <script id="cy_cmt_num" src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cyt8rNSI2"></script>
                </div>
            </div>

        </div>
    </div>
</div>

<?= $this->render('_right_bar_index') ?>
</div>
