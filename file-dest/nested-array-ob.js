const user = {
    name: "Margi",
    age: 22,
    interest: [
        {
            dev: "Front End Developer",
            language: "Javascript, Python",
        },
        {
            hobby: "Fishing",
            web: "Reddit",
        },
    ],
};

// mengakses isi object yang di dalamnya terdapat array parameter
const {
    interest: [{ dev, language }, { hobby, web }],
} = user;

console.log(dev, language, hobby, web);
