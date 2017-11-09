<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MCategory extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){
            $this->load->view('vmcategory');
	}
        
        public function read(){
            $this->load->model('Rmcategory');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rmcategory->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");        
            //print_r(json_decode($jsonData,true));
            $this->load->model('Cmcategory');
            $this->Cmcategory->insertDT(json_decode($jsonData,true));

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Umcategory');
            $this->Umcategory->updateDT(json_decode($jsonData,true));
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Dmcategory');
            $this->Dmcategory->deleteDT(json_decode($jsonData,true));
        }
        public function cbolist(){
        $this->load->model('Rmcategory');
        header('Content-type: application/json');
        print_r($this->Rmcategory->cbolist());
    }
        
}
