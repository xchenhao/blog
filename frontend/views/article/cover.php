<div class="bdwd main clearfix">
    <div class="pjax-wrapper">
        <div class="pjax-content">
            <div class="prev-content">
                <div class="pjax-loading" style="height: 305px;">
                    <div class="loading-view"></div>
                </div>
            </div>
            <div id="main_lt" class="main_lt">

                <div class="list_head">
                    <!--<div class="list_logo"><a href="list_25462"><img src="{{__TEMPLATE__}}/img/61.png" alt="中国政库"></a></div>-->
                    <div class="list_name">
                        <a href="#" style="color: #00a5e8;"><?= $category['name'] ?></a>
                    </div>
                    <div class="list_abstract"><?= $category['intro'] ?></div>
                </div>

<!--                <div class="ask_banner">-->
<!--                    <div class="ask_sort clearfix"></div>-->
<!--                </div>-->

                <div class="askcontent" style="min-height: inherit">

                    <ul class="ask_user_area clearfix" id="ask_ulist">
                            <?php foreach ($articles['items'] as $arc):?>
                            <li class="topic">
                                <div class="ask_user_body">
                                    <img src="<?= $arc['cover'] ?>" class="cover_pic" referrerpolicy="no-referrer"/>
                                    <div class="ask_user_bgimg"><a href="/article/<?= $arc['id'] ?>" class="userhome" target="_blank"></a>
                                        <div class="ask_user_abstxt">
                                            <a href="/article/<?= $arc['id'] ?>" target="_blank">
                                                <div class="ask_user_profile"><?= $arc['title'] ?></div>
                                            </a>
<!--                                            <div class="ask_user_share">-->
<!--                                                <span>分享到</span>-->
<!--                                                <a class="sina"-->
<!--                                                   href="javascript:askToSina('81',{{$field["title"]}},{{$field["url"]}},{{__ROOT_}});"></a>-->
<!--                                                <a class="zone"-->
<!--                                                   href="javascript:askToZone('81',{{$field["title"]}},{{$field["url"]}},{{__ROOT_}});"></a>-->
<!--                                                <a class="tx"-->
<!--                                                   href="javascript:askToTencent('81',{{$field["title"]}},{{$field["url"]}},{{__ROOT_}});"></a>-->
<!--                                                <a class="rr"-->
<!--                                                   href="javascript:askTodouban('81',{{$field["title"]}},{{$field["url"]}},{{__ROOT_}});"></a>-->
<!--                                            </div>-->
                                        </div>
                                    </div>
                                </div>
                                <div class="ask_user_trbs2">
                                    <a href="javascript:;" class="u_sname">作者：<?= $arc['author'] ?></a>
                                    <span><?= $arc['create_time'] ?></span>
                                    <span class="trbszan"><?= $art['comment_num'] ?? 0 ?></span>
                                    <div class="trbstxt">推荐</div>
                                </div>
                            </li>
                            <?php endforeach ?>
                    </ul>

                    <!--<div id="addButton" class="add_more" style="display:block;">-->
                    <!--<a id="next" href="/plus/index_pic.php?typeid=24&page=2"></a>-->
                    <!--</div>-->

                </div>
                <div class="pagination-box">
                    <?= \yii\widgets\LinkPager::widget([
                        'pagination' => $articles['pagination'],
                        'prevPageLabel' => false,
                        'firstPageLabel' => '首页',
                        'lastPageLabel' => '尾页',
                    ]) ?>
                </div>
                <div class="ask_banner" id="ask_banner">
                    <div class="ask_sort clearfix"></div>
                </div>

            </div>
            <div class="next-content">
                <div class="pjax-loading" style="height: 305px;">
                    <div class="loading-view"></div>
                </div>
            </div>
        </div>
    </div>
    <?= $this->render('_right_bar_cover', [
            'category_id' => (int)$category['id'],
    ]) ?>
</div>
