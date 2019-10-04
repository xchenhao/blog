<div class="bdwd main clearfix">
    <div class="main_lt">
        <div class="list_head">
            <!--<div class="list_logo"><a href="list_25462"><img src="{{__TEMPLATE__}}/img/61.png" alt="中国政库"></a></div>-->
            <div class="list_name">
                <a href="#" style="color: #00a5e8;"><?= $category['name'] ?></a>
            </div>
            <div class="list_abstract"><?= $category['intro'] ?></div>
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

        <div id="mainContent">
            <div class="newsbox" id="masonryContent">
                <?php foreach ($articles['items'] as $arc): ?>
                <div class="news_li" id="cont271">
                    <div class="news_tu">
                        <a href="/article/<?= $arc['id'] ?>" class="tiptitleImg" target="_blank">
                            <img src="<?= $arc['cover'] ?>" referrerpolicy="no-referrer">
                        </a>
                    </div>
                    <h2><a href="/article/<?= $arc['id']?>" target="_blank"><?= $arc['title'] ?></a></h2>
                    <p><?= $arc['title'] ?></p>
                    <div class="pdtt_trbs">
                        <a href="/category/<?= $arc['category_id'] ?>" target="_blank"><?= $arc['category_name'] ?></a><span><?= $arc['create_time'] ?></span>
                        <span class="trbszan"><span id = "sourceId::<?= $arc['id'] ?>" class = "cy_cmt_count" ><?= $arc['comment_num'] ?? 0 ?></span></span>
                    </div>
                </div>
                    <?php endforeach ?>

<!--                <div class="news_li hidden" id="last1" lasttime="1500531475" pageindex="1" style="display: none !important; position: absolute; left: 0px; top: 1996px;"></div>-->
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

        <script id="cy_cmt_num" src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cyt8rNSI2"></script>


        <!--<div id="addButton" class="add_more" style="display:block;">-->
        <!--<a id="next" href="/plus/index_scroll.php"></a>-->
        <!--</div>-->
    </div>

    <?= $this->render('_right_bar_list', [
            'category_id' => (int)$category['id'],
    ]) ?>
</div>
