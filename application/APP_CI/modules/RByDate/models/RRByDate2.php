<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class RRByDate extends CI_Model {
        
        function load_default($start,$limit,$filter){
             $dtfilter = json_decode($filter,true);
        $from_date =$dtfilter[0]['value']['from_date'];
        $to_date=$dtfilter[0]['value']['to_date'];
                $this->load->database();
                $sql = "SELECT SQL_CALC_FOUND_ROWS
                                    tr_packinglist.transaksi_id,
                                    tr_packinglist.transaksi_doc,
                                    tr_packinglist.transaksi_date,
                                    tr_packinglist.transaksi_customer,
                                    tr_packinglist.transaksi_supplier,
                                    m_customer.customer_id,
                                    m_customer.customer_nama,
                                    m_customer.customer_alamat,
                                    m_customer.customer_telp,
                                    m_customer.customer_cp,
                                    m_customer.customer_email,
                                    tr_packinglist_detail.trdetail_doc,
                                    tr_packinglist_detail.trdetail_amount
                                    FROM
                                    tr_packinglist
                                    INNER JOIN m_customer ON tr_packinglist.transaksi_customer = m_customer.customer_id
                                    INNER JOIN tr_packinglist_detail ON tr_packinglist.transaksi_doc = tr_packinglist_detail.trdetail_doc
                                    WHERE transaksi_date BETWEEN '".$from_date."' AND '".$to_date."' order by tr_packinglist.transaksi_date ASC 
                                    
                                    ";
                $query = $this->db->query($sql);
                                //return $this->db->last_query();
                $rows = $query->result_array();


                $query2 = $this->db->query('SELECT FOUND_ROWS() AS hasil');
                $count = $query2->row('hasil');

                $data = array(
                            'TotalRows' => $count,
                                'Rows' => $rows
                             );
                return json_encode($data);   
        }
        
        function getGrid($data){
            $this->load->database();
            $this->db->select(' tr_packinglist_detail.*
                            ',FALSE);
            $this->db->select('m_item.item_nama');
            $this->db->join('m_item', 'm_item.item_id = tr_packinglist_detail.trdetail_item', 'LEFT');
            $this->db->join('tr_packinglist', 'tr_packinglist.transaksi_doc = tr_packinglist_detail.trdetail_doc', 'LEFT');
            $this->db->from('tr_packinglist_detail');
            $this->db->where('tr_packinglist_detail.trdetail_doc', $data);
            $this->db->order_by('trdetail_date', 'DESC');
            $query = $this->db->get();
            $rows = $query->result_array();
            return json_encode($rows);       
        }
        function exportTransaksi(){
        $this->load->database();
        $this->db->select(' SQL_CALC_FOUND_ROWS  m_customer.*,tr_packinglist.*
                                ',FALSE);
        $this->db->from('tr_packinglist');
        $this->db->join('m_customer', 'm_customer.customer_id = tr_packinglist.transaksi_customer', 'LEFT');
        $this->db->where("tr_packinglist.transaksi_id <>", 0);
        //$this->db->like('tr_inbound.mat_sapcode',$dtfilter[0]['value']); 
        //$this->db->or_like('tr_inbound.mat_sapname',$dtfilter[0]['value']); 
        //$this->db->or_like('tr_inbound.mat_sku',$dtfilter[0]['value
        $this->db->order_by("tr_packinglist.transaksi_id","DESC");
        $query = $this->db->get();
                        //return $db->last_query();
         return $query->result_array();     

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
        
    }
         
        
