<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\Links */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => '链接列表', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="links-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('更新', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('删除', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => '是否确认删除？',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'name',
            'url:url',
            'attr',
            'sort',
            'create_time:datetime',
            'modified_time:datetime',
        ],
    ]) ?>

</div>
