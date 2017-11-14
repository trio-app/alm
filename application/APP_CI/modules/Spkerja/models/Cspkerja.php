<?php

defined('BASEPATH') OR exit('No direct script access allowed');



class Cspkerja extends CI_Model {



function insertDT($dtrows)

            {

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
                    
                        'ukuranP_digunakan'=>$dtrows['ukuranP_digunakan'],
                    
                        'ukuranL_digunakan'=>$dtrows['ukuranL_digunakan'],
                    
                        'keterangan_digunakan'=>$dtrows['keterangan_digunakan'],
                    
                        'jml_roll'=>$dtrows['jml_roll'],
                    
                        'total'=>$dtrows['total'],
                    
                        'total2'=>$dtrows['total2'],
                    
                        'spk_tglkirim' => $dtrows['spk_tglkirim'],
                    
                        'spk_nosuratjalan' => $dtrows['spk_nosuratjalan'],
                    
                        'sys_create_user' => $this->session->userdata('user_login'),

                );



                $this->db->insert('tr_spk', $data);

            }

            





            

function autoNum(){

                $this->load->database();

                $this->db->set('spk_num', 'spk_num+1', FALSE);

                $this->db->where('id', 1);

                $this->db->update('m_autonum');

}

function insertbahan($dtrows)

            {

                $this->load->database();

                $data = array(

                        'bahan_nama' => $dtrows['bahan_nama'],
                        'bahan_jenis' => $dtrows['bahan_jenis'],
                        'bahan_merk' => $dtrows['bahan_merk'],
                        'bahan_gap' => $dtrows['bahan_gap'],
                        'bahan_bentuk' => $dtrows['bahan_bentuk'],
                        'bahan_glasin' => $dtrows['bahan_glasin'],
                        'bahan_ukuranP' => $dtrows['bahan_ukuranP'],
                        'bahan_ukuranL' => $dtrows['bahan_ukuranL'],
                        'bahan_porporasi' => $dtrows['bahan_porporasi'],
                        'bahan_mataperbaris' => $dtrows['bahan_mataperbaris'],
                        'bahan_matapisau' => $dtrows['bahan_matapisau'],
                        'bahan_warnacetakan' => $dtrows['bahan_warnacetakan'],
                        'bahan_qtyname' => $dtrows['bahan_qtyname'],
                        'bahan_totalname' => $dtrows['bahan_totalname'],
                        'bahan_core' => $dtrows['bahan_core'],
                        'bahan_arahgulungan' => $dtrows['bahan_arahgulungan'],
                        'bahan_sensor' => $dtrows['bahan_sensor']

                );

                $this->db->insert('m_bahan', $data);

            }
            
function insertcustomer($dtrows)
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

