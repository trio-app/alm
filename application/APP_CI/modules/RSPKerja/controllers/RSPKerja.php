<?php 
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class RSPKerja extends CI_Controller {
    
            public function __construct(){
		parent::__construct();
                $this->load->helper('date');
	}
        
        public function index(){
             $this->load->view('vRSPKerja');
        }
        
        public function getGrid(){
            //$jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('transaksi_doc');
            $this->load->model('RRSPKerja');
            header('Content-type: application/json');
            print_r($this->RRSPKerja->getGrid($doc));
        }        

	public function read(){
            $this->load->model('RRSPKerja');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->RRSPKerja->load_default($start,$limit,$filter));
	}
        
        public function exportTransaksi(){
        $doc = $this->input->post('transaksi_doc');
        $this->load->model('RRSPKerja');
        print_r($this->RRSPKerja->exportTransaksi($doc));
        $data['query'] = $this->RRSPKerja->exportTransaksi();
        $this->load->view('vexceltransaksi');
        }
    
        public function exportDetail(){
        $this->load->model('RRSPKerja');
        $data['query'] = $this->RRSPKerja->exportDetail();
        $this->load->view('vexceldetail', $data);
        }
}