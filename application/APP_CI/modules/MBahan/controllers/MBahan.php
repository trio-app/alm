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
        public function upload(){
            $status = "";
            $msg = "";
            $file_element_name = 'file';

            if ($status != "error")
            {
                $config['upload_path'] = './system/images/';
                $config['allowed_types'] = 'gif|jpg|png|doc|txt';
                $config['max_size'] = 1024 * 8;
                $config['encrypt_name'] = TRUE;

                $this->load->library('upload', $config);

                if (!$this->upload->do_upload($file_element_name))
                {
                    $status = 'error';
                    $msg = $this->upload->display_errors('', '');
                }
                else
                {
                    $data = $this->upload->data();
                    $status = $data['file_name'];
                    $msg = "File successfully uploaded";
                }
                @unlink($_FILES[$file_element_name]);
            }
            echo json_encode(array('status' => $status, 'msg' => $msg));
    }
        public function cbolist(){
        $this->load->model('Rmbahan');
        header('Content-type: application/json');
        print_r($this->Rmbahan->cbolist());
    }
        
}
