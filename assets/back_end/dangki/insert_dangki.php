<?php
require_once("../server.php");
//server nhận dữ liệu từ client gửi lên
    // code...
$hoten=$_POST["hoten"];
$email=$_POST["email"];
$sodienthoai=$_POST["sodienthoai"];
$diachi=$_POST["diachi"];
$ngaysinh=$_POST["ngaysinh"];
$gioitinh=$_POST["gioitinh"];
$username=$_POST["username"];
$matkhau=$_POST["matkhau"];
$sql="INSERT INTO `khachhang`(`hoten`, `email`, `sodienthoai`, `diachi`, `ngaysinh`, `gioitinh`, `username`, `matkhau`) VALUES ('$hoten','$email','$sodienthoai','$diachi','$ngaysinh','$gioitinh','$username','$matkhau')";
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