<!DOCTYPE html>
<html lang="en">

<!--header-->
<head>
    <meta charset="UTF-8">
    <title>首页—不可思议的博客</title>
    <link rel="icon" href="/theme/news/img/news.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="/theme/news/css/css.css"/>
    <link rel="stylesheet" type="text/css" href="/theme/news/css/style.css"/>
    <link rel="stylesheet" type="text/css" href="/theme/news//css/ask.css"/>
    <link rel="stylesheet" type="text/css" href="/theme/news/css/pagination.css"/>
    <script type="text/javascript" src="/theme/news/js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="/theme/news/js/rd.js"></script>
</head>
<!--header-->

<body>

<!--navbar-->
<style>
    .head_banner .bn_bt {
        width: auto
    }

    .head_banner a.bn_a {
        width: auto;
        height: auto;
    }

    .lilt_pt {
        left: 32px;
    }

    .slider {
        left: inherit
    }
    body {
        overflow-x: hidden;
    }

    #aboutMe {
        position: relative;
        z-index: 20000;
    }

    #aboutMe .scanCode {
        width: 250px;
        height: 250px;
        position: absolute;
        /*left:-250px;*/
        opacity: 0;
        left: 30px;
        top: -30px;
        border-radius: 20px;
        box-shadow: 2px 2px 10px 0px dimgrey;
        transition: all 0.5s linear;
    }

    #aboutMe .scanCode img {
        width: 100%;
        height: 100%;
    }

    #aboutMe .scanCode .tip {
        position: absolute;
        left: 0;
        bottom: -26px;
        background: palegreen;
        font-weight: 700;
        color: red;
        font-family: "Microsoft YaHei";
        padding: 5px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        transform: rotate(-90);
        border: 2px solid palegoldenrod;
        border-top: none;
        box-shadow: 0px 2px 10px 0px dimgrey;
    }

    #aboutMe:hover .scanCode {
        left: -250px;
        opacity: 1;
    }
</style>

<div class="head hdbk">
    <div id="head">
        <div class="head_rt"><span class="verticalAlign"></span>
            <div class="head_info clearfix">

                <a href="/" id="aboutMe" target="_blank">
                    关于我
                    <div class="scanCode">
                        <img src="{{c('wechat.scanCode')}}">
                        <span class="tip">扫一扫·关注我</span>
                    </div>

                </a>

                <div class="hdif_s clearfix">
                    <form action="{{__ROOT__}}" method="get">
                        <input type="hidden" name="m" value="search"/>
                        <input type="hidden" name="a" value="controller/entry/search"/>
                        <input type="submit" value="" class="hds_bt" id="search_key"/>
                        <input type="text" class="hds_inp" maxlength="20" required id="hds_inp" style="height: 26px"
                               name="keyword" value="{{$_GET['keyword']}}"/>
                    </form>
                    <div class="hdifani" id="hdshowsearch"></div>
                </div>
            </div>
        </div>
        <div class="head_bd">
            <span class="verticalAlign"></span>
            <div class="head_logo">
                <span class="verticalAlign"></span>
                <a href="/" title="不可思议的博客">
                    <img src="/theme/news/img/logo.jpg">
                </a>
            </div>
            <div class="head_banner">
                <div class="bn_bt">
                    <a class="bn_a" id="select" href="/">推荐</a>
                </div>
                <?php
                    $category = [
                        [
                            'name' => '新闻',
                            'cid' => 2,
                            'sub' => [
                                [
                                    'name' => '法治中国',
                                    'cid' => 10,
                                ],
                                [
                                    'name' => '直击现场',
                                    'cid' => 11,
                                ],
                                [
                                    'name' => '绿政公署',
                                    'cid' => 12,
                                ]
                            ],
                        ],
                        [
                            'name' => '读书',
                            'cid' => 3,
                            'sub' => [
                                [
                                    'name' => '上海书评',
                                    'cid' => 13,
                                ],
                            ],
                        ],
                        [
                            'name' => '生活',
                            'cid' => 4,
                            'sub' => [
                                [
                                    'name' => '身体',
                                    'cid' => 14,
                                ],
                                [
                                    'name' => '生活方式',
                                    'cid' => 15,
                                ],
                            ],
                        ],
                        [
                            'name' => '财经',
                            'cid' => 5,
                            'sub' => [
                                [
                                    'name' => '财经上下游',
                                    'cid' => 16,
                                ],
                                [
                                    'name' => '科技湃',
                                    'cid' => 17,
                                ],
                            ],
                        ],
                        [
                            'name' => '观点',
                            'cid' => 6,
                            'sub' => [],
                        ]
                    ];
                ?>

                <?php foreach ($category as $cat):?>
                    <div class="bn_bt">
                        <a href="/category/<?= $cat['cid'] ?>" class="bn_a "><?= $cat['name'] ?></a>
                        <div style="display:none;" class="slider" id="slider1">
                            <div class="lilt_pt"><img width="16" height="12" src="/theme/news/img/prompt_top.png">
                            </div>
                            <ul class="clearfix">
                                <?php foreach ($cat['sub'] as $subcat): ?>
                                    <li><a href="/category/<?= $subcat['cid'] ?>"><?= $subcat['name'] ?></a></li>
                                <?php endforeach ?>
                            </ul>
                        </div>
                    </div>
                <?php endforeach ?>

            </div>

        </div>
    </div>
