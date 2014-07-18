var app = app || {};

app.Movie = Backbone.Model.extend({	

	localStorage: new Backbone.LocalStorage("itemMovie"),
	
	defaults: {
		title:'No title',
		poster: 'noimage',
		overview:'No overview' ,
		genres:[
		'No genre'
		],
		images:[
			'No fanart'
		] 
	},
	
	initialize: function(){
		//adds the url for the thumbnail poster
		var urlPoster = this.get('poster');
		if(urlPoster != undefined){
			var urlThumbnail = urlPoster.substr(0, urlPoster.indexOf(".jpg"))+"-138.jpg";
			this.set('thumbnail', urlThumbnail);
			
			//adds the embed link for the trailer video
			var urlTrailer = this.get('trailer');
			var urlEmbed = urlTrailer.substr(0, urlTrailer.indexOf("/watch"))+"/embed/"+urlTrailer.substr(urlTrailer.indexOf("?v=")+3);
			this.set('embedTrailer', urlEmbed);
			this.set('releasedDate', this.getReleasedDate());
		}

		this.set('embedTrailer', urlEmbed);

		this.set('releasedDate', this.getReleasedDate());
	},
	
	getReleasedDate: function(){
		return new Date(this.get("released")*1000).toUTCString();
	}
	
});