<div class="bdwd main clearfix">
    <div class="pjax-wrapper">
        <div class="pjax-content">
            <div class="prev-content">
                <div class="pjax-loading" style="height: 305px;">
                    <div class="loading-view"></div>
                </div>
            </div>
            <div id="main_lt" class="main_lt">
                <div class="ask_banner">
                    <div class="ask_sort clearfix">

                    </div>

                </div>

                <div class="askcontent" style="min-height: inherit">

                    <ul class="ask_user_area clearfix" id="ask_ulist">
                        <?php
                            $articles = [
                                [
                                    'id' => 1,
                                    'thumb' => 'http://hdcms.com/attachment/2017/07/27/51171501088571.jpg',
                                    'title' => '向荒野致敬：过去25年的25张户外探险奇照',
                                    'created_at' => '2017-07-27 01:04:29',
                                    'author' => '小迪 编译整理',
                                ],
                                [
                                    'id' => 1,
                                    'thumb' => 'http://hdcms.com/attachment/2017/07/27/77231501087130.jpg',
                                    'title' => '野路子 | 攀登我的大天堂，找到属于自己的那座山',
                                    'created_at' => '2017-07-27 00:39:52',
                                    'author' => 'Kurt',
                                ],
                                [
                                    'id' => 1,
                                    'thumb' => 'http://hdcms.com/attachment/2017/07/27/11141501089665.jpg',
                                    'title' => '山居普罗旺斯',
                                    'created_at' => '2017-07-27 01:22:04',
                                    'author' => 'Jing',
                                ],
                                [
                                    'id' => 1,
                                    'thumb' => 'http://hdcms.com/attachment/2017/07/27/79431501089775.jpg',
                                    'title' => '走近冈仁波齐，世界中心的雪山',
                                    'created_at' => '2017-07-27 01:23:33',
                                    'author' => '李初初',
                                ],
                                [
                                    'id' => 1,
                                    'thumb' => 'http://hdcms.com/attachment/2017/07/27/29621501089893.jpg',
                                    'title' => '趣看｜十六年饰一梯，公寓楼也能变“凡尔赛宫”',
                                    'created_at' => '2017-07-27 01:25:44',
                                    'author' => 'B2B',
                                ],
                                [
                                    'id' => 1,
                                    'thumb' => 'http://hdcms.com/attachment/2017/07/27/74671501090020.jpg',
                                    'title' => '马克龙要拿MPV当总统座驾？看看前任法国总统们选择的汽车',
                                    'created_at' => '2017-07-27 01:27:51',
                                    'author' => '澎湃新闻记者 栾锴韬',
                                ],
                            ];

                        ?>
                            <?php foreach ($articles as $arc):?>
                            <li class="topic">
                                <div class="ask_user_body">
                                    <img src="<?= $arc['thumb'] ?>" class="cover_pic"/>
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
                                    <a href="/author/1" target="_blank" class="u_sname">作者：<?= $arc['author'] ?></a>
                                    <span><?= $arc['created_at'] ?></span>
                                </div>
                            </li>
                            <?php endforeach ?>
                    </ul>

                    <!--<div id="addButton" class="add_more" style="display:block;">-->
                    <!--<a id="next" href="/plus/index_pic.php?typeid=24&page=2"></a>-->
                    <!--</div>-->

                </div>
                {{$arcModel->links()}}
                <div class="ask_banner" id="ask_banner">
                    <div class="ask_sort clearfix">

                    </div>
                </div>

            </div>
            <div class="next-content">
                <div class="pjax-loading" style="height: 305px;">
                    <div class="loading-view"></div>
                </div>
            </div>
        </div>
    </div>
    <?= $this->render('_right_bar_cover') ?>
</div>
