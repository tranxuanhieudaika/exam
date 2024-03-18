console.log("ok");
$(document).ready(function () {
    $(".btndangnhap").click(function () {
        // Lấy dữ liệu từ các trường input
        var username = $(".txtusername").val();
        var matkhau = $(".txtmatkhau").val();

        // Kiểm tra mật khẩu trùng khớp
        // if (matkhau !== nhaplaimatkhau) {
        //     alert("Mật khẩu không khớp!");
        //     $(".txtnhaplaimatkhau").focus();
        //     return; // Dừng lại nếu mật khẩu không khớp
        // }

        // Chuẩn bị dữ liệu để gửi lên server
        var ojdata = {
            username: username,
            matkhau: matkhau
        };

        // Thực hiện queryData
        queryData("back_end/dangnhap/login.php", ojdata, function (res) {
            console.log(res);
            if (res.success == 1) {
                alert("Đăng nhập Thành công");
                //bootbox.alert("Insert Thành công!");
                window.location.href = "../assets/index.html";
            } else {
                alert("Đăng nhập không Thành công");
                //bootbox.alert("Insert không Thành công!");
            }
        });
    });
});

