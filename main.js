const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const div = document.querySelector('.container');
let date = new Date();

for (let i = 0; i < week.length; i++){
    if(date.getDay() === i+1){
        if(week[i].toLowerCase()==='суббота' || week[i].toLowerCase()==='воскресенье'){
            div.innerHTML += `<span><strong><i>${week[i]}</i></strong></span> <br>`;
        } else{
            div.innerHTML += `<span><strong>${week[i]}</strong></span> <br>`;
        }
    } else{
        if(week[i].toLowerCase()==='суббота' || week[i].toLowerCase()==='воскресенье'){
            div.innerHTML += `<span><i>${week[i]}</i></span> <br>`;
        } else{
            div.innerHTML += `<span>${week[i]}</span> <br>`;
        }
    }
}