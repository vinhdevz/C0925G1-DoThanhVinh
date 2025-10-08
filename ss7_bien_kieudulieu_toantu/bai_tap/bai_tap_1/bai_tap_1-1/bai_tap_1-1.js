function tongDiemTB(){
    let hoahoc = parseFloat(document.getElementById("hoahoc").value);
    let vatly = parseFloat(document.getElementById("vatly").value);
    let sinhhoc = parseFloat(document.getElementById("sinhhoc").value);

    if(isNaN(hoahoc) || isNaN(vatly) || isNaN(sinhhoc)){
        document.getElementById("diemTB").innerText = "Hãy nhập điểm của bạn";
        return;
    }
    let diemTB = (hoahoc + vatly + sinhhoc)/3;
    document.getElementById("diemTB").innerHTML = `
        Điểm trung bình của bạn là : 
        <b>${diemTB.toFixed(2)}</b>
    `;
}