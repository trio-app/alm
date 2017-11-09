<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dmitem extends CI_Model {

function deleteDT($dtrows)
            {
                $this->load->database();
                $this->db->where('item_id', $dtrows['item_id']);
                return $this->db->delete('m_item');
                
            }
    
}
