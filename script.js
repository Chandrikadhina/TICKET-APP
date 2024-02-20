// Input nama
const nama = prompt("Masukkan Nama:");

// Input umur
const umur = prompt("Masukkan Umur:");

// Cek umur
if (umur >= 13) { // Mengubah kondisi menjadi umur >= 13
    // Pilih studio
    const studio = prompt("Pilih studio (A, B, atau C):").toUpperCase();

    // Tampilkan tiket berdasarkan studio
    if (studio === "A") {
        alert(`Tiket ${nama}, Studio A, Umur ${umur}`);
    } else if (studio === "B") {
        alert(`Tiket ${nama}, Studio B, Umur ${umur}`);
    } else if (studio === "C") {
        alert(`Tiket ${nama}, Studio C, Umur ${umur}`);
    } else {
        alert("Studio tidak valid.");
    }
} else {
    // Umur kurang dari 13 atau tidak valid
    alert("Maaf, Anda tidak boleh masuk studio karena umur kurang dari 13 tahun.");
}
