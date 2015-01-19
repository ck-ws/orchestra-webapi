var debug = require('debug')('orchestra:api:rest:hubs')
	, app = require('express')();

app.get('/', function(req, res) {
	debug('get discovered hubs');
	app.get('universe').getDiscoveredHubs()
		.then(function(hubs) {
			res.send(hubs);
		});
});

app.get('/:uuid/activities', function(req, res) {
	debug('get activities for hub with uuid ' + req.params.uuid);

	var uuid = req.params.uuid
		, universe = app.get('universe');

	universe.getActivitiesForHubWithUuid(hubUuid)
		.then(function(activities) {
			res.send(activities);
		});
});

app.get('/:uuid/activities/current', function(req, res) {
	debug('get current activity for hub with uuid ' + req.params.uuid);

	var uuid = req.params.uuid
		, universe = app.get('universe');

	universe.getCurrentActivityForHub(uuid)
		.then(function(currentActivityId) {
			res.send({ id: currentActivityId });
		});
});

app.post('/:uuid/activities/:id/on', function(req, res) {
	var uuid = req.params.uuid
		, id = req.params.id
		, universe = app.get('universe');

	debug('trigger activity ' + id + ' for hub with uuid ' + req.params.uuid);

	universe.startActivityForHub(uuid, id)
		.then(function() {
			res.sendStatus(200);
		});
});

module.exports = app;
