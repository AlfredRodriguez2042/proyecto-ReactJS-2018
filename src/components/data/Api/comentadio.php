<?php

include_once 'data/db.php';

class comentario extends DB {

    function obtenercomentarios(){
        $query=$this->connect()->query('SELECT * FROM comentarios');
        return $query;
    }

    
}
?>