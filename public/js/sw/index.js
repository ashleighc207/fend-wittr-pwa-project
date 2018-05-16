self.addEventListener('fetch', function(event) {
  event.respondWith(
		fetch(event.request).then(function(response){
			if(response.status === 404) {
				return new Response('You look like you are lost');
			}
			return response;
		}).catch(function(){
			return new Response('nope, not today!')
		})
  );
});