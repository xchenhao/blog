<!DOCTYPE html>
<html lang="en">

<!--header-->
<head>
    <meta charset="UTF-8">
    <title>首页—不可思议的博客</title>
    <link rel="icon" href="/theme/news/img/news.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="/theme/news/css/css.css"/>
    <link rel="stylesheet" type="text/css" href="/theme/news/css/style.css"/>
    <link rel="stylesheet" type="text/css" href="/theme/news/css/ask.css"/>
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
    <div class="main_rt">

        <!--右侧广告:上-->
        <!--<div class="rt_ad" style="height:200px; width:200px;">-->
        <!--<img src="{{__TEMPLATE__}}/img/ad2.png" alt="">-->
        <!--</div>-->
        <!--结束：右侧广告:上-->

        <!--25950-->
        <?php
            $sub_category = [
                [
                    'name' => '身体',
                    'id' => 3,
                ],
                [
                    'name' => '生活方式',
                    'id' => 3,
                ],
            ];
        ?>
        <div class="rthotnews_tt">子栏目</div>
        <div class="hotnews_time" id="hotnews">
                <?php foreach ($sub_category as $cat): ?>
                <a href="javascript:;"><?= $cat['name'] ?></a>
                <?php endforeach ?>
            <script>
                $('#hotnews a').first().addClass('on');
            </script>
        </div>

        <?php
            $arcs = [
                [
                    [
                        'id' => 10,
                        'title' => '走近冈仁波齐，世界中心的雪山',
                    ],
                    [
                        'id' => 10,
                        'title' => '上海芭蕾舞团携《天鹅湖》首赴新疆喀什',
                    ],
                    [
                        'id' => 10,
                        'title' => '如今不用PS也还能看的女星，大概就这几个了',
                    ],
                ],
                [
                    [
                        'id' => 10,
                        'title' => '向荒野致敬：过去25年的25张户外探险奇照',
                    ],
                    [
                        'id' => 10,
                        'title' => '野路子 | 攀登我的大天堂，找到属于自己的那座山',
                    ],
                ]
            ];

        ?>
            <?php foreach ($arcs as $k => $arc):?>
            <ul class="list_hot" id="listhot<?= $k ?>" style="display: none">
                <?php foreach ($arc as $j => $item):?>
                    <li style="border-top:0;">
                        <span class="num_hot<?= $j + 1 ?>"></span>
                        <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
                    </li>
                <?php endforeach ?>
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
                        'id' => 4,
                        'thumb' => 'http://hdcms.com/attachment/2017/07/27/12731501090312.jpg',
                    ],
                ];

            ?>
            <?php foreach ($hot as $ho): ?>
                <a href="/article/<?= $ho['id'] ?>">
                    <img style="width:100%;display:block;margin:10px auto;text-align:center;" src="<?= $ho['thumb'] ?>" border="0">
                </a>
            <?php endforeach ?>
        </div>

        <div class="rthotnews_tt">精选</div>

        <ul class="topic_hot" id="topichot0">
            <div id='tag6223bd6bf9c0a92f2cad7842d3b79226'>
                <?php
                    $refined = [
                        [
                            'id' => 49,
                            'title' => '向荒野致敬：过去25年的25张户外探险奇照'
                        ],
                        [
                            'id' => 49,
                            'title' => '野路子 | 攀登我的大天堂，找到属于自己的那座山'
                        ],
                        [
                            'id' => 49,
                            'title' => '山居普罗旺斯'
                        ],
                        [
                            'id' => 49,
                            'title' => '走近冈仁波齐，世界中心的雪山'
                        ],
                        [
                            'id' => 49,
                            'title' => '趣看｜十六年饰一梯，公寓楼也能变“凡尔赛宫”'
                        ],
                        [
                            'id' => 49,
                            'title' => '马克龙要拿MPV当总统座驾？看看前任法国总统们选择的汽车'
                        ],
                        [
                            'id' => 49,
                            'title' => '上海芭蕾舞团携《天鹅湖》首赴新疆喀什'
                        ],
                    ];

                ?>
                <?php foreach ($refined as $k => $re): ?>
                    <li style="border-top:0;">
                        <span class="num_hot<?= $k + 1 ?>"></span>
                        <p style="float:right;width:180px;"><a href="/article/<?= $re['id'] ?>" target="_blank"><?= $re['title'] ?></a>
                        </p>
                    </li>
                <?php endforeach ?>
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

        <!--右侧广告：下-->
        <!--<div class="rt_ad2" style="margin-top:50px;height:200px; width:200px;">-->
        <!--<img src="{{__TEMPLATE__}}/img/ad2.png" alt="">-->
        <!--</div>-->
        <!--结束：右侧广告：下-->

        <!--25950-->
    </div>
    <div id="toTop" class="back-top"></div>
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