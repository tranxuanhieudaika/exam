function signup(e) {
    event.preventDefault();
    var username = document.getElementById("hoten").value;
    var password = document.getElementById("mat-khau").value;
    
    var user =  {
        username: username,
        password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Bạn đã đăng ký thành công.");
    window.location.href="dangnhap.html"       
}
function login(e) {
    event.preventDefault();
    var username = document.getElementById("hoten").value;
    var password = document.getElementById("mat-khau").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (user == null) {
        alert("!!! Vui lòng nhập đúng Tên người dùng(*) và Mật khẩu(*)");
    }
    else if (username == data.username && password == data.password) {
        alert("Đăng nhập thành công");
        window.location.href="index.html"
    }
    else {
        alert("Đăng nhập thất bại");
    }
}



