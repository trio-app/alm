<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dtandaterimaout extends CI_Model {

function deleteDT($dtrows)
            {
            
                $this->deleteGrid($dtrows['receiptout_doc']);
    
                $this->load->database();
                $this->db->where('receiptout_id', $dtrows['receiptout_id']);
                return $this->db->delete('tr_receiptout');
            }
            
function deleteGrid($gridDoc){
    $this->load->database();
    $this->db->where('recdetailout_doc',$gridDoc);
    return $this->db->delete('tr_receiptout_detail');
}
    
}
