function xacNhan(){
    // input
    let name = document.getElementById("name").value;
    let electric = +document.getElementById("electric").value;
    const lv1 = 500;
    const lv2 = 650;
    const lv3 = 850;
    const lv4 = 1100;
    const lv5 = 1300;
    let totalPayment;
    
    
    //xử lý
    let divThongBao = document.getElementById("thongBao")
    divThongBao.innerHTML= ""
    let pThongBao = document.createElement("h3");
    if (name === null || electric === null) {
        alert("Mời bạn nhập đầy đủ thông tin")
    }else if (electric<=0){
        alert("Lượng điện tiêu thụ phải không đúng. Mời nhập lại xin cảm ơn!!!")
    }else if (electric<=50) {
        totalPayment = electric * lv1;
        pThongBao.innerHTML = "Số tiền của quý khách " + name + " là: " + totalPayment + " VNĐ";
    }else if (electric>50 && electric<=100) {
        totalPayment = (50 * lv1) + (electric-50) * lv2;
        pThongBao.innerHTML = "Số tiền của quý khách " + name + " là: " + totalPayment + " VNĐ";
    }else if ( electric>100 && electric<=200) {
        totalPayment = (50 * lv1) + (50 * lv2) + (electric - 100) * lv3;
        pThongBao.innerHTML = "Số tiền của quý khách " + name + " là: " + totalPayment + " VNĐ";
    }else if (electric>200 && electric<=350) {
        totalPayment = (50 * lv1) + (50 * lv2) + (100 * lv3) + (electric - 200) * lv4;
        pThongBao.innerHTML = "Số tiền của quý khách " + name + " là: " + totalPayment + " VNĐ";
    }else{
        totalPayment = (50 * lv1) + (50 * lv2) + (100 * lv3) + (150 * lv4) + (electric - 350) * lv5
        pThongBao.innerHTML = "Số tiền của quý khách " + name + " là: " + totalPayment + " VNĐ";

    }
    console.log(name);
    console.log(electric);





    divThongBao.appendChild(pThongBao)
}