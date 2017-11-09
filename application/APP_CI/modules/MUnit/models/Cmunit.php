<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cmunit extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'unit_nama' => $dtrows['unit_nama']
                );

                $this->db->insert('m_unit', $data);
                
            }
    
}
