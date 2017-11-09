<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Umitem extends CI_Model {

    function updateDT($dtrows){
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
                    $this->db->where('item_id', $dtrows['item_id']);
                    $this->db->update('m_item', $data);

                }
    
}
