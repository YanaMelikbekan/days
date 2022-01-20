'use strict';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day = document.querySelector('#day'); 
const today = new Date();

const days = () => {
    week.forEach((elem, i) => {
        const thisDay = document.createElement('div'); 
        if (i == +((6 + today.getDay()) % 7)) { 
            thisDay.classList.add('today'); 
            thisDay.textContent = week[i]; 
        }
        if (elem == 'Суббота' || elem == 'Воскресенье') { 
            thisDay.classList.add('weekends'); 
            thisDay.textContent = week[i]; 
        } else {
            thisDay.textContent = week[i]; 
        }
        day.appendChild(thisDay); 

    });
};
days(); 
