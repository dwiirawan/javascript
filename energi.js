// Constructor
function User(nama, energi) {
	this.nama	= nama;
	this.energi	= energi;

	this.makan = function(porsi) {
		this.porsi 	= porsi
		this.energi += porsi
		console.log( `${this.nama} makan ${this.porsi} porsi` )
	}

	this.main = function(jam) {
		this.jam	= jam
		this.energi -= jam;
		console.log( `${this.nama} bermain ${this.jam} jam` )
	}
}

var user1 = new User('Dwi', 1000);