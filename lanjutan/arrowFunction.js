// Function Expression
// const tampilNama = function(nama) {
// 	return `Halo, ${nama}`;
// }
// console.log(tampilNama('Sandhika'));

// Arrow Function
// let tampilNama = (nama, waktu) => {
// 	return `Selamat, ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Erik', 'Malam'));

// Implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log('Doddy Ferdiansyah');

// Expression
// let mahasiswa = ['Sandhika Galih', 'Doddy Ferdiansyah', 'Erik'];
// let jumlahHuruf = mahasiswa.map(function(nama) {
// 	return nama.length;
// });
// console.log(jumlahHuruf);

// Arrow function
let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);