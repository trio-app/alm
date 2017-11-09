<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cmwarnaglasin extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'warnaglasin_nama' => $dtrows['warnaglasin_nama']
                );

                $this->db->insert('m_warnaglasin', $data);
                
            }
    
}
