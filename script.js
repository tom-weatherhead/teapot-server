// To disable an eslint warning or error for an entire file, use this syntax: /* eslint no-alert: 0 */

// See https://stackoverflow.com/questions/34764287/turning-off-eslint-rule-for-a-specific-file

// If this file is loaded by index.html without using a route in server.js, the Web browser encounters the following error:
// - "The resource from “http://localhost:3000/script.js” was blocked due to MIME type mismatch (X-Content-Type-Options: nosniff)."

$('#btnClickMe').click(function () {		// eslint-disable-line no-undef
	console.log('#btnClickMe click');
	window.location.href = '/teapot';
});
