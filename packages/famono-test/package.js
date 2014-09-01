Package.describe({
  summary: 'Test how early we can access Famono-provided globals in packages',
  version: "0.0.1",
  git: "https://github.com/gadicc/meteor-famono-earliest.git"
});

Package.on_use(function (api) {
	// famono will reject this otherwise
	if (api.versionsFrom)
	  api.versionsFrom("METEOR@0.9.0");
	api.use('raix:famono@0.7.4', 'client');
	api.add_files('test.js', 'client');
});

