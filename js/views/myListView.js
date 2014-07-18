var app = app || {};

app.MyListView = Backbone.View.extend({
	el: '#myList',
	
	events:
	{
		'click #searchMovie' : 'filterMovies',
		'change #genres_list' : 'filterMovies',
		'change #sort_criteria' : 'sortMovies'
	},
	
	initialize: function() {
		
		
		this.collection = new app.MyList();
		
		this.collection.set(this.collection.localStorage.findAll());
		
		this.listenTo(this.collection , 'add', this.render);
		this.listenTo(this.collection , 'remove', this.render);
		
		
		this.collection.on('sync', function() {
			console.log('sync succesful!');
			});
			
		globalRef = this.collection;
		console.log(this.collection);
		this.render();
		
	},
	// render movies by rendering each movie in its collection	
	render: function() {
		//Render each movie from listing results.
		this.$el.html("<h2>My Movies</h2>");
		this.collection.each(function( movie ) {
            this.renderMovie( movie );
        }, this );
	
	return this;
	},

	
	 // render a movie by creating a itemView and appending the
    // element it renders to the movies element
	renderMovie: function ( item ) {
		var itemView = new app.ItemView({
			model: item
		});
		this.$el.append(itemView.render().el);
	}
	
	
});