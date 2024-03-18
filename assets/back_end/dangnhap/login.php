<?php
require_once("../server.php");
//server nhận dữ liệu từ client gửi lên
    // code...
    $username = $_POST["username"];
    $matkhau = $_POST["matkhau"];
    $sql="SELECT * FROM `khachhang` WHERE `username` = '$username' and `matkhau` = '$matkhau'";
    try {  
        if (mysqli_query($conn, $sql)) {
            if(mysqli_affected_rows($conn)>0){
            $res["success"] = 1; //[1]
        }

        else{
            $res["success"] = 0; //[0] //that bai
        }
    } else {
        $res["success"] = 0; //{success:0}  //that bai
    }   
}
catch (Exception $e) {  

    $res["success"] = 0; 
    
}  

finally {  

    mysqli_close($conn);
    echo json_encode($res);
} 
?>