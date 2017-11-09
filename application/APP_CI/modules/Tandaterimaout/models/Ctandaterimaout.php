<?php

defined('BASEPATH') OR exit('No direct script access allowed');



class Ctandaterimaout extends CI_Model {



function insertDT($dtrows)

            {

                $this->load->database();

                $data = array(

                        'receiptout_doc' => $dtrows['receiptout_doc'],

                        'receiptout_date' => $dtrows['receiptout_date'],

                        'receiptout_from' => $dtrows['receiptout_from'],

                        'receiptout_to' => $dtrows['customer_id'],

                        'sys_create_user' => $this->session->userdata('user_login'),

                );



                $this->db->insert('tr_receiptout', $data);

                return $dtrows['receiptout_doc'];

            }

            

function insertGrid($dtrows,$num){

                $result = array();

                

                foreach ($dtrows as $key => $value){

                    $result[] = array(

                        'recdetailout_doc' => $num,

                        'recdetailout_invoice' => $value['recdetailout_invoice'],

                        'recdetailout_delivery' => $value['recdetailout_delivery'],

                        'recdetailout_po'=> $value['recdetailout_po'],

                        'recdetailout_date'=> $value['recdetailout_date'],

                        'recdetailout_price'=> $value['recdetailout_price'],

                    );

                };

    

                $this->load->database();

                $this->db->insert_batch('tr_receiptout_detail', $result);  



    

}



            

function autoNum(){

                $this->load->database();

                $this->db->set('recout_num', 'recout_num+1', FALSE);

                $this->db->where('id', 1);

                $this->db->update('m_autonum');

}

}

