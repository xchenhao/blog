<?php

use common\models\Article;

?>

<div class="main_rt">

    <?php if ($toprefined = Article::getTopOneRefinedArticle()): ?>
    <div class="rtapp_down">
        <h2>推荐</h2>
        <article>
            <a href="/article/<?= $toprefined['id'] ?>">
                <img style="width:100%;display:block;margin:10px auto;text-align:center;"
                     src="<?= $toprefined['cover'] ?>"
                     border="0">
            </a>
        </article>
    </div>
    <?php endif; ?>

    <div class="rthotnews_tt">文章排行</div>
    <div class="hotnews_time" id="hotnews">
        <a class="on" href="javascript:;">热门</a>
        <a href="javascript:;">推荐</a>
        <a href="javascript:;">精选</a>
    </div>

    <?php $hot = Article::getTopHot(); ?>
    <ul class="list_hot" id="listhot0">
        <?php foreach($hot as $k => $item): ?>
            <li style="border-top:0;">
                <span class="num_hot<?= $k + 1?>"></span>
                <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
            </li>
        <?php endforeach ?>
    </ul>

    <?php $recommend = Article::getTopHot(); ?>
    <ul class="list_hot" id="listhot1" style="display:none;">
        <?php foreach($recommend as $k => $item): ?>
            <li style="border-top:0;">
                <span class="num_hot<?= $k + 1 ?>"></span>
                <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
            </li>
        <?php endforeach ?>
    </ul>

    <?php $featured = Article::getTopHot(); ?>
    <ul class="list_hot" id="listhot2" style="display:none;">
        <?php foreach ($featured as $k => $item):?>
            <li style="border-top:0;">
                <span class="num_hot<?= $k + 1 ?>"></span>
                <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
            </li>
        <?php endforeach; ?>
    </ul>

    <div class="rthotnews_tt">点击排行</div>

    <?php $click = Article::getTopView(); ?>
    <ul class="topic_hot" id="topichot0">
        <div id='tag6223bd6bf9c0a92f2cad7842d3b79226'>
            <?php foreach ($click as $k => $item): ?>
                <li style="border-top:0;">
                    <span class="num_hot<?= $k + 1?>"></span>
                    <p style="float:right;width:180px;"><a href="/article/<?= $item['id'] ?>" target="_blank"><?= $item['title'] ?></a>
                    </p>
                </li>
            <?php endforeach; ?>
        </div>

        <li class="list_more"></li>
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

    <?php if ($topview = Article::getTopOneViewArticle()): ?>
    <div class="rtapp_down">
        <article>
            <a href="/article/<?= $topview['id'] ?>">
                <img style="width:100%;display:block;margin:10px auto;text-align:center;"
                     src="<?= $topview['cover'] ?>"
                     border="0">
            </a>
        </article>
    </div>
    <?php endif ?>
</div>