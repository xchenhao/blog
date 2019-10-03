<?php

namespace frontend\controllers;

use common\models\Article;
use common\models\Category;
use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;

/**
 * PostController implements the CRUD actions for Post model.
 */
class ArticleController extends Controller
{
    public $added = 0;
    public $layout = 'article';

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [],
            ],
            'access' => [
                'class' => AccessControl::class,
                'rules' => [
                    [
                        'actions' => ['index', 'article', 'cover', 'list', 'view'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['index', 'article', 'cover', 'list', 'view'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }

    /**
     * 首页
     *
     * @return string
     */
    public function actionIndex()
    {
        $articles = Article::getTopViewArticles();
        return $this->render('index', [
            'articles' => $articles,
        ]);
    }

    /**
     * 文章详情
     *
     * @param int $id
     * @return string
     */
    public function actionView(int $id)
    {
        $model = Article::find()->where(['id' => $id])->one();
        $category = Category::getAllTree(0, 2);
        return $this->render('view', [
            'model' => $model,
            'category' => $category,
        ]);
    }

    public function actionCover()
    {
        return $this->render('cover', [

        ]);
    }

    public function actionList(int $category_id)
    {
        return $this->render('list', [

        ]);
    }

}
