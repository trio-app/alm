<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dmunit extends CI_Model {

function deleteDT($dtrows)
            {
                $this->load->database();
                $this->db->where('unit_id', $dtrows['unit_id']);
                return $this->db->delete('m_unit');
                
            }
    
}
