<?php

/* @var $model common\models\Article */
?>

<head>
    <link rel="stylesheet" type="text/css" href="/theme/news/css/news.css"/>
    <link rel="stylesheet" type="text/css" href="/theme/news/css/interact.css"/>
</head>

<div class="bdwd main clearfix">
    <div class="main_lt">
        <div class="newscontent">
            <div class="news_path"><a href='/'>主页</a> > <a href='/category/98'>读书</a> > </div>
            <h1 class="news_title"><?= $model->title ?></h1>

            <div class="news_about">
                <p>作者：<?= $model->author ?>  时间：<?= date('Y-m-d H:i:s', $model->create_time) ?></p>
                <div class="font_size">
                    <span>字号</span>
                    <ul class="size_level" style="display:none;">
                        <li id="super">超大</li>
                        <li id="large">大</li>
                        <li class="on" id="standard">标准</li>
                        <li id="small">小</li>
                    </ul>
                </div>
            </div>

            <div class="news_txt" data-size="standard">
                <?= $model->content ?>
            </div>

            <div class="news_editor">责任编辑：admin<span>新闻报料：400-888-8888 &nbsp; 本站原创，未经授权不得转载</span></div>
            <div class="news_keyword">关键词 >> 花朵</div>


            <div class="news_imgad">
                <!--中间广告-->
                <!--<img src="{{__TEMPLATE__}}/img/ad3.jpg">-->
            </div>

            <div class="news_txtad"><script type="text/javascript" src="/theme/news/js/24169a83eeba4b6fb3f1018a6a933986.js" ></script></div>

            <div data-widget="plista_widget_innerArticle" style="display:block;"></div>

            <div class="news_tit2"><u>继续阅读</u></div>
            <div class="ctread_bd">
                <?php
                $more = $model->getMore();
                ?>

                <div id='tag83cd3c0839acfe579f0c4c6beba139df'>
                    <?php foreach ($more as $item): ?>
                        <div class="ctread_li">
                            <div class="ctread_img"><a href="/article/<?= $item['id'] ?>"><img src="<?= $item['cover'] ?>" alt=""></a></div>
                            <div class="ctread_name"><a href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a></div>
                        </div>
                    <?php endforeach ?>
                </div>
            </div>

            <!-- UY BEGIN -->
            <!--<div id="uyan_frame"></div>-->
            <!--<script type="text/javascript" src="{{__TEMPLATE__}}/js/uyan.js"></script>-->
            <!-- UY END -->
            <!--高速版-->

            <div id="SOHUCS" sid="<?= $_GET['id'] ?>"></div>
            <script charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/changyan.js" ></script>
            <script type="text/javascript">
                window.changyan.api.config({
                    appid: 'cyut7Btpp',
                    conf: 'prod_90e87bc6f74b46bcdf9234cd3ab6fa0f'
                });
            </script>

        </div>
        <div class="newsct_share">
            <a class="ctshare_sina" href="javascript:showToSina('69','连续13季度亏损，中国自驾首撞，特斯拉“三驾马车”难拉动','http://pp.dededemo.com/uploads/allimg/160808/1-160PQZ0260-L.jpg','http://pp.dededemo.com');"></a>
            <a class="ctshare_zone" href="javascript:showToZone('69','连续13季度亏损，中国自驾首撞，特斯拉“三驾马车”难拉动','http://pp.dededemo.com/uploads/allimg/160808/1-160PQZ0260-L.jpg','http://pp.dededemo.com','8月4日，特斯拉公布第二季度亏损报表和近日中国车主爆料特斯拉中国自动驾驶首撞事件，这令原本平淡不惊的八月汽车圈在开月第一周就泛起涟漪。 财报：第二季度亏损加剧高达2.9');"></a>
            <a class="ctshare_tx" href="javascript:showToTencent('69','连续13季度亏损，中国自驾首撞，特斯拉“三驾马车”难拉动','http://pp.dededemo.com/uploads/allimg/160808/1-160PQZ0260-L.jpg','http://pp.dededemo.com');"></a>
            <a class="ctshare_rr" href="javascript:showTodouban('69','连续13季度亏损，中国自驾首撞，特斯拉“三驾马车”难拉动','http://pp.dededemo.com/uploads/allimg/160808/1-160PQZ0260-L.jpg','http://pp.dededemo.com','8月4日，特斯拉公布第二季度亏损报表和近日中国车主爆料特斯拉中国自动驾驶首撞事件，这令原本平淡不惊的八月汽车圈在开月第一周就泛起涟漪。 财报：第二季度亏损加剧高达2.9');"></a>
        </div>
        <div id="toTop" class="back-top"></div>

    </div>

    <?= $this->render('_right_bar_view', [
            'category_id' => (int)$model->category_id,
    ]) ?>

</div>
