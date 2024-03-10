// DayJS
var today = dayjs();
$('#weekDay').text(today.format('MMMM D'));

var dayWeek = today.format('dddd,');
$('#currentDay').text(dayWeek);

var today = dayjs();


searchNav.addEventListener("click", () => alert("Estou aqui"))