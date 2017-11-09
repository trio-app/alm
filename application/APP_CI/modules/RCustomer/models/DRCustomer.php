<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class DRCustomer extends CI_Model {

function deleteDT($dtrows)
            {
            
                $this->deleteGrid($dtrows['transaksi_doc']);
    
                $this->load->database();
                $this->db->where('transaksi_id', $dtrows['transaksi_id']);
                return $this->db->delete('tr_packinglist');
            }
            
function deleteGrid($gridDoc){
    $this->load->database();
    $this->db->where('trdetail_doc',$gridDoc);
    return $this->db->delete('tr_packinglist_detail');
}
    
}
