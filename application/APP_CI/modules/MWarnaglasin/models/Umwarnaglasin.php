<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Umwarnaglasin extends CI_Model {

    function updateDT($dtrows){
                    $this->load->database();
                    $data = array(
                            'warnaglasin_nama' => $dtrows['warnaglasin_nama']
                    );
                    $this->db->where('warnaglasin_id', $dtrows['warnaglasin_id']);
                    $this->db->update('m_warnaglasin', $data);

                }
    
}
