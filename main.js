const container = document.querySelector('.container'),
    divOne = document.querySelector('.one'),
    divTwo = document.querySelector('.two'),
    daysOfTheWeek = ['Воскресенье', 'Понедельникк', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];


let now = new Date();


//divOne.innerHTML = `Сегодня ${ daysOfTheWeek[now.getDay()]}, ${now.getDate()} ${month[now.getMonth()]} ${now.getFullYear()} года, ${now.getHours()} час ${now.getMinutes()} минут ${now.getSeconds()} секунд `;

function fullDate(){
    let now = new Date();
    let hourString = '';
    let minuteString = '';
    let secondString = '';

    if(now.getSeconds() == 1 || now.getSeconds() ==21 || now.getSeconds() ==31 || now.getSeconds() ==41 || now.getSeconds() ==51){
        secondString = 'секунда';
    } else if ((now.getSeconds() >= 2 && now.getSeconds() <= 4) || (now.getSeconds() >= 22 && now.getSeconds() <= 24) || (now.getSeconds() >= 32 && now.getSeconds() <= 34) || (now.getSeconds() >= 42 && now.getSeconds() <= 44) || (now.getSeconds() >= 52 && now.getSeconds() <= 54)){
        secondString = 'секунды';
    } else{
        secondString = 'секунд';
    }

    if(now.getMinutes() == 1 || now.getMinutes() ==21 || now.getMinutes() ==31 || now.getMinutes() ==41 || now.getMinutes() ==51){
        minuteString = 'минута';
    } else if ((now.getMinutes() >= 2 && now.getMinutes() <= 4) || (now.getMinutes() >= 22 && now.getMinutes() <= 24) || (now.getMinutes() >= 32 && now.getMinutes() <= 34) || (now.getMinutes() >= 42 && now.getMinutes() <= 44) || (now.getMinutes() >= 52 && now.getMinutes() <= 54)){
        minuteString = 'минуты';
    } else{
        minuteString = 'минут';
    }

    if (now.getHours() == 1 || now.getHours() == 21){
        hourString = 'час';
    } else if ((now.getHours() >= 2 && now.getHours() <= 4) || (now.getHours() >= 22 && now.getHours() <= 24)){
        hourString = 'часа';
    } else {
        hourString = 'часов';
    }

    divOne.innerHTML = `Сегодня ${ daysOfTheWeek[now.getDay()]}, ${now.getDate()} ${month[now.getMonth()]} ${now.getFullYear()} года, ${now.getHours()} ${hourString} ${now.getMinutes()} ${minuteString} ${now.getSeconds()} ${secondString} `;
}
setInterval(fullDate, 1000);

function shortDate () {
    let now = new Date();
    let seconds, minutes, hours, day, month, year;

    day = (now.getDate() < 10) ? '0' + now.getDate() : now.getDate();
    month = (now.getMonth() < 9) ? '0' + (+now.getMonth()+1) : now.getMonth()+1;
    seconds = (now.getSeconds() < 10) ? '0' + now.getSeconds() : now.getSeconds();
    minutes = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes();
    hours = (now.getHours() < 10) ? '0' + now.getHours() : now.getHours();
    year = now.getFullYear();

    divTwo.innerHTML = `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;
}
setInterval(shortDate, 1000);