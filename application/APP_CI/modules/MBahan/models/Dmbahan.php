<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dmbahan extends CI_Model {

function deleteDT($dtrows)
            {
                $this->load->database();
                $this->db->where('bahan_id', $dtrows['bahan_id']);
                return $this->db->delete('m_bahan');
                
            }
    
}
