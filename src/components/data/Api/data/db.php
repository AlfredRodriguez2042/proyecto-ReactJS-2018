<?php

class DB {
    private $host ='localhost';
    private $db_name= 'dbcomentarios';
    private $username= 'root';
    private $pass = '';
    private $conn;
    
/// conect
public function connect(){
    $this->conn = null;

    try { 
        $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->pass);
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
      } catch(PDOException $e) {
        echo 'Connection Error: ' . $e->getMessage();
      }
      return $this->conn;

}
}
?>