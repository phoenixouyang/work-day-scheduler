// use DayJS to declare variables for current day and hour
var today = dayjs();
var currentHour = dayjs().$H;

$(function(){
  // Display and format current day at top of page
  $('#currentDay').text(today.format('dddd, MMMM D') + 'th');

  // create an array to match the DOM element div, and hour in number format
  var allHours = [
    {
      container: $('#hour-9'),
      hour: 9,
    },
    {
      container: $('#hour-10'),
      hour: 10,
    },
    {
      container: $('#hour-11'),
      hour: 11,
    },
    {
      container: $('#hour-12'),
      hour: 12,
    },
    {
      container: $('#hour-13'),
      hour: 13,
    },
    {
      container: $('#hour-14'),
      hour: 14,
    },
    {
      container: $('#hour-15'),
      hour: 15,
    },
    {
      container: $('#hour-16'),
      hour: 16,
    },
    {
      container: $('#hour-17'),
      hour: 17,
    },
  ];

  // loop through each hour and change formating depending on it's relationship to the current hour
  for (var i = 0; i < allHours.length; i++) {
    if (currentHour > allHours[i].hour) {
      allHours[i].container.addClass('past');
    } else if (currentHour == allHours[i].hour) {
      allHours[i].container.addClass('present');
    } else {
      allHours[i].container.addClass('future');
    }
  };

  // create variables for each text area
  var textArea9 = $('#hour-9').children('textarea');
  var textArea10 = $('#hour-10').children('textarea');
  var textArea11 = $('#hour-11').children('textarea');
  var textArea12 = $('#hour-12').children('textarea');
  var textArea13 = $('#hour-13').children('textarea');
  var textArea14 = $('#hour-14').children('textarea');
  var textArea15 = $('#hour-15').children('textarea');
  var textArea16 = $('#hour-16').children('textarea');
  var textArea17 = $('#hour-17').children('textarea');

  // get stored value from local storage, and set as text area value
  textArea9.val(localStorage.getItem('hour9'));
  textArea10.val(localStorage.getItem('hour10'));
  textArea11.val(localStorage.getItem('hour11'));
  textArea12.val(localStorage.getItem('hour12'));
  textArea13.val(localStorage.getItem('hour13'));
  textArea14.val(localStorage.getItem('hour14'));
  textArea15.val(localStorage.getItem('hour15'));
  textArea16.val(localStorage.getItem('hour16'));
  textArea17.val(localStorage.getItem('hour17'));

  // declare variables for each save button
  var btn9 = $('#hour-9').children('button');
  var btn10 = $('#hour-10').children('button');
  var btn11 = $('#hour-11').children('button');
  var btn12 = $('#hour-12').children('button');
  var btn13 = $('#hour-13').children('button');
  var btn14 = $('#hour-14').children('button');
  var btn15 = $('#hour-15').children('button');
  var btn16 = $('#hour-16').children('button');
  var btn17 = $('#hour-17').children('button');

  // create a click event for each button that will save the corresponding text to local storage
  btn9.on('click', function () {
    var text9 = $('#hour-9').children('textarea').val();
    localStorage.setItem("hour9", text9);
  });

  btn10.on('click', function () {
    var text10 = $('#hour-10').children('textarea').val();
    localStorage.setItem("hour10", text10);
  });

  btn11.on('click', function () {
    var text11 = $('#hour-11').children('textarea').val();
    localStorage.setItem("hour11", text11);
  });

  btn12.on('click', function () {
    var text12 = $('#hour-12').children('textarea').val();
    localStorage.setItem("hour12", text12);
  });

  btn13.on('click', function () {
    var text13 = $('#hour-13').children('textarea').val();
    localStorage.setItem("hour13", text13);
  });

  btn14.on('click', function () {
    var text14 = $('#hour-14').children('textarea').val();
    localStorage.setItem("hour14", text14);
  });

  btn15.on('click', function () {
    var text15 = $('#hour-15').children('textarea').val();
    localStorage.setItem("hour15", text15);
  });

  btn16.on('click', function () {
    var text16 = $('#hour-16').children('textarea').val();
    localStorage.setItem("hour16", text16);
  });

  btn17.on('click', function () {
    var text17 = $('#hour-17').children('textarea').val();
    localStorage.setItem("hour17", text17);
  });

});