describe('Test that the button is clickable ince the Ajax loader completes loading', function() {
	it('Attempt to click the button asap', function(done) {
		browser.url('/Ajax-Loader/index.html');
		browser.click('#button1');
	});

	it('Attempt to click the button after 7 seconds', function(done) {
		browser.url('/Ajax-Loader/index.html');
	//	browser.debug();
		this.timeout(20000);
		browser.pause(7000);
		browser.click('#button1');
		browser.pause(7000);
	//	browser.debug();
	});
});