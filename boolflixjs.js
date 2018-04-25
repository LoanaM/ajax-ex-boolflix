//attivo la ricerca al click
$('#button').click(function(){
  filmresearch()
  colorstar(1.5)
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
                  '<p><b>VOTO: </b><span id="voto">'+vote+'</span></p>')
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
  // var star = 0

  if(1<=num<2.5) {$('#star1').removeClass('whitecolor').addClass('goldcolor')};
  // if(2.5<=num<4.5) {star=2};
  // if(4.5<=num<6.5) {star=3};
  // if(6.5<=num<8.5) {star=4};
  // if(8.5<=num<=10) {star=5};

  // return star
}
