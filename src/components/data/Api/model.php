<?php
header("Acces-Control-Allow-Origin:*");
header('Content-Type: application/json');


if($_GET['dbcomentarios']== 'categories'){


     include_once 'conexion.php';

    $sql = 'SELECT * FROM '.$_GET['dbcomenatrios'];
    $sentencia = $pdo->prepare($sql);
     $sentencia->execute();
     $datos =$sentencia->fetchAll();

}else{
    echo 'solicitud no encontrada';
}
  echo json_encode($datos);