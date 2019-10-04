<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%links}}".
 *
 * @property int $id 主键
 * @property string $name 名称
 * @property string $url 链接地址
 * @property int $attr 属性
 * @property int $sort 排序
 * @property int $create_time 创建时间
 * @property int $modified_time 更新时间
 */
class Links extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%links}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'url'], 'required'],
            [['attr', 'sort', 'create_time', 'modified_time'], 'integer'],
            [['name'], 'string', 'max' => 32],
            [['url'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => '主键',
            'name' => '名称',
            'url' => '链接地址',
            'attr' => '属性',
            'sort' => '排序',
            'create_time' => '创建时间',
            'modified_time' => '更新时间',
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

    /**
     *
     * @param int $count
     * @return array
     */
    public static function getLinks(int $count = -1): array
    {

        $query = self::find()->select('name, url, attr')
            ->orderBy('sort DESC');
        if ($count > 0) {
            $query->limit($count);
        }
        return $query->asArray()->all();
    }

}
