let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let mainInfoLanguage2 = document.getElementById('main-info-language2');


burger.onclick = function () {
    menu.classList.add('open');
    mainInfoLanguage2.style.display = 'block';
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        menu.classList.remove('open');
        mainInfoLanguage2.style.display = 'none';
    }
})


let textEl = document.getElementById('about-title');
let isAgain = false;

textEl.addEventListener('click', () => {
    if (!isAgain) {
        textEl.innerHTML = 'Обо мне';
        document.getElementById('about-text').innerHTML =
            "            <div>\n" +
            "                <span>Привет, я Денис – UX/UI дизайнер из Минска.</span>\n" +
            "                <span>Меня интересует дизайн и всё, что с ним связано.</span>\n" +
            "            </div>\n" +
            "            <div>\n" +
            "                <span>Учусь на курсах \"Веб- и мобильный дизайн </span>\n" +
            "                <span>интерфейсов\" в IT-Академии.</span>\n" +
            "            </div>\n" +
            "            <div>\n" +
            "                <span>Готов реализовывать отличные проекты</span>\n" +
            "                <span> с замечательными людьми.</span>\n" +
            "            </div>";
        isAgain = true;
    } else {
        textEl.innerHTML = 'About me';
        document.getElementById('about-text').innerHTML =
            '            <div>\n' +
            '                <span >Hi, I\'m Denis – UX/UI designer from Minsk.</span>\n' +
            '                <span>I\'m interested in design and everything connected with it.</span>\n' +
            '            </div>\n' +
            '            <div>\n' +
            '                <span>I\'m studying at courses "Web and mobile design</span>\n' +
            '                <span>interfaces" in IT-Academy.</span>\n' +
            '            </div>\n' +
            '            <div>\n' +
            '                <span>Ready to implement excellent projects</span>\n' +
            '                <span>with wonderful people.</span>\n' +
            '            </div>';
        isAgain = false;
    }
})


function format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

function updateTime() {
    let timeElement = document.getElementById("time");
    let currentTime = new Date();
    let hour = format(currentTime.getHours());
    let minutes = format(currentTime.getMinutes());
    let seconds = format(currentTime.getSeconds());
    timeElement.innerHTML = hour + ":" + minutes + ":" + seconds;
}

updateTime();
setInterval(updateTime, 60000);



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}
