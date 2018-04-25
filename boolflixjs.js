$('#button').click(function(){
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

                $('#titolo').text(title)
                $('#titoloriginale').text(originaltitle)
                $('#lingua').text(language)
                $('#voto').text(vote)
                console.log(data);
              },
              error: function(){
                alert('error');
              }
   });

});
