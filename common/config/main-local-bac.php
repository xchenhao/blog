<?php

$dbs = require __DIR__ . '/db.php';

return [
    'components' => [
        'db' => $dbs['db'],
        'db_bbs' => $dbs['db_bbs'],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            'viewPath' => '@common/mail',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
        ],
    ],
];
