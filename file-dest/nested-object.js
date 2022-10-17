// cara mengakses isi nested object
const user = {
    name: "Margi",
    age: "22",
    gender: "Male",
    interest: {
        dev: "Front End Developer",
        language: "Javascript, Python",
    },
};

//destructuring nested object
const {
    interest: { dev, language },
} = user;

console.log("Interest dev : " + dev);
console.log("Interest language : " + language);
