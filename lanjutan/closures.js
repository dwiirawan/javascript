// CLosure adalah function yang memiliki return function yang lain

// Lexical Scope
// Cara 1
// function init() {
// 	let nama = 'Sandhika';	// local variable
// 	function tamilNama() {	// inner function (closure)
// 		console.log(nama);	// akses ke parent variable
// 	}
// 	tamilNama();
// }
// init();

// Cara 2
// function init() {
// 	return function(nama) {
// 		console.log(nama);
// 	}
// }
// let panggilNama = init();
// panggilNama('Sandhika');
// panggilNama('Galih');

// Alasan menggunakan closure
// - Membuat function factory
// function ucapkanSalam(waktu) {	// lexical
// 	return function(nama) {
// 		console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`)
// 	}
// }
// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Sandika');
// selamatMalam('Galih');

// - Membuat private method
let add = function() {
	let counter = 0;
	return function() {
		return ++counter;
	}
}
let a = add();
console.log(a());
console.log(a());

// let add = (function() {
// 	let counter = 0;
// 	return function() {
// 		return ++counter;
// 	}
// }) ();
// console.log(add());
// console.log(add());