<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cmcustomer extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'customer_nama' => $dtrows['customer_nama'],
                        'customer_alamat' => $dtrows['customer_alamat'],
                        'customer_telp' => $dtrows['customer_telp'],
                        'customer_cp' => $dtrows['customer_cp'],
                        'customer_email' => $dtrows['customer_email']
                );

                $this->db->insert('m_customer', $data);
                
            }
    
}
