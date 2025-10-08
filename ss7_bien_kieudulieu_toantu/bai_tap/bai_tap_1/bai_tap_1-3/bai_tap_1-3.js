function tinhDienTich(){
    let r = parseFloat(document.getElementById("banKinh").value);

    if(isNaN(r) || r<= 0){
        document.getElementById("ketQua").innerText = "Hãy nhập bán kính!";
        return;
    }
    let S = Math.PI * r * r;
    document.getElementById("ketQua").innerHTML = `
        Diện tích hình tròn là: 
        <b>${S.toFixed(2)}</b>
    `;
}