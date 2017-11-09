/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50710
Source Host           : localhost:3306
Source Database       : db_transaksi

Target Server Type    : MYSQL
Target Server Version : 50710
File Encoding         : 65001

Date: 2017-10-17 01:25:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `cp_menu`
-- ----------------------------
DROP TABLE IF EXISTS `cp_menu`;
CREATE TABLE `cp_menu` (
  `menuID` int(10) NOT NULL AUTO_INCREMENT,
  `menuName` varchar(50) DEFAULT NULL,
  `menuExpand` enum('true','false') DEFAULT NULL,
  `menuShort` int(2) DEFAULT NULL,
  PRIMARY KEY (`menuID`),
  KEY `cpmenu_menuname` (`menuName`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cp_menu
-- ----------------------------
INSERT INTO `cp_menu` VALUES ('1', 'Master Data', 'false', '0');
INSERT INTO `cp_menu` VALUES ('2', 'Transaction', 'true', '1');
INSERT INTO `cp_menu` VALUES ('3', 'Report', 'false', '3');
INSERT INTO `cp_menu` VALUES ('5', 'Control Panel', 'false', '4');

-- ----------------------------
-- Table structure for `cp_menudetail`
-- ----------------------------
DROP TABLE IF EXISTS `cp_menudetail`;
CREATE TABLE `cp_menudetail` (
  `menuID` int(10) NOT NULL AUTO_INCREMENT,
  `menuParrent` varchar(50) DEFAULT NULL,
  `menuControl` varchar(50) DEFAULT NULL,
  `menuDisplay` varchar(255) DEFAULT NULL,
  `menuLeaf` enum('true','false') DEFAULT NULL,
  `menuShort` int(10) DEFAULT NULL,
  PRIMARY KEY (`menuID`),
  KEY `menudetail_menuname` (`menuControl`,`menuDisplay`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cp_menudetail
-- ----------------------------
INSERT INTO `cp_menudetail` VALUES ('1', 'Master Data', 'MCustomer', 'Master Customer', 'true', '0');
INSERT INTO `cp_menudetail` VALUES ('2', 'Master Data', 'MItem', 'Master Item', 'true', '1');
INSERT INTO `cp_menudetail` VALUES ('3', 'Master Data', 'MCategory', 'Master Category', 'true', '2');
INSERT INTO `cp_menudetail` VALUES ('4', 'Master Data', 'MUnit', 'Master Unit', 'true', '3');
INSERT INTO `cp_menudetail` VALUES ('5', 'Transaction', 'Packinglist', 'Packing List', 'true', '0');
INSERT INTO `cp_menudetail` VALUES ('6', 'Transaction', 'Tandaterima', 'Tanda Terima', 'true', '1');
INSERT INTO `cp_menudetail` VALUES ('7', 'Report', 'RCustomer', 'Report By Customer', 'true', '1');
INSERT INTO `cp_menudetail` VALUES ('8', 'Report', 'RByDate', 'Report By Date', 'true', '2');

-- ----------------------------
-- Table structure for `cp_user`
-- ----------------------------
DROP TABLE IF EXISTS `cp_user`;
CREATE TABLE `cp_user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `user_login` varchar(100) DEFAULT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `user_password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cp_user
-- ----------------------------
INSERT INTO `cp_user` VALUES ('1', 'admin', 'User', '0192023a7bbd73250516f069df18b500');
INSERT INTO `cp_user` VALUES ('2', 'fahmi', 'Fahmi Alfath', '41851c2c39e9729d51870dc74e098950');

-- ----------------------------
-- Table structure for `m_autonum`
-- ----------------------------
DROP TABLE IF EXISTS `m_autonum`;
CREATE TABLE `m_autonum` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `doc_num` int(10) DEFAULT NULL,
  `rec_num` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_autonum
-- ----------------------------
INSERT INTO `m_autonum` VALUES ('1', '88', '10');

-- ----------------------------
-- Table structure for `m_category`
-- ----------------------------
DROP TABLE IF EXISTS `m_category`;
CREATE TABLE `m_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_nama` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_category
-- ----------------------------
INSERT INTO `m_category` VALUES ('1', 'LABEL');
INSERT INTO `m_category` VALUES ('2', 'RIBBON');
INSERT INTO `m_category` VALUES ('3', 'STICKER');
INSERT INTO `m_category` VALUES ('4', 'HANG TAG');

-- ----------------------------
-- Table structure for `m_customer`
-- ----------------------------
DROP TABLE IF EXISTS `m_customer`;
CREATE TABLE `m_customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_nama` varchar(70) DEFAULT NULL,
  `customer_alamat` text,
  `customer_kota/kab` varchar(30) DEFAULT NULL,
  `customer_telp` varchar(20) DEFAULT NULL,
  `customer_cp` varchar(50) DEFAULT NULL,
  `customer_email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_customer
-- ----------------------------
INSERT INTO `m_customer` VALUES ('1', 'PT. PRATAMA ABADI INDUSTRI (JX)', '-', null, '-', '-', 'user@mail.com');
INSERT INTO `m_customer` VALUES ('2', 'PT. PZ CUSSON INDONESIA', 'Jl. Halim Perdana Kusumah No. 144 Kebon Besar', null, '02662525417', 'Sri Wahyuningsih', 'SriW@pzcusson.com');
INSERT INTO `m_customer` VALUES ('3', 'PT. TEST', 'TEST', null, '093278492749', 'ADMIN12213', 'admin@mail.com');
INSERT INTO `m_customer` VALUES ('4', 'qweiqpweipqwe', 'qweipqwoie', null, 'owieopqiweo', 'qoweiqopie', 'qweq@mail.com');
INSERT INTO `m_customer` VALUES ('5', 'asdasdas', 'asdasd', null, 'asdsad', 'asdsda', 'aasd@mail.com');

-- ----------------------------
-- Table structure for `m_item`
-- ----------------------------
DROP TABLE IF EXISTS `m_item`;
CREATE TABLE `m_item` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `item_kode` varchar(100) DEFAULT NULL,
  `item_nama` varchar(100) DEFAULT NULL,
  `item_category` varchar(50) DEFAULT NULL,
  `item_unit` varchar(50) DEFAULT NULL,
  `item_harga` int(10) DEFAULT NULL,
  `item_weight` decimal(8,6) DEFAULT NULL,
  `item_upp` int(10) DEFAULT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_item
-- ----------------------------
INSERT INTO `m_item` VALUES ('1', 'T01404801400', 'TRADE MARK STICKER \'AIR\' ORANGE', 'STICKER', 'PCS', '68', '0.001000', '5000');
INSERT INTO `m_item` VALUES ('2', 'T01404804500', 'TRADE MARK STICKER \'AIR\' RED', 'STICKER', 'PCS', '68', '0.001000', '5000');
INSERT INTO `m_item` VALUES ('3', 'T01503000000', 'CHINA INSERT CARD', 'LABEL', 'PCS', '350', '0.003000', '2000');
INSERT INTO `m_item` VALUES ('4', 'T01500100000', 'HANG TAG BRAZILE', 'HANG TAG', 'PCS', '352', '0.002000', '2000');
INSERT INTO `m_item` VALUES ('5', 'T01500800000', 'ARGENTINA & CHILE', 'STICKER', 'PCS', '297', '0.002000', '1000');
INSERT INTO `m_item` VALUES ('6', 'T01507700000', 'SOUTH AFRICA', 'HANG TAG', 'PCS', '143', '0.004000', '2500');
INSERT INTO `m_item` VALUES ('10', 'R0010412421', 'RIBBON WHITE RESIN', 'RIBBON', 'ROLL', '5000', '1.000000', '50');

-- ----------------------------
-- Table structure for `m_unit`
-- ----------------------------
DROP TABLE IF EXISTS `m_unit`;
CREATE TABLE `m_unit` (
  `unit_id` int(11) NOT NULL AUTO_INCREMENT,
  `unit_nama` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`unit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_unit
-- ----------------------------
INSERT INTO `m_unit` VALUES ('1', 'ROLL');
INSERT INTO `m_unit` VALUES ('2', 'PCS');

-- ----------------------------
-- Table structure for `tr_packinglist`
-- ----------------------------
DROP TABLE IF EXISTS `tr_packinglist`;
CREATE TABLE `tr_packinglist` (
  `transaksi_id` int(11) NOT NULL AUTO_INCREMENT,
  `transaksi_doc` varchar(30) DEFAULT NULL,
  `transaksi_date` date DEFAULT NULL,
  `transaksi_customer` varchar(10) DEFAULT NULL,
  `transaksi_supplier` varchar(50) DEFAULT NULL,
  `sys_create_user` varchar(50) DEFAULT NULL,
  `sys_create_date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `sys_update_user` varchar(50) DEFAULT NULL,
  `sys_update_date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`transaksi_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tr_packinglist
-- ----------------------------
INSERT INTO `tr_packinglist` VALUES ('21', '09.73/AP/PL/2017', '2017-09-30', '2', 'ALMINDO PRATAMA.CV', 'admin', null, null, null);
INSERT INTO `tr_packinglist` VALUES ('22', '10.74/AP/PL/2017', '2017-10-25', '1', 'ALMINDO PRATAMA.CV', 'admin', '2017-10-01 15:54:26', 'admin', '2017-10-01 15:54:26');
INSERT INTO `tr_packinglist` VALUES ('23', '10.75/AP/PL/2017', '2017-10-26', '3', 'ALMINDO PRATAMA.CV', 'admin', '2017-10-01 16:00:09', 'admin', '2017-10-01 16:00:09');
INSERT INTO `tr_packinglist` VALUES ('25', '10.77/AP/PL/2017', '2017-10-12', '2', 'ALMINDO PRATAMA.CV', 'admin', '2017-10-15 19:58:40', null, '2017-10-15 19:58:40');
INSERT INTO `tr_packinglist` VALUES ('30', '10.80/AP/PL/2017', '2017-10-12', '4', 'ALMINDO PRATAMA.CV', 'admin', '2017-10-15 19:58:50', null, '2017-10-15 19:58:50');
INSERT INTO `tr_packinglist` VALUES ('31', '10.83/AP/PL/2017', '2017-10-09', '1', 'ALMINDO PRATAMA.CV', 'admin', null, null, null);
INSERT INTO `tr_packinglist` VALUES ('32', '10.84/AP/PL/2017', '2017-10-15', '2', 'ALMINDO PRATAMA.CV', 'admin', null, null, null);
INSERT INTO `tr_packinglist` VALUES ('33', '10.85/AP/PL/2017', '2017-10-28', '3', 'ALMINDO PRATAMA.CV', 'admin', null, null, null);
INSERT INTO `tr_packinglist` VALUES ('34', '10.86/AP/PL/2017', '2017-10-14', '2', 'ALMINDO PRATAMA.CV', 'admin', null, null, null);
INSERT INTO `tr_packinglist` VALUES ('35', '10.87/AP/PL/2017', '2017-10-08', '1', 'ALMINDO PRATAMA.CV', 'admin', null, null, null);

-- ----------------------------
-- Table structure for `tr_packinglist_detail`
-- ----------------------------
DROP TABLE IF EXISTS `tr_packinglist_detail`;
CREATE TABLE `tr_packinglist_detail` (
  `trdetail_id` int(11) NOT NULL AUTO_INCREMENT,
  `trdetail_doc` varchar(50) DEFAULT NULL,
  `trdetail_item` varchar(100) DEFAULT NULL,
  `trdetail_po` varchar(50) DEFAULT NULL,
  `trdetail_date` date DEFAULT NULL,
  `trdetail_sjap` varchar(50) DEFAULT NULL,
  `trdetail_qty` int(10) DEFAULT NULL,
  `trdetail_unit` varchar(10) DEFAULT NULL,
  `trdetail_price` int(10) DEFAULT NULL,
  `trdetail_amount` int(10) DEFAULT NULL,
  `trdetail_weight` double(11,0) DEFAULT NULL,
  `trdetail_pack` int(11) DEFAULT NULL,
  `sys_create_user` varchar(50) DEFAULT NULL,
  `sys_create_date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `sys_update_user` varchar(50) DEFAULT NULL,
  `sys_update_date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`trdetail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tr_packinglist_detail
-- ----------------------------
INSERT INTO `tr_packinglist_detail` VALUES ('50', '09.73/AP/PL/2017', '2', '-', '2017-09-29', '-', '1', 'PCS', '68', '68', '0', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('56', '10.74/AP/PL/2017', '5', '1213213', '2017-10-25', '12213', '2', 'PCS', '297', '594', '0', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('58', '10.75/AP/PL/2017', '2', '12', '2017-10-26', '12', '100', 'PCS', '68', '6800', '0', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('60', '10.77/AP/PL/2017', '5', '0510', '2017-10-10', 'SJAP12', '10000', 'PCS', '297', '2970000', '20', '10', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('61', '10.77/AP/PL/2017', '4', '0510', '2017-10-10', 'SJAP12', '10000', 'PCS', '352', '3520000', '20', '5', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('64', '10.80/AP/PL/2017', '5', '-', '2017-10-12', '-', '1', 'PCS', '297', '297', '0', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('65', '10.83/AP/PL/2017', '6', '-', '2017-10-17', '-', '1', 'PCS', '143', '143', '0', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('66', '10.84/AP/PL/2017', '4', '-', '2017-10-17', '-', '1', 'PCS', '352', '352', '0', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('67', '10.85/AP/PL/2017', '5', '-', '2017-10-17', '-', '1', 'PCS', '297', '297', '0', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('68', '10.86/AP/PL/2017', '3', '-', '2017-10-17', '-', '1', 'PCS', '350', '350', '0', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('69', '10.87/AP/PL/2017', '6', '-', '2017-10-17', '-', '1', 'PCS', '143', '143', '0', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('70', '10.87/AP/PL/2017', '3', '-', '2017-10-17', '-', '1', 'PCS', '350', '350', '0', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('71', '10.87/AP/PL/2017', '2', '-', '2017-10-17', '-', '1', 'PCS', '68', '68', '0', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('72', '10.87/AP/PL/2017', '1', '-', '2017-10-17', '-', '1', 'PCS', '68', '68', '0', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('73', '10.87/AP/PL/2017', '10', '-', '2017-10-17', '-', '1', 'ROLL', '5000', '5000', '1', '1', null, null, null, null);
INSERT INTO `tr_packinglist_detail` VALUES ('74', '10.87/AP/PL/2017', '4', '-', '2017-10-17', '-', '1', 'PCS', '352', '352', '0', '1', null, null, null, null);

-- ----------------------------
-- Table structure for `tr_receipt`
-- ----------------------------
DROP TABLE IF EXISTS `tr_receipt`;
CREATE TABLE `tr_receipt` (
  `receipt_id` int(10) NOT NULL AUTO_INCREMENT,
  `receipt_doc` varchar(50) DEFAULT NULL,
  `receipt_from` varchar(50) DEFAULT NULL,
  `receipt_to` varchar(50) DEFAULT NULL,
  `receipt_date` date DEFAULT NULL,
  `sys_create_date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `sys_create_user` varchar(50) DEFAULT NULL,
  `sys_update_date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `sys_update_user` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`receipt_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tr_receipt
-- ----------------------------
INSERT INTO `tr_receipt` VALUES ('1', 'REC3', 'CV. ALMINDO PRATAMA', '1', '2017-09-14', '2017-09-15 15:38:41', 'admin', '2017-09-15 15:38:41', 'admin');
INSERT INTO `tr_receipt` VALUES ('2', '09.0004/AP/TT/2017', 'CV. ALMINDO PRATAMA', '1', '2017-09-14', '2017-09-15 15:38:43', 'admin', '2017-09-15 15:38:43', 'admin');
INSERT INTO `tr_receipt` VALUES ('3', '09.0005/AP/TT/2017', 'CV. ALMINDO PRATAMA', '2', '2017-09-18', null, 'admin', null, null);
INSERT INTO `tr_receipt` VALUES ('4', '10.0006/AP/TT/2017', 'CV. ALMINDO PRATAMA', '2', '2017-10-01', '2017-10-01 20:43:04', 'admin', '2017-10-01 20:43:04', 'admin');
INSERT INTO `tr_receipt` VALUES ('5', '10.0007/AP/TT/2017', 'CV. ALMINDO PRATAMA', '3', '2017-10-12', null, 'admin', null, null);
INSERT INTO `tr_receipt` VALUES ('6', '10.0007/AP/TT/2017', 'CV. ALMINDO PRATAMA', '2', '2017-10-12', null, 'admin', null, null);
INSERT INTO `tr_receipt` VALUES ('10', '10.0008/AP/TT/2017', 'CV. ALMINDO PRATAMA', '3', '2017-10-12', null, 'admin', null, null);
INSERT INTO `tr_receipt` VALUES ('12', '10.0009/AP/TT/2017', 'CV. ALMINDO PRATAMA', '2', '2017-10-12', null, 'admin', null, null);

-- ----------------------------
-- Table structure for `tr_receipt_detail`
-- ----------------------------
DROP TABLE IF EXISTS `tr_receipt_detail`;
CREATE TABLE `tr_receipt_detail` (
  `recdetail_id` int(11) NOT NULL AUTO_INCREMENT,
  `recdetail_doc` varchar(50) DEFAULT NULL,
  `recdetail_invoice` varchar(100) DEFAULT NULL,
  `recdetail_delivery` varchar(100) DEFAULT NULL,
  `recdetail_po` varchar(100) DEFAULT NULL,
  `recdetail_date` varchar(50) DEFAULT NULL,
  `recdetail_price` int(11) DEFAULT NULL,
  PRIMARY KEY (`recdetail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tr_receipt_detail
-- ----------------------------
INSERT INTO `tr_receipt_detail` VALUES ('3', 'REC3', 'INV.001', 'SJAP.001', 'PO001', '02 AUG 2017', '15000000');
INSERT INTO `tr_receipt_detail` VALUES ('4', 'REC3', 'INV.002', 'SJAP.002', 'PO002', '03 AUG 2017', '20000000');
INSERT INTO `tr_receipt_detail` VALUES ('6', '09.0004/AP/TT/2017', 'INV.001', 'SJ.001', 'PO001', '10 MARET 2017', '100000000');
INSERT INTO `tr_receipt_detail` VALUES ('7', '09.0004/AP/TT/2017', 'INV.002', 'SJ.002', 'PO001', '10 OCT 2017', '10000000');
INSERT INTO `tr_receipt_detail` VALUES ('8', '09.0005/AP/TT/2017', '-213123', '-123123', '-213123', '12JUNE', '213213');
INSERT INTO `tr_receipt_detail` VALUES ('10', '10.0006/AP/TT/2017', 'PO12', 'KIKI', 'opopo', '10 OCT 2011', '100000');
INSERT INTO `tr_receipt_detail` VALUES ('11', '10.0007/AP/TT/2017', '-asdsad', '-asdasd', '-asdas', '-asdas', '0');
INSERT INTO `tr_receipt_detail` VALUES ('13', '10.0008/AP/TT/2017', '-12313', '-123123', '-', '-', '0');
INSERT INTO `tr_receipt_detail` VALUES ('14', '10.0009/AP/TT/2017', '-12213', '-21321', '-123213', '-123213', '0');
