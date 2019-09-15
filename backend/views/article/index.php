<?php

use yii\helpers\Html;
use yii\grid\GridView;
use common\models\Article;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = '文章列表';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="article-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('创建文章（Markdown 编辑器）', [sprintf('create?editor=%d', Article::ATTR_MARKDOWN_EDITOR)], ['class' => 'btn btn-success']) ?>
        <?= Html::a('创建文章（富文本编辑器）', [sprintf('create?editor=%d', Article::ATTR_RICHTEXT_EDITOR)], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'title',
            'intro',
            'cover',
            'content:ntext',
            //'tags',
            //'author',
            //'status',
            //'attr',
            //'category_id',
            //'content_md:ntext',
            //'create_time:datetime',
            //'modified_time:datetime',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
