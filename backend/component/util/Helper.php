<?php

namespace backend\component\util;

class Helper
{

    /**
     * 打印至日志文件
     *
     * @param mixed ...$args
     */
    public static function log(...$args): void
    {
        file_put_contents(sprintf('dev_%s.log', date('Y_m_d_H_i_s')), print_r($args, true));
    }

    /**
     * 打印至日志文件（原始格式）
     *
     * @param mixed ...$args
     */
    public static function rawLog(...$args): void
    {
        file_put_contents(sprintf('dev_%s.log', date('Y_m_d_H_i_s')), var_export($args, true));
    }

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