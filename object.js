const mahasiswa = {
    // Object dengqn properties di dalam object
    "nama lengkap": "Margi Nur Utomo",
    prodi: "Teknik Komputer",
    nim: 19620014,
};
// mengubah properties di object
mahasiswa["nama"] = "Margi Nur Utomo";
mahasiswa["prodi"] = "TI";
mahasiswa["umur"] = 22;
mahasiswa["nim"] = 05142;

delete mahasiswa["nama lengkap"];

console.table(mahasiswa);
console.info(`Nama : ${mahasiswa["nama lengkap"]}`);
console.info(`Prodi : ${mahasiswa.prodi}`);
console.info(`NIM : ${mahasiswa.nim}`);
