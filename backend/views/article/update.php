<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use common\models\Category;

/* @var $this yii\web\View */
/* @var $model common\models\Article */
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
        <?php
            $categorys = Category::getAllTreeList();
            $options = array_column($categorys, 'name', 'id');
        ?>
        <?= $form->field($model,'category_id')->dropDownList($options, ['prompt'=>'请选择分类', 'required' => true]); ?>
        <?= $form->field($model, 'attr')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'status')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'refined')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'view_count')->textInput(['maxlength' => true]) ?>

        <?php if ($model->isRichTextEditor): ?>
            <textarea name="Article[content]"><?= $model->content ?></textarea>
            <input type="hidden" name="Article[content_md]" />
        <?php else: ?>
            <div id="markdown-box">
                <textarea style="display:none;" name="Article[content_md]"><?= $model->content_md ?></textarea>
                <input type="hidden" name="Article[content]" />
            </div>
        <?php endif ?>

        <div class="form-group">
            <?= Html::submitButton('保存', ['class' => 'btn btn-success']) ?>
        </div>

        <?php ActiveForm::end(); ?>
    </div>
</div>

<?php if ($model->isRichTextEditor): ?>
    <script src="//cdn.ckeditor.com/4.12.1/full/ckeditor.js"></script>
    <script>
        CKEDITOR.replace( 'Article[content]' );
    </script>
<?php else: ?>
    <script src="https://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
    <link rel="stylesheet" href="/node_modules/editor.md/css/editormd.css" />
    <script src="/node_modules/editor.md/editormd.js"></script>
    <script type="text/javascript">
        var testEditor;
        $(function() {
            testEditor = editormd("markdown-box", {
                width   : "90%",
                height  : 800,
                syncScrolling : "single",
                path    : "/node_modules/editor.md/lib/"
            })
        })
    </script>
<?php endif ?>
