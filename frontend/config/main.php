<?php
$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

$config = [
    'id' => 'app-frontend',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'controllerNamespace' => 'frontend\controllers',
    'defaultRoute' => 'article/index',
    'language' => 'zh-CN',
    'components' => [
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning', 'trace', 'info', 'profile'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'urlManager' => [
            // false => gii 有效？ true 无效（WHY）// https://www.yiichina.com/question/1073
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            //'suffix' => '.html',
            'rules' => [
                'article/<id:\d+>' => 'article/view',
                '<controller:\w+>/<id:\d+>' => '<controller>/detail',
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
                'posts' => 'post/index',
//                'article' => 'post/article',
                'cover' => 'post/cover',
                'list' => 'post/list',
            ],
        ],
    ],
    'params' => $params,
];

return $config;
