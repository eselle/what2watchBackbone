var app = app || {};

app.GenresListView = Backbone.View.extend({

	el: '#genres_list',
	
	initialize: function( genres ) {
		this.collection = new app.Genres( genres );
		this.render();
	},
	
	render: function() {
		this.template = _.template($( '#genresListTemplate' ).html(),{genres: this.collection.toJSON()});
		this.$el.html(this.template);
	}

});