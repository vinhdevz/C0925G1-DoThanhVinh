function tinhChuViHT(){
    let r = parseFloat(document.getElementById('chuVi').value);

    if(isNaN(r) || r <= 0){
        document.getElementById('ketQua').innerText = "Hãy nhập bán kính!";
    }
    let C = 2 * Math.PI * r;
    document.getElementById('ketQua').innerHTML = `
        Chu vi hình tròn là: 
        <b>${C.toFixed(2)}</b>
    `;
}