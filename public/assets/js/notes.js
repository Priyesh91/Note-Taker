//ajax request to see mysql data with current notes
let savedNotes =[];

$(document).ready(function() {
$.ajax({
  url:"/api/notes",
  method: "GET"
}).then(function(response) {
  savedNotes = [response];
  console.log(response);
  console.log(response[0]);
});
});

console.log(savedNotes);