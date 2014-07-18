var app = app || {};

app.MyList = Backbone.Collection.extend({
	model: app.Movie,
	
	localStorage: new Backbone.LocalStorage("itemMovie"),
	
	initialize: function(){
		
		this.set(this.localStorage.findAll());
	}

});