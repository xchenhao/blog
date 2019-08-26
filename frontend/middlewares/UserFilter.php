<?php

namespace frontend\middlewares;

use Yii;
use yii\base\ActionFilter;

class UserFilter extends ActionFilter
{
    public function beforeAction($action)
    {
        if (!parent::beforeAction($action)) {
            return false;
        }

        $this->handleResponse();
        return true;
    }

    private function handleResponse()
    {
        $response = Yii::$app->response;
        $response->on($response::EVENT_BEFORE_SEND, function($event){
            $response = $event->sender;
            $format = $response->format;

            if (302 === $response->statusCode || 301 === $response->statusCode) {
                return;
            }

            file_put_contents('r.log', print_r($response->data, true));
            if ('string' !== gettype($response->data)
                && !('json' === $format || 'xml' === $format)) {
                $response->format = 'xml';
                $format = 'xml';
            }

            if ('json' === $format || 'xml' === $format) {
                $data = $response->data;
                $code = 0;
                if (200 !== $response->statusCode) {
                    $code = $data['code'] ?? 0;
                    if (!$code || !is_int($code)) {
                        $code = ((400 === $response->statusCode) ? 201010002 : 100010007 );
                    }
                    $data = $response->data['message'] ?? $response->data;
                }
                $response->data = [
                    'success' => $response->isSuccessful,
                    'code' => $code,
                    'info' => $data,
                ];
            }
        });
    }

}
