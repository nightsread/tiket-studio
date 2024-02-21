alert("Selamat Datang di Studio X!")

const nama = prompt("Masukkan Nama Anda : ")
const umur = prompt("Masukkan Umur Anda : ")

if (umur >= 13) {
    let studio = prompt("Pilih studio (A, B, atau C):");
    
    if (studio === "A" || studio === "B" || studio === "C") {
        alert(`Tiket ${nama}, Studio ${studio}, Umur ${umur}`);
    } else {
        alert("Pilihan studio tidak valid.");
    }
} else {
  alert(`Mohon maaf, Anda tidak boleh masuk studio.`);
}
