// Collborations with Sam, Kenny and Kellerfrom class

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-hour as a key to save the user input in
  // local storage.
  $('.saveBtn').on('click', function () {
    var toDo = $(this).siblings('.description').val();
    var hourX = $(this).parent().attr('id');
    localStorage.setItem(hourX, toDo);
  });

  // Get the current date
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');

  // Update the container element with the current day
  $('#currentDayContainer').text(currentDate);

  // Loop through each time block
  $('.time-hour').each(function () {
    var hourX = parseInt($(this).attr('id').split('-')[1]);
    var currentHour = dayjs().hour();

    if (hourX < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (hourX === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });

  // Get any user input that was saved in localStorage and set the values of the corresponding textarea elements
  $('.time-hour').each(function () {
    var hourX = $(this).attr('id');
    var note = localStorage.getItem(hourX);
    $(this).find('.description').val(note);
  });
});
