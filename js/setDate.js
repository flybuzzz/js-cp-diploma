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
  let navDay = new Date()
      navDay = Number(navDay.getDate())

  pageNavDay.forEach((element, index) => {
  
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
      if (navDay === navDay+index) {
          element.dataset.dayTimeStamp = nextDay.setHours(0, 0, 0, 0);
          element.classList.add('page-nav__day_today');
          element.classList.add('page-nav__day_chosen');
      }
      nextDay.setDate(nextDay.getDate() + 1);
  });
}

function updateData() {
  createRequest('event=update', 'MAIN', updateHtmlMain);
};
