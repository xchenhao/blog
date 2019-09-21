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