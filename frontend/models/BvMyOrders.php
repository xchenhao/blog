<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "bv_my_orders".
 *
 * @property int $id 主键
 * @property int $post_id 帖子 ID
 * @property int $uid 用户 ID
 * @property int $create_time 创建时间
 * @property int $modified_time 修改时间
 * @property string $transaction_id 外部交易 ID
 * @property int $status 交易状态
 */
class BvMyOrders extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'bv_my_orders';
    }

    /**
     * @return \yii\db\Connection the database connection used by this AR class.
     */
    public static function getDb()
    {
        return Yii::$app->get('db_bbs');
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'post_id', 'uid', 'create_time', 'modified_time'], 'required'],
            [['id', 'post_id', 'uid', 'create_time', 'modified_time', 'status'], 'integer'],
            [['transaction_id'], 'string', 'max' => 32],
            [['id'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => '主键',
            'post_id' => '帖子 ID',
            'uid' => '用户 ID',
            'create_time' => '创建时间',
            'modified_time' => '修改时间',
            'transaction_id' => '外部交易 ID',
            'status' => '交易状态',
        ];
    }
}
