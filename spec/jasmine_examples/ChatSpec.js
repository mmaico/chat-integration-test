describe("Fluxo de envio e recebimento de mensages", function() {
	var Stomp = require('stompjs');

	var client;
	beforeEach(function() {
		client = Stomp.overWS('ws://localhost:8181/chat-server');
	});

	it("client shoud not null", function(done) {		
		console.log("################## ---> ENTER");
		
		client.connect( 
			function(frame) {
				console.log("################## ---> SUCCESS");
				done();			
			},
			function(error) {
				console.log("################## ---> ERROR");
				done();	
			});		
		
		expect(client).not.toBe(null);
	}, 20000);	

	
});