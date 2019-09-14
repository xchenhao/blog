<?php

namespace app\models;

use backend\component\util\Helper;
use Yii;

/**
 * This is the model class for table "article".
 *
 * @property int $id 主键
 * @property string $title 标题
 * @property string $intro 简介
 * @property string $cover 封面地址
 * @property string $content 内容
 * @property string $tags 标签
 * @property string $author 作者
 * @property int $status 状态
 * @property int $attr 属性
 * @property int $category_id 分类 ID
 * @property string $content_md Markdown 格式文本
 * @property int $create_time 创建时间
 * @property int $modified_time 更新时间
 */
class Article extends \yii\db\ActiveRecord
{
    // 审核未通过
    const STATUS_NOT_PASS = -1;
    // 待审核
    const STATUS_UNCHECKED = 0;
    // 审核通过发表
    const STATUS_PASS = 1;

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'article';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'content', 'content_md'], 'required'],
            [['content', 'content_md'], 'string'],
            [['status', 'attr', 'category_id', 'create_time', 'modified_time'], 'integer'],
            [['title', 'tags'], 'string', 'max' => 128],
            [['intro', 'cover'], 'string', 'max' => 255],
            [['author'], 'string', 'max' => 32],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => '主键',

            'title' => '标题',
            'intro' => '简介',
            'cover' => '封面地址',
            'content' => '内容',

            'tags' => '标签',
            'author' => '作者',

            'status' => '状态',
            'attr' => '属性',

            'category_id' => '分类 ID',

            'content_md' => 'Markdown 格式文本',

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
            $this->status = self::STATUS_UNCHECKED;
        }

        return true;
    }

}
