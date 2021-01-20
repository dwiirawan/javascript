// Constructor
// function User(nama, energi) {
// 	this.nama	= nama;
// 	this.energi	= energi;

// 	this.makan = function(porsi) {
// 		this.porsi 	= porsi
// 		this.energi += porsi
// 		console.log( `${this.nama} makan ${this.porsi} porsi` )
// 	}

// 	this.main = function(jam) {
// 		this.jam	= jam
// 		this.energi -= jam;
// 		console.log( `${this.nama} bermain ${this.jam} jam` )
// 	}
// }

// var user1 = new User('Dwi', 1000);

// Object create
const methodUser = {
	makan: function(porsi) {
		this.energi += porsi;
		console.log(`Halo ${this.nama}, selamat makan!`);
	},

	main: function(jam) {
		this.energi -= jam;
		console.log(`Halo ${this.nama}, selamat tidur!`);
	}
}

function User(nama, energi) {
	let user = Object.create(methodUser);
	user.nama	= nama;
	user.energi	= energi;
	return user;
}
let user1 = User('Dwi', 1000);
let user2 = User('Irawan', 750);