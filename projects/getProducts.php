<?php

$array = array(
    array(
        "product_id" => "1",
        "product_name" => "Breidecker",
        "bottle_price" => "17.90",
        "bottle_qty" => "1",
        "case_qty" => "1",
        "case_price" => "204.06",
        "product_img" => "09riesling.png"
    ),
    array(
        "product_id" => "2",
        "product_name" => "Chardonnay",
        "bottle_price" => "18.90",
        "bottle_qty" => "1",
        "case_qty" => "1",
        "case_price" => "215.46",
        "product_img" => "chardonnay.png"
    ),
    array(
        "product_id" => "3",
        "product_name" => "Gewurztraminer",
        "bottle_price" => "22.90",
        "bottle_qty" => "1",
        "case_qty" => "1",
        "case_price" => "261.06",
        "product_img" => "hunters_gewurztraminer.png"
    ),
    array(
        "product_id" => "4",
        "product_name" => "Hukapapa Dessert riesling (350ml)",
        "bottle_price" => "21.90",
        "bottle_qty" => "1",
        "case_qty" => "1",
        "case_price" => "262.80",
        "product_img" => "hukapapa.png"
    ),
    array(
        "product_id" => "5",
        "product_name" => "Late Harvets Sauvignon Blanc(375ml)",
        "bottle_price" => "21.90",
        "bottle_qty" => "1",
        "case_qty" => "1",
        "case_price" => "262.80",
        "product_img" => "sauvignon_blanc.png"
    ),
    array(
        "product_id" => "6",
        "product_name" => "MiruMiru(TM) Non-Vintage",
        "bottle_price" => "28.90",
        "bottle_qty" => "1",
        "case_qty" => "1",
        "case_price" => "141.40",
        "product_img" => "hunters_mirumiru_non_vintage.png"
    ),
    array(
        "product_id" => "7",
        "product_name" => "Pinot Noir",
        "bottle_price" => "28.90",
        "bottle_qty" => "1",
        "case_qty" => "1",
        "case_price" => "329.46",
        "product_img" => "pinotnoir.png"
    )
);

echo json_encode($array);
?>
