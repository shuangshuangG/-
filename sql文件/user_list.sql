/*
Navicat MySQL Data Transfer

Source Server         : wamp数据库
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : wb_date

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-21 10:16:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user_list`
-- ----------------------------
DROP TABLE IF EXISTS `user_list`;
CREATE TABLE `user_list` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `phoneNum` varchar(11) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `recommed` varchar(11) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user_list
-- ----------------------------
INSERT INTO `user_list` VALUES ('1', 'gss001', 'b59c67bf196a4758191e42f76670ceba', '571375822@qq.com', '15225356441', '15234567788');
INSERT INTO `user_list` VALUES ('2', 'gss002', 'b59c67bf196a4758191e42f76670ceba', 'ahdgfoiwrhoip@qq.com', '15677777777', '');
INSERT INTO `user_list` VALUES ('3', 'gss003', 'b59c67bf196a4758191e42f76670ceba', 'sakdh12@qq.com', '15466778899', '15225356441');
