const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const productList = [
    {
        avt: "https://drive.google.com/uc?id=18u6XDISidqm4AVMEeiMkUV4RCAgL2OJ0",
        link: "https://peakodev.github.io/PeaClock/"
    },
    {
        avt: "https://drive.google.com/uc?id=1qH7r7z6AXWawgyojAyBSomaswyzwpVWo",
        link: "https://peakodev.github.io/PeaMusicPlayer/"
    },
    {
        avt: "./assets/img/PeaSocialProfile.png",
        link: "https://peakodev.github.io/PeaSocialProfile/"
    },
    {
        avt: "https://drive.google.com/uc?id=10ohFOfq261giBJdbEMbUp3mGCf2GQmwy",
        link: "https://peakodev.github.io/PeaPomodoro/"
    },
    {
        avt: "https://drive.google.com/uc?id=1zvEozVLonJ_ZI_pPbxjVf-UWqM4HmNPe",
        link: "https://peakodev.github.io/PeaSnack/"
    },
    {
        avt: "https://drive.google.com/uc?id=1VDQMkGlwHlvE0tZRRZezEwNr2OX4aF-r",
        link: "https://peakodev.github.io/PeaTasks/"
    }
];

const productsRow = $('.products .grid .row');

const app = {
    clear: function() {
        productsRow.innerHTML = ''
    },
    render: function() {
        for(let item of productList) {
            productsRow.innerHTML +=
            `<div class="col l-2 m-3 s-4 xs-12">
                <a target="_blank" href="${item.link}" class="product" style="background-image: url(${item.avt});">
                </a>
            </div>`
        }
    },
    handleEvents: function() {

    },
    start: function() {
        app.clear();
        app.render();
    }
}

window.onload = (event) => {
    setTimeout(() => {
        $('#welcome').style.height = '50vh';
        $('.products').style.display = 'block';         
        app.start();
    },3000)
};
