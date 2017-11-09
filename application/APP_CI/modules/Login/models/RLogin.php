<?php

class RLogin extends CI_Model {
	
	function __construct(){
		# code...
	}

	function signIn($data){
		$where = array(
			'user_login' => $data['userid'],
			'user_password' => md5($data['userpass'])
			);

		$this->db->select('user_login, user_name');
		$this->db->from('cp_user');
		$this->db->where($where);
		$query	= $this->db->get();
		$row	= $query->result_array();

		return $row;


	}
}