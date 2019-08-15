var axios = require("axios");
let args = process.argv;
var action = args[2];
var queryUrl = "";



switch(action) {
    case "OMDB":
      //omdb
      var movieName = "";
      var movieNameArr =[];
      for (var i = 3; i < args.length; i++) {
          if (args[i]!=process.argv[0]&&args[i]!=process.argv[1]){
              movieNameArr.push(x[i]);
          }  
          
      }
      movieName = movieNameArr.join('+');
      queryUrl = "http://www.omdbapi.com/?t="+movieName+"&y=&plot=short&apikey=trilogy"; 
      
      axios.get(queryUrl).then(
        function(response) {
          console.log(response);
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      


      break;
      case "Spotify":
          //spotify  
          var Spotify = require('node-spotify-api');
          var songName = "";
          var songNameArr =[];
          for (var i = 3; i < args.length; i++) {
              if (args[i]!=process.argv[0]&&args[i]!=process.argv[1]){
                songNameArr.push(x[i]);
              }  
              
          }
          songName = songNameArr.join('+');

          var spotify = new Spotify({
            id: "8383b559f4234593a24a1fff7d0d6c8f",
            secret: "3bad15103767434f900b2a429931480e"
          });
          
          spotify.search({ type: 'track', query: songName }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
             
          console.log(data); 
          });
      // code block      
      break;
    case "BIT":
        //bands in town
        var bandsintown = require('bandsintown')(APP_ID);
        var bandName = "";
          var bandNameArr =[];
          for (var i = 3; i < args.length; i++) {
              if (args[i]!=process.argv[0]&&args[i]!=process.argv[1]){
                bandNameArr.push(x[i]);
              }  
              
          }
          bandName = bandNameArr.join('+');

        bandsintown
          .getArtistEventList(bandName)
          .then(function(events) {
            // return array of events
            console.log(events);
          });
      // code block      
      break;
  }    








axios.get(queryUrl).then(
  function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    if (error.response) {
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config) 
});


