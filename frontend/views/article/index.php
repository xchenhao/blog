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
                    <style>
                        #masonryContent {
                            position: relative;
                            width: 939px;
                            height: 740px;
                        }
                        #masonryContent .news_li {
                            position: absolute;
                            height: 300px;
                        }

                        #masonryContent .news_li:nth-of-type(3n+1) {
                            left: 0;
                        }

                        #masonryContent .news_li:nth-of-type(3n+2) {
                            left: 313px;
                        }

                        #masonryContent .news_li:nth-of-type(3n+3) {
                            left: 626px;
                        }

                        #masonryContent .news_li:nth-of-type(3n+3) {
                            left: 626px;
                        }
                    </style>

                    <?php foreach($articles as $art): ?>
                        <div class="news_li">
                            <div class="news_tu">
                                <a href="/article/<?= $art['id']?>" class="tiptitleImg" target="_blank">
                                    <img src="<?= $art['cover'] ?>" alt="<?= $art['title'] ?>">
                                </a>
                            </div>
                            <h2>
                                <a href="/article/<?= $art['id'] ?>" target="_blank"><?= $art['title'] ?></a>
                            </h2>
                            <p><?= $art['intro'] ?></p>
                            <div class="pdtt_trbs">
                                <a href="/category/<?= $art['category_id'] ?>" target="_blank"><?= $art['category_name'] ?? '' ?></a>
                                <span><?= $art['create_time'] ?></span>
                                <span class="trbszan">
                                    <span id="sourceId::<?= $art['id'] ?>" class="cy_cmt_count"><?= $art['comment_num'] ?? 0 ?></span>
                                </span>
                            </div>
                        </div>
                    <?php endforeach ?>


                    <script id="cy_cmt_num" src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cyt8rNSI2"></script>
                </div>
            </div>

        </div>
    </div>
</div>

<?= $this->render('_right_bar_index') ?>
</div>
