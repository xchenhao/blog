<?php

namespace frontend\controllers;

use common\models\Article;
use common\models\Category;
use Yii;
use common\models\Post;
use common\models\PostSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;

use common\models\Tag;
use common\models\Comment;
use common\models\User;
use yii\rest\Serializer;

/**
 * PostController implements the CRUD actions for Post model.
 */
class ArticleController extends Controller
{
    public $added = 0;
    public $layout = false;

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
                        'actions' => ['index', 'detail', 'article', 'cover', 'list', 'view'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['index', 'detail', 'article', 'cover', 'list', 'view'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }

    public function actionIndex()
    {
        $this->layout = 'article';
        return $this->render('index', [

        ]);
    }

    public function actionView(int $id)
    {
        $this->layout = 'article';
        $model = Article::find()->where(['id' => $id])->one();
        $category = Category::getAllTree(0, 2);
        return $this->render('view', [
            'model' => $model,
            'category' => $category,
        ]);
    }

    public function actionArticle()
    {
        $category = Category::getAllTree(0, 2);
        return $this->render('article', [
            'category' => $category,
        ]);
    }

    public function actionCover()
    {
        $this->layout = 'article';
        return $this->render('cover', [

        ]);
    }

    public function actionList()
    {
        $this->layout = 'article';
        return $this->render('list', [

        ]);
    }


    /**
     * Finds the Post model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Post the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Post::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

    public function actionDetail($id)
    {
        //step1. 准备数据模型
        $model = $this->findModel($id);
        $tags = Tag::findTagWeights();
        $recentComments = Comment::findRecentComments();

        $userMe = User::findOne(Yii::$app->user->id);
        $commentModel = new Comment();
        $commentModel->email = $userMe->email;
        $commentModel->userid = $userMe->id;

        //step2. 当评论提交时，处理评论
        if ($commentModel->load(Yii::$app->request->post())) {
            $commentModel->status = 1; //新评论默认状态为 pending
            $commentModel->post_id = $id;
            if ($commentModel->save()) {
                $this->added = 1;
            }
        }

        //step3.传数据给视图渲染
        return $this->render('view', [
            'model' => $model,
            'tags' => $tags,
            'recentComments' => $recentComments,
            'commentModel' => $commentModel,
            'added' => $this->added,
        ]);
    }

}
