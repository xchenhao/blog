<?php
use yii\helpers\Html;

/* @var $this \yii\web\View */
?>

<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <title><?= Html::encode($this->title) ?></title>
    <link rel="icon" href="/theme/news/img/news.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="/theme/news/css/css.css"/>
    <link rel="stylesheet" type="text/css" href="/theme/news/css/style.css"/>
    <link rel="stylesheet" type="text/css" href="/theme/news//css/ask.css"/>
    <link rel="stylesheet" type="text/css" href="/theme/news/css/pagination.css"/>
    <script type="text/javascript" src="/theme/news/js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="/theme/news/js/rd.js"></script>
<!--    <script type="text/javascript" src="/theme/news/js/jquery.infinitescroll.js"></script>-->
<!--    <script type="text/javascript" src="/theme/news/js/jquery.masonry.js"></script>-->
<!--    <script type="text/javascript" src="/theme/news/js/pjax.js"></script>-->
<!--    <script type="text/javascript" src="/theme/news/js/jquery.superslide2.js"></script>-->
<!--    <script type="text/javascript" src="/theme/news/js/main-3.0.js"></script>-->
    <script>
        $(function () {
            for (var i = 0; i < $('.news_li').length; i++) {
                var t = parseInt(i / 3);
                $('.news_li').eq(i).css('top', t * 384 + 'px');
            }

            $('#news_list').click(function () {
                $('#mainContent .newsbox').addClass('listview').prop('id', 'listContent')
                $("#newsslidebd").addClass("newslist");
                $('.news_li').css('top', '0px');
            })
            $('#news_masonry').click(function () {
                $('#mainContent .newsbox').removeClass('listview').prop('id', 'masonryContent')
                $("#newsslidebd").removeClass("newslist");
                for (var i = 0; i < $('.news_li').length; i++) {
                    var t = parseInt(i / 3);
                    $('.news_li').eq(i).css('top', t * 384 + 'px');
                }
            })
        })
    </script>
    <?php $this->head() ?>
</head>
