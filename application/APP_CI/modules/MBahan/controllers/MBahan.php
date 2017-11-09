<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MBahan extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){
            $this->load->view('vmbahan');
	}
        
        public function read(){
            $this->load->model('Rmbahan');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rmbahan->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");        
            //print_r(json_decode($jsonData,true));
            $this->load->model('Cmbahan');
            $this->Cmbahan->insertDT(json_decode($jsonData,true));

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Umbahan');
            $this->Umbahan->updateDT(json_decode($jsonData,true));
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Dmbahan');
            $this->Dmbahan->deleteDT(json_decode($jsonData,true));
        }
        public function cbolist(){
        $this->load->model('Rmbahan');
        header('Content-type: application/json');
        print_r($this->Rmbahan->cbolist());
    }
        
}
