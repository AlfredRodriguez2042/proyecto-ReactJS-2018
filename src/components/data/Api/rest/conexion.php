<?php

abstract class classconexion{ 
  protected function conexion (){ 
    // link = 'mysql:host=localhost;dbname=dbcomentarios';
    $user = 'root';
    $pass = '';
 try{
     $pdo = new PDO('mysql:host=localhost;dbname=dbcomentarios',$user,$pass);
    
foreach($pdo->query('SELECT * FROM comentarios') as $fila){
    // print_r($fila);
}

 }catch(PDOException $e){
         print "error:" . $e->getMessage(). '<br/>';
         die();
     
 }
}
}