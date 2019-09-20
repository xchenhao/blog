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

    public static function getAllCategory(int $parent_id = -1): array
    {
        $query = Category::find();
        if ($parent_id > 0) {
            $query->andWhere(['parent_id' => $parent_id]);
        }
        return $query->asArray()->orderBy('sort ASC')->all();
    }

    public static function getAllTree()
    {
        $list = self::getAllCategory();
        return self::getTree($list, 0, 0);
    }

    private static function getTree(array $list, int $parent_id = 0, int $level = 0)
    {
        static $output = [];
        foreach ($list as $item) {
            if ($item['parent_id'] != $parent_id) {
                continue;
            }
            $output[] = [
                'id' => $item['id'],
                'name' => $item['name'],
                'level' => $level,
                'margin' => str_repeat('---', $level),
                'parent_id' => $item['parent_id'],
                'attr' => 0,
            ];
            self::getTree($list, $item['id'], $level + 1);
        }
        return $output;
    }

    public static function getAllTreeAndPassiveCurrent($category_id)
    {
        $list = self::getAllTree();
        foreach ($list as $k => $item) {
            if ($item['id'] != $category_id) {
                continue;
            }
            $list[$k]['attr'] = -1;
        }
        return self::passiveChildAttr($list, $category_id);
    }

    private static function passiveChildAttr($list, $parent_id = 0)
    {
        foreach ($list as $k => $item) {
            if ($item['parent_id'] != $parent_id) {
                continue;
            }
            $list[$k]['attr'] = -1;
            $list = self::passiveChildAttr($list, $item['id']);
        }
        return $list;
    }

// 树形结构
//    public static function getAllTree(): array
//    {
//        return self::getTree(self::getAllCategory(), 0, 0);
//    }
//
//    public static function getTree(array $list, int $parent_id = 0, int $level = 0): array
//    {
//        $output = [];
//        foreach ($list as $item) {
//            if ($item['parent_id'] != $parent_id) {
//                continue;
//            }
//            $output[] = [
//                'id' => $item['id'],
//                'name' => $item['name'],
//                'level' => $level,
//                'parent_id' => $item['parent_id'],
//                'sub' => self::getTree($list, $item['id'], $level + 1),
//            ];
//        }
//        return $output;
//    }

}
