//ajax request to see mysql data with current notes

$.ajax({
  url: "../../../routes/api/noteRoutes.js",
  method: "GET"
}).then(function (response) {
  if(response){
    console.log(response);
  }
})