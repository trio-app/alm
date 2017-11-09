<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dmcategory extends CI_Model {

function deleteDT($dtrows)
            {
                $this->load->database();
                $this->db->where('category_id', $dtrows['category_id']);
                return $this->db->delete('m_category');
                
            }
    
}
