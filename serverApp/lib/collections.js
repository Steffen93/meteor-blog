Feed = new Meteor.Collection('feed');

if (Meteor.isServer) {
	Meteor.publish('feed', function() {
		return Feed.find();
	});

	// Feed.allow({
	// 	insert: function(userId, post) {
	// 		return (post.likes === 0);
	// 	}
	// });
}

if (Meteor.isClient) {
	Meteor.subscribe('feed');
}