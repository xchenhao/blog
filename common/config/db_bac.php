<?php

return [
    'db' => [
        'class' => 'yii\db\Connection',
        'dsn' => 'mysql:host=localhost;dbname=blog',
        'username' => 'root',
        'password' => '123456',
        'charset' => 'utf8',
        'tablePrefix' => '',
        // https://github.com/yiisoft/yii2/issues/18171
        // https://github.com/craftcms/cms/issues/6379
        'attributes' => [PDO::ATTR_CASE => PDO::CASE_LOWER],
    ],
    'db_bbs' => [
        'class' => 'yii\db\Connection',
        'dsn' => 'mysql:host=localhost;dbname=bbs',
        'username' => 'root',
        'password' => '123456',
        'charset' => 'utf8',
        'tablePrefix' => '',
    ],
];