</div>
<script>
    $(function () {
        $(".head_banner .bn_bt ul.clearfix").each(function () {
            if ($(this).find("li").length == 0) {
                $(this).parent().remove();
            }
        });
    });
</script>
<!--navbar-->

<div class="bdwd main clearfix">
    <div class="pjax-wrapper">
        <div class="pjax-content">
            <div class="prev-content">
                <div class="pjax-loading" style="height: 305px;">
                    <div class="loading-view"></div>
                </div>
            </div>
            <div id="main_lt" class="main_lt">
                <!--首页大图-->
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
                    <!--结束：首页大图-->
            </div>


            <div class="main_ltad"></div>

            <div class="news_slide">
                <div class="newsslidebd" id="newsslidebd">
                    <span id="news_masonry"></span>
                    <span id="news_list"></span>
                </div>
            </div>

            <div id="mainContent">
                <div class="newsbox" id="masonryContent" style="position: relative; width: 939px; height: 740px;">

                    <style>
                        .news_li {
                            position: absolute;
                            height: 300px;
                        }

                        .news_li:nth-of-type(3n+1) {
                            left: 0;
                        }

                        .news_li:nth-of-type(3n+2) {
                            left: 313px;
                        }

                        .news_li:nth-of-type(3n+3) {
                            left: 626px;
                        }

                        .news_li:nth-of-type(3n+3) {
                            left: 626px;
                        }
                    </style>

                    <?php
                        $article = [
                            [
                                'id' => 10,
                                'cid' => 2,
                                'cat_name' => '科技湃',
                                'title' => '上海：建设张江综合性国家科学中心，成为世界一流科学城',
                                'intro' => '上海：建设张江综合性国家科学中心，成为世界一流科学城',
                                'thumb' => 'http://hdcms.com/attachment/2017/07/27/7721501147561.jpg',
                                'created_at' => '2017-07-27 17:26:49',
                                'comment_num' => 3,
                            ],
                            [
                                'id' => 10,
                                'cid' => 2,
                                'cat_name' => '读书',
                                'title' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                                'intro' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                                'thumb' => 'http://hdcms.com/attachment/2017/07/31/9241501503150.jpg',
                                'created_at' => '2017-07-31 20:13:17',
                                'comment_num' => 2,
                            ],
                            [
                                'id' => 10,
                                'cid' => 2,
                                'cat_name' => '读书',
                                'title' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                                'intro' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                                'thumb' => 'http://hdcms.com/attachment/2017/07/26/39711501069470.jpg',
                                'created_at' => '2017-07-26 19:45:45',
                                'comment_num' => 3,
                            ],
                            [
                                'id' => 10,
                                'cid' => 2,
                                'cat_name' => '读书',
                                'title' => '谢其章︱字小如蚁的《新民声半月刊》',
                                'intro' => '谢其章︱字小如蚁的《新民声半月刊》',
                                'thumb' => 'http://hdcms.com/attachment/2017/07/25/86411500917256.jpg',
                                'created_at' => '2017-07-24 23:09:38',
                                'comment_num' => 5,
                            ],
                            [
                                'id' => 10,
                                'cid' => 2,
                                'cat_name' => '读书',
                                'title' => '向荒野致敬：过去25年的25张户外探险奇照',
                                'intro' => '向荒野致敬：过去25年的25张户外探险奇照',
                                'thumb' => 'http://hdcms.com/attachment/2017/07/27/51171501088571.jpg',
                                'created_at' => '2017-07-27 01:04:29',
                                'comment_num' => 8,
                            ],
                            [
                                'id' => 10,
                                'cid' => 2,
                                'cat_name' => '财经上下游',
                                'title' => '商务部：正在对滴滴和优步中国合并案进行反垄断调查',
                                'intro' => '商务部：正在对滴滴和优步中国合并案进行反垄断调查',
                                'thumb' => 'http://hdcms.com/attachment/2017/07/27/23581501147172.jpeg',
                                'created_at' => '2017-07-27 17:21:19',
                                'comment_num' => 8,
                            ],
                        ];

                    ?>
                    <?php foreach($article as $art): ?>
                        <div class="news_li">
                            <div class="news_tu">
                                <a href="/article/<?= $art['id']?>" class="tiptitleImg" target="_blank">
                                    <img src="<?= $art['thumb'] ?>" alt="<?= $art['title'] ?>">
                                </a>
                            </div>
                            <h2>
                                <a href="/article/<?= $art['id'] ?>" target="_blank"><?= $art['title'] ?></a>
                            </h2>
                            <p><?= $art['intro'] ?></p>
                            <div class="pdtt_trbs">
                                <a href="/category/<?= $art['cid'] ?>" target="_blank"><?= $art['cat_name'] ?></a>
                                <span><?= $art['created_at'] ?></span>
                                <span class="trbszan">
                                    <span id="sourceId::<?= $art['id'] ?>" class="cy_cmt_count"><?= $art['comment_num'] ?></span>
                                </span>
                            </div>
                        </div>
                    <?php endforeach ?>

                    <script>
                        for (var i = 0; i < $('.news_li').length; i++) {
                            var t = parseInt(i / 3);
                            $('.news_li').eq(i).css('top', t * 384 + 'px');
                        }
                    </script>

                    <script id="cy_cmt_num" src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cyt8rNSI2"></script>
                </div>
            </div>

        </div>
    </div>
