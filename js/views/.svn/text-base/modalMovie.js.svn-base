var app = app || {};

app.ModalMovie = Backbone.Modal.extend({
			template: _.template($('#modal').html()),
			cancelEl: '#bbm-cancel',
			submitEl: '#bbm-add',
			
			events: {
				'click #bbm-add': 'addToList'
				},
			
			initialize: function(model){
				this.model = model;
			},
			addToList: function(){
				globalRef.add(this.model);

				this.model.save();
			}
		});