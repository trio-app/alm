<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Chome extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'contact_name' => $dtrows['contact_name'],
                        'contact_email' => $dtrows['contact_email'],
                        'contact_phone' => $dtrows['contact_phone']
                );

                $this->db->insert('m_contact', $data);
                
            }
    
}
