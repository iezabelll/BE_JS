// Fungsi untuk menampilkan hasil download
const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  };
  
  // Fungsi untuk download file menggunakan Promise
  const download = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = "windows-10.exe";
        resolve(result);
      }, 3000);
    });
  };
  
  // Penggunaan async/await untuk melakukan download dan menampilkan hasilnya
  const initiateDownload = async () => {
    try {
      const result = await download();
      showDownload(result);
    } catch (error) {
      console.error("Error saat download:", error);
    }
  };
  
  // Memulai proses download
  initiateDownload();
  