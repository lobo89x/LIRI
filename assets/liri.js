var axios = require("axios");
let args = process.argv;
var action = args[2];
var queryUrl = "";
var BITURL = "";


switch(action) {
    case "OMDB":
      //omdb
      var movieName = "movie-this";
      var movieNameArr =[];
      for (var i = 3; i < args.length; i++) {
          if (args[i]!=process.argv[0]&&args[i]!=process.argv[1]){
              movieNameArr.push(args[i]);
          }  
          
      }
      movieName = movieNameArr.join('+');
      queryUrl = "http://www.omdbapi.com/?t="+movieName+"&y=&plot=short&apikey=trilogy"; 
      
      axios.get(queryUrl).then(
        function(response) {
          console.log(response.data.Title);
          console.log("The Year it came out was "+response.data.Year);
          console.log("written by "+response.data.Writer);
          console.log("directed by "+response.data.Director);
          console.log("it's about :: "+response.data.Plot);
          console.log("and stars :: "+response.data.Actors);
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
      case "spotify-this-song":
          //spotify  
          var Spotify = require('node-spotify-api');
          var songName = "";
          var songNameArr =[];
          for (var i = 3; i < args.length; i++) {
              if (args[i]!=process.argv[0]&&args[i]!=process.argv[1]){
                songNameArr.push(args[i]);
              }  
              
          }
          songName = songNameArr.join('%20');
          //console.log(songName);

          var spotify = new Spotify({
            id: "8383b559f4234593a24a1fff7d0d6c8f",
            secret: "3bad15103767434f900b2a429931480e"
          });
          
          spotify
          //.search({ type: 'track', query: songName })
          //.request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
          //.request('https://api.spotify.com/v1/tracks/'+songName)
          .request('https://api.spotify.com/v1/search?q='+songName+'&type=track')
          .then(function(response) {
            //console.log(response);
            //console.log(response.tracks.items[0]);
            console.log(response.tracks.items[0].name+' by artist: '+response.tracks.items[0].artists[0].name);
            console.log(response.tracks.items[0].external_urls.spotify);

          })
          .catch(function(err) {
            if (err.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log("---------------Data---------------");
              console.log(err.response.data);
              console.log("---------------Status---------------");
              console.log(err.response.status);
              console.log("---------------Status---------------");
              console.log(err.response.headers);
            } else if (err.request) {
              // The request was made but no response was received
              // `error.request` is an object that comes back with details pertaining to the error that occurred.
              console.log(err.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", err.message);
            }
            console.log(err.config);
          });
      // code block      
      break;
    case "concert-this":
        //bands in town
        var bandsintown = require('bandsintown')("8134bf6d02ff01557602cbde7aefb01a");
        var bandName = "";
          var bandNameArr =[];
          for (var i = 3; i < args.length; i++) {
              if (args[i]!=process.argv[0]&&args[i]!=process.argv[1]){
                bandNameArr.push(args[i]);
              }  
              
          }
          bandName = bandNameArr.join('%20');
          //https://rest.bandsintown.com/artists/Breaking%20Benjamin/events?app_id=8134bf6d02ff01557602cbde7aefb01a&date=upcoming
          BITURL = "https://rest.bandsintown.com/artists/"+bandName+"/events?app_id=8134bf6d02ff01557602cbde7aefb01a&date=upcoming"
        // bandsintown
        //   .getArtistEventList(bandName)
        axios.get(BITURL)
        .then(function(events) {
            // return array of events
            // console.log(events.data);
            console.log(bandNameArr.join(' '));
            for (var i = 0; i < events.data.length; i++) {
              console.log(i+"------------------------------");
              console.log(events.data[i].venue.name);
              console.log(events.data[i].venue.city+" "+events.data[i].venue.region);
              console.log("Lineup:: "+events.data[i].lineup);
              console.log("Get Tickets Here:: "+events.data[i].offers[0].url);
            } 
          })
          .catch(function(errs) {
            if (errs.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log("---------------Data---------------");
              console.log(errs.response.data);
              console.log("---------------Status---------------");
              console.log(errs.response.status);
              console.log("---------------Status---------------");
              console.log(errs.response.headers);
            } else if (errs.request) {
              // The request was made but no response was received
              // `error.request` is an object that comes back with details pertaining to the error that occurred.
              console.log(errs.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", errs.message);
            }
            console.log(errs.config);
          });
      // code block      
      break;
  }    






