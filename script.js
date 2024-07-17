document.getElementById("btnHitung").addEventListener("click", function(event) {
    event.preventDefault(); // untuk mencegah submit dan reload ketika tombol Hitung diklik

    let berat = document.getElementById("berat");
    let tinggi = document.getElementById("tinggi");
    let bmi = berat.value / ((tinggi.value / 100) * (tinggi.value / 100));
    let resultSection = document.querySelector(".resultBMI");
    
    if (berat.value && tinggi.value) {
        document.getElementById("hasilBMI").innerHTML = bmi.toFixed(2);
    } else {
        document.getElementById("hasilBMI").innerHTML = "Masukkan berat dan tinggi yang valid";
        resultSection.style.display = "block";
        return;
    }

    if (bmi < 18.5) {
        document.getElementById("statusBMI").innerHTML = "Kekurusan";
        document.getElementById("tipsBMI").innerHTML = `
        <ul>
            <li>Tingkatkan konsumsi protein untuk mencapai berat badan ideal</li>
            <li>Untuk mencapai berat badan ideal kamu perlu makan makanan bergizi dan tingkatkan frekuensi makan</li>
            <li>Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat</li>
        </ul>
        `;
        resultSection.style.backgroundColor = "#0033cc";
        resultSection.style.color = "white";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("statusBMI").innerHTML = "Normal";
        document.getElementById("tipsBMI").innerHTML = `
        <ul>
            <li>Untuk mempertahankan BMI normal, lakukan aktifitas fisik 3 kali dalam seminggu</li>
            <li>Pertahankan pola makan saat ini agar tetap dalam kondisi optimal</li>
        </ul>
        `;
        resultSection.style.backgroundColor = "#009933";
        resultSection.style.color = "white";
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("statusBMI").innerHTML = "Kegemukan";
        document.getElementById("tipsBMI").innerHTML = `
        <ul>
            <li>Jaga pola makan dengan mengurangi makanan tinggi gula dan tinggi lemak untuk mencapai berat badan ideal</li>
            <li>Tingkatkan aktivitas dan berolahraga secara teratur</li>
            <li>Lakukan pola hidup sehat (tidak merokok, tidak minum beralkohol)</li>
        </ul>
        `;
        resultSection.style.backgroundColor = "yellow";
    } else if (bmi >= 30) {
        document.getElementById("statusBMI").innerHTML = "Obesitas";
        document.getElementById("tipsBMI").innerHTML = `
        <ul>
            <li>Jaga pola makan dengan mengurangi makanan tinggi gula dan tinggi lemak</li>
            <li>Tingkatkan aktivitas dan berolahraga secara teratur</li>
            <li>Lakukan pola hidup sehat (tidak merokok, tidak minum beralkohol)</li>
        </ul>
        `;
        resultSection.style.backgroundColor = "red";
    }

    document.querySelector(".resultBMI").style.display = "block"; // Tampilkan resultBMI setelah hitung
});
