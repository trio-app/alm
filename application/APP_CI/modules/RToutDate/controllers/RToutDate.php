<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class RToutDate extends CI_Controller {
	public function __construct(){
		parent::__construct();
                $this->load->helper('date');
	}

	public function index(){            
            $this->load->view('VRToutDate');
	}
        
        public function read(){
            $this->load->model('RRToutDate');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->RRToutDate->load_default($start,$limit,$filter));

        }     
        
       public function getGrid(){
            //$jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('receiptout_doc');
            $this->load->model('RRToutDate');
            header('Content-type: application/json');
            print_r($this->RRToutDate->getGrid($doc));
        }        

        public function exportTransaksi(){
        $this->load->model('RRToutDate');
        $data['query'] = $this->RRToutDate->exportTransaksi();
        $this->load->view('vexceltransaksi', $data);
    } 

      
}
