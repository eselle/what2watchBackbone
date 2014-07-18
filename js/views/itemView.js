var app = app || {};

app.ItemView = Backbone.View.extend({
	tagName: 'ul',
	className: 'itemContainer',
	template: _.template( $( '#itemTemplate' ).html() ),
	
	events: {
		'click #removeItem' : 'deleteItem',
		'click .list-group-item' : 'showInfo'
	},
	  
	 
	deleteItem: function(){
		this.model.destroy();
		
	 },
	 
	 showInfo: function(){
		var thisone = this.model;
		var modalView = new app.ModalMovie(thisone);
			
		$('.modalMovie').html(modalView.render().el);
		console.log("showww");
	 },
	render: function() {
		
		this.$el.html( this.template( this.model.toJSON() ) );
		
		return this;
	}
});