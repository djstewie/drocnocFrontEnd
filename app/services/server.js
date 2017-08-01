import Ember from 'ember';

export default Ember.Service.extend({
	get (url) {
		return Ember.$.getJSON(url);
	},

	put (url, data) {
		if (typeof data === typeof {}) {
			data = JSON.stringify(data);
		}
		return Ember.$.ajax({
			url : url,
			type: 'PUT',
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			data : data
		});
	},

	post (url, data) {
		if (typeof data === typeof {}) {
			data = JSON.stringify(data);
		}
		return Ember.$.ajax({
			url : url,
			type: 'POST',
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			data : data
		});
	},

	'delete' (url) {
		return Ember.$.ajax({
			url : url,
			type: 'DELETE'
		});
	}
});
