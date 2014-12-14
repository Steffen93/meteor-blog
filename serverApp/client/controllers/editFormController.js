Template.editForm.events({
	'submit form': function(evt) {
		evt.preventDefault();

		Feed.insert({
			title: $('.title', evt.target).val(),
			data: $('.markdown', evt.target).val(),
			tags: $('.tags', evt.target).val(),
			createdAt: new Date(),
			likes: 0
		}, function(err) {
			if (!err) {
				$('.title', evt.target).val('');
				$('.markdown', evt.target).val('');
				$('.tags', evt.target).val('');
			}
		});
	}, 

	'keyup .markdown': function(evt) {
		Session.set('markdown_data', evt.target.value);
	}
});

Template.editForm.helpers({
	markdown_data: function() {
		return Session.get("markdown_data")
	}
});