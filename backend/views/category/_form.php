<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use common\models\Category;

/* @var $this yii\web\View */
/* @var $model common\models\Category */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="category-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true, 'required' => true]) ?>

    <?php
        $categorys = Category::getAllTreeList();
        array_unshift($categorys, ['_name' => '【顶级分类】', 'id' => 0]);
        $options = array_column($categorys, '_name', 'id');
    ?>
    <?= $form->field($model,'parent_id')->dropDownList($options, ['prompt'=>'请选择分类', 'required' => true]
    );?>
    <?= $form->field($model, 'intro')->textInput(['maxlength' => true, 'required' => true]) ?>

    <?= $form->field($model, 'sort')->textInput(['required' => true, 'type' => 'number']) ?>

    <?= $form->field($model, 'status')->dropDownList(Category::$status, ['prompt' => '请选择状态', 'required' => true]) ?>
    <?= $form->field($model, 'attr')->dropDownList(Category::$attr, ['prompt' => '请选择属性', 'required' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? '创建' : '更新', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
