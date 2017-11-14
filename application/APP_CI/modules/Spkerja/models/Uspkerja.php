<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Uspkerja extends CI_Model {

    function updateDT($dtrows){
                    $this->load->database();
                    $data = array(

                        'spk_doc' => $dtrows['spk_doc'],

                        'spk_date' => $dtrows['spk_date'],
                        
                        'spk_nopo' => $dtrows['spk_nopo'],
                    
                        'spk_delivery' => $dtrows['spk_delivery'],

                        'spk_customer' => $dtrows['customer_id'],
                        
                        'spk_bahannama' => $dtrows['spk_bahannama'],
                        
                        'spk_jenisbahan' => $dtrows['spk_jenisbahan'],

                        'spk_glasin' => $dtrows['spk_glasin'],
                        
                        'spk_gap' => $dtrows['spk_gap'],
                        
                        'spk_bentuk' => $dtrows['spk_bentuk'],
                        
                        'spk_merk' => $dtrows['spk_merk'],

                        'spk_porporasi'=> $dtrows['spk_porporasi'],

                        'spk_ukuranP'=> $dtrows['spk_ukuranP'],

                        'spk_ukuranL'=> $dtrows['spk_ukuranL'],
                        
                        'spk_jumlahpisau'=> $dtrows['spk_jumlahpisau'],
                        
                        'spk_matapisau'=> $dtrows['spk_matapisau'],
                        
                        'spk_mataperbaris'=> $dtrows['spk_mataperbaris'],
                    
                        'spk_warnacetakan'=> $dtrows['spk_warnacetakan'],
                        
                        'spk_qtyname'=> $dtrows['spk_qtyname'],
                        
                        'spk_totalname'=> $dtrows['spk_totalname'],
                        
                        'spk_qtyorder'=> $dtrows['spk_qtyorder'],
                        
                        'spk_upporder'=> $dtrows['spk_upporder'],
                        
                        'spk_totalorder'=> $dtrows['spk_totalorder'],
                        
                        'spk_core'=> $dtrows['spk_core'],
                        
                        'spk_arahgulungan'=> $dtrows['spk_arahgulungan'],
                        
                        'spk_sensor'=> $dtrows['spk_sensor'],
                    
                        'bahan_digunakan'=>$dtrows['bahan_digunakan'],
                    
                        'ukuranP_digunakan'=> $dtrows['ukuranP_digunakan'],
                    
                        'ukuranL_digunakan'=> $dtrows['ukuranL_digunakan'],
                    
                        'keterangan_digunakan'=> $dtrows['keterangan_digunakan'],
                    
                        'jml_roll'=> $dtrows['jml_roll'],
                    
                        'total'=> $dtrows['total'],
                        
                        'total2'=>$dtrows['total2'],
                        
                        'spk_tglkirim' => $dtrows['spk_tglkirim'],
                    
                        'spk_nosuratjalan' => $dtrows['spk_nosuratjalan'],
                        
                        'sys_update_user' => $this->session->userdata('user_login'),

                );
                    $this->db->where('spk_id', $dtrows['spk_id']);
                    $this->db->update('tr_spk', $data);

                }
                
            

  
}
