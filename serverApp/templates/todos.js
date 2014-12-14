Tasks = new Mongo.Collection('tasks');

Meteor.methods({
	upvote: function(id) {
		var item = Tasks.findOne(id),
			upvotes = (item.upvotes || 0) + 1;

		Tasks.update(id, {
			$set: {
				'upvotes': upvotes
			}
		});
	},

	downvote: function(id) {
		var item = Tasks.findOne(id),
			downvotes = (item.downvotes || 0) + 1;

		Tasks.update(id, {
			$set: {
				'downvotes': downvotes
			}
		});
	}
});

if (Meteor.isServer) {
	Meteor.publish('talks', function() {
		return Tasks.find();
	});

	Tasks.allow({
		insert: function(userId, task) {
			return (task.upvotes === 0) && (task.downvotes === 0);
		}
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('talks');

	Template.taskList.helpers({
		tasks: function() {
			return Tasks.find({}, {
				sort: {
					createdAt: -1
				}
			});
		}
	});

	Template.body.events({
		'click .upvote': function() {
			Meteor.call('upvote', this._id);
		},

		'click .downvote': function() {
			Meteor.call('downvote', this._id);
		},

		'submit .newTaskForm': function(evt) {
			evt.preventDefault();

			Tasks.insert({
				text: $('.title').val(),
				createdAt: new Date(),
				upvotes: 0,
				downvotes: 0
			}, function(err) {
				if (!err) {
					$('input.title').val();
				}
			});
		}
	});
}