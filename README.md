xchenhao/blog
===

### 简介
----
- 个人博客：记录学习笔记，日常工作总结，相关想法
- TODO：加入视频播放功能
- TODO：加入支付功能

### 部署说明
---

```sh
git clone https://github.com/xchenhao/blog.git
cd blog
composer install

# 创建数据库
# 调整 common/config/main-local.php 中的数据库配置（主机/库名/用户名及密码）
# 执行 database/main.sql 中 SQL 语句

# 配置 Nginx 或 Apache 项目指向
# 前台入口：项目路径/frontend/web
# 后台入口：项目路径/backend/web

# 测试用户名：weixi 密码：123456
```

### 参考
- Forked from: `https://github.com/michaelweixi/blogdemo2`
