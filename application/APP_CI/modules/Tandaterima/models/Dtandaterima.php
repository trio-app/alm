<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dtandaterima extends CI_Model {

function deleteDT($dtrows)
            {
            
                $this->deleteGrid($dtrows['receipt_doc']);
    
                $this->load->database();
                $this->db->where('receipt_id', $dtrows['receipt_id']);
                return $this->db->delete('tr_receipt');
            }
            
function deleteGrid($gridDoc){
    $this->load->database();
    $this->db->where('recdetail_doc',$gridDoc);
    return $this->db->delete('tr_receipt_detail');
}
    
}
