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
        <a class="on" href="javascript:;">最新</a>
        <a href="javascript:;">热门</a>
<!--        <a href="javascript:;">推荐</a>-->
    </div>
    <ul class="list_hot"  id="listhot0">
        <?php
            $newest = Article::getNewestArticles($category_id);
        ?>
        <?php foreach($newest as $k => $item): ?>
            <li style="border-top:0;">
                <span class="num_hot<?= $k + 1 ?>"></span>
                <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
            </li>
        <?php endforeach ?>

        <?php $new = Article::getNewestArticles($category_id, 1); ?>
        <?php if (count($new) > 0): ?>
        <div class="rtapp_down">
<!--            <h2>书橱</h2>-->
            <article>
                <a href="/article/<?= $new[0]['id'] ?>">
                    <img style="width:100%;display:block;margin:10px auto;text-align:center;"
                         src="<?= $new[0]['cover'] ?>" border="0">
                </a>
            </article>
        </div>
        <?php endif ?>
    </ul>

    <ul class="list_hot"  id="listhot1" style="display:none;">
        <?php $recommend = Article::getTopViewArticles($category_id); ?>
        <?php foreach($recommend as $k => $item): ?>
            <li style="border-top:0;">
                <span class="num_hot<?= $k + 1 ?>"></span>
                <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
            </li>
        <?php endforeach ?>

        <?php $top = Article::getTopViewArticles($category_id, 1); ?>
        <?php if (count($top) > 0): ?>
        <div class="rtapp_down">
<!--            <h2>书橱</h2>-->
            <article>
                <a href="/article/<?= $top[0]['id'] ?>">
                    <img style="width:100%;display:block;margin:10px auto;text-align:center;"
                         src="<?= $top[0]['cover'] ?>"
                         border="0">
                </a>
            </article>
        </div>
        <?php endif ?>
    </ul>

<!--    <ul class="list_hot"  id="listhot2" style="display:none;">-->
<!--            <li style="border-top:0;">-->
<!--                <span class="num_hot--><?//= $k + 1 ?><!--"></span>-->
<!--                <a target="_blank" href="/article/1">推荐</a>-->
<!--            </li>-->
<!--    </ul>-->

    <div class="rthotnews_tt">精选</div>
    <ul class="topic_hot"  id="topichot0">
        <?php $topicHot = Article::getRefinedArticles($category_id); ?>
        <div id='tag6223bd6bf9c0a92f2cad7842d3b79226'>
            <?php foreach ($topicHot as $k => $item): ?>
                <li style="border-top:0;">
                    <span class="num_hot<?= $k + 1?>"></span>
                    <p style="float:right;width:180px;"><a href="/article/<?= $item['id'] ?>" target="_blank"><?= $item['title'] ?></a>
                    </p>
                </li>
            <?php endforeach ?>
        </div>

        <li class="list_more"></li>
    </ul>

    <style>
        .adc6op0 {right: 50%;top: 72px;margin-right: -596px;position: fixed;z-index: 100;}
        .adc6op1 {right: 20px;top: 0;position: absolute;z-index: 100;}
    </style>
</div>