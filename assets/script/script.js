const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const productList = [
    {
        avt: "./assets/img/PeaSocialProfile.png",
        link: "https://duckool.github.io/projects/myProfile/"
    },
    {
        avt: "./assets/img/PeaSocialProfile.png",
        link: "https://duckool.github.io/projects/myProfile/"
    },
    {
        avt: "./assets/img/PeaSocialProfile.png",
        link: "https://duckool.github.io/projects/myProfile/"
    },
    {
        avt: "./assets/img/PeaSocialProfile.png",
        link: "https://duckool.github.io/projects/myProfile/"
    },
    {
        avt: "./assets/img/PeaSocialProfile.png",
        link: "https://duckool.github.io/projects/myProfile/"
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