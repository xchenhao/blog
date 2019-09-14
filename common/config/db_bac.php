<?php

return [
    'db' => [
        'class' => 'yii\db\Connection',
        'dsn' => 'mysql:host=localhost;dbname=blog',
        'username' => 'root',
        'password' => '123456',
        'charset' => 'utf8',
    ],
    'db_bbs' => [
        'class' => 'yii\db\Connection',
        'dsn' => 'mysql:host=localhost;dbname=bbs',
        'username' => 'root',
        'password' => '123456',
        'charset' => 'utf8',
    ],
];