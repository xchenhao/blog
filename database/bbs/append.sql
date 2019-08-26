use bbs;

-- 购买单个帖子订单表
CREATE TABLE `bv_my_orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `post_id` int(10) unsigned NOT NULL COMMENT '帖子 ID',
  `uid` int(10) unsigned NOT NULL COMMENT '用户 ID',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `modified_time` int(10) NOT NULL COMMENT '修改时间',
  `transaction_id` varchar(32) NOT NULL DEFAULT '' COMMENT '外部交易 ID',
  `status` tinyint(4) unsigned NOT NULL DEFAULT '0' COMMENT '交易状态',
  `price` int(10) unsigned NOT NULL COMMENT '价格（单位：分）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 购买 VIP 表
CREATE TABLE `bv_my_vips` (
  `uid` int(10) unsigned NOT NULL COMMENT '用户 ID',
  `vip` tinyint(4) unsigned NOT NULL DEFAULT '0' COMMENT 'VIP 类型',
  `create_time` int(10) unsigned NOT NULL COMMENT '创建时间',
  `modified_time` int(10) unsigned NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;