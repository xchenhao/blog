<div class="main_rt">
    <div class="rtapp_down">
        <h2>书橱</h2>
        <slide rows="1">
            <a href="/"><img style="width:100%;display:block;margin:10px auto;text-align:center;" src="http://hdcms.com/attachment/2017/08/01/28671501521727.jpg" border="0"></a>
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