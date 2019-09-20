<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%category}}".
 *
 * @property integer $id
 * @property string $name
 * @property integer $parent_id
 * @property integer $sort
 * @property integer $status
 * @property integer $create_time
 * @property integer $modified_time
 */
class Category extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%category}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['parent_id', 'sort', 'status', 'create_time', 'modified_time'], 'integer'],
            [['name'], 'string', 'max' => 32],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => '主键',
            'name' => '名称',
            'parent_id' => '父级分类 ID',
            'sort' => '排序',
            'status' => '状态',
            'create_time' => '创建时间',
            'modified_time' => '修改时间',
        ];
    }

    public function beforeSave($insert)
    {
        if (!parent::beforeSave($insert)) {
            return false;
        }
        $time = $_SERVER['REQUEST_TIME'];
        $this->modified_time = $time;
        if ($insert) {
            $this->create_time = $time;
        }
        return true;
    }

    public static function getTree()
    {
        $categorys = Category::find()->asArray()->all();
        $output = [];
        foreach ($categorys as $item) {
            $sub = self::getSub($item['id'], $categorys);
            $output[] = [
                'id' => $item['id'],
                'name' => $item['name'],
                'parent_id' => $item['parent_id'],
                'sub' => $sub,
            ];
        }
        return $output;
    }

    public static function getSub($parent_id, $array)
    {
        $return = [];
        foreach ($array as $item) {
            if ($item['parent_id'] == $parent_id) {
                $return[] = [
                    'id' => $item['id'],
                    'name' => $item['name'],
                    'parent_id' => $item['parent_id'],
                    'sub' => self::getSub($item['id'], $array),
                ];
            }
        }
        return $return;
    }

}
