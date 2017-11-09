<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class RTDate extends CI_Controller {
	public function __construct(){
		parent::__construct();
                $this->load->helper('date');
	}

	public function index(){            
            $this->load->view('VRTDate');
	}
        
        public function read(){
            $this->load->model('RRTDate');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->RRTDate->load_default($start,$limit,$filter));

        }     
        
       public function getGrid(){
            //$jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('receipt_doc');
            $this->load->model('RRTDate');
            header('Content-type: application/json');
            print_r($this->RRTDate->getGrid($doc));
        }        

        public function exportTransaksi(){
        $this->load->model('RRTDate');
        $data['query'] = $this->RRTDate->exportTransaksi();
        $this->load->view('vexceltransaksi', $data);
    } 

      
}
