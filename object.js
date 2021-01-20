// Webprogramming UNPAS
// Contoh object bernama Orang
var Orang = {
	nama: 'Sandhika Galih',		// property
	umur: 31,					// property
	pekerjaan: 'Dosen',			// property
	sapa: function() {			// method
		return `Hi, nama saya ` + this.nama +
				` usia saya ` + this.umur + ` tahun,
				dan saya adalah seorang ` + this.pekerjaan;
	}
}


// Cara membuat Object dalam Javascript
// 1. Object Literal
let mahasiswa = {
	nama: 'Sandhika',
	energi: 10,
	makan: function(porsi) {
		this.energi = this.energi + porsi;
		console.log(`Halo ${this.nama}, selamat makan!`);
	}
}

// 2. Function Declaration (keyword return)
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
	var mhs = {};
	mhs.nama 	= nama;
	mhs.nrp 	= nrp;
	mhs.email 	= email;
	mhs.jurusan = jurusan;
	return mhs;
}
var mhs3 = buatObjectMahasiswa('Nofariza', '0023421', 'nofa@yahoo.com', 'Teknik Pangan')

// 3. Constructor Function (keyword new)
function Mahasiswa(nama, nrp, email, jurusan) {
	// var this = {};
	this.nama 	 = nama;
	this.nrp 	 = nrp;
	this.email 	 = email;
	this.jurusan = jurusan;
	// return this;
}
var mhs4 = new Mahasiswa('Erick', '0043254', 'erik@icloud.com', 'Teknik Mesin');

// 4. Object create