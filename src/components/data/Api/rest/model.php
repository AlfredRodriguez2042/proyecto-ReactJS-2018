<?php
include_once 'conexion.php';

class classcomentarios extends classconexion{ 
public function comentarios(){

    $post=$this->conexion()->prepare("SELECT * FROM comentarios");
    $post->execute();

    $C=[];
    $i=0;

    while($fetch=$post->fetch(PDO::FETCH_ASSOC)){
        $C[$I]=[
            'id' => $fetch['id'],
              'title' => $fetch['title'],
              'body' => html_entity_decode($body),
              'name' =>$fetch['name'],
              'category_id' =>$fetch['category_id'],
              'fecha' => $fetch['fecha']
        ];
        $i++;
    }
    header("Acces-Control-Allow-Origin:*");
     header("Content-Type: application/json");
   echo json_encode($C);
}
  }
