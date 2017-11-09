<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cmcategory extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'category_nama' => $dtrows['category_nama']
                );

                $this->db->insert('m_category', $data);
                
            }
    
}
