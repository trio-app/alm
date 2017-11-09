<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Tandaterima extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){            
            $this->load->view('vtandaterima');
	}
        
        
        public function autoNum(){
            $this->load->model('Rtandaterima');
            
            $month = date('m');
            $year = date('Y');
            $num = $this->Rtandaterima->autoNum();
            $cek = strlen($num);
            
            if($cek == 1){
                $auto = '000' . $num;
            }elseif($cek == 2){
                $auto = '00' . $num;
            }elseif($cek == 3){
                $auto = '0' . $num;
            }else{
                $auto = '' . $num;
            }
            
            $data['date'] = date('Y-m-d');
            
            echo $month. '.' . $auto . '/AP/TTI/' . $year;
        }        
        
        public function read(){
            $this->load->model('Rtandaterima');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rtandaterima->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");
            $data = explode(',||,',$jsonData);            
            $this->load->model('Ctandaterima');
            $num = $this->Ctandaterima->insertDT(json_decode($data[0],true));
            $this->Ctandaterima->insertGrid(json_decode($data[1],true),$num);
            $this->Ctandaterima->autoNum();

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");    
            $data = explode(',||,',$jsonData);
            $this->load->model('Utandaterima');
            $num = $this->Utandaterima->updateDT(json_decode($data[0],true));
            $this->Utandaterima->updateGrid(json_decode($data[1],true),$num);
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");  
            $data = explode(',||,',$jsonData);
            $this->load->model('Dtandaterima');
            $this->Dtandaterima->deleteDT(json_decode($data[0],true));
        }  
        
    public function getGrid(){
        $jsonData =  file_get_contents("php://input");
        $doc = $this->input->post('recdetail_doc');
        $this->load->model('Rtandaterima');
        header('Content-type: application/json');
        print_r($this->Rtandaterima->getGrid($doc));
    }

     public function customerTT(){
            $this->load->model('Rtandaterima');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rtandaterima->load_customerTT($start,$limit,$filter));          
        }        
    
    public function reportPreview($id = NULL){
          ob_start();
                    $this->load->model('Rtandaterima');
                    $rec = $this->Rtandaterima->reportPreview($id);
          
                    $data['rec_doc'] = $rec['receipt_doc'];
                    $data['rec_to'] = $rec['customer_nama'];
                    $data['rec_from'] = $rec['receipt_from'];
                    $data['rec_date'] = date_format(date_create($rec['receipt_date']), 'd F Y');
            
                    $data['rec_detail'] = $this->Rtandaterima->reportDetail($rec['receipt_doc']);
                    
                    //print_r($this->Rpacking_list->reportPreview($id));
                    $this->load->view('previewPrint', $data);
                    $html = ob_get_contents();
          ob_end_clean();
                    
                    require_once('./system/html2pdf/html2pdf.class.php');
                    $pdf = new HTML2PDF('L',array('215','140'),'en');
                    $pdf->writeHTML($html);
                    $pdf->Output();	        
    }

}
