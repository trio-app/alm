<?php
 

sleep(1); // simulate upload time
  echo '{success:true, file:'.json_encode($_FILES['gambar']['name']).'}';

  
  ?>

