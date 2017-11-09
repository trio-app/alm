<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Rpackinglist extends CI_Model {
        
        function autoNum(){
            $this->load->database();
            $this->db->select(' SQL_CALC_FOUND_ROWS m_autonum.*
                            ',FALSE);
            $this->db->from('m_autonum');
            $query = $this->db->get();
            $row = $query->row();
            
            return $row->doc_num;
        }
        
        function getGrid($data){
            $this->load->database();
            $this->db->select(' tr_packinglist_detail.*
                            ',FALSE);
            $this->db->select('item_id as trdetailitem_id', FALSE );
            $this->db->select('CONCAT(item_kode," - ", item_nama) as trdetail_item', FALSE);
            $this->db->select('item_upp as trdetail_upp', FALSE);
            $this->db->select('item_weight as trdetail_weight', FALSE);
            $this->db->join('m_item', 'm_item.item_id = tr_packinglist_detail.trdetail_item', 'LEFT');
            $this->db->from('tr_packinglist_detail');
            $this->db->where('trdetail_doc', $data);
            $query = $this->db->get();
            $rows = $query->result_array();
            return json_encode($rows);            
        }
        
        
        function reportPreview($id){
            $this->load->database();
            $this->db->select(' tr_packinglist.*, tr_packinglist_detail.*, m_customer.*
                            ',FALSE);
            $this->db->join('tr_packinglist_detail', 'tr_packinglist_detail.trdetail_doc = tr_packinglist.transaksi_doc', 'LEFT');
            $this->db->join('m_customer', 'm_customer.customer_id = tr_packinglist.transaksi_customer', 'LEFT');
            $this->db->from('tr_packinglist');
            $this->db->where('transaksi_id', $id);
            $query = $this->db->get();
            $rows = $query->result_array();
            return $rows[0];            
        }     
        
        function reportDetail($id){
            $this->load->database();
            $this->db->select('tr_packinglist_detail.*, m_item.*
                            ',FALSE);
            $this->db->join('m_item', 'm_item.item_id = tr_packinglist_detail.trdetail_item', 'LEFT');
            $this->db->from('tr_packinglist_detail');
            $this->db->where('trdetail_doc', $id);
            $query = $this->db->get();
            $rows = $query->result_array();
            return $rows;  
        }
        
        function load_customer($start,$limit,$filter){
           $dtfilter = json_decode($filter,true);

            $this->load->database();
            $this->db->select(' SQL_CALC_FOUND_ROWS m_customer.*
                            ',FALSE);
            $this->db->from('m_customer');
            $this->db->where("m_customer.customer_id <>", 0);
            $this->db->like('m_customer.customer_nama',$dtfilter[0]['value']);   
            $this->db->limit($limit,$start);
            $this->db->order_by("m_customer.customer_id","DESC");
            $query = $this->db->get();
                            //return $db->last_query();
            $rows = $query->result_array();


            $query2 = $this->db->query('SELECT FOUND_ROWS() AS hasil');
            $count = $query2->row('hasil');

            $data = array(
                        'TotalRows' => $count,
                            'Rows' => $rows
                         );
            return json_encode($data);            
        }
        
        function load_item($start,$limit,$filter){
           $dtfilter = json_decode($filter,true);

            $this->load->database();
            $this->db->select(' SQL_CALC_FOUND_ROWS m_item.*
                            ',FALSE);
            $this->db->from('m_item');
            $this->db->where("m_item.item_id <>", 0);
            $this->db->like('m_item.item_kode',$dtfilter[0]['value']);   
            $this->db->or_like('m_item.item_nama',$dtfilter[0]['value']);   
            $this->db->limit($limit,$start);
            $this->db->order_by("m_item.item_id","DESC");
            $query = $this->db->get();
                            //return $db->last_query();
            $rows = $query->result_array();


            $query2 = $this->db->query('SELECT FOUND_ROWS() AS hasil');
            $count = $query2->row('hasil');

            $data = array(
                        'TotalRows' => $count,
                            'Rows' => $rows
                         );
            return json_encode($data);            
        }        
    
        function load_default($start,$limit,$filter){
            $dtfilter = json_decode($filter,true);

            $this->load->database();
            $this->db->select(' SQL_CALC_FOUND_ROWS tr_packinglist.*, m_customer.*
                            ',FALSE);
            $this->db->from('tr_packinglist');
            $this->db->join('m_customer', 'm_customer.customer_id = tr_packinglist.transaksi_customer', 'LEFT');
            $this->db->where("tr_packinglist.transaksi_id <>", 0);
            $this->db->like('tr_packinglist.transaksi_doc',$dtfilter[0]['value']);   
            $this->db->limit($limit,$start);
            $this->db->order_by("tr_packinglist.transaksi_id","DESC");
            $query = $this->db->get();
                            //return $db->last_query();
            $rows = $query->result_array();


            $query2 = $this->db->query('SELECT FOUND_ROWS() AS hasil');
            $count = $query2->row('hasil');

            $data = array(
                        'TotalRows' => $count,
                            'Rows' => $rows
                         );
            return json_encode($data);   

        }
}
