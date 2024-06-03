//Import library and framework yang dibutuhkan
const express = require('express');
constbodyParser = require('body-parser');
const mysql = require('mysql');

// Inisialisasi express app
const app = express();
const port = 3000;

// Konfigurasi MySQL
const db = mysql.createConnection({
    host: "0.0.0.0",
    user: 'root',
    password: 'password',
    database: 'mytax_database'
});

// Connect ke database MySQL
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Middleware untuk memproses body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Definisikan endpoint untuk layanan MyTax
app.post('/mytax', (req, res) => {
    const { kode_layanan, jenis_layanan, tanggal_layanan, npwp_klien, nama_klien, id_karyawan, nama_karyawan } = req.body;
  
    // Simpan data layanan MyTax ke dalam tabel MyTax di database
    const sql = `INSERT INTO mytax (kode_layanan, jenis_layanan, tanggal_layanan, npwp_klien, nama_klien, id_karyawan, nama_karyawan) 
               VALUES ('${kode_layanan}', '${jenis_layanan}', '${tanggal_layanan}', '${npwp_klien}', '${nama_klien}', '${id_karyawan}', '${nama_karyawan}')`;
  
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Data MyTax berhasil disimpan');
        res.send('Data MyTax berhasil disimpan');
  });
});

// Definisikan endpoint untuk data Karyawan KKP
app.post('/karyawan-kkp', (req, res) => {
    const { id_karyawan, npwp, nama, jabatan, alamat, tempat_tanggal_lahir, jenis_kelamin, no_telp_hp, ptkp, gaji_pokok, tunjangan } = req.body;
  
    // Simpan data karyawan KKP ke dalam tabel Karyawan KKP di database
    const sql = `INSERT INTO karyawan_kkp (id_karyawan, npwp, nama, jabatan, alamat, tempat_tanggal_lahir, jenis_kelamin, no_telp_hp, ptkp, gaji_pokok, tunjangan) 
                VALUES ('${id_karyawan}', '${npwp}', '${nama}', '${jabatan}', '${alamat}', '${tempat_tanggal_lahir}', '${jenis_kelamin}', '${no_telp_hp}', '${ptkp}', '${gaji_pokok}', '${tunjangan}')`;
  
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Data Karyawan KKP berhasil disimpan');
        res.send('Data Karyawan KKP berhasil disimpan');
  });
});

// Definikan endpoint untuk data DITJEN Pajak RI
app.post('/ditjen-pajak-ri', (req, res) => {
    const { id_karyawan, npwp, nama_karyawan, jabatan, alamat, tempat_tanggal_lahir, jenis_kelamin, no_telp_hp, ptkp, gaji_pokok, tunjangan } = req.body;

    // Simpan data DITJEN Pajak RI ke dalam tabel Ditjen Pajak RI di database
    const sql = `INSERT INTO ditjen_pajak_ri (id_karyawan, npwp, nama_karyawan, jabatan, alamat, tempat_tanggal_lahir, jenis_kelamin, no_telp_hp, ptkp, gaji_pokok, tunjangan)
                VALUES ('${id_karyawan}', '${npwp}', '${nama_karyawan}', '${jabatan}', '${alamat}', '${tempat_tanggal_lahir}', '${jenis_kelamin}', '${no_telp_hp}', '${ptkp}', '${gaji_pokok}', '${tunjangan}' )`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Data DITJEN Pajak RI berhasil disimpan');
        res.send('Data DITJEN Pajak RI berhasil disimpan');
    });
});

// Definisikan endpoint untuk Instrumen Pembayarann
app.post('/instrumen-pembayaran', (req, res) => {
    const { kode_referensi_bank, nama_bank, kode_billing_pembayaran, rekening, nomor_kartu_kredit_debit, kode_otp } = req.body;

    // Simpan data Intrumen Pembayaran ke dalam tabel Intrumen Pembayaran
    const sql = `INSERT INTO instrumen_pembayaran (kode_referensi_bank, nama_bank, kode_billing_pembayaran, rekening, nomor_kartu_kredit_debit, kode_otp)
                VALUES ('${kode_referensi_bank}', '${nama_bank}', '${kode_billing_pembayaran}', '${rekening}', '${nomor_kartu_kredit_debit}', '${kode_otp}' )`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Data Instrumen Pembayaran berhasil disimpan');
        res.send('Data Instrumen Pembayaran berhasil disimpan');
    });
});

// Definisikan endpoint untuk Wajib Pajak
app.post('/wajib-pajak', (req, res) => {
    const { npwp, nama, alamat, no_telp_hp, tanggal_pengukuhan, jenis_usaha } = req.body;

    // Simpan data Wajib Pajak ke dalam tabel Wajib Pajak
    const sql = `INSERT INTO wajib_pajak (npwp, nama, alamat, no_telp_hp, tanggal_pengukuhan, jenis_usaha)
                VALUES ('${npwp}', '${nama}', '${alamat}', '${no_telp_hp}', '${tanggal_pengukuhan}', '${jenis_usaha}' )`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Data Wajib Pajak berhasil disimpan');
        res.send('Data Wajib Pajak berhasil disimpan');
    });
});

// Definisikan endpoint untuk Faktur Pajak
app.post('/faktur-pajak', (req, res) => {
    const { nomor_faktur, tanggal_faktur, npwp_penjual, nama_penjual, npwp_pembeli, nama_pembeli, alamat_pembeli, mata_uang_transaksi, total_nilai_barang_jasa, ppn, kode_barang_jasa, nama_barang_jasa, satuan, harga_satuan, jumlah, sub_total } = req.body;

    // Simpan data Faktur Pajak ke dalam tabel Faktur Pajak
    const sql = `INSERT INTO faktur_pajak (nomor_faktur, tanggal_faktur, npwp_penjual, nama_penjual, npwp_pembeli, nama_pembeli, alamat_pembeli, mata_uang_transaksi, total_nilai_barang_jasa, ppn, kode_barang_jasa, nama_barang_jasa, satuan, harga_satuan, jumlah, sub_total)
                VALUES ('${nomor_faktur}', '${tanggal_faktur}', '${npwp_penjual}', '${nama_penjual}', '${npwp_pembeli}', '${nama_pembeli}', '${alamat_pembeli}', '${mata_uang_transaksi}', '${total_nilai_barang_jasa}', '${ppn}', '${kode_barang_jasa}', '${nama_barang_jasa}', '${satuan}', '${harga_satuan}', '${jumlah}', '${sub_total}' )`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Data Faktur Pajak berhasil disimpan');
        res.send('Data Faktur Pajak berhasil disimpan');
    });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan pada http://0.0.0.0:${port}`);
});