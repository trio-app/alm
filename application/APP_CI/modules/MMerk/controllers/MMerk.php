<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MMerk extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){
            $this->load->view('vmmerk');
	}
        
        public function read(){
            $this->load->model('Rmmerk');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rmmerk->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");        
            //print_r(json_decode($jsonData,true));
            $this->load->model('Cmmerk');
            $this->Cmmerk->insertDT(json_decode($jsonData,true));

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Ummerk');
            $this->Ummerk->updateDT(json_decode($jsonData,true));
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Dmmerk');
            $this->Dmmerk->deleteDT(json_decode($jsonData,true));
        }
        public function cbolist(){
        $this->load->model('Rmmerk');
        header('Content-type: application/json');
        print_r($this->Rmmerk->cbolist());
    }
        
}
