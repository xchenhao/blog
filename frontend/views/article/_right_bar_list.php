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