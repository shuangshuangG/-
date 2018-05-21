/*
Navicat MySQL Data Transfer

Source Server         : wamp数据库
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : wb_date

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-21 10:16:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `shopcar`
-- ----------------------------
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `href` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `title` varchar(80) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `content` varchar(80) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `num` int(2) NOT NULL,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of shopcar
-- ----------------------------
INSERT INTO `shopcar` VALUES ('1', 'https://image8.wbiao.co/shop/2104b329c9e548828d9fff5dd9b23de8.jpg?x-oss-process=image/resize,w_90,h_90', ' 瑞士迪沃斯官方旗舰店', '绿蛟龙！瑞士迪沃斯(DAVOSA)-Diving 潜水系列 Ternos特勒斯 HC/200-绿 16155570 机械男表', '5', '￥ 3120');
INSERT INTO `shopcar` VALUES ('2', 'https://image8.wbiao.co/shop/e85579f2b5204312a8803ebdbf1ceab2.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff', '天梭旗舰店', '机芯稳定性、精度、动力储存全面提升 力洛克T41.1.423.33全新升级版', '5', '￥ 3120');
INSERT INTO `shopcar` VALUES ('3', 'https://image8.wbiao.co/shop/d281b2244e364d7face488c14f94eb39.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff', '莫勒旗舰店', '狂欢优惠价6688元！商务休闲火热搭配，简洁干净表盘 严谨、具有个性', '1', '￥ 8640');
