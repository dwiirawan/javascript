// This
console.log(window === this);

var a = 10;
console.log(this.a);



// Object Literal
var obj = { b: 20, nama: 'Sandhika' };
obj.haloLiteral = function() {
	console.log(this);
	console.log('halo Object Literal')
}
obj.haloLiteral();
// this mengembalikan object yang bersangkutan


// Function declaration
function haloDeclaration() {
	console.log(this);
	console.log('halo Object Declaration');
}
this.haloDeclaration();
// this mengembalikan object global


// // Constructor
function HaloConstructor() {
	console.log(this);
	console.log('Halo Object Constructor');
}
var obj1 = new HaloConstructor();
// this mengembalikan object yang baru dibuat