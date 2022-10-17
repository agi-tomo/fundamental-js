const user = {
    name: "Margi Nur Utomo",
    age: "22",
    gender: "Male",
    interest: {
        dev: "Front End Developer",
        language: "Javascript, Python",
    },
};
const { name, age, ...restUser } = user;

console.log("Name : " + name);
console.log("Name : " + age);
console.log(restUser);
