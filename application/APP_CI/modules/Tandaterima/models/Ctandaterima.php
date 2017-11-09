<?php

defined('BASEPATH') OR exit('No direct script access allowed');



class Ctandaterima extends CI_Model {



function insertDT($dtrows)

            {

                $this->load->database();

                $data = array(

                        'receipt_doc' => $dtrows['receipt_doc'],

                        'receipt_date' => $dtrows['receipt_date'],

                        'receipt_from' => $dtrows['receipt_from'],

                        'receipt_to' => $dtrows['customer_id'],

                        'sys_create_user' => $this->session->userdata('user_login'),

                );



                $this->db->insert('tr_receipt', $data);

                return $dtrows['receipt_doc'];

            }

            

function insertGrid($dtrows,$num){

                $result = array();

                

                foreach ($dtrows as $key => $value){

                    $result[] = array(

                        'recdetail_doc' => $num,

                        'recdetail_invoice' => $value['recdetail_invoice'],

                        'recdetail_delivery' => $value['recdetail_delivery'],

                        'recdetail_po'=> $value['recdetail_po'],

                        'recdetail_date'=> $value['recdetail_date'],

                        'recdetail_price'=> $value['recdetail_price'],

                    );

                };

    

                $this->load->database();

                $this->db->insert_batch('tr_receipt_detail', $result);  



    

}



            

function autoNum(){

                $this->load->database();

                $this->db->set('rec_num', 'rec_num+1', FALSE);

                $this->db->where('id', 1);

                $this->db->update('m_autonum');

}

}

