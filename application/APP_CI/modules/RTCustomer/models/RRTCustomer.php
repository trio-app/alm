<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class RRTCustomer extends CI_Model {
    
function load_default($start,$limit,$filter){
    $dtfilter = json_decode($filter,true);
    
    $customer=$dtfilter[0]['value']['customer_nama'];
    
    $this->load->database();
    $sql = " SELECT SQL_CALC_FOUND_ROWS
                                    tr_receipt.receipt_id,
                                    tr_receipt.receipt_doc,
                                    tr_receipt.receipt_from,
                                    tr_receipt.receipt_to,
                                    tr_receipt.receipt_date,
                                    m_customer.customer_id,
                                    m_customer.customer_nama,
                                    m_customer.customer_alamat,
                                    m_customer.`customer_kota/kab`,
                                    m_customer.customer_telp,
                                    m_customer.customer_cp,
                                    tr_receipt_detail.recdetail_doc,
                                    SUM(tr_receipt_detail.recdetail_price) AS Price
                                    FROM
                                    tr_receipt_detail
                                    INNER JOIN tr_receipt ON tr_receipt.receipt_doc = tr_receipt_detail.recdetail_doc
                                    INNER JOIN m_customer ON tr_receipt.receipt_to = m_customer.customer_id
                                    WHERE customer_nama LIKE '".$customer."' Group by tr_receipt_detail.recdetail_doc ORDER BY receipt_id ASC 
                                    ";
    
    $query = $this->db->query($sql);
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

        function getGrid($data){
            $this->load->database();
            $this->db->select(' tr_receipt_detail.*
                            ',FALSE);
            $this->db->join('tr_receipt', 'tr_receipt.receipt_doc= tr_receipt_detail.recdetail_doc', 'LEFT');
            $this->db->from('tr_receipt_detail');
            $this->db->where('tr_receipt_detail.recdetail_doc', $data);
            $this->db->order_by('recdetail_date', 'DESC');
            $query = $this->db->get();
            $rows = $query->result_array();
            return json_encode($rows);            
        }
        
       function exportTransaksi($data){
        $this->load->database();
        $this->db->select(' SQL_CALC_FOUND_ROWS  m_customer.*,tr_packinglist.*
                                ',FALSE);
        $this->db->from('tr_packinglist');
        $this->db->join('m_customer', 'm_customer.customer_id = tr_packinglist.transaksi_customer', 'LEFT');
        $this->db->where("tr_packinglist.transaksi_id <>", 0);
        $this->db->where('tr_packinglist.transaksi_doc', $data);
        //$this->db->like('tr_inbound.mat_sapcode',$dtfilter[0]['value']); 
        //$this->db->or_like('tr_inbound.mat_sapname',$dtfilter[0]['value']); 
        //$this->db->or_like('tr_inbound.mat_sku',$dtfilter[0]['value
        $this->db->order_by("tr_packinglist.transaksi_id","DESC");
        $query = $this->db->get();
                        //return $db->last_query();
         return $query->result_array();     

        }
        
        function exportDetail($data){
            $this->load->database();
            $this->db->select(' SQL_CALC_FOUND_ROWS  tr_packinglist_detail.*
                                    ',FALSE);
            $this->db->from('tr_packinglist_detail');
            //$this->db->join('m_customer', 'm_customer.customer_id = tr_packinglist.transaksi_customer', 'LEFT');
            $this->db->where("tr_packinglist_detail.trdetail_id <>", 0);
            $this->db->where('tr_packinglist_detail.trdetail_doc', $data);
            //$this->db->like('tr_inbound.mat_sapcode',$dtfilter[0]['value']); 
            //$this->db->or_like('tr_inbound.mat_sapname',$dtfilter[0]['value']); 
            //$this->db->or_like('tr_inbound.mat_sku',$dtfilter[0]['value
            $this->db->order_by("tr_packinglist_detail.trdetail_id","DESC");
            $query = $this->db->get();
                            //return $db->last_query();
             return $query->result_array();     

        }

}
