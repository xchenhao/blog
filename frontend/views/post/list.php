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
                    <img src="http://hdcms.com/attachment/2017/07/31/88081501493706.jpg">
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
    <div class="main_lt">
        <div class="list_head">
            <!--<div class="list_logo"><a href="list_25462"><img src="{{__TEMPLATE__}}/img/61.png" alt="中国政库"></a></div>-->
            <div class="list_name">
                <a href="#" style="color: #00a5e8;">读书</a>
            </div>
            <div class="list_abstract">&nbsp;</div>

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

        <style>
            .news_li{
                position:absolute;
                height: 300px;
            }
            .news_li:nth-of-type(3n+1){
                left:0;
            }
            .news_li:nth-of-type(3n+2){
                left:313px;
            }
            .news_li:nth-of-type(3n+3){
                left:626px;
            }

            .news_li:nth-of-type(3n+3){
                left:626px;
            }
        </style>


        <div id="mainContent">
            <div class="newsbox" id="masonryContent" style="position: relative; width: 939px; height: 1150px;">
                <?php
                    $articles = [
                        [
                            'id' => 10,
                            'title' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                            'intro' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                            'thumb' => 'http://hdcms.com/attachment/2017/07/31/9241501503150.jpg',
                            'cat_name' => '读书',
                            'created_at' => '2017-07-31 20:13:17',
                            'cid' => 3,
                            'comment_num' => 3,
                        ],
                        [
                            'id' => 10,
                            'title' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                            'intro' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                            'thumb' => 'http://hdcms.com/attachment/2017/07/26/39711501069470.jpg',
                            'cat_name' => '读书',
                            'created_at' => '2017-07-26 19:45:45',
                            'cid' => 3,
                            'comment_num' => 7,
                        ],
                        [
                            'id' => 10,
                            'title' => '谢其章︱字小如蚁的《新民声半月刊》',
                            'intro' => '谢其章︱字小如蚁的《新民声半月刊》',
                            'thumb' => 'http://hdcms.com/attachment/2017/07/25/86411500917256.jpg',
                            'cat_name' => '读书',
                            'created_at' => '2017-07-24 23:09:38',
                            'cid' => 3,
                            'comment_num' => 4,
                        ],
                        [
                            'id' => 10,
                            'title' => '最新上线的京沪二手书平台：哪些作家的书有人卖没人买',
                            'intro' => '最新上线的京沪二手书平台：哪些作家的书有人卖没人买',
                            'thumb' => 'http://hdcms.com/attachment/2017/07/26/51891501069629.jpg',
                            'cat_name' => '读书',
                            'created_at' => '2017-07-26 19:48:00',
                            'cid' => 3,
                            'comment_num' => 1,
                        ],
                        [
                            'id' => 10,
                            'title' => '台湾学生如何学习马克思理论？',
                            'intro' => '台湾学生如何学习马克思理论？',
                            'thumb' => 'http://hdcms.com/attachment/2017/07/26/80601501070654.jpg',
                            'cat_name' => '读书',
                            'created_at' => '2017-07-26 20:05:05',
                            'cid' => 3,
                            'comment_num' => 2,
                        ],
                    ];
                ?>

                <?php foreach ($articles as $arc): ?>
                <div class="news_li" id="cont271">
                    <div class="news_tu">
                        <a href="/article/<?= $arc['id'] ?>" class="tiptitleImg" target="_blank">
                            <img src="<?= $arc['thumb'] ?>">
                        </a>
                    </div>
                    <h2><a href="/article/<?= $arc['id']?>" target="_blank"><?= $arc['title'] ?></a></h2>
                    <p><?= $arc['title'] ?></p>
                    <div class="pdtt_trbs">
                        <a href="/category/<?= $arc['cid'] ?>" target="_blank"><?= $arc['cat_name'] ?></a><span><?= $arc['created_at'] ?></span>
                        <span class="trbszan"><span id = "sourceId::<?= $arc['id'] ?>" class = "cy_cmt_count" ><?= $arc['comment_num'] ?></span></span>
                    </div>
                </div>
                    <?php endforeach ?>
                {{$arcModel->links()}}
                <!--<div class="news_li hidden" id="last1" lasttime="1500531475" pageindex="1" style="display: none !important; position: absolute; left: 0px; top: 1996px;"></div>-->
            </div>
        </div>

        <script>
            for(var i=0;i<$('.news_li').length; i++){
                var t = parseInt(i/3);
                $('.news_li').eq(i).css('top',t*384+'px');
            }
        </script>


        <script id="cy_cmt_num" src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cyt8rNSI2">
        </script>





        <!--<div id="addButton" class="add_more" style="display:block;">-->
        <!--<a id="next" href="/plus/index_scroll.php"></a>-->
        <!--</div>-->
    </div>
    <div class="main_rt">

        <!--右侧广告:上-->
        <!--<div class="rt_ad" style="height:200px; width:200px;">-->
        <!--<img src="{{__TEMPLATE__}}/img/ad2.png" alt="">-->
        <!--</div>-->
        <!--结束：右侧广告:上-->

        <!--25950-->
        <div class="rthotnews_tt">子栏目</div>
        <?php
            $subcat = [
                [
                    'id' => 34,
                    'name' => '上海',
                ],
                [
                    'id' => 34,
                    'name' => '深圳',
                ],
            ];
        ?>

        <div class="hotnews_time" id="hotnews">
            <?php foreach ($subcat as $cat): ?>
                <a href="javascript:;"><?= $cat['name'] ?></a>
            <?php endforeach ?>
            <script>
                $('#hotnews a').first().addClass('on');
            </script>
        </div>

        <?php
            $sub_arcs = [
                [
                    [
                        'id' => 5,
                        'title' => '邵迎建读林奕含《房思琪的初恋乐园》︱文学辜负了她们吗？',
                    ],
                    [
                        'id' => 5,
                        'title' => '台湾学生如何学习马克思理论？',
                    ],
                ],
                [
                    [
                        'id' => 5,
                        'title' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                    ],
                ]
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
            <?php
                $hot = [
                    [
                        'id' => 49,
                        'thumb' => 'http://hdcms.com/attachment/2017/07/25/86411500917256.jpg',
                        'title' => '',
                    ]
                ];
            ?>
            <arc rows="1" click="1" cid="$model['cid']">
                <?php foreach ($hot as $ho): ?>
                <a href="/article/<?= $ho['id'] ?>">
                    <img style="width:100%;display:block;margin:10px auto;text-align:center;" src="<?= $ho['thumb'] ?>" border="0">
                </a>
                <?php endforeach; ?>
            </arc>
        </div>

        <div class="rthotnews_tt">推荐</div>

        <ul class="topic_hot" id="topichot0">
            <div id='tag6223bd6bf9c0a92f2cad7842d3b79226'>
                <?php
                    $recommend = [
                        [
                            'id' => 49,
                            'title' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                        ],
                        [
                            'id' => 49,
                            'title' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                        ],
                        [
                            'id' => 49,
                            'title' => '谢其章︱字小如蚁的《新民声半月刊》',
                        ],
                        [
                            'id' => 49,
                            'title' => '最新上线的京沪二手书平台：哪些作家的书有人卖没人买',
                        ],
                        [
                            'id' => 49,
                            'title' => '台湾学生如何学习马克思理论？',
                        ],
                    ];
                ?>

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