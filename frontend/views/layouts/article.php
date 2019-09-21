<?php
/* @var $this yii\web\View */
/* @var $content string */
?>

<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<!--header-->
<?= $this->render('header') ?>
<!--header-->

<body>

<!--navbar-->
<?= $this->render('navbar') ?>
<!--navbar-->

<!--body-->
<?php $this->beginBody() ?>
<?= $content ?>
<?php $this->endBody() ?>
<!--body-->

<!--footer-->
<?= $this->render('footer') ?>
<!--footer -->

</body>
</html>
<?php $this->endPage() ?>