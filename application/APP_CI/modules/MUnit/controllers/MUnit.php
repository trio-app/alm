<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MUnit extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){
            $this->load->view('vmunit');
	}
        
        public function read(){
            $this->load->model('Rmunit');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rmunit->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");        
            //print_r(json_decode($jsonData,true));
            $this->load->model('Cmunit');
            $this->Cmunit->insertDT(json_decode($jsonData,true));

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Umunit');
            $this->Umunit->updateDT(json_decode($jsonData,true));
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Dmunit');
            $this->Dmunit->deleteDT(json_decode($jsonData,true));
        }
        public function cbolist(){
        $this->load->model('Rmunit');
        header('Content-type: application/json');
        print_r($this->Rmunit->cbolist());
    }
        
}
