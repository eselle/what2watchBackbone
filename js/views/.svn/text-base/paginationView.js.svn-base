var app = app || {};

app.PaginatorView = Backbone.View.extend({
	el: '#paginator',
	
	events:
	{
		'click #first_page a' : 'firstPage',
		'click #previous_page a' : 'previousPage',
		'click #next_page a' : 'nextPage',
		'click #last_page a' : 'lastPage'
	},
	
	page: 1,
	maxPerPage: 30,
	template: _.template( $( '#PaginationListTemplate' ).html() ),
	
	initialize: function(){
		this.initPager();
		this.render();
	},
	
	initPager: function(){
		this.totalPages = Math.floor(this.collection.length/this.maxPerPage);
	},
	
	render: function(){
		this.$el.html( this.template({
		page: this.page, 
		firstPage: 1,
		previousPage: this.page-1,
		nextPage: this.page+1,
		maxPerPage: this.maxPerPage, 
		totalPages: this.totalPages
		}));
		
		return this;
	},

	nextPage: function(e){
		new app.MoviesView({collection:this.collection,page:this.page+1});
	},
	
	
});