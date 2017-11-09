<?php

defined('BASEPATH') OR exit('No direct script access allowed');



class Rtandaterimaout extends CI_Model {

        

        function autoNum(){

            $this->load->database();

            $this->db->select(' SQL_CALC_FOUND_ROWS m_autonum.*

                            ',FALSE);

            $this->db->from('m_autonum');

            $query = $this->db->get();

            $row = $query->row();

            

            return $row->recout_num;

        }

        

        function getGrid($data){

            $this->load->database();

            $this->db->select(' tr_receiptout_detail.*

                            ',FALSE);

            //$this->db->select('item_id as trdetailitem_id', FALSE );

            //$this->db->select('CONCAT(item_kode," - ", item_nama) as trdetail_item', FALSE);

            //$this->db->select('item_upp as trdetail_upp', FALSE);

            //$this->db->select('item_weight as trdetail_weight', FALSE);

            //$this->db->join('m_item', 'm_item.item_id = tr_packinglist_detail.trdetail_item', 'LEFT');

            $this->db->from('tr_receiptout_detail');

            $this->db->where('recdetailout_doc', $data);

            $query = $this->db->get();

            $rows = $query->result_array();

            return json_encode($rows);            

        }        

        function reportPreview($id){

            $this->load->database();

            $this->db->select(' tr_receiptout.*, m_customer.*

                            ',FALSE);

            $this->db->from('tr_receiptout');

            $this->db->join('m_customer', 'm_customer.customer_id = tr_receiptout.receiptout_to', 'INNER');

            $this->db->where('receiptout_id', $id);

            $query = $this->db->get();

            $rows = $query->result_array();

            return $rows[0];            

        }
        
        function reportDetail($id){

            $this->load->database();

            $this->db->select('tr_receiptout_detail.*

                            ',FALSE);

            $this->db->from('tr_receiptout_detail');

            $this->db->where('recdetailout_doc', $id);

            $query = $this->db->get();

            $rows = $query->result_array();

            return $rows;  

        }

        function load_default($start,$limit,$filter){

            $dtfilter = json_decode($filter,true);



            $this->load->database();

            $this->db->select(' SQL_CALC_FOUND_ROWS tr_receiptout.*, m_customer.*

                            ',FALSE);

            $this->db->from('tr_receiptout');

            $this->db->join('m_customer', 'm_customer.customer_id = tr_receiptout.receiptout_to', 'INNER');

            $this->db->where("tr_receiptout.receiptout_id <>", 0);

            $this->db->like('tr_receiptout.receiptout_doc',$dtfilter[0]['value']);
            
            $this->db->or_like('m_customer.customer_nama',$dtfilter[0]['value']);
            
            $this->db->or_like('tr_receiptout.receiptout_date',$dtfilter[0]['value']);

            $this->db->limit($limit,$start);

            $this->db->order_by("tr_receiptout.receiptout_id","DESC");

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

        function load_customerTTO($start,$limit,$filter){
           $dtfilter = json_decode($filter,true);

            $this->load->database();
            $this->db->select(' SQL_CALC_FOUND_ROWS m_customer.*
                            ',FALSE);
            $this->db->from('m_customer');
            $this->db->where("m_customer.customer_id <>", 0);
            $this->db->like('m_customer.customer_nama',$dtfilter[0]['value']);   
            $this->db->limit($limit,$start);
            $this->db->order_by("m_customer.customer_nama","ASC");
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