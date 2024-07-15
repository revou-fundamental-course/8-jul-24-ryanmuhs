function hitungBMI(){
    let berat = document.getElementById("berat");
    let tinggi = document.getElementById("tinggi");
    let bmi = berat.value / (tinggi.value * tinggi.value);
    document.getElementById("hasilBMI").innerHTML = bmi;
}