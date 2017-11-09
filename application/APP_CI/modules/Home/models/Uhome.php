<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Uhome extends CI_Model {

function updateDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'contact_name' => $dtrows['contact_name'],
                        'contact_email' => $dtrows['contact_email'],
                        'contact_phone' => $dtrows['contact_phone']
                );
                $this->db->where('contact_id', $dtrows['contact_id']);
                $this->db->update('m_contact', $data);
                
            }
    
}
