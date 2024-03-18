console.log("ok");
$(document).ready(function () {
    $(".btndangki").click(function () {
        // Lấy dữ liệu từ các trường input
        var hoten = $(".txthoten").val();
        var sodienthoai = $(".txtsodienthoai").val();
        var ngaysinh = $(".txtngaysinh").val();
        var gioitinh = $(".cbgioitinh").val();
        var email = $(".txtemail").val();
        var diachi = $(".txtdiachi").val();
        var username = $(".txtusername").val();
        var matkhau = $(".txtmatkhau").val();
        var nhaplaimatkhau = $(".txtnhaplaimatkhau").val();

        // Kiểm tra mật khẩu trùng khớp
        if (matkhau !== nhaplaimatkhau) {
            alert("Mật khẩu không khớp!");
            $(".txtnhaplaimatkhau").focus();
            return; // Dừng lại nếu mật khẩu không khớp
        }

        // Chuẩn bị dữ liệu để gửi lên server
        var ojdata = {
            hoten: hoten,
            sodienthoai: sodienthoai,
            ngaysinh: ngaysinh,
            gioitinh: gioitinh,
            email: email,
            diachi: diachi,
            username: username,
            matkhau: matkhau
        };

        // Thực hiện queryData
        queryData("back_end/dangki/insert_dangki.php", ojdata, function (res) {
            console.log(res);
            if (res.success == 1) {
                alert("Insert Thành công");
                //bootbox.alert("Insert Thành công!");
                window.location.href = "../assets/dangnhap.html";
            } else {
                alert("Insert không Thành công");
                //bootbox.alert("Insert không Thành công!");
            }
        });
    });
});

