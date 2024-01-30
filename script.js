// =====================================================================================================

// // Arrow Function
// // ================================================================
// const tampilkanPesan = () => {
//   return `Hallo World`;
// };
// console.log(tampilkanPesan());

// // ================================================================
// const tampilkanPesan = (nama) => {
//   return `Hallo ${nama}`;
// };
// console.log(tampilkanPesan("dhea ramdani"));

// // ================================================================
// const tampilkanPesan = (waktu, nama) => {
//   return `Selamat ${waktu} ${nama}`;
// };
// console.log(tampilkanPesan("Pagi", "dhea ramdani"));

// // Implisit return
// // ================================================================
// const tampilkanPesan = () => `Hallo World`;
// console.log(tampilkanPesan());

// // ================================================================
// const tampilkanPesan = (nama) => `Hallo ${nama}`;
// console.log(tampilkanPesan("dhea ramdani"));

// // ================================================================
// const tampilkanPesan = (waktu, nama) => `Selamat ${waktu} ${nama}`;
// console.log(tampilkanPesan("Pagi", "dhea ramdani"));

// // Arrow Function Map
// // ================================================================
// let mahasiswa = ["dhea ramdani", "afani akhira", "muhamad luffy"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// // ================================================================
// let mahasiswa = ["dhea ramdani", "afani akhira", "muhamad luffy"];

// let jumlahHuruf = mahasiswa.map((nama) => {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// // ================================================================
// let mahasiswa = ["dhea ramdani", "afani akhira", "muhamad luffy"];

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// // ================================================================
// let mahasiswa = ["dhea ramdani", "afani akhira", "muhamad luffy"];

// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jumlahHuruf: nama.length,
// }));
// console.table(jumlahHuruf);

// // Konsep this pada arrow function
// // Construcktor Function
// const Mahasiswa = function () {
//   this.nama = "Dhea Ramdani";
//   this.umur = 24;
//   this.sayHallo = () => {
//     console.log(
//       `Hallo nama saya ${this.nama}, saya berumur ${this.umur} tahun`
//     );
//   };
// };

// const dhea = new Mahasiswa();

// const Mahasiswa = function () {
//   this.nama = "Dhea Ramdani";
//   this.umur = 24;
//   this.sayHallo = function () {
//     console.log(
//       `Hallo nama saya ${this.nama}, saya berumur ${this.umur} tahun`
//     );
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const dhea = new Mahasiswa();

// // Object Literal
// const Mahasiswa = {
//   nama: "dhea ramdani",
//   umur: 24,
//   sayHallo: function () {
//     console.log(
//       `Hallo nama saya ${this.nama}, saya berumur ${this.umur} tahun`
//     );
//   },
// };

// // CONTOH KASUS
// const box = document.querySelector(".box");
// box.addEventListener("click", function () {
//   let one = "size";
//   let two = "caption";

//   if (this.classList.contains(one)) {
//     [one, two] = [two, one];
//   }

//   this.classList.toggle(one);

//   setTimeout(() => {
//     this.classList.toggle(two);
//   }, 600);
// });
// =====================================================================================================
