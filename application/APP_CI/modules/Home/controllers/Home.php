<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
	public function __construct(){
		parent::__construct();
		if($this->session->userdata('isSign') != TRUE){
			redirect('login');
		}
	}

	public function index(){
                $data['user_login'] = $this->session->userdata('user_login');
                $data['user_name'] = $this->session->userdata('user_name');
                $data['title']      = "Packing List Application v1.0.0";

		$this->load->view('home/v_home', $data);
	}

	public function table(){
		$this->load->model('Rhome');
		print_r($this->Rhome->baca());
	}

	public function menujs(){
            header('Content-type: application/json');        
            $this->load->model('Rhome');
            $data =  $this->Rhome->menujs();
            print( $data);
	}

	public function dashboard(){
		$this->load->view('home/v_dashboard');
        }


        public function create(){        
            $jsonData =  file_get_contents("php://input");        
            //print_r(json_decode($jsonData,true));
            $this->load->model('Chome');
            $this->Chome->insertDT(json_decode($jsonData,true));

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Uhome');
            $this->Uhome->updateDT(json_decode($jsonData,true));
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");        
            $this->load->model('Dhome');
            $this->Dhome->deleteDT(json_decode($jsonData,true));
        }
        
}
