<?php

use common\models\Article;

?>

<div class="main_rt">

    <!--右侧广告:上-->
    <!--<div class="rt_ad" style="height:200px; width:200px;">-->
    <!--<img src="{{__TEMPLATE__}}/img/ad2.png" alt="">-->
    <!--</div>-->
    <!--结束：右侧广告:上-->

    <!--25950-->
    <div class="rthotnews_tt">类别</div>
    <div class="hotnews_time" id="hotnews">
        <a href="javascript:;">最新</a>
        <a href="javascript:;">热门</a>
        <script>
            $('#hotnews a').first().addClass('on');
        </script>
    </div>

    <?php
    $sub_arcs = [
        Article::getNewestArticles($category_id),
        Article::getTopViewArticles($category_id),
    ];

    ?>
    <?php foreach ($sub_arcs as $k => $arc): ?>
        <ul class="list_hot" id="listhot<?= $k ?>" style="display: none">
            <?php foreach ($arc as $j => $item): ?>
                <li style="border-top:0;">
                    <span class="num_hot<?= $j + 1 ?>"></span>
                    <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endforeach; ?>
    <script>
        $('#listhot0').css('display','block');
    </script>



    <div class="rtapp_down">
        <h2>热门</h2>
        <?php $hot = Article::getRefinedArticles($category_id, 1); ?>
        <article>
            <?php foreach ($hot as $ho): ?>
                <a href="/article/<?= $ho['id'] ?>">
                    <img style="width:100%;display:block;margin:10px auto;text-align:center;" src="<?= $ho['cover'] ?>" border="0">
                </a>
            <?php endforeach; ?>
        </article>
    </div>

    <div class="rthotnews_tt">推荐</div>

    <ul class="topic_hot" id="topichot0">
        <div id='tag6223bd6bf9c0a92f2cad7842d3b79226'>
            <?php $recommend = Article::getRefinedArticles($category_id); ?>
            <?php foreach ($recommend as $i => $rec): ?>
                <li style="border-top:0;">
                    <span class="num_hot<?= $i + 1 ?>"></span>
                    <p style="float:right;width:180px;"><a href="/article/<?= $rec['id'] ?>" target="_blank"><?= $rec['title'] ?></a>
                    </p>
                </li>
            <?php endforeach; ?>
        </div>

        <!--<li class="list_more"></li>-->
    </ul>


    <style>
        .adc6op0 {
            right: 50%;
            top: 72px;
            margin-right: -596px;
            position: fixed;
            z-index: 100;
        }

        .adc6op1 {
            right: 20px;
            top: 0;
            position: absolute;
            z-index: 100;
        }
    </style>

    <!--右侧广告：下-->
    <!--<div class="rt_ad2" style="margin-top:50px;height:200px; width:200px;">-->
    <!--<img src="{{__TEMPLATE__}}/img/ad2.png" alt="">-->
    <!--</div>-->
    <!--结束：右侧广告：下-->

    <!--25950-->
</div>