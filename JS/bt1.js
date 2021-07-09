

function xacNhan() {
    //input
    let diemChuan = document.getElementById("diemChuan").value;
    let diemToan = document.getElementById("diemToan").value;
    let diemLy = document.getElementById("diemLy").value;
    let diemHoa = document.getElementById("diemHoa").value;
    let diemKV = +document.getElementById("diemKV").value;
    let diemDT = +document.getElementById("diemDT").value;
    
    //xử lý
    let diemTongKet;
    let divThongBao =document.getElementById('card-footer');
    divThongBao.innerHTML = "";
    let pThongBao = document.createElement("h3");
    if (diemChuan === "" || diemToan=== "" || diemLy=== "" || diemHoa === "" ){
        alert("Mời bạn nhập đầy đủ thông tin")
    }
    else if (diemToan<=0 || diemLy<=0 || diemHoa<=0) {
        
        pThongBao.innerHTML = "Bạn không đậu. Chúc may mắn lần sau :3 ";


    } else{
        diemTongKet = parseInt(diemToan) + parseInt(diemLy) + parseInt(diemHoa) + parseInt(diemKV)+ parseInt(diemDT);
        if (diemTongKet < diemChuan ){
            
            pThongBao.innerHTML = "Bạn không đậu. Chúc may mắn lần sau :3 ";
        }else{
            
            pThongBao.innerHTML = "Bạn đã đậu với số điểm: " + diemTongKet + " điểm";
        }
    }
    
    
    
    
    
    divThongBao.appendChild(pThongBao);
}
