function chuyenDoi(){
    let doC = +document.getElementById("c").value;
    let doF = (9 * doC / 5) + 32;
    document.getElementById("output").innerHTML = ": " + doF + "F";
}