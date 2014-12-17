if (Meteor.isClient) {
	Template.registerHelper('formatDate', function(date) {
		var days = (date.getDate() < 10 ? '0' : '') + date.getDate(),
			months = (date.getMonth() + 1 < 10 ? '0' : '') + date.getMonth(),
			years = (date.getFullYear() < 10 ? '0' : '') + date.getFullYear(),
			hours = (date.getHours() < 10 ? '0' : '') + date.getHours(),
			minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

		return 'on ' + days + '.' + months + '.' + years + ', ' + hours + ':' + minutes;
	});

	Template.registerHelper('formatObject', function(object) {
		return JSON.stringify(object);
	});

	Template.registerHelper('formatTags', function(tags) {
		return tags;
	});
}