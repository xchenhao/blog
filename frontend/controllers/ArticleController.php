<?php

namespace frontend\controllers;

use common\models\Article;
use common\models\Category;
use Yii;
use yii\data\Pagination;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;

/**
 * PostController implements the CRUD actions for Post model.
 */
class ArticleController extends Controller
{
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
     * @param integer $page
     * @param integer $page_size
     * @param integer $list 文章显示方式（0 卡片，1 列表）
     * @return string
     * @throws \Exception
     */
    public function actionIndex(int $page = 1, $page_size = Article::HOMEPAGE_COUNT_TOP_VIEW_ARTICLE, $list = 0)
    {
        $articles = Article::getTopViewArticles($page, $page_size);
        $articles['pagination']->params = array_merge($_GET, ['list' => $list]);
        $banners = Article::getBanners();
        return $this->render('index', [
            'articles' => $articles,
            'banners' => $banners,
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
     * @param integer $page
     * @param integer $page_size
     * @param integer $list 文章显示方式（0 卡片，1 列表）
     * @return string
     */
    public function actionList(int $category_id, int $page = 1, $page_size = Article::HOMEPAGE_COUNT_TOP_VIEW_ARTICLE, $list = 0)
    {
        $category = Category::findOne(['id' => $category_id]);
        $view_tpl = 'list';
        if ($category->isCoverAttr) {
            $view_tpl = 'cover';
            $page_size = 6;
        }

        $cats = Category::getAllTreeList($category_id);
        $cat_ids = array_column($cats, 'id');
        $cat_ids = array_map('intval', $cat_ids);
        $cat_ids[] = $category_id;

        $query = Article::find()
            ->where(['category_id' => $cat_ids])
            ->orderBy('view_count DESC');
        $items = $query
            ->offset($page_size * ($page - 1))
            ->limit($page_size)
            ->asArray()->all();
        $category_names = array_column($cats, 'name', 'id');
        $category_names[$category_id] = $category->name;
        $items = array_map(function ($item) use ($category_names) {
            $item['category_name'] = $category_names[$item['category_id']] ?? '';
            $item['create_time'] = date('Y-m-d H:i:s', $item['create_time']);

            return $item;
        }, $items);

        $articles = [
            'items' => $items,
            'pagination' => new Pagination([
                'totalCount' => $query->count(),
                'pageSize' => $page_size,
                'pageParam' => 'page',
                'pageSizeParam' => 'page_size',
                'params' => array_merge($_GET, ['list' => $list]),
            ]),
        ];

        return $this->render($view_tpl, [
            'articles' => $articles,
            'category' => $category,
        ]);
    }

}
