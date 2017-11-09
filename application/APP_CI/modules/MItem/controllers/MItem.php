<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MItem extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){
            $this->load->view('vmitem');
	}
        
        public function read(){
            $this->load->model('Rmitem');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rmitem->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");        
            //print_r(json_decode($jsonData,true));
            $this->load->model('Cmitem');
            $this->Cmitem->insertDT(json_decode($jsonData,true));

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Umitem');
            $this->Umitem->updateDT(json_decode($jsonData,true));
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Dmitem');
            $this->Dmitem->deleteDT(json_decode($jsonData,true));
        }
        
        public function cbolist(){
        $this->load->model('Rmitem');
        header('Content-type: application/json');
        print_r($this->Rmitem->cbolist());
    }
}
