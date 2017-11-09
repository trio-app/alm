<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Utandaterima extends CI_Model {

    function updateDT($dtrows){
                    $this->load->database();
                $data = array(
                        'receipt_to' => $dtrows['customer_id'],
                        'receipt_date' => $dtrows['receipt_date'],
                        'sys_update_user' => $this->session->userdata('user_login'),
                );
                    $this->db->where('receipt_doc', $dtrows['receipt_doc']);
                    $this->db->update('tr_receipt', $data);
                    return $dtrows['receipt_doc'];

                }
                
function updateGrid($dtrows,$num){
                $result = array();
                
                foreach ($dtrows as $key => $value){
                    

                $this->deleteOld($value['recdetail_doc']);                    
                    
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

function deleteOld($id){
    
                $this->load->database();
                $this->db->where('recdetail_doc', $id);
                return $this->db->delete('tr_receipt_detail');    
}
    
}
