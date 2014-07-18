var app = angular.module('WhatToWatch' , ['ui.bootstrap','ngRoute','LocalStorageModule','firebase']);


/********************************************************/
/*                       Factories                      */
/********************************************************/
app.factory("MyMovies",['$firebase',function($firebase) {
    var ref = new Firebase("https://test-todo.firebaseio.com/myMovies");
    return {
      	getMyMovies: function() {

        	return $firebase(ref);
      	},
    	addMovie: function(movie) {
	        $firebase(ref).$add(movie);
    	},
    	updateMovie: function(movie){
	      	$firebase(ref)[movie.$id] = movie;
	      	$firebase(ref).$child(movie.$id).$update(movie);
    	},
    	removeMovie: function(id){
      		$firebase(ref).$remove(id);
    	},
      	find: function(id){
      		return $firebase(ref).$child(id);
      	},
      	existsMovie: function(movie){
      		var myMovies = $firebase(ref);
      		for(movieList in myMovies){
      			if(movieList.imdb_id == movie.imdb_id){
      				return true;
      			}
      		}
      		return false;
      	}
    }
  }]);




/*********************************
	Routing App
**********************************/
app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})
		.when('/myList',{
			templateUrl: 'pages/myList.html',
			controller: 'myListController'
		})
});


/*********************************
	Custom Filters
**********************************/
app.filter('isGenre', function() {
    return function(input, genre) {
        if (typeof genre == 'undefined' || genre == null) {
            return input;
        } else {
            var genresList = [];
            for (var a = 0; a < input.length; a++){
                for (var b = 0; b < input[a].genres.length; b++){
                    if(input[a].genres[b] == genre) {
                        genresList.push(input[a]);
                    }
                }
            }
            return genresList;
        }
    };
});
