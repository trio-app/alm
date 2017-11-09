<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Utandaterimaout extends CI_Model {

    function updateDT($dtrows){
                    $this->load->database();
                $data = array(
                        'receiptout_to' => $dtrows['customer_id'],
                        'receiptout_date' => $dtrows['receiptout_date'],
                        'sys_update_user' => $this->session->userdata('user_login'),
                );
                    $this->db->where('receiptout_doc', $dtrows['receiptout_doc']);
                    $this->db->update('tr_receiptout', $data);
                    return $dtrows['receiptout_doc'];

                }
                
function updateGrid($dtrows,$num){
                $result = array();
                
                foreach ($dtrows as $key => $value){
                    

                $this->deleteOld($value['recdetailout_doc']);                    
                    
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

function deleteOld($id){
    
                $this->load->database();
                $this->db->where('recdetailout_doc', $id);
                return $this->db->delete('tr_receiptout_detail');    
}
    
}
