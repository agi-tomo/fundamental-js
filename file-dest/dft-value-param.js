function kondisi({
    name = "",
    //     membuat default value
    provinsi: { pulau, daerah } = { pulau: 0, daerah: 0 },
}) {
    console.log(name, pulau, daerah);
}

const bontang = {
    name: "Bontang",
    provinsi: {
        pulau: "Kalimantan",
        daerah: "Kaltim",
    },
};

kondisi(bontang);
