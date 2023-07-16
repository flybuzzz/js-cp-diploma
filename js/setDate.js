'use strict';

document.addEventListener('DOMContentLoaded', () => {
    updateCalendar();
    updateData();
});

function updateCalendar() {
    const currentTimestamp = Date.now();
    const currentDay = new Date(currentTimestamp);
    let nextDay = currentDay;
    const options = {
        weekday: 'short',
    };

    const pageNavDay = document.querySelectorAll('.page-nav__day');

    pageNavDay.forEach((element) => {
        element.dataset.dayTimeStamp = nextDay.setHours(0, 0, 0, 0);

        let dayWeek = nextDay.getDay();
        let dayWeekText = nextDay.toLocaleDateString('ru-RU', options);

        const pageNavDayWeek = element.querySelector('.page-nav__day-week');
        const pageNavDayNumber = element.querySelector('.page-nav__day-number');

        pageNavDayWeek.textContent = dayWeekText;
        pageNavDayNumber.textContent = nextDay.getDate();

        if (dayWeek === 0 || dayWeek === 6) {
            element.classList.add('page-nav__day_weekend');
        } else {
            element.classList.remove('page-nav__day_weekend');
        }

        nextDay.setDate(nextDay.getDate() + 1);
    });
}

// Формирует запрос на сервер и приводит к обновлению разметки html
function updateData() {
    // Формируем запрос на сервер (Передаем: 1. строка тела запроса, 2. строка с именем источника запроса для инфо в консоли, 3. какая функция будет вызвана после ответа сервера )
    createRequest('event=update', 'MAIN', updateHtmlMain);
};
