var queryURL = "https://api.coinmarketcap.com/v1/ticker/";
// var myInit = { method: 'GET',
//                mode: 'cors',
//                cache: 'default' };
$(document).ready(function(){
  updateAPI();
})
$("#updateJSON").click(function(){
  updateAPI();
})

function updateAPI(){

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response){
    console.log(response);
  });
}

// fetch (url)
//   .then(function(data){
//     if(err) throw err;
//     else{
//     console.log(data);
//     }
//   });
