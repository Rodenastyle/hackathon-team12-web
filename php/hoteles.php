<?php
$hoteles = array(
    array(
        "id" => 1, 
        "nombre" => "Granada",
        "img" => "img/portfolio/cabin.png"),
    array(
        "id" => 2, 
        "nombre" => "Córdoba",
        "img" => "img/portfolio/cake.png"),
    array(
        "id" => 3, 
        "nombre" => "Cádiz",
        "img" => "img/portfolio/circus.png"),
    array(
        "id" => 4, 
        "nombre" => "Jaén",
        "img" => "img/portfolio/game.png"),
    array(
        "id" => 5, 
        "nombre" => "Almería",
        "img" => "img/portfolio/safe.png"),
    array(
        "id" => 6, 
        "nombre" => "Málaga",
        "img" => "img/portfolio/submarine.png"),
    array(
        "id" => 7, 
        "nombre" => "Huelva",
        "img" => "img/portfolio/cabin.png"),
    array(
        "id" => 8, 
        "nombre" => "Sevilla",
        "img" => "img/portfolio/circus.png")
    );

echo json_encode($hoteles);

?>