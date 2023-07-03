// Collborations with Sam, Kenny and Kellerfrom class


$(document).ready(function () {
  // once this document finishes loading
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on('click', function () {
    var toDo = $(this).siblings('.description').val();
    var hourX = $(this).parent().attr('id');
    localStorage.setItem(hourX, toDo);
 

  });

  for (var i = 0; i < localStorage.length; i++) {
    var hourX = localStorage.key(i);
    var toDo = localStorage.getItem(hourX);
    
    // Display the stored values on the screen
    var textElement = $('#' + hourX).find('.description');
    textElement.val(toDo);
  }  
// Get the current date
var currentDate = new Date();

// Format the date as desired
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', options);

// Update the container element with the current day
$('#currentDayContainer').text(formattedDate);

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // $(selector).each(function(index, element) {
  // Code to be executed on each element
});
$('.description').each(function () {
  var hourX = parseInt($(this).attr('id').split('-')[1]);
  var currentHour = currentDate.getHours();
  
  if (hourX < currentHour) {
    $(this).addClass('past');
  } else if (hourX === currentHour) {
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }
});
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  //
  // TODO: Add code to display the current date in the header of the page.


