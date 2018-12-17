<?php

class Post {
    private $conn;
    private $table = 'comentarios';

    //post properties

    public $id;
    public $category_id;
    public $category_name;
    public $title;
    public $body;
    public $name;
    public $date;

    //costructor db
    public function __construct($db){
        $this->conn = $db;
    
    }

    //get post
    public function read(){
        $query = 'SELECT
               c.name as category_name,
               p.id,
               p.category_id,
               p.title,
               p.body,
               p.name,
               p.fecha
               FROM
               '.$this->table.' p
               LEFT JION
               categories c ON p.category_id = c.id
               ORDER BY
               p.fecha DESC ';

               //prepare

               $stmt = $this->conn->prepare($query);
               // Execute query
               $stmt->execute();
               return $stmt;
    }
        
    
}
?>