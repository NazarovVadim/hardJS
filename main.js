let num = 266219;
console.log(num.toString().split('').reduce((mult, curr) => mult * curr));
console.log((num.toString().split('').reduce((a, b) => a * b ) **3).toString().slice(0, 2));

let lang = 'ru';

if (lang == 'ru') console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
else if (lang == 'en') console.log('sunday, monday, tusday, wensday, thursday, friday, saturday');

switch (lang){
    case 'ru':
        console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case 'en':
        console.log('sunday, monday, tusday, wensday, thursday, friday, saturday');
        break;
}

let arrDays = [
    ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    ['sunday', 'monday', 'tusday', 'wensday', 'thursday', 'friday', 'saturday']
];
let res = (lang == 'ru') ? 0 : (lang == 'ru') ? 1 : 'неверный язык';
console.log(arrDays[res]);

let namePerson = 'Максим';

res = (namePerson == 'Артем') ? console.log('Директор') : (namePerson == 'Максим') ? console.log('Преподаватель') : console.log('Студент');

