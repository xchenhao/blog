<?php

namespace frontend\middlewares;

use yii\filters\ContentNegotiator;
use yii\web\Response;

class Controller extends \yii\web\Controller
{

    public $enableCsrfValidation = false;

    public function behaviors()
    {
        return [
            [
                'class' => ContentNegotiator::class,
                'except' => ['captcha'],
                'formats' => [
                    'text/html' => Response::FORMAT_HTML,
                    'application/xml' => Response::FORMAT_XML,
                    'application/json' => Response::FORMAT_JSON,
                    'application/javascript' => Response::FORMAT_JSONP,
                ]
            ],
            [
                'class' => UserFilter::class,
            ]
        ];
    }


}