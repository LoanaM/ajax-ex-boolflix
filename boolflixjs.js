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
                  '<p><b>LINGUA: </b><span class="lingua '+i+'">'+'</span>'+'<div class="flag '+i+'"></div></p>'+
                  '<p><b>VOTO: </b><span id="voto">'+vote+'</span></p>'+
                  '<i class="fas fa-star whitecolor star1 '+i+'"></i>'+
                  '<i class="fas fa-star whitecolor star2 '+i+'"></i>'+
                  '<i class="fas fa-star whitecolor star3 '+i+'"></i>'+
                  '<i class="fas fa-star whitecolor star4 '+i+'"></i>'+
                  '<i class="fas fa-star whitecolor star5 '+i+'"></i>')

                  flagcreate(i); //sostituisco la lingua con la bandiera
                  colorstar(vote,i); //coloro le stelle punteggio

                }
                console.log(data);
              },
              error: function(){
                alert('error');
              }
   });
};


//trasformo i numeri decimali in 5stelle
function colorstar(num,classe){

  if(1<=num) {$('.star1.'+classe).removeClass('whitecolor').addClass('goldcolor')};
  if(2.5<=num) {$('.star2.'+classe).removeClass('whitecolor').addClass('goldcolor')};
  if(4.5<=num) {$('.star3.'+classe).removeClass('whitecolor').addClass('goldcolor')};
  if(6.5<=num) {$('.star4.'+classe).removeClass('whitecolor').addClass('goldcolor')};
  if(8.5<=num) {$('.star5.'+classe).removeClass('whitecolor').addClass('goldcolor')};

}

//funziona che crea le bandiere della lingua
function flagcreate(langselected) {
    if (language=="it") {
      $('.flag.'+langselected).addClass('ita');
    }
    else if (language=="en") {
      $('.flag.'+langselected).addClass('uk');
    }
    else if (language=="fr") {
      $('.flag.'+langselected).addClass('fr');
    }
    else if (language=="es") {
      $('.flag.'+langselected).addClass('es');
    }
    else if (language=="de") {
      $('.flag.'+langselected).addClass('de');
    }
    else if (language=="ru") {
      $('.flag.'+langselected).addClass('ru');
    }
    else if (language=="zh") {
      $('.flag.'+langselected).addClass('china');
    }
    else {
      $('.lingua.'+langselected).html(language);
    }
}
