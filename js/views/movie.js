var app = app || {};

app.MovieView = Backbone.View.extend({
	tagName: 'div',
	className: 'movieContainer',
	template: _.template( $( '#movieTemplate' ).html() ),
	
	events: {
		'click img' : 'more'
	},
	
	more: function() {
		var thisone = this.model;
		
		//scrolls to top
		$('html, body').animate({ scrollTop: 0 }, 0);
		
		var modalView = new app.ModalMovie(thisone);
			
		$('.modalMovie').html(modalView.render().el);
	},
	  
	  
	render: function() {

/*		//adds the url for the thumbnail poster
		var urlPoster = this.model.get('poster');
		if(urlPoster != undefined){
			var urlThumbnail = urlPoster.substr(0, urlPoster.indexOf(".jpg"))+"-138.jpg";
			this.model.set('thumbnail', urlThumbnail);
			
			//adds the embed link for the trailer video
			var urlTrailer = this.model.get('trailer');
			var urlEmbed = urlTrailer.substr(0, urlTrailer.indexOf("/watch"))+"/embed/"+urlTrailer.substr(urlTrailer.indexOf("?v=")+3);
			this.model.set('embedTrailer', urlEmbed);
			this.model.set('releasedDate', this.model.getReleasedDate());
		}

		this.model.set('embedTrailer', urlEmbed);

		this.model.set('releasedDate', this.model.getReleasedDate());
*/
		this.$el.html( this.template( this.model.toJSON() ) );
		
		return this;
	}
});