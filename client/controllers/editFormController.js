Template.editForm.events({

	'click .create': function(evt) {
		evt.preventDefault();

		Feed.insert({
			title: $('.title').val(),
			data: $('.markdown').val(),
			tags: $('.tags').val(),
			createdAt: new Date(),
			likes: 0
		}, function(err) {
			if (!err) {
				$('.title').val('');
				$('.markdown').val('');
				$('.tags').val('');
			}
		});
	},

	'click .delete': function(evt) {
		evt.preventDefault();

		Feed.remove({
			_id: this._id
		}, function(err) {
			if (!err) {
				Router.go('feed');
			}
		});
	},

	'click .update': function(evt) {
		evt.preventDefault();

		Feed.update({
			_id: this._id
		}, {
			$set: {
				title: $('.title').val(),
				data: $('.markdown').val(),
				tags: $('.tags').val(),
				lastModifiedAt: new Date()
			}
		}, function(err) {
			if (!err) {
				Router.go('feed');
			}
		});
	},

	'keyup .markdown': function(evt) {
		Session.set('markdown_data', evt.target.value);
	}
});

Template.editForm.helpers({
	markdown_data: function() {
		return Session.get('markdown_data')
	}
});