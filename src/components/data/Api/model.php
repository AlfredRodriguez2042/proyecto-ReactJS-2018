<?php
include_once 'comentadio.php';
class ApiPost{
    function getAll(){
        $post = new comentario();
        $posts= array();
        $posts["items"] = array();

        $res = $post->obtenercomentarios();
        if($res->rowCount()){
           while($row= $res->fetch(PDO::FETCH_ASSOC)){
               $item = array(
                'id' => $row['id'],
                'category_id' =>$row['category_id'],
                'title' => $row['title'],
                'name' => $row['name'],
                'body' =>html_entity_decode(['body']),
                'fecha'=>$row['fecha']
               );
               array_push($posts['items'], $item);
           }
        echo json_encode($posts);

    

        }else{
            echo json_encode(array('mensaje'=> 'no hay elementos registrados'));
        }
    }
}
    ?>