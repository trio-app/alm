<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MWarnaglasin extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){
            $this->load->view('vmwarnaglasin');
	}
        
        public function read(){
            $this->load->model('Rmwarnaglasin');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rmwarnaglasin->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");        
            //print_r(json_decode($jsonData,true));
            $this->load->model('Cmwarnaglasin');
            $this->Cmwarnaglasin->insertDT(json_decode($jsonData,true));

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Umwarnaglasin');
            $this->Umwarnaglasin->updateDT(json_decode($jsonData,true));
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Dmwarnaglasin');
            $this->Dmwarnaglasin->deleteDT(json_decode($jsonData,true));
        }
        public function cbolist(){
        $this->load->model('Rmwarnaglasin');
        header('Content-type: application/json');
        print_r($this->Rmwarnaglasin->cbolist());
    }
        
}
