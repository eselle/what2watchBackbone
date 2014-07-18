var app = app || {};

app.Pagination = {
	
	this.nbResults;
	this.page,
	this.maxPerPage,
	this.totalPages,
	
	getPage: function(){
		return this.page;
	},
	
	setPage: function(page){
		this.page = page;
	},
	
	
	getMaxPerPage: function(){
		return this.maxPerPage
	},
	
	setMaxPerPage: function(maxPerPage){
		this.maxPerPage = maxPerPage;
	},
	
	getTotalPages: function(){
		this.totalPages  = Math.floor(this.totalResults/this.maxPerPage);
	},
	
	getNbResults: function(){
		return this.nbResults;
	}
	
	

};