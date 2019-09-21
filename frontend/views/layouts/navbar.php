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
</style>

<div class="head hdbk">
    <div id="head">
        <div class="head_rt"><span class="verticalAlign"></span>
            <div class="head_info clearfix">
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
                    <a class="bn_a" id="select" href="/">主页</a>
                </div>
                <?php
                    $category = \common\models\Category::getAllTree(0, 2);
                ?>
                <?php foreach ($category as $cat):?>
                    <div class="bn_bt">
                        <a href="/category/<?= $cat['id'] ?>" class="bn_a "><?= $cat['name'] ?></a>
                        <div style="display:none;" class="slider" id="slider1">
                            <div class="lilt_pt"><img width="16" height="12" src="/theme/news/img/prompt_top.png">
                            </div>
                            <ul class="clearfix">
                                <?php foreach ($cat['sub'] as $subcat): ?>
                                    <li><a href="/category/<?= $subcat['id'] ?>"><?= $subcat['name'] ?></a></li>
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