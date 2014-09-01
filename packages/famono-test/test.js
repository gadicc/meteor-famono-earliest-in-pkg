console.log('famous.core.Surface in package run (earliest)');
try { console.log(!!famous.core.Surface); } catch (err) { console.error(err); }

Meteor.startup(function() {
	// Only works if app uses famous.core.Surface
	console.log('famous.core.Surface in package Meteor.startup')
	try { console.log(!!famous.core.Surface); } catch (err) { console.error(err); }
});
