<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dmjbahan extends CI_Model {

function deleteDT($dtrows)
            {
                $this->load->database();
                $this->db->where('jbahan_id', $dtrows['jbahan_id']);
                return $this->db->delete('m_jbahan');
                
            }
    
}
