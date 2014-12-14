Router.map(function() {
	this.route('admin', {
		path: '/admin/',
		template: 'adminView',
		data: function() {
			return;
		}
	});
	
	this.route('feed', {
		path: '/',
		template: 'feedView',
		data: function() {
			var data = Feed.find({}, {
				sort: {
					createdAt: -1
				}
			});

			console.log(data);
			return data;
		}
	});

	this.route('show', {
		path: '/post/:_id',
		template: 'postView',
		data: function() {
			return Feed.findOne({
				_id: this.params._id
			});
		}
	});

	this.route('edit', {
		path: '/edit/:_id',
		template: 'editView',
		data: function() {
			return Feed.findOne({
				_id: this.params._id
			});
		}
	});
});