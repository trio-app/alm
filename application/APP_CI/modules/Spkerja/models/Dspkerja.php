<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dspkerja extends CI_Model {

function deleteDT($dtrows)
            {
                $this->load->database();
                $this->db->where('spk_id', $dtrows['spk_id']);
                return $this->db->delete('tr_spk');
                
            }
    
}
