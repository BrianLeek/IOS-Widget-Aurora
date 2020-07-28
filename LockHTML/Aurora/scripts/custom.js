$(document).ready(() => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const newDate = new Date();
  newDate.setDate(newDate.getDate());

  $('#date').html(`${dayNames[newDate.getDay()]}<br><div id="day-month">${newDate.getDate()} ${monthNames[newDate.getMonth()]}</div>`);

});