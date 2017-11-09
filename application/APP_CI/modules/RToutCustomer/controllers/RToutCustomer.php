<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class RToutCustomer extends CI_Controller {
    
	public function __construct(){
		parent::__construct();
                $this->load->helper('date');
	}

	public function index(){
		$this->load->view('VRToutCustomer');
	}
        
        public function getGrid(){
            //$jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('receiptout_doc');
            $this->load->model('RRToutCustomer');
            header('Content-type: application/json');
            print_r($this->RRToutCustomer->getGrid($doc));
        }        

	public function read(){
            $this->load->model('RRToutCustomer');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->RRToutCustomer->load_default($start,$limit,$filter));
	}
        
        public function exportTransaksi(){
        $doc = $this->input->post('transaksi_doc');
        $this->load->model('RRCustomer');
        print_r($this->RRCustomer->exportTransaksi($doc));
        $data['query'] = $this->RRCustomer->exportTransaksi();
        $this->load->view('vexceltransaksi');
        }
    
        public function exportDetail(){
        $this->load->model('RRCustomer');
        $data['query'] = $this->RRCustomer->exportDetail();
        $this->load->view('vexceldetail', $data);
        }

        
}
