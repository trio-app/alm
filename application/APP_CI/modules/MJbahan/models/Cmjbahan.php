<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cmjbahan extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'jbahan_nama' => $dtrows['jbahan_nama']
                );

                $this->db->insert('m_jbahan', $data);
                
            }
    
}
