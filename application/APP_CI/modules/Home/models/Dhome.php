<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dhome extends CI_Model {

function deleteDT($dtrows)
            {
                $this->load->database();
                $this->db->where('contact_id', $dtrows['contact_id']);
                return $this->db->delete('m_contact');
            }
    
}
