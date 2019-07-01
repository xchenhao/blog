<?php

namespace backend\utils;

class Helper
{

    /**
     * 解析 Markdown 文本为 HTML 格式文本
     *
     * @param null|string $markdown_content
     * @return string
     */
    public static function parseMarkdownToHTML(?string $markdown_content): string
    {
        return \Parsedown::instance()->text($markdown_content);
    }

}
