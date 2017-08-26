# teapot-server
An HTTP teapot server

Git installation instructions:

	$ git clone https://github.com/tom-weatherhead/teapot-server.git
	$ cd teapot-server
	$ npm install -g grunt
	$ npm install
	$ grunt

Note: The command "grunt" runs lint, unit tests, and security tests.

npm Installation Instructions:

	$ npm install [--save] thaw-tic-tac-toe-engine

To test the sample driver (server.js) of the Web server component (app.js) :

	$ npm start

Then browse to http://localhost:3000/ to access the main page.

An HTTP GET of http://localhost:3000/teapot will receive a response with HTTP status code 418: I'm a teapot.

The port on which the server listens can be changed in config.json ; it defaults to port 3000.

See https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol

See also  http://www.rfc-base.org/rfc-2324.html
