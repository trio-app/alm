<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dmmerk extends CI_Model {

function deleteDT($dtrows)
            {
                $this->load->database();
                $this->db->where('merk_id', $dtrows['merk_id']);
                return $this->db->delete('m_merk');
                
            }
    
}
