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
        'filterModel' => $searchModel,
        'columns' => [
//            ['class' => 'yii\grid\SerialColumn'],
            [
                'attribute'=>'id',
                'contentOptions'=>['width'=>'30px'],
            ],
            [
                'attribute' => 'title',
                'value' => function ($model) {
                    return strip_tags(mb_substr($model->title, 0, 30));
                }
            ],
            [
                'attribute' => 'intro',
                'value' => function ($model) {
                    return strip_tags(mb_substr($model->intro, 0, 15));
                },
            ],
            [
                'attribute' => 'cover',
                'format' => 'raw',
                'value' => function ($model) {
                    return Html::img($model->cover, ['style' => 'height: 100px;', 'referrerpolicy' => 'no-referrer']);
                },
            ],
//            'content:ntext',
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
