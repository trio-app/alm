<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class Tandaterimaout extends CI_Controller {
	public function __construct(){
		parent::__construct();
	}

	public function index(){            
            $this->load->view('vtandaterimaout');
	}
        
        
        public function autoNum(){
            $this->load->model('Rtandaterimaout');
            
            $month = date('m');
            $year = date('Y');
            $num = $this->Rtandaterimaout->autoNum();
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
            
            echo $month. '.' . $auto . '/AP/TTO/' . $year;
        }        
        
        public function read(){
            $this->load->model('Rtandaterimaout');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rtandaterimaout->load_default($start,$limit,$filter));

        }        

        public function create(){        
            $jsonData =  file_get_contents("php://input");
            $data = explode(',||,',$jsonData);            
            $this->load->model('Ctandaterimaout');
            $num = $this->Ctandaterimaout->insertDT(json_decode($data[0],true));
            $this->Ctandaterimaout->insertGrid(json_decode($data[1],true),$num);
            $this->Ctandaterimaout->autoNum();

        }
        public function update(){
            $jsonData =  file_get_contents("php://input");    
            $data = explode(',||,',$jsonData);
            $this->load->model('Utandaterimaout');
            $num = $this->Utandaterimaout->updateDT(json_decode($data[0],true));
            $this->Utandaterimaout->updateGrid(json_decode($data[1],true),$num);
        }
        public function delete(){
            $jsonData =  file_get_contents("php://input");  
            $data = explode(',||,',$jsonData);
            $this->load->model('Dtandaterimaout');
            $this->Dtandaterimaout->deleteDT(json_decode($data[0],true));
        }  
        
    public function getGrid(){
        $jsonData =  file_get_contents("php://input");
        $doc = $this->input->post('recdetailout_doc');
        $this->load->model('Rtandaterimaout');
        header('Content-type: application/json');
        print_r($this->Rtandaterimaout->getGrid($doc));
    }

     public function customerTTO(){
            $this->load->model('Rtandaterimaout');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->Rtandaterimaout->load_customerTTO($start,$limit,$filter));          
        }        
    
    public function reportPreview($id = NULL){
          ob_start();
                    $this->load->model('Rtandaterimaout');
                    $rec = $this->Rtandaterimaout->reportPreview($id);
          
                    $data['recout_doc'] = $rec['receiptout_doc'];
                    $data['recout_to'] = $rec['customer_nama'];
                    $data['recout_from'] = $rec['receiptout_from'];
                    $data['recout_date'] = date_format(date_create($rec['receiptout_date']), 'd F Y');
            
                    $data['recout_detail'] = $this->Rtandaterimaout->reportDetail($rec['receiptout_doc']);
                    
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
