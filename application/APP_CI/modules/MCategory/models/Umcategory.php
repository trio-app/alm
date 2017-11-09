<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Umcategory extends CI_Model {

    function updateDT($dtrows){
                    $this->load->database();
                    $data = array(
                            'category_nama' => $dtrows['category_nama']
                    );
                    $this->db->where('category_id', $dtrows['category_id']);
                    $this->db->update('m_category', $data);

                }
    
}
