Router.configure({
	loadingTemplate: 'loadingView',
	notFoundTemplate: 'notFoundView'
});

Router.map(function() {
	this.route('admin', {
		path: '/admin/',
		template: 'adminView',
		data: function() {
			return;
		}
	});
	
	this.route('portfolio', {
		path: '/portfolio/',
		template: 'portfolioView',
		data: function() {
			return;
		}
	});
	
	this.route('map', {
		path: '/map/',
		template: 'mapView',
		data: function() {
			return;
		}
	});
	
	this.route('about', {
		path: '/about/',
		template: 'aboutView',
		data: function() {
			return;
		}
	});
	
	this.route('feed', {
		path: '/',
		template: 'feedView',
		data: function() {
			return Feed.find({}, {
				sort: {
					createdAt: -1
				}
			});
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
		},
		onBeforeAction: function() {
			Session.set('markdown_data', '');
			this.next();
		}
	});
});