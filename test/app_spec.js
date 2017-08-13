// teapot-server/test/app_spec.js

// Use chai and chai-http to test our app.
// See https://groundberry.github.io/development/2016/12/10/testing-express-with-mocha-and-chai.html

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

chai.use(chaiHttp);

const expect = chai.expect;

describe('app', function () {
	describe('GET /', function () {
		it('responds with status 200', function (done) {
			chai.request(app)
				.get('/')
				.end(function (err, res) {
					expect(err).to.be.null;		// eslint-disable-line no-unused-expressions
					expect(res).to.have.status(200);
					// expect(res.text).to.equal('somevalue');
					done();
				});
		});
	});

	describe('GET /notfound', function () {
		it('responds with status 404', function (done) {
			chai.request(app)
				.get('/notfound')
				.end(function (err, res) {
					expect(err).to.not.be.null;		// eslint-disable-line no-unused-expressions
					expect(res).to.have.status(404);
					// expect(res.text).to.equal('somevalue');
					done();
				});
		});
	});

	describe('GET /servererror', function () {
		it('responds with status 500', function (done) {
			chai.request(app)
				.get('/servererror')
				.end(function (err, res) {
					expect(err).to.not.be.null;		// eslint-disable-line no-unused-expressions
					expect(res).to.have.status(500);
					// expect(res.text).to.equal('somevalue');
					done();
				});
		});
	});

	describe('GET /teapot', function () {
		it('responds with status 418', function (done) {
			chai.request(app)
				.get('/teapot')
				.end(function (err, res) {
					// All three of these lines work:
					// expect(err).not.to.be.null;		// eslint-disable-line no-unused-expressions
					expect(err).to.not.be.null;		// eslint-disable-line no-unused-expressions
					// expect(err).to.be.not.null;		// eslint-disable-line no-unused-expressions

					expect(res).to.have.status(418);
					// expect(res.text).to.equal('I\'m a teapot');
					done();
				});
		});
	});
});
