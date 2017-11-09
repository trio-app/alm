<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cmitem extends CI_Model {

function insertDT($dtrows)
            {
                $this->load->database();
                $data = array(
                        'item_kode' => $dtrows['item_kode'],
                        'item_nama' => $dtrows['item_nama'],
                        'item_category' => $dtrows['item_category'],
                        'item_unit' => $dtrows['item_unit'],
                        'item_harga' => $dtrows['item_harga'],
                        'item_upp' => $dtrows['item_upp'],
                        'item_weight' => $dtrows['item_weight']
                );

                $this->db->insert('m_item', $data);
                
            }
    
}
