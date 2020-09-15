xchenhao/blog
===

### 部署说明
---

```sh
git clone https://github.com/xchenhao/blog.git
cd deployment
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
# https://github.com/docker/compose/releases
curl -L https://github.com/docker/compose/releases/download/1.24.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker-compose up

# 下载依赖
docker-compose exec php /bin/sh
cd /usr/share/nginx/html/mybook
composer install

# 创建数据库
cp common/config/main-local-bac.php common/config/main-local.php
cp common/config/db_bac.php common/config/db.php
cp common/config/env_bac.php common/config/env.php
# 调整 common/config/db.php 中的数据库配置（主机/库名/用户名及密码）
# 执行 database/main.sql 中 SQL 语句

cp -a vendor/bower-asset vendor/bower

# 配置 Nginx 或 Apache 项目指向
# 前台入口：项目路径/frontend/web
# 后台入口：项目路径/backend/web

# 测试用户名：weixi 密码：123456
```

```conf
# Nginx 伪静态
location / {
	if (!-e $request_filename){
		rewrite  ^(.*)$  /index.php?s=$1  last;   break;
	}
}
```

### 参考
- Forked from: `https://github.com/michaelweixi/blogdemo2`
