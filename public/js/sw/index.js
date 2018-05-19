self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open('wittr-static-v1').then(function(cache){
			return cache.addAll([
		'/',
		'js/main.js',
		'css/main.css',
		'imgs/icon.png',
		'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
		'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
	]);
		})
	);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
		fetch(event.request).then(function(response){
			if(response.status === 404) {
				return fetch('/imgs/dr-evil.gif');
			}
			return response;
		}).catch(function(){
			return new Response('nope, not today!');
		})
  );
});