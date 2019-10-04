<?php

use common\models\Links;

?>

<style>
  .about {
    height: unset;
  }
  .about .links {
    margin: 0 auto;
    width: 70%;
  }
  .about a {
    /*background: pink;*/
  }
</style>

<!--<footer style="position: fixed; bottom: 0;">-->
    <div class="about">
        <div class="links">
            <?php
            $links = Links::getLinks();
            ?>
            <a href="/" target="_blank" style="color: red">我的作品</a>
            <?php foreach ($links as $item): ?>
                <a href="<?= $item['url'] ?>" target="_blank"><?= $item['name'] ?></a>
            <?php endforeach ?>
        </div>
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