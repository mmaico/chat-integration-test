describe("Fluxo de envio e recebimento de mensages", function() {
	var Stomp = require('stompjs');

	var client;
	beforeEach(function() {
		client = Stomp.overWS('ws://localhost:8181/chat-server');
	});

	it("client shoud not null", function(done) {
		done();
		console.log("################## ---> ENTER");

		client.connect("teste", "teste", 
			function(frame) {
				console.log("################## ---> SUCCESS");			
			},
			function(error) {
				console.log("################## ---> ERROR");	
			});		
	});	

	expect(client).not.toBe(null);
});