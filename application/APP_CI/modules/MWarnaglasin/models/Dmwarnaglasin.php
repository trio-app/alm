<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dmwarnaglasin extends CI_Model {

function deleteDT($dtrows)
            {
                $this->load->database();
                $this->db->where('warnaglasin_id', $dtrows['warnaglasin_id']);
                return $this->db->delete('m_warnaglasin');
                
            }
    
}
