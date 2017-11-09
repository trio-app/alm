<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Umunit extends CI_Model {

    function updateDT($dtrows){
                    $this->load->database();
                    $data = array(
                            'unit_nama' => $dtrows['unit_nama']
                    );
                    $this->db->where('unit_id', $dtrows['unit_id']);
                    $this->db->update('m_unit', $data);

                }
    
}
