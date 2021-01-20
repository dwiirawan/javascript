// versi prototype
// function Mahasiswa(nama, energi) {
// 	// let this = Object.create(Mahasiswa.prototype);
// 	this.nama	= nama,
// 	this.energi	= energi
// 	// return this;
// }

// Mahasiswa.prototype.makan = function (porsi) {
// 	this.energi += porsi;
// 	return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
// 	this.energi -= jam;
// 	return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
// 	this.energi = jam * 2;
// 	return `Halo ${this.nama}, selamat tidur!`;
// }


// let sandhika = new Mahasiswa('Sandhika', 10);

// versi Class
class Mahasiswa {
	constructor(nama, energi) {
		this.nama	= nama;
		this.energi	= energi;
	}

	makan(porsi) {
		this.energi += porsi;
		return `Halo ${this.nama}, selamat makan!`;
	}

	main(jam) {
		this.energi -= jam;
		return `Halo ${this.nama}, selamat bermain!`;
	}

	tidur(jam) {
		this.energi = jam * 2;
		return `Halo ${this.nama}, selamat tidur!`;
	}
}

let sandhika = new Mahasiswa('Sandhika', 10);
let doddy = new Mahasiswa('Doddy', 20);