/*
Navicat MySQL Data Transfer

Source Server         : wamp数据库
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : wb_date

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-21 10:15:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `content` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `href` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '绿蛟龙！瑞士迪沃斯(DAVOSA)-Diving 潜水系列 Ternos特勒斯 HC/200-绿 16155570 机械男表', '商务潜水两不误！高科技氧化锆陶瓷单向旋转表圈 水滴状日历视窗 Super-luminova优质夜光', '￥ 5530', 'https://image8.wbiao.co/shop/2104b329c9e548828d9fff5dd9b23de8.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff');
INSERT INTO `goods` VALUES ('2', '全新升级！天梭TISSOT-力洛克系列 T006.407.16.033.00 自动机械男表', '机芯稳定性、精度、动力储存全面提升 力洛克T41.1.423.33全新升级版', '￥ 3120', 'https://image8.wbiao.co/shop/e85579f2b5204312a8803ebdbf1ceab2.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff');
INSERT INTO `goods` VALUES ('3', '【德式机械-帆船白 爆款袭来！】来自德国格拉苏蒂·莫勒Muehle·Glashuette-Sporty 运动系列 M1-25-21-LB 29er 机械表中号 商务休闲随心搭配', '狂欢优惠价6688元！商务休闲火热搭配，简洁干净表盘 严谨、具有个性', '￥ 8640', 'https://image8.wbiao.co/shop/d281b2244e364d7face488c14f94eb39.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff');
INSERT INTO `goods` VALUES ('4', '【商务精英优选】瑞士柏高Paul Picot -梦想家系列 P2061.SG.4000.7601 商务休闲 机械男表', '优雅大三针日历腕表 尽享尊贵魅力 豪公子必备款', '￥ 9998', 'https://image8.wbiao.co/shop/201708_15_P2061_SG_4000_7601_63741.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff');
INSERT INTO `goods` VALUES ('5', '瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表', '【加19元换购原装蝴蝶扣，加59元换购原装小牛皮皮带】褐尽繁华 保留腕表原始的魅力 渐变太阳纹表盘 简约 不简单', '￥ 5770', 'https://image8.wbiao.co/shop/e0023f102d704edd939c23b516248195.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff');
INSERT INTO `goods` VALUES ('6', '浪琴Longines-名匠系列 L2.628.4.78.6 机械男表', '热销中！经典隽永，经验与匠心技艺的结合', '￥ 12320 ', 'https://image8.wbiao.co/shop/201601_22_L2_628_4_78_6_89643.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff');
INSERT INTO `goods` VALUES ('7', '欧米茄Omega-碟飞系列 424.13.40.20.02.001 机械男表', '瑞士天文台认证表款 同轴擒纵系统机芯 银色表盘 简洁儒雅', '￥ 20750', 'https://image8.wbiao.co/shop/201301_11_14867_25847.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff');
INSERT INTO `goods` VALUES ('8', '法国总统夫人之选 法国优雅腕表品牌：赫柏林Michel Herbelin-City 都市系列 -法国绅士- 1669/07GO 男士机械表', '【品牌爆款】所谓品味，即如同赫柏林将经典融入法式的优雅设计，极简风格的机械腕表！（赫柏林机械表均为瑞士生产）', '￥ 3850', 'https://image8.wbiao.co/shop/a78db6e5a59245cf9f7848f3f35188b7.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff');
