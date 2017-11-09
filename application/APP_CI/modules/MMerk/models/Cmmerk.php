<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cmmerk extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'merk_nama' => $dtrows['merk_nama']
                );

                $this->db->insert('m_merk', $data);
                
            }
    
}
