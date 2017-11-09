<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Umcustomer extends CI_Model {

    function updateDT($dtrows){
                     $this->load->database();
                $data = array(
                        'customer_nama' => $dtrows['customer_nama'],
                        'customer_alamat' => $dtrows['customer_alamat'],
                        'customer_telp' => $dtrows['customer_telp'],
                        'customer_cp' => $dtrows['customer_cp'],
                        'customer_email' => $dtrows['customer_email']
                );
                    $this->db->where('customer_id', $dtrows['customer_id']);
                    $this->db->update('m_customer', $data);

                }
    
}
