<?php

/* @var $model common\models\Article */
?>

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

<link rel="stylesheet" type="text/css" href="/theme/news/css/news.css"/>
<link rel="stylesheet" type="text/css" href="/theme/news/css/interact.css"/>

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
                $more = [
                    [
                        'id' => 8,
                        'title' => '谢其章︱字小如蚁的《新民声半月刊》',
                        'thumb' => 'http://hdcms.com/attachment/2017/07/25/86411500917256.jpg',
                    ],
                    [
                        'id' => 3,
                        'title' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                        'thumb' => 'http://hdcms.com/attachment/2017/07/26/39711501069470.jpg',
                    ],
                    [
                        'id' => 19,
                        'title' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                        'thumb' => 'http://hdcms.com/attachment/2017/07/31/9241501503150.jpg',
                    ],
                ];
                ?>

                <div id='tag83cd3c0839acfe579f0c4c6beba139df'>
                    <?php foreach ($more as $item): ?>
                        <div class="ctread_li">
                            <div class="ctread_img"><a href="/article/<?= $item['id'] ?>"><img src="<?= $item['thumb'] ?>" alt=""></a></div>
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

            <div id="SOHUCS" sid="{{Request::get('aid')}}"></div>
            <script charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/changyan.js" ></script>
            <script type="text/javascript">
                window.changyan.api.config({
                    appid: 'cyt8rNSI2',
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

    <div class="main_rt">

        <!--右侧广告:上-->
        <!--<div class="rt_ad" style="height:200px; width:200px;">-->
        <!--<img src="{{__TEMPLATE__}}/img/ad2.png" alt="">-->
        <!--</div>-->
        <!--结束：右侧广告:上-->

        <!--25950-->
        <div class="rthotnews_tt">热新闻</div>
        <div class="hotnews_time" id="hotnews">
            <a class="on" href="javascript:;">热门</a>
            <a href="javascript:;">推荐</a>
            <a href="javascript:;">精选</a>
        </div>
        <ul class="list_hot"  id="listhot0">
            <?php
            $hot = [
                [
                    'id' => 38,
                    'title' => '上海：建设张江综合性国家科学中心，成为世界一流科学城',
                ],
                [
                    'id' => 12,
                    'title' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                ],
                [
                    'id' => 10,
                    'title' => '翻译弥尔顿的《失乐园》，过去30年里比之前300年还频繁',
                ],
            ];
            ?>

            <?php foreach($hot as $k => $item): ?>
                <li style="border-top:0;">
                    <span class="num_hot<?= $k + 1 ?>"></span>
                    <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
                </li>
            <?php endforeach ?>

            <div class="rtapp_down">
                <h2>书橱</h2>
                <slide rows="1">
                    <a href="/"><img style="width:100%;display:block;margin:10px auto;text-align:center;" src="http://hdcms.com/attachment/2017/08/01/28671501521727.jpg" border="0"></a>
                </slide>
            </div>
        </ul>

        <ul class="list_hot"  id="listhot1" style="display:none;">
            <?php
            $recommend = [
                [
                    'id' => 38,
                    'title' => '为何正物质比反物质多？美国要在千米深的废金矿里做个大实验',
                ],
                [
                    'id' => 12,
                    'title' => '重庆一村民家中失火，放羊老人兄弟砸窗灭火避免森林火灾',
                ],
                [
                    'id' => 10,
                    'title' => '重庆一村民家中失火，放羊老人兄弟砸窗灭火避免森林火灾',
                ],
            ];
            ?>
            <?php foreach($recommend as $k => $item): ?>
                <li style="border-top:0;">
                    <span class="num_hot<?= $k + 1 ?>"></span>
                    <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
                </li>
            <?php endforeach ?>
            <div class="rtapp_down">
                <h2>书橱</h2>
                <slide rows="1,1">
                    <a href="/"><img style="width:100%;display:block;margin:10px auto;text-align:center;" src="http://hdcms.com/attachment/2017/08/01/97341501522990.jpg" border="0"></a>
                </slide>
            </div>
        </ul>

        <ul class="list_hot"  id="listhot2" style="display:none;">
            <?php
            $featured = [
                [
                    'id' => 38,
                    'title' => '邵迎建读林奕含《房思琪的初恋乐园》︱文学辜负了她们吗？',
                ],
                [
                    'id' => 12,
                    'title' => '印观察｜印度错认“中印是竞争关系”，重建两国信任势在必行',
                ],
                [
                    'id' => 10,
                    'title' => '重庆一村民家中失火，放羊老人兄弟砸窗灭火避免森林火灾',
                ],
                [
                    'id' => 38,
                    'title' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                ],
                [
                    'id' => 12,
                    'title' => '谢其章︱字小如蚁的《新民声半月刊》',
                ],
            ];
            ?>
            <?php foreach ($featured as $k => $item): ?>
                <li style="border-top:0;">
                    <span class="num_hot<?= $k + 1 ?>"></span>
                    <a target="_blank" href="/article/<?= $item['id'] ?>"><?= $item['title'] ?></a>
                </li>
            <?php endforeach ?>
        </ul>

        <div class="rthotnews_tt">推荐</div>

        <ul class="topic_hot"  id="topichot0">
            <?php
            $topicHot = [
                [
                    'id' => 38,
                    'title' => '每一朵花的绽放，都在演绎延续数亿年的生命传奇',
                ],
                [
                    'id' => 12,
                    'title' => '谢其章︱字小如蚁的《新民声半月刊》',
                ],
            ];
            ?>
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
