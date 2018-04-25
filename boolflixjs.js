//attivo la ricerca al click
$('#button').click(function(){
  filmresearch()
});
//attivo la ricerca premendo invio
$('#search').keypress(function(e){
  if (e.which==13) {
    filmresearch()
  }
})

//funzione che ricerca il film
function filmresearch(){
  var ricerca = $('#search').val()
    $.ajax ({
              url: 'https://api.themoviedb.org/3/search/movie',
              method: "GET",
              data: {
                  api_key: 'ba3883789387df574629b95faa1837fc',
                  query: ricerca,
                  language: 'it-IT',
                },
              success: function(data) {
                //svuoto la ricerca precedente
                $('.risultati').html('')
                for (var i = 0; i < data.results.length; i++) {
                  title = data.results[i].title
                  originaltitle = data.results[i].original_title
                  language = data.results[i].original_language
                  vote = data.results[i].vote_average

                  $('.risultati').append('<p><b>TITOLO: </b><span id="titolo">'+title+'</span></p>'+
                  '<p><b>TITOLO ORIGINALE: </b><span id="titoloriginale">'+originaltitle+'</span></p>'+
                  '<p><b>LINGUA: </b><span id="lingua">'+language+'</span></p>'+
                  '<p><b>VOTO: </b><span id="voto">'+vote+'</span></p>'+
                  '<i class="fas fa-star whitecolor" id="star1"></i>'+
                  '<i class="fas fa-star whitecolor" id="star2"></i>'+
                  '<i class="fas fa-star whitecolor" id="star3"></i>'+
                  '<i class="fas fa-star whitecolor" id="star4"></i>'+
                  '<i class="fas fa-star whitecolor" id="star5"></i>')
                  colorstar(vote)
                }
                console.log(data);
              },
              error: function(){
                alert('error');
              }
   });
};





//trasformo in numeri decimali in 5stelle
function colorstar(num){

  if(1<=num) {$('#star1').removeClass('whitecolor').addClass('goldcolor')};
  if(2.5<=num) {$('#star2').removeClass('whitecolor').addClass('goldcolor')};
  if(4.5<=num) {$('#star3').removeClass('whitecolor').addClass('goldcolor')};
  if(6.5<=num) {$('#star4').removeClass('whitecolor').addClass('goldcolor')};
  if(8.5<=num) {$('#star5').removeClass('whitecolor').addClass('goldcolor')};

}
