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