<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "bv_my_vips".
 *
 * @property int $uid 用户 ID
 * @property int $vip VIP 类型
 * @property int $create_time 创建时间
 * @property int $modified_time 修改时间
 */
class BvMyVips extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'bv_my_vips';
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
            [['uid'], 'required'],
            [['uid', 'vip', 'create_time', 'modified_time'], 'integer'],
            [['uid'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'uid' => '用户 ID',
            'vip' => 'VIP 类型',
            'create_time' => '创建时间',
            'modifed_time' => '修改时间',
        ];
    }

    public function beforeSave($insert)
    {
        if (!parent::beforeSave($insert)) {
            return false;
        }
        $time = $_SERVER['REQUEST_TIME'];
        if ($this->isNewRecord) {
            $this->create_time = $time;
        }
        $this->modified_time = $time;
        return true;
    }

}
