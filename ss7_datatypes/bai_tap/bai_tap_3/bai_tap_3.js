function layGiaTri(){
    const val1 = document.getElementById('so1').value;
    const val2 =document.getElementById('so2').value;

    if(val1 === '' || val2 === ''){
        alert("Vui lòng nhập đầy đủ 2 số!");
        return null;
    }
    const so1 = parseFloat(val1);
    const so2 = parseFloat(val2);
    return {so1, so2};
}
function tinhCong(){
    const values = layGiaTri();
    if(!values) return;
    const {so1, so2} = values;
    document.getElementById('ketQua').innerText = "Kết quả:" + (so1 + so2);
}
function tinhTru(){
    const values = layGiaTri();
    if(!values) return;
    const {so1, so2} = values;
    document.getElementById('ketQua').innerText = "Kết quả: " + (so1 - so2);
}
function tinhNhan(){
    const values = layGiaTri();
    if(!values) return;
    const {so1, so2} = values;
    document.getElementById('ketQua').innerText = "Kết quả: " + (so1 * so2);
}
function tinhChia(){
    const values = layGiaTri();
    if(!values) return;
    const {so1, so2} = values;

    if(so2 === 0){
        alert("Không thể chi cho 0!");
        return;
    }
    document.getElementById('ketQua').innerText = "Kết quả: " + (so1 / so2);
}