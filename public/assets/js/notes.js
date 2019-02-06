//ajax request to see mysql data with current notes
let savedNotes = [];

$(document).ready(function () {
  $.ajax({
    url: "/api/notes",
    method: "GET"
  }).then(function (response) {
    // savedNotes = [response];
    console.log(response);
    // console.log(response[0]);

//function to display title in the display title section
for ( i of response){
  $(`<div class="container border">
  <h3 class="font-weight-bold">${i.title}<h3>
  <p>${i.body}</p>
  </div>`)
  .appendTo(".titleDiv");
}
  });
});
