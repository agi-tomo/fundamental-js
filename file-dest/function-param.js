

function greeting({ name }) {
    return `Hallo , ${name}`;
}
const user = {
    name: "Margi Nur Utomo",
    age: "22",
    gender: "Male",
    interest: {
        dev: "Front End Developer",
        language: "Javascript, Python",
    },
};
console.log(greeting(user));
