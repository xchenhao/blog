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

    /**
     * 文章列表
     *
     * @param int $category_id
     * @return string
     */
    public function actionList(int $category_id)
    {
        $category = Category::findOne(['id' => $category_id]);
        $view_tpl = $category->isCoverAttr ? 'cover' : 'list';

        $cats = Category::getAllTreeList($category_id);
        $cat_ids = array_column($cats, 'id');
        $cat_ids = array_map('intval', $cat_ids);
        $cat_ids[] = $category_id;

        $articles = Article::find()
            ->where(['category_id' => $cat_ids])
            ->orderBy('view_count DESC')
            ->asArray()->all();
        $category_names = array_column($cats, 'name', 'id');
        $category_names[$category_id] = $category->name;
        $articles = array_map(function ($item) use ($category_names) {
            $item['category_name'] = $category_names[$item['category_id']] ?? '';
            $item['create_time'] = date('Y-m-d H:i:s', $item['create_time']);

            return $item;
        }, $articles);

        return $this->render($view_tpl, [
            'articles' => $articles,
        ]);
    }

}
