<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Packinglist extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){            
            $this->load->view('vpackinglist');
	}
        
        
        public function autoNum(){
            $this->load->model('Rpackinglist');
            
            $month = date('m');
            $year = date('Y');
            $num = $this->Rpackinglist->autoNum();
            
            $data['date'] = date('Y-m-d');
            
            echo $month . '.' . $num . '/AP/PL/' . $year;
        }        
        
        public function customer(){
            $this->load->model('Rpackinglist');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rpackinglist->load_customer($start,$limit,$filter));          
        }
        
        public function item(){
            $this->load->model('Rpackinglist');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rpackinglist->load_item($start,$limit,$filter));             
        }
        
        public function read(){
            $this->load->model('Rpackinglist');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rpackinglist->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");   
            $data = explode(',||,',$jsonData);
            //print_r(json_decode($jsonData,true));
            $this->load->model('Cpackinglist');
            $num = $this->Cpackinglist->insertDT(json_decode($data[0],true));
            $this->Cpackinglist->insertGrid(json_decode($data[1],true),$num);
            $this->Cpackinglist->autoNum();

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");     
            $data = explode(',||,',$jsonData);
            $this->load->model('Upackinglist');
            $num = $this->Upackinglist->updateDT(json_decode($data[0],true));
            $this->Upackinglist->updateGrid(json_decode($data[1],true),$num);
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");   
            $data = explode(',||,',$jsonData);
            $this->load->model('Dpackinglist');
            $this->Dpackinglist->deleteDT(json_decode($data[0],true));
        }
        
        public function updateGrid(){
            $jsonData =  file_get_contents("php://input");
            $this->load->model('Upackinglist');
            $this->Upackinglist->updateGrid(json_decode($jsonData,true));
            //print_r(json_decode($jsonData));
        }
        
        public function getGrid(){
            $jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('transaksi_doc');
            $this->load->model('Rpackinglist');
            header('Content-type: application/json');
            print_r($this->Rpackinglist->getGrid($doc));
        }        

        public function reportPreview($id = NULL){
              ob_start();
                        $this->load->model('Rpackinglist');
                        $transaksi = $this->Rpackinglist->reportPreview($id);

                        $data['tr_nomor'] = $transaksi['transaksi_doc'];
                        $data['tr_customer'] = $transaksi['customer_nama'];
                        $data['tr_supplier'] = $transaksi['transaksi_supplier'];
                        $data['tr_tanggal'] = date_format(date_create($transaksi['transaksi_date']), 'd F Y');

                        $data['tr_detail'] = $this->Rpackinglist->reportDetail($data['tr_nomor']);

                        //print_r($this->Rpacking_list->reportPreview($id));
                        $this->load->view('previewPrint', $data);
                        $html = ob_get_contents();
               ob_end_clean();

                        require_once('./system/html2pdf/html2pdf.class.php');
                        $pdf = new HTML2PDF('L','Legal','en');
                        $pdf->writeHTML($html);
                        $pdf->Output();	        
        }
}