</div>

<div class="main_rt">
    <div class="rtapp_down">
        <h2>书橱</h2>
        <slide rows="1">
            <a href="/"><img style="width:100%;display:block;margin:10px auto;text-align:center;"
                                             src="http://hdcms.com/attachment/2017/08/01/28671501521727.jpg" border="0"></a>
        </slide>
    </div>

    <div class="rthotnews_tt">文章排行</div>
    <div class="hotnews_time" id="hotnews">
        <a class="on" href="javascript:;">热门</a>
        <a href="javascript:;">推荐</a>
        <a href="javascript:;">精选</a>
    </div>

    <?php
        $hot = [
            [
                'title' => '上海：建设张江综合性国家科学中心，成为世界一流科学城',
                'id' => 4,
            ],
            [
                'title' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                'id' => 4,
            ],
            [
                'title' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                'id' => 4,
            ],
        ];
    ?>
    <ul class="list_hot" id="listhot0">
            <?php foreach($hot as $k => $item): ?>
            <li style="border-top:0;">
                <span class="num_hot<?= $k + 1?>"></span>
                <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
            </li>
            <?php endforeach ?>
    </ul>

    <?php
    $recommend = [
        [
            'title' => '邵迎建读林奕含《房思琪的初恋乐园》︱文学辜负了她们吗？',
            'id' => 4,
        ],
        [
            'title' => '印观察｜印度错认“中印是竞争关系”，重建两国信任势在必行',
            'id' => 4,
        ],
        [
            'title' => '野路子 | 攀登我的大天堂，找到属于自己的那座山',
            'id' => 4,
        ],
    ];
    ?>
    <ul class="list_hot" id="listhot1" style="display:none;">
            <?php foreach($recommend as $k => $item): ?>
            <li style="border-top:0;">
                <span class="num_hot<?= $k + 1 ?>"></span>
                <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
            </li>
            <?php endforeach ?>
    </ul>

    <?php
    $featured = [
        [
            'title' => '重庆一村民家中失火，放羊老人兄弟砸窗灭火避免森林火灾',
            'id' => 4,
        ],
        [
            'title' => '马戎：研究者和执政者都不可忽视公众号和朋友圈',
            'id' => 4,
        ],
        [
            'title' => '为何正物质比反物质多？美国要在千米深的废金矿里做个大实验',
            'id' => 4,
        ],
        [
            'title' => '最新上线的京沪二手书平台：哪些作家的书有人卖没人买',
            'id' => 4,
        ],
        [
            'title' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
            'id' => 4,
        ],
        [
            'title' => '邵迎建读林奕含《房思琪的初恋乐园》︱文学辜负了她们吗？',
            'id' => 4,
        ],
    ];
    ?>
    <ul class="list_hot" id="listhot2" style="display:none;">
            <?php foreach ($featured as $k => $item):?>
            <li style="border-top:0;">
                <span class="num_hot<?= $k + 1 ?>"></span>
                <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
            </li>
            <?php endforeach; ?>
    </ul>

    <div class="rthotnews_tt">点击排行</div>

    <?php
    $click = [
        [
            'title' => '马克龙要拿MPV当总统座驾？看看前任法国总统们选择的汽车',
            'id' => 4,
        ],
        [
            'title' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
            'id' => 4,
        ],
        [
            'title' => '最新上线的京沪二手书平台：哪些作家的书有人卖没人买',
            'id' => 4,
        ],
        [
            'title' => '野路子 | 攀登我的大天堂，找到属于自己的那座山',
            'id' => 4,
        ],
        [
            'title' => '北京医改百日：专家门诊接诊量下降，日节省医疗费3500万',
            'id' => 4,
        ],
        [
            'title' => '商务部：正在对滴滴和优步中国合并案进行反垄断调查',
            'id' => 4,
        ],
        [
            'title' => '马戎：研究者和执政者都不可忽视公众号和朋友圈',
            'id' => 4,
        ],
        [
            'title' => '如今不用PS也还能看的女星，大概就这几个了',
            'id' => 4,
        ],
    ];
    ?>
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

    <div class="rtapp_down">
        <slide rows="1,1">
            <a href="/"><img style="width:100%;display:block;margin:10px auto;text-align:center;" src="http://hdcms.com/attachment/2017/08/01/97341501522990.jpg" border="0"></a>
        </slide>
    </div>
</div>

<div id="toTop" class="back-top" onclick="window.scrollTo(0,0);return false;"></div>

</div>

<!--footer-->
<div class="about">
    <?php
        $links = [
            [
                'title' => '凤凰网',
            ],
            [
                'title' => '财新网',
            ],
            [
                'title' => '南方周末',
            ],
            [
                'title' => '人民日报',
            ],
            [
                'title' => '界面新闻',
            ],
            [
                'title' => '新京报',
            ],
            [
                'title' => '三联生活周刊',
            ],
            [
                'title' => '华尔街见闻',
            ],
        ];
    ?>
    <a href="/" target="_blank" style="color: red">我的作品</a>
        <?php foreach ($links as $item): ?>
        <a href="/"><?= $item['title'] ?></a>
        <?php endforeach ?>
</div>

<div class="copyright">Copyright &copy; 2017-2020 不可思议的博客</div>

<div style="width:300px;margin:0 auto; padding: 0;" class="copyright">
    <a target="_blank" href="#" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
        <img src="/theme/news/img/ghs.png" style="float:left;"/>
        <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#FFFFFF;">京 XXX-XXXX
        </p>
    </a>
</div>
<div id="bg_overlay" style="display:none;"></div>
<!-- footer -->
</body>
</html>
