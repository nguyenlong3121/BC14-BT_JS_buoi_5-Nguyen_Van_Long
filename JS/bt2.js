
const lv1 = 500;
const lv2 = 650;
const lv3 = 850;
const lv4 = 1100;
const lv5 = 1300;
const pleaseInput = "Vui lòng nhập tên khách hàng";
const mesValidateElectric = "Lượng điện tiêu thụ không hợp lệ";

function xacNhan() {
  let name = document.getElementById("name").value;
  let electric = document.getElementById("electric").value;
  let divThongBao = document.getElementById("thongBao");
  divThongBao.innerHTML = "";
  let pThongBao = document.createElement("h3");
  if (name.length <= 0) {
    document.getElementById("name").focus();
    alert(pleaseInput);
  } else if (electric <= 0) {
    document.getElementById("electric").focus();
    alert(mesValidateElectric);
  } else {
    pThongBao.innerHTML = resultMoney(name, detectLevel(electric));
    divThongBao.appendChild(pThongBao);
    document.getElementById("name").value = "";
    document.getElementById("electric").value = "";
  }
}

function detectLevel(electric) {
  switch (true) {
    case electric > 0 && electric <= 50:
      return electric * lv1;

    case electric > 50 && electric <= 100:
      return 50 * lv1 + (electric - 50) * lv2;

    case electric > 100 && electric <= 200:
      return 50 * lv1 + 50 * lv2 + (electric - 100) * lv3;

    case electric > 200 && electric <= 350:
      return 50 * lv1 + 50 * lv2 + 100 * lv3 + (electric - 200) * lv4;

    case electric > 350:
      return (
        50 * lv1 + 50 * lv2 + 100 * lv3 + 150 * lv4 + (electric - 350) * lv5
      );
    default:
      return 0;
  }
}

function resultMoney(name, totalPayment) {
  if (name && totalPayment) {
    return `Số tiền của quý khách <span style="color:#3bafee"> ${name} </span> là: ${totalPayment.toLocaleString()} VNĐ`;
  }
  return `<span style="color:red">Some thing went wrong</span>`;
}




    // demo1
    // function xacNhan(){
    //     // input
    //     let name = document.getElementById("name").value;
    //     let electric = +document.getElementById("electric").value;
    //     const lv1 = 500;
    //     const lv2 = 650;
    //     const lv3 = 850;
    //     const lv4 = 1100;
    //     const lv5 = 1300;
    //     let totalPayment;
        
        
    //     //xử lý
    //     let divThongBao = document.getElementById("thongBao")
    //     divThongBao.innerHTML= ""
    //     let pThongBao = document.createElement("h3");
    //     if (name === null || electric === null) {
    //         alert("Mời bạn nhập đầy đủ thông tin")
    //     }else if (electric<=0){
    //         alert("Lượng điện tiêu thụ phải không đúng. Mời nhập lại xin cảm ơn!!!")
    //     }else if (electric<=50) {
    //         totalPayment = electric * lv1;
    //         pThongBao.innerHTML = "Số tiền của quý khách " + name + " là: " + totalPayment + " VNĐ";
    //     }else if (electric>50 && electric<=100) {
    //         totalPayment = (50 * lv1) + (electric-50) * lv2;
    //         pThongBao.innerHTML = "Số tiền của quý khách " + name + " là: " + totalPayment + " VNĐ";
    //     }else if ( electric>100 && electric<=200) {
    //         totalPayment = (50 * lv1) + (50 * lv2) + (electric - 100) * lv3;
    //         pThongBao.innerHTML = "Số tiền của quý khách " + name + " là: " + totalPayment + " VNĐ";
    //     }else if (electric>200 && electric<=350) {
    //         totalPayment = (50 * lv1) + (50 * lv2) + (100 * lv3) + (electric - 200) * lv4;
    //         pThongBao.innerHTML = "Số tiền của quý khách " + name + " là: " + totalPayment + " VNĐ";
    //     }else{
    //         totalPayment = (50 * lv1) + (50 * lv2) + (100 * lv3) + (150 * lv4) + (electric - 350) * lv5
    //         pThongBao.innerHTML = "Số tiền của quý khách " + name + " là: " + totalPayment + " VNĐ";
    
    //     }
    //     console.log(name);
    //     console.log(electric);
    
    
    
    
    
    //     divThongBao.appendChild(pThongBao)
    // }



