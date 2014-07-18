var app = app || {};

app.Genres = Backbone.Collection.extend({

	model: app.Genre,
	url:"../api/genres.json"

});