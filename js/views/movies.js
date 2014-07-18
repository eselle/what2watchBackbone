var app = app || {};

app.MoviesView = Backbone.View.extend({
	el: '#wrapper',
	page: 1,
	maxPerPage: 20,
	nbResults: 20,
	events:
	{
		'keyup #searchMovie' : 'filterMovies',
		'change #genres_list' : 'filterMovies',
		'change #sort_criteria' : 'sortMovies',
		'scroll body' : 'loadMore',
		'click #loadMore' : 'loadMore',
		'click .first_page' : 'firstPage',
		'click .previous_page' : 'previousPage',
		'click .next_page' : 'nextPage',
		'click .last_page' : 'lastPage'

	},
	
	initialize: function( initialMovies,page) {
		this.collection = new app.Movies( initialMovies );
		this.filteredValues = this.collection;//.clone();

		//DOM Elements
		this.movieFilterDOM = $('#searchMovie');
		this.genresListFilterDOM = $('#genres_list');
		this.moviesDOM = $("#movies_list");
		this.sortCriteriaDOM = $('#sort_criteria');
		this.pagerDOM = $('#pager');

		this.page = page || 1;
	
		//Detect scroll events
		var view = this;
	    $(window).bind('scroll', function (ev) {
	      view.loadMore(ev);
	    });

		this.render();
		
	},
	// render movies by rendering each movie in its collection	
	render: function() {
		
		this.filteredValues = this.collection;//.clone();
		
		//Filter results
		this.filteredValues = this.filterResults();
		
		//Sort results
		this.filteredValues = this.sortResults();
	
		//Pagination
		this.filteredValues = this.filteredValues.paginate(this.maxPerPage,this.page);
		
		//Render each movie from listing results.
		this.filteredValues.each(function( movie ) {
            this.renderMovie( movie );
        }, this );
	
	return this;
	},
	
	
	//sort results from movies listing
	sortResults: function(){
	
		if(this.sortCriteriaDOM.val() != ""){
			switch(this.sortCriteriaDOM.val()){
				case 'title':
					this.filteredValues.sortByTitle(true);
					break;
				case 'most_recently':
					this.filteredValues.sortByReleased(false);
					break;
				default:
					this.filteredValues.sortByTitle(true);
					break;
			}
		}else{
			this.filteredValues.sortByTitle();
		}
		return this.filteredValues;
	},
	
	//filter results from movies listing
	filterResults: function(){
		//Filtering results
		if(this.movieFilterDOM.val() != ""){
			this.filteredValues = this.filteredValues.byTitle(this.movieFilterDOM.val());
		}
		if(this.genresListFilterDOM.val() != ""){
			this.filteredValues = this.filteredValues.byGenre(this.genresListFilterDOM.val());
		}
		return this.filteredValues;
	},
	
	 // render a movie by creating a MovieView and appending the
    // element it renders to the movies element
	renderMovie: function ( item ) {
		var movieView = new app.MovieView({
			model: item
		});
		this.moviesDOM.append(movieView.render().el);
	},
	
	filterMovies: function(e){
		this.moviesDOM.html("");
		this.page=1;
		this.render();
	},
	
	sortMovies: function(e){
		this.moviesDOM.html("");
		this.page=1;
		this.render();
	},

	loadMore: function(e){

		if($(window).scrollTop() + $(window).height() >= $(document).height()){

			this.page += 1;
			this.render();

		}

	}
	
	
});