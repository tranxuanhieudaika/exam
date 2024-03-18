function lienhe(e) {
    event.preventDefault();
    var loaithongtin = document.getElementById("loai-thong-tin").value;
    var hoten = document.getElementById("ho-ten").value;
    var email = document.getElementById("email").value;
    var dienthoai = document.getElementById("dien-thoai").value;
    var noidunglh = document.getElementById("noi-dung-lh").value;  
    
    var user =  {
        loaithongtin: loaithongtin,
        hoten: hoten,
        email: email,
        dienthoai: dienthoai,
        noidunglh: noidunglh,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(hoten,json);
    alert("Cảm ơn bạn đã liên hệ.Chúng yêu sẽ phản hồi yêu cầu của bạn trong thời gian sớm nhất.");
    window.location.href="lienhe.html"
  
}