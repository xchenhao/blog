<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%category}}".
 *
 * @property integer $id
 * @property string $name
 * @property string $intro
 * @property integer $parent_id
 * @property integer $sort
 * @property integer $status
 * @property integer $attr
 * @property integer $create_time
 * @property integer $modified_time
 *
 * // magic field
 * @property bool isCoverAttr
 */
class Category extends \yii\db\ActiveRecord
{
    const STATUS_ONLINE = 1;
    const STATUS_OFFLINE = 0;

    public static $status = [
        self::STATUS_OFFLINE => '下线',
        self::STATUS_ONLINE => '上线',
    ];

    const ATTR_NORMAL = 0;
    const ATTR_COVER = 0b01;

    public static $attr = [
        self::ATTR_NORMAL => '普通',
        self::ATTR_COVER => '封面',
    ];

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
            [['parent_id', 'sort', 'status', 'attr', 'create_time', 'modified_time'], 'integer'],
            [['name'], 'string', 'max' => 32],
            [['intro'], 'string', 'max' => 255],
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
            'intro' => '简介',
            'parent_id' => '父级分类 ID',
            'sort' => '排序',
            'status' => '状态',
            'attr' => '属性',
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

    private static function getAllCategory(int $parent_id = -1): array
    {
        $query = Category::find();
        if ($parent_id > 0) {
            $query->andWhere(['parent_id' => $parent_id]);
        }
        return $query->asArray()->orderBy('sort ASC')->all();
    }

    /**
     * 获取一维的树形结构（树形权体现在显示的名称上）
     *
     * @param int $parent_id
     * @param int $max_level
     *
     * @return array
     */
    public static function getAllTreeList(int $parent_id = 0, $max_level = 0): array
    {
        $list = self::getAllCategory();
        return self::getTreeList($list, $parent_id, $max_level);
    }

    /**
     * 获取一维的树形结构（树形权体现在显示的名称上）
     *
     * @param array $list
     * @param int $parent_id
     * @param int $level
     * @return array
     */
    private static function getTreeList(array $list, int $parent_id = 0, int $level = 0)
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
                //'margin' => str_repeat('---', $level),
                'parent_id' => $item['parent_id'],
                '_name' => str_repeat(' ', $level * 9) . '┗' . str_repeat('---', $level) . $item['name'],
                'attr' => 0,
            ];
            self::getTreeList($list, $item['id'], $level + 1);
        }
        return $output;
    }

    public static function getAllTreeAndPassiveCurrent($category_id)
    {
        $list = self::getAllTreeList();
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

    /**
     * 获取的树形结构
     *
     * @param int $parent_id 父级分类 ID
     * @param int $max_level 获取的深度（层级）
     * @return array
     */
    public static function getAllTree(int $parent_id = 0, int $max_level = -1): array
    {
        return self::getTree(self::getAllCategory(), $parent_id, 0, $max_level);
    }

    /**
     * 获取的树形结构
     *
     * @param array $list 列表数据
     * @param int $parent_id 父级分类 ID
     * @param int $level 当前层级
     * @param int $max_level 获取的深度（层级）
     * @return array
     */
    private static function getTree(array $list, int $parent_id = 0, int $level = 0, int $max_level = -1): array
    {
        if ($max_level > 0 && $level > $max_level) {
            return [];
        }
        $output = [];
        foreach ($list as $item) {
            if ($item['parent_id'] != $parent_id) {
                continue;
            }
            $output[] = [
                'id' => $item['id'],
                'name' => $item['name'],
                'level' => $level,
                'parent_id' => $item['parent_id'],
                'sub' => self::getTree($list, $item['id'], $level + 1, $max_level),
            ];
        }
        return $output;
    }

    /**
     * 获取分类名
     *
     * @param array $category_ids
     * @return array
     */
    public static function getNames(array $category_ids): array
    {
        return Category::find()->select('name')
            ->where(['id' => $category_ids])
            ->indexBy('id')->column();
    }

    public static function isCoverAttr(int $attr): bool
    {
        return 0 !== (self::ATTR_COVER & $attr);
    }

    public function getIsCoverAttr(): bool
    {
        return self::isCoverAttr($this->attr);
    }

}
