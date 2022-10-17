//  Desctruction adalah ekstraksi isi object agar dapat diakses

// bila melakukan desctruction jika tidak ada isi dari object
const user = {
    name: "Margi",
    age: "22",
    //     gender: "male",
};

// convensional
// let name = user.name;
// let age = user.age;
// let gender = user.gender;

// desctruction
// jika ingin mengganti nama dalam discruction dapat menggunakan : baru nama variabel baru
let { name: userName, age, gender = "Male" } = user;

console.log("Name : " + userName);
console.log("Age : " + age);
console.log("Gender : " + gender);
