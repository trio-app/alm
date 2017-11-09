<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Spkerja extends CI_Controller {
	public function __construct(){
		parent::__construct();
                //$this->load->library('dompdf_gen');
	}

	public function index(){            
            $this->load->view('vspkerja');
	}
        
        
        public function autoNum(){
            $this->load->model('Rspkerja');
            
            $month = date('m');
            $year = date('Y');
            $num = $this->Rspkerja->autoNum();
            $cek = strlen($num);
            
            if($cek == 1){
                $auto = '000' . $num;
            }elseif($cek == 2){
                $auto = '00' . $num;
            }elseif($cek == 3){
                $auto = '0' . $num;
            }else{
                $auto = '' . $num;
            }
            
            $data['date'] = date('Y-m-d');
            
            echo 'SPK'. '/'. 'ALM'. '/'. $year . '/' . $auto ;
        }        
        
        public function read(){
            $this->load->model('Rspkerja');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rspkerja->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");
            $data = explode(',||,',$jsonData);            
            $this->load->model('Cspkerja');
            $num = $this->Cspkerja->insertDT(json_decode($data[0],true));
            //$this->Cspkerja->insertGrid(json_decode($data[1],true));
            $this->Cspkerja->autoNum();

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");    
            $data = explode(',||,',$jsonData);
            $this->load->model('Uspkerja');
            $num = $this->Uspkerja->updateDT(json_decode($data[0],true));
            //print_r($data);
            //$this->Uspkerja->updateGrid(json_decode($data[1],true),$num);
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");  
            $data = explode(',||,',$jsonData);
            $this->load->model('Dspkerja');
            $this->Dspkerja->deleteDT(json_decode($data[0],true));
        }  
        
        public function getGrid(){
            $jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('spkdetail_doc');
            $this->load->model('Rspkerja');
            header('Content-type: application/json');
            print_r($this->Rspkerja->getGrid($doc));
        }

        public function customerSPK(){
                $this->load->model('Rspkerja');
                $start = $this->input->post('start');
                $limit = $this->input->post('limit');
                $filter = $this->input->post('filter');
                header('Content-type: application/json');
                print_r( $this->Rspkerja->load_customerSPK($start,$limit,$filter));          
        }

        public function bahanitemSPK(){
                $this->load->model('Rspkerja');
                $start = $this->input->post('start');
                $limit = $this->input->post('limit');
                $filter = $this->input->post('filter');
                header('Content-type: application/json');
                print_r( $this->Rspkerja->load_bahanitemSPK($start,$limit,$filter));          
        }
        
        public function createbahan(){        
            $jsonData =  file_get_contents("php://input");        
            //print_r(json_decode($jsonData,true));
            $this->load->model('Cspkerja');
            $this->Cspkerja->insertbahan(json_decode($jsonData,true));

        }
        public function reportPreview($id = NULL){
             ob_start();
                        $this->load->model('Rspkerja');
                        $rec = $this->Rspkerja->reportPreview($id);

                        $data['spk_doc'] = $rec['spk_doc'];
                        $data['spk_nopo'] = $rec['spk_nopo'];
                        $data['spk_customer'] = $rec['customer_nama'];
                        $data['spk_date'] = date_format(date_create($rec['spk_date']), 'd F Y');
                        $data['spk_delivery'] = date_format(date_create($rec['spk_delivery']), 'd F Y');
                        $data['spk_tglkirim'] = date_format(date_create($rec['spk_delivery']), 'd F Y');
                        $data['value']= $this->Rspkerja->reportPreview($id);

                        //$data['recout_detail'] = $this->Rspkerja->reportDetail($rec['receiptout_doc']);

                        //print_r($this->Rpacking_list->reportPreview($id));
                        $this->load->view('previewPrint', $data);
                        $html = ob_get_contents();
               ob_end_clean();

                        require_once('./system/html2pdf/html2pdf.class.php');
                        $pdf = new HTML2PDF('P','Legal','en');
                        $pdf->writeHTML($html);
                        $pdf->Output();	        
                        }

}
