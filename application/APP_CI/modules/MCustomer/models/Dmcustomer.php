<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dmcustomer extends CI_Model {

function deleteDT($dtrows)
            {
                $this->load->database();
                $this->db->where('customer_id', $dtrows['customer_id']);
                return $this->db->delete('m_customer');
                
            }
    
}
