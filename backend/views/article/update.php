<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Article */
/* @var $form yii\widgets\ActiveForm */

$this->title = '更新文章: ' . $model->title;
$this->params['breadcrumbs'][] = ['label' => '文章列表', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = '更新文章';
?>
<div class="article-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <div class="article-form">

        <?php $form = ActiveForm::begin(); ?>

        <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'intro')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'cover')->textInput(['maxlength' => true]) ?>

        <?= $form->field($model, 'tags')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'author')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'category_id')->textInput() ?>

        <div id="markdown-box">
            <textarea style="display: none" name="Article[content_md]"><?= $model->content_md ?></textarea>
        </div>

        <div class="form-group">
            <?= Html::submitButton('保存', ['class' => 'btn btn-success']) ?>
        </div>

        <?php ActiveForm::end(); ?>
    </div>
</div>
<script src="https://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
<link rel="stylesheet" href="/node_modules/editor.md/css/editormd.css" />
<script src="/node_modules/editor.md/editormd.js"></script>
<script type="text/javascript">
    var testEditor;
    $(function() {
        testEditor = editormd("markdown-box", {
            width   : "90%",
            height  : 640,
            syncScrolling : "single",
            path    : "/node_modules/editor.md/lib/"
        })
    })
</script>