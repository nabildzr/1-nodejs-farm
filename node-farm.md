# REPL (read-eval-print loop)
    REPL (baca-evaluasi-print loop) adalah sebuah perintah yang memungkinkan kita untuk menulis kode javascript dan langsung dieksekusi dan hasilnya langsung di print ke layar. Kita dapat menggunakan REPL untuk mencoba-coba kode kita atau untuk mempelajari sintaks javascript.

    write node in terminal then press enter
    exit from repl: .exit atau CTRL + D

    double tap tab di terminal node js: untuk menampilkan semua fungsi, properti, dan metode yang bisa kita gunakan. Dengan demikian, kita bisa lebih mudah memahami sintaks javascript dan mencoba-coba fungsi yang ada.

# FS Module
    Modul FS (File System) adalah modul bawaan Node.js yang memungkinkan kita untuk berinteraksi dengan file dan direktori di dalam sistem operasi. Dengan menggunakan modul ini, kita dapat membuat, menghapus, membaca, dan menulis file, serta melakukan berbagai operasi lain terhadap file dan direktori.

# How To Read Data from File


# Lecture:
 Blocking and non-blocking:
    asynchronous nature of nodejs

    Synchronous vs Asynchronous

    Synchronous:
     const fs = require('fs');
     
     // blocking code exception
     // menyimpan data ke dalam variable disebut dengan cara sinkron yang dimana statement pada dasarnya diproses satu demi satu, baris demi baris (line by line)
     const input = fs.readFileSync('./final/txt/input.txt', 'utf-8');
     console.log(input);

    kode Synchronous juga disebut kode pemblokiran karena, operasi tertentu hanya dapat dijalankan setelah yang sebelumnya finish (selesai)


    Asynchronous:
        
        maka dari itu dibuat lah asynchronous code di dalam nodejs, yang dimana di Node adalah dengan menggunakan kode non-blocking asynchronous code, disimpulkan bahwa asynchronous ini juga disebut dengan asynchronous nature (bersifat non-blocking).
        


     di dalam asynchronous, kita mengunggah pekerjaan berat untuk di kerjakan di latar belakang, dan kemudian setelah pekerjaan itu selesai, fungsi panggilan balik yang kita daftarkan sebelumnya di panggil untuk menyelesaikan pekerjaan tersebut (menangani hasilnya). dan selama itu, sisa kode masih bisa dieksekusi tanpa terhalang oleh tugas berat yang sekarang berjalan di latar belakang

     jadi ini berarti bahwa kita dapat secara efektif menunda atau bereaksi ke masa depan untuk membuat kode non-blocking

     code:
      const fs = require('fs');

      fs.readFile('input.txt, 'utf-8', (err, data) => {
        console.log(data);
      });

      console.log('Reading file...');

     di contoh atas ini, kita menggunakan fungsi readFile asynchronous, yang menerima fungsi panggilan balik, Ini akan mulai membaca file di latar belakang dan kemudian, segera beralih ke statement (pernyataan) berikutnya, mencetak file readFile ke konsole (console.log('...)).

     dan setelah file selesai di baca (readed) maka fungsi panggilan balik akan di panggil, dan data yang telah ter readed (dibaca) akan di cetak ke konsole (console.log(data)).

     
   
   
# Mengapa kita benar-benar menggunakan callback berkali-kali di NodeJS?
 ## The Asynchronous Nature of NodeJS: An Overview
    kita perlu pahami bahwa NodeJS yang merupakan tempat aplikasi kita berjalan, hanya ada satu utas (single thread) dan single threads nya ini seperti sekumpulan intruksi yang dijalankan di CPU Komputer.

    jadi pada dasarnya, Single Threads adalah tempat kode kita sebenarnya di eksekusi di processor mesin

    untuk setiap aplikasi, hanya ada satu thread, artinya semua pengguna yang mengakses aplikasi kita itu menggunakan thread yang sama,
    basically: Accessing the same threads

    jadi, setiap kali mereke berinteraksi dengan aplikasi, kode yang dijalankan untuk setiap pengguna akan dieksekusi semua di thread yang sama di tempat yang sama di komputer yang menjalankan aplikasi, dan itu benar tidak peduli jika kita memiliki lima pengguna atau 5.000 atau 5.000.000 pengguna


## Routing
    Routing, pada dasarnya, adalah proses menerapkan tindakan yang berbeda-beda
    berdasarkan permintaan yang diterima oleh aplikasi web kita.
    contoh, jika kita memiliki aplikasi web yang memiliki dua route (alur), seperti '/about' dan '/contact', maka kita perlu menulis kode yang berbeda untuk setiap route.

    

# HTML Templating