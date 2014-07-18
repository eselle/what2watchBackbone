var app = app || {};

app.Movies = Backbone.Collection.extend({
	model: app.Movie,
	
	initialize: function(){
		this.sort_key = 'title';
		this.sort_asc = true;
	},
	
	  byTitle: function(title){
		filtered = this.filter(function(movie) {
			var pattern = new RegExp(title,"gi");
			return pattern.test(movie.get("title"));
		});

		return new app.Movies(filtered);
	  },
	  
	  //Search movies according genre
	  byGenre: function(genre){
		filtered = this.filter(function(movie) {
		var genres = movie.get("genres");		
			return _.contains(genres,genre);
		});
		return new app.Movies(filtered);
	  },
	  
	  paginate : function(perPage, page) {
      page = page-1;
      var collection = this;
      collection = _(collection.rest(perPage*page));
      collection = _(collection.first(perPage));   
      return collection; 
	},
	
	sortByField: function(sortCriteria){
		this.comparator = sortCriteria;
		collection = this;
		collection = _(collection.sort());
		return collection;
	},
	
	//Sort listing
    comparator: function(a, b) {
        a = a.get(this.sort_key);
        b = b.get(this.sort_key);
		if(this.sort_asc){
			return a > b ?  1 : a < b ? -1 : 0;
		}else{        
			 return a > b ?  -1 : a < b ? 1 : 0;
		}
    },
    sortByTitle: function(sort_asc) {
        this.sort_key = 'title';
		this.sort_asc = sort_asc || true;
        this.sort();
    },
    sortByReleased: function(sort_asc) {
        this.sort_key = 'released';
		this.sort_asc = sort_asc;
        this.sort();
    }
	
});