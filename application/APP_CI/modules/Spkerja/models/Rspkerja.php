<?php

defined('BASEPATH') OR exit('No direct script access allowed');



class Rspkerja extends CI_Model {

        

        function autoNum(){

            $this->load->database();

            $this->db->select(' SQL_CALC_FOUND_ROWS m_autonum.*

                            ',FALSE);

            $this->db->from('m_autonum');

            $query = $this->db->get();

            $row = $query->row();

            

            return $row->spk_num;

        }

        function load_customerSPK($start,$limit,$filter){
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
        
        function load_bahanitemSPK($start,$limit,$filter){
           $dtfilter = json_decode($filter,true);

            $this->load->database();
            $this->db->select(' SQL_CALC_FOUND_ROWS m_bahan.*
                            ',FALSE);
            $this->db->from('m_bahan');
            $this->db->where("m_bahan.bahan_id <>", 0);
            $this->db->like('m_bahan.bahan_nama',$dtfilter[0]['value']);
            $this->db->or_like('m_bahan.bahan_jenis', $dtfilter[0]['value']);
            $this->db->or_like('m_bahan.bahan_ukuranP', $dtfilter[0]['value']);
            $this->db->or_like('m_bahan.bahan_ukuranL', $dtfilter[0]['value']);
            $this->db->limit($limit,$start);
            $this->db->order_by("m_bahan.bahan_id","ASC");
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

            $this->db->select(' SQL_CALC_FOUND_ROWS tr_spk.*, m_customer.*

                            ',FALSE);

            $this->db->from('tr_spk');

            $this->db->join('m_customer', 'm_customer.customer_id = tr_spk.spk_customer', 'INNER');

            $this->db->where("tr_spk.spk_id<>", 0);

            $this->db->like('tr_spk.spk_doc',$dtfilter[0]['value']);
            
            $this->db->or_like('m_customer.customer_nama',$dtfilter[0]['value']);
            
            $this->db->or_like('tr_spk.spk_date',$dtfilter[0]['value']);
            
            $this->db->or_like('tr_spk.spk_bahannama',$dtfilter[0]['value']);
            
            $this->db->or_like('tr_spk.spk_doc',$dtfilter[0]['value']);

            $this->db->limit($limit,$start);

            $this->db->order_by("tr_spk.spk_id","DESC");

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
        
        function reportPreview($id){

            $this->load->database();

            $this->db->select(' tr_spk.*, m_customer.*

                            ',FALSE);

            $this->db->from('tr_spk');

            $this->db->join('m_customer', 'm_customer.customer_id = tr_spk.spk_customer', 'INNER');

            $this->db->where('spk_id', $id);

            $query = $this->db->get();

            $rows = $query->result_array();

            return $rows[0];            

        }

}

