Template.post.events({
	'click .heart.new': function(evt) {
		var item = Feed.findOne(this._id),
			likes = (item.likes || 0) + 1;

		Feed.update(this._id, {
			$set: {
				'likes': likes
			}
		});

		evt.target.classList.remove('new');
	}
});