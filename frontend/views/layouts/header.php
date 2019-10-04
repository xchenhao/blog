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
    <link rel="stylesheet" type="text/css" href="/theme/news/css/ask.css"/>
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
            function setArticleListStyle(list) {
                // 设置文章显示样式
                if (list === 0) {
                    // 卡片样式
                    $('#mainContent .newsbox').removeClass('listview').prop('id', 'masonryContent')
                    $("#newsslidebd").removeClass("newslist")
                } else {
                    // 列表样式
                    $('#mainContent .newsbox').addClass('listview').prop('id', 'listContent')
                    $("#newsslidebd").addClass("newslist")
                    $('.news_li').css('top', '0px')
                }
                // 设置分页参数
                var pageItems = $('.pagination-box li a')
                for (var i = 0; i < pageItems.length; i++) {
                    pageItems.eq(i).prop('href', pageItems.eq(i).prop('href').replace('list=' + (1 - list), 'list=' + list))
                }
            }

            // 分页时记住上次的文章显示样式
            var list = <?= (int)($_GET['list'] ?? 0) ?>;
            setArticleListStyle(list)

            $('#news_masonry').click(function () {
                setArticleListStyle(0)
            })
            $('#news_list').click(function () {
                setArticleListStyle(1)
            })
        })
    </script>
    <style>
        #masonryContent {
            position: relative;
            width: 939px;
            display: flex;
            flex-wrap: wrap;
        }
        .newsbox {
            padding-bottom: 0;
            min-height: unset !important;
        }
        #masonryContent .news_li {
            border: 2px solid #f0f0f0;
            position: relative;
            width: 33.33%;
            box-sizing: border-box;
            height: 420px;
        }
        .pagination-box {
            text-align: center;
            margin-top: -10px;
        }
        .pagination-box .pagination {
            overflow: hidden;
        }
        .pagination-box .pagination li.disabled span {
          color: grey;
        }
        /* views/article/cover.php 封面高度 */
        .askcontent {
            min-height: unset !important;
        }
    </style>
    <?php $this->head() ?>
</head>
