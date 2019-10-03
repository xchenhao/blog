<?php

namespace common\models;

use Yii;
use yii\data\ActiveDataProvider;

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
 * @property int $refined 加精
 * @property int $view_count 查看数
 * @property int $category_id 分类 ID
 * @property string $content_md Markdown 格式文本
 * @property int $create_time 创建时间
 * @property int $modified_time 更新时间
 *
 * // magic field
 * @property bool isMarkDownEditor
 * @property bool isRichTextEditor
 */
class Article extends \yii\db\ActiveRecord
{
    // 审核未通过
    const STATUS_NOT_PASS = -1;
    // 待审核
    const STATUS_UNCHECKED = 0;
    // 审核通过发表
    const STATUS_PASS = 1;

    // Markdown 编辑器
    const ATTR_MARKDOWN_EDITOR = 0;
    // 富文本编辑器
    const ATTR_RICHTEXT_EDITOR = 0b01;
    // 版头图
    const ATTR_BANNER = 0b10;

    // 首页播放量最高的文章数量
    const HOMEPAGE_COUNT_TOP_VIEW_ARTICLE = 9;
    // 版头图数量
    const BANNER_COUNT = 3;

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
            [['title', 'content'], 'required'],
            [['content', 'content_md'], 'string'],
            [['status', 'attr', 'refined', 'view_count', 'category_id', 'create_time', 'modified_time'], 'integer'],
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
            'refined' => '加精',
            'view_count' => '播放量',

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

    public static function isMarkDownEditor(int $attr): bool
    {
        return !self::isRichTextEditor($attr);
    }

    public static function isRichTextEditor(int $attr): bool
    {
        return $attr & self::ATTR_RICHTEXT_EDITOR !== 0;
    }

    public function getIsMarkDownEditor(): bool
    {
        return self::isMarkDownEditor($this->attr);
    }

    public function getIsRichTextEditor(): bool
    {
        return self::isRichTextEditor($this->attr);
    }

    /**
     * 获取播放量最高的文章
     *
     * @param int $count
     * @return array
     */
    public static function getTopViewArticles(int $count = self::HOMEPAGE_COUNT_TOP_VIEW_ARTICLE): array
    {
        if ($count <= 0) {
            return [];
        }
        $list = self::find()
            ->select('id, category_id, title, intro, cover, create_time')
            ->where(['status' => self::STATUS_PASS])
            ->andWhere('attr & :banner = 0', [':banner' => self::ATTR_BANNER])
            ->orderBy('view_count DESC')
            ->limit($count)
            ->asArray()
            ->all();

        $category_ids = array_column($list, 'category_id');
        $category_names = Category::getNames($category_ids);

        return array_map(function ($item) use ($category_names) {
            $item['category_name'] = $category_names[$item['category_id']] ?? '';
            $item['create_time'] = date('Y-m-d H:i:s', $item['create_time']);
            return $item;
        }, $list);
    }

    /**
     * 获取版头图
     *
     * @param int $count
     * @return array
     */
    public static function getBanners(int $count): array
    {
        if ($count <= 0) {
            return [];
        }
        $list = self::find()
            ->select('id, category_id, title, intro, cover, create_time')
            ->where(['status' => self::STATUS_PASS])
            ->andWhere('attr & :banner = 1', [':banner' => self::ATTR_BANNER])
            ->orderBy('view_count DESC')
            ->limit($count)
            ->asArray()
            ->all();

        $category_ids = array_column($list, 'category_id');
        $category_names = Category::getNames($category_ids);

        return array_map(function ($item) use ($category_names) {
            $item['category_name'] = $category_names[$item['category_id']] ?? '';
            $item['create_time'] = date('Y-m-d H:i:s', $item['create_time']);
            return $item;
        }, $list);
    }

}
