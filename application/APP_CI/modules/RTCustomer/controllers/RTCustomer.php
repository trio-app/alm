<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class RTCustomer extends CI_Controller {
    
	public function __construct(){
		parent::__construct();
                $this->load->helper('date');
	}

	public function index(){
		$this->load->view('VRTCustomer');
	}
        
        public function getGrid(){
            //$jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('receipt_doc');
            $this->load->model('RRTCustomer');
            header('Content-type: application/json');
            print_r($this->RRTCustomer->getGrid($doc));
        }        

	public function read(){
            $this->load->model('RRTCustomer');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->RRTCustomer->load_default($start,$limit,$filter));
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
