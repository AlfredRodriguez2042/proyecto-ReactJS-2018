<?php
//headers
header("Acces-Control-Allow-Origin:*");
header("Content-Type: application/json");

//imports

include_once '../data/db.php';
include_once '../models/post.php';

// DB init

$database =new Database();
$db = $database->connect();

//obj
$post = new Post($db);
// blog query
$result = $post->read();
//get row count
$num = $result->rowCount();


// check
if($num > 0){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
          extract($row);
          $post_item = array(
              'id' => $id,
              'title' => $title,
              'body' => html_entity_decode($body),
              'name' => $name,
              'category_id' => $category_id,
              'categoty_name' => $category_name
          );
          //push data
     array_push($post_arr['data'], $post_item);
    }
    echo json_encode($post_arr);
}else{
//no fund
echo  json_encode(array('message' => ' no post found'));
}
?>