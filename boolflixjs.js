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
  //svuoto la ricerca precedente
  $('.cards').html('')
    $.ajax ({
              url: 'https://api.themoviedb.org/3/search/movie',
              method: "GET",
              data: {
                  api_key: 'ba3883789387df574629b95faa1837fc',
                  query: ricerca,
                  language: 'it-IT',
                },
              success: function(data) {
                for (var i = 0; i < data.results.length; i++) {
                  title = data.results[i].title
                  originaltitle = data.results[i].original_title
                  language = data.results[i].original_language
                  vote = data.results[i].vote_average
                  image = data.results[i].poster_path
                  overview = data.results[i].overview

                  //creo la card con la cover
                  $('.cards').append('<div class="card '+i+'">'+'<div class="risultati '+i+'">'+'</div>'+'</div>')
                  $('.card.'+i).css('background-image','url("https://image.tmdb.org/t/p/w342'+image+'")')
                  //sostituisco l'immagine se non disponibile
                  if (image==null) {
                    $('.card.'+i).css('background-image','url("http://www.rrudforce.it/wp-content/uploads/2014/12/non_disponibile.gif")')
                  }
                  //creo il contenuto delle card
                  moviecontent(i);
                  flagcreate(i); //sostituisco la lingua con la bandiera
                  colorstar(vote,i); //coloro le stelle punteggio

                }
                console.log(data);
              },
              error: function(){
                alert('error');
              }
   });
   $.ajax ({
             url: 'https://api.themoviedb.org/3/search/tv',
             method: "GET",
             data: {
                 api_key: 'ba3883789387df574629b95faa1837fc',
                 query: ricerca,
                 language: 'it-IT',
               },
             success: function(data) {
               var k=1000
               for (var i = 0; i < data.results.length; i++) {
                 language = data.results[i].original_language
                 vote = data.results[i].vote_average
                 title = data.results[i].name
                 originaltitle = data.results[i].original_name
                 image = data.results[i].poster_path
                 overview = data.results[i].overview

                 //creo le card con sfondo
                 $('.cards').append('<div class="card '+k+'">'+'<div class="risultati '+k+'">'+'</div>'+'</div>')
                 $('.card.'+k).css('background-image','url("https://image.tmdb.org/t/p/w342'+image+'")')
                 //sostituisco l'immagine se non disponibile
                 if (image==null) {
                   $('.card.'+k).css('background-image','url("http://www.rrudforce.it/wp-content/uploads/2014/12/non_disponibile.gif")')
                 }

                 //creo il contenuto delle card
                 moviecontent(k);             
                 flagcreate(k); //sostituisco la lingua con la bandiera
                 colorstar(vote,k); //coloro le stelle punteggio
                k++
               }
               console.log(data);
             },
             error: function(){
               alert('error');
             }
  });
};

//al passaggio del mouse mostro il contenuto del film
$(document).on('mouseover','.card',function(){
  $(this).children('.risultati').addClass('display')
});
$(document).on('mouseleave','.card',function(){
  $(this).children('.risultati').removeClass('display')
});


//funzione che crea i contenuti del film
function moviecontent(variabile) {
  $('.risultati.'+variabile).append('<p><b>TITOLO: </b><span id="titolo">'+title+'</span></p>'+
  '<p><b>TITOLO ORIGINALE: </b><span id="titoloriginale">'+originaltitle+'</span></p>'+
  '<p><b>LINGUA: </b><span class="lingua '+variabile+'">'+'</span>'+'<div class="flag '+variabile+'"></div></p>'+
  '<p><b>CATEGORIA: </b><span id="category">Film</span></p>'+
  '<b>VOTO: </b><span id="voto">'+'</span>'+
  '<i class="fas fa-star whitecolor star1 '+variabile+'"></i>'+
  '<i class="fas fa-star whitecolor star2 '+variabile+'"></i>'+
  '<i class="fas fa-star whitecolor star3 '+variabile+'"></i>'+
  '<i class="fas fa-star whitecolor star4 '+variabile+'"></i>'+
  '<i class="fas fa-star whitecolor star5 '+variabile+'"></i>'+
  '<p><b>TRAMA: </b><span>'+overview+'</span></p>')
}

//funzione per trasformare i voti in stelle
function colorstar(num,classe){
  if(1<=num) {$('.star1.'+classe).removeClass('whitecolor').addClass('goldcolor')};
  if(2.5<=num) {$('.star2.'+classe).removeClass('whitecolor').addClass('goldcolor')};
  if(4.5<=num) {$('.star3.'+classe).removeClass('whitecolor').addClass('goldcolor')};
  if(6.5<=num) {$('.star4.'+classe).removeClass('whitecolor').addClass('goldcolor')};
  if(8.5<=num) {$('.star5.'+classe).removeClass('whitecolor').addClass('goldcolor')};
}

//funzione che crea le bandiere della lingua
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
    else if (language=="ja") {
      $('.flag.'+langselected).addClass('ja');
    }
    else if (language=="nl") {
      $('.flag.'+langselected).addClass('nl');
    }
    else {
      $('.lingua.'+langselected).html(language);
    }
}
