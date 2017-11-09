<?php
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH') OR exit('No direct script access allowed');

class RByDate extends CI_Controller {
	public function __construct(){
		parent::__construct();
                $this->load->helper('date');
	}

	public function index(){            
            $this->load->view('vRbyDate');
	}
        
        public function read(){
            $this->load->model('RRByDate');
            $start = $this->input->post('start');
            $limit = $this->input->post('limit');
            $filter = $this->input->post('filter');
            header('Content-type: application/json');
            print_r( $this->RRByDate->load_default($start,$limit,$filter));

        }     
        
       public function getGrid(){
            //$jsonData =  file_get_contents("php://input");
            $doc = $this->input->post('transaksi_doc');
            $this->load->model('RRByDate');
            header('Content-type: application/json');
            print_r($this->RRByDate->getGrid($doc));
        }        

        public function exportTransaksi(){
        $this->load->model('RRByDate');
        $data['query'] = $this->RRByDate->exportTransaksi();
        $this->load->view('vexceltransaksi', $data);
    } 

        public function reportPreview($id = NULL){
              ob_start();
                        $this->load->model('Rpacking_list');
                        $transaksi = $this->Rpacking_list->reportPreview($id);

                        $data['tr_nomor'] = $transaksi['transaksi_doc'];
                        $data['tr_customer'] = $transaksi['customer_nama'];
                        $data['tr_supplier'] = $transaksi['transaksi_supplier'];
                        $data['tr_tanggal'] = date_format(date_create($transaksi['transaksi_date']), 'd F Y');

                        $data['tr_detail'] = $this->Rpacking_list->reportDetail($data['tr_nomor']);

                        //print_r($this->Rpacking_list->reportPreview($id));
                        $this->load->view('previewPrint', $data);
                        $html = ob_get_contents();
              ob_end_clean();

                        require_once('./system/html2pdf/html2pdf.class.php');
                        $pdf = new HTML2PDF('L','Legal','en');
                        $pdf->writeHTML($html);
                        $pdf->Output();	        
        }
}
