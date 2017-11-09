<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MCustomer extends MX_Controller {

    public function index(){
       $this->load->view('vmcustomer');
    }
    
    public function table(){
        $this->load->model('Rmcustomer');
        print_r($this->Rmcustomer->baca());
    }
    
    public function read(){
        $this->load->model('Rmcustomer');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rmcustomer->load_default($start,$limit,$filter));
        
    }
    
    public function provinsi(){
        $this->load->model('Rmcustomer');
        header('Content-type: application/json');
        print_r( $this->Rmcustomer->load_provinsi());        
    }
    
    public function kabupaten($id){
        $this->load->model('Rmcustomer');
        header('Content-type: application/json');
        print_r( $this->Rmcustomer->load_kabupaten($id));        
    }
    
    public function kecamatan($id){
        $this->load->model('Rmcustomer');
        header('Content-type: application/json');
        print_r( $this->Rmcustomer->load_kecamatan($id));        
    }
    
    public function kelurahan($id){
        $this->load->model('Rmcustomer');
        header('Content-type: application/json');
        print_r( $this->Rmcustomer->load_kelurahan($id));        
    }
    
    public function create(){   
        $jsonData =  file_get_contents("php://input");        
        //print_r(json_decode($jsonData,true));
        $this->load->model('Cmcustomer');
        $this->Cmcustomer->insertDT(json_decode($jsonData,true));
            
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Umcustomer');
        $this->Umcustomer->updateDT(json_decode($jsonData,true));
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Dmcustomer');
        $this->Dmcustomer->deleteDT(json_decode($jsonData,true));
    }
    public function cbolist(){
        $this->load->model('Rmcustomer');
        header('Content-type: application/json');
        print_r($this->Rmcustomer->cbolist());
    }
            
}
