if (Meteor.isClient) {
	Template.registerHelper('formatDate', function(date) {
		var d = new Date(date),
			formated = 'on ' + d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + ', ' + d.getHours() + ':' + d.getMinutes();

		return formated;
	});

	Template.registerHelper('formatObject', function(object) {
		return JSON.stringify(object);
	});

	Template.registerHelper('formatTags', function(tags) {
		return tags;
	});
}