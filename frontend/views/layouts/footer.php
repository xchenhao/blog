<!--footer-->
<!--<footer style="position: fixed; bottom: 0;">-->
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
<!--</footer>-->
<!-- footer -->