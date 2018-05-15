self.addEventListener('fetch', function(event) {
  event.respondWith(
fetch('/imgs/dr-evil.gif')
  	);
});