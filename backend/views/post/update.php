<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use common\models\Poststatus;
use yii\helpers\ArrayHelper;
use common\models\common\models;
use common\models\Adminuser;

/* @var $this yii\web\View */
/* @var $model common\models\Post */
/* @var $form yii\widgets\ActiveForm */

$this->title = '文章修改: ' . $model->title;
$this->params['breadcrumbs'][] = ['label' => '文章管理', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = '修改';
?>
<div class="post-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <div class="post-form">
        <?php $form = ActiveForm::begin(); ?>
        <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>
        <div id="markdown-box">
            <textarea style="display:none;" name="Post[content_md]"></textarea>
        </div>
        <?= $form->field($model, 'tags')->textarea(['rows' => 6]) ?>
        <?= $form->field($model,'status')
            ->dropDownList(Poststatus::find()
                ->select(['name','id'])
                ->orderBy('position')
                ->indexBy('id')
                ->column(),
                ['prompt'=>'请选择状态']);?>

        <?= $form->field($model,'author_id')
            ->dropDownList(Adminuser::find()
                ->select(['nickname','id'])
                ->indexBy('id')
                ->column(),
                ['prompt'=>'请选择作者']);?>
        <div class="form-group">
            <?= Html::submitButton($model->isNewRecord ? '新增' : '修改', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
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
