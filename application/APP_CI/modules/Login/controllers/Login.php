<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	public function __construct(){
		parent::__construct();
		/* if($this->session->userdata('isLogin') == TRUE){
			redirect('home');
		}*/
	}

	public function index(){
            $data['base_url']	= base_url();
            $data['title'] 	= "Master Application Version 1.0.0";

		$this->load->view('Login/v_login', $data);
	}

	public function signIn(){
		$JSONData = file_get_contents('php://input');

		$this->load->model('RLogin');
		$data	= $this->RLogin->signIn(json_decode($JSONData, TRUE));
		if(count($data)==1){
			$this->session->set_userdata('isSign', TRUE);
			$this->session->set_userdata($data[0]);
			echo 'success';
		}else{
			echo 'failed';
		}
	}

	public function signOut(){
		$session_array = array('user_id', 'user_name');
		$this->session->unset_userdata($session_array);
		$this->session->unset_userdata('isSign');
		redirect('login');
	}
}