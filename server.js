const express = require('express');
const path = require('path'); // Import path untuk menangani jalur file dengan lebih aman
const app = express();

// Menyajikan file statis seperti HTML, CSS, dan JavaScript
app.use(express.static(path.join(__dirname, 'public')));

// Mengatur routing untuk halaman index.html jika diakses melalui '/index.html'
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Menambahkan rute default yang mengarah ke index.html saat mengakses root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

// Menjalankan server di port 3000 dengan custom hostname
app.listen(3000, 'localhost', () => {
  console.log('Server berjalan di http://localhost:3000');
});

// Menambahkan rute untuk mengambil gambar dari URL
app.get('/image', (req, res) => {
  const url = req.query.url;
  const imageUrl = url.replace('https://', '');
  res.sendFile(imageUrl);
});