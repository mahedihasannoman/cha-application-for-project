var cacheName = 'v2';
var cacheFiles = [
	'./',
	'./index.html',
	'./server.js',
	'./bower_components/paper-input/paper-input-decorator.html',
	'./bower_components/paper-icon-button/paper-icon-button.html',
	'./bower_components/paper-fab/paper-fab.html',
	'./bower_components/paper-input/paper-input.html',
	'./bower_components/core-item/core-item.html',
	'./bower_components/core-scaffold/core-scaffold.html',
	'./bower_components/webcomponentsjs/webcomponents.js',
	'./socket.io/socket.io.js',
	'./bower_components/core-icon-button/core-icon-button.html',
	'./bower_components/core-toolbar/core-toolbar.html',
	'./bower_components/core-drawer-panel/core-drawer-panel.html',
	'./bower_components/core-header-panel/core-header-panel.html',
	'./bower_components/paper-ripple/paper-ripple.html',
	'./bower_components/paper-button/paper-button-base.html',
	'./bower_components/core-icons/core-icons.html',
	'./bower_components/core-icon/core-icon.html',
	'./bower_components/polymer/polymer.html'
	
]

self.addEventListener('install', function(e){
	console.log("[service worker] installed");
	
	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			console.log("[serviceWorker] Caching CacheFiles");
			return cache.addAll(cacheFiles);
		})
	)
	
	
})

self.addEventListener('activate', function(e){
	console.log("[service worker] Activate");
	e.waitUntil(
		caches.keys().then(function(cacheNames){
			return Promise.all(cacheNames.map(function(thisCacheName){
				if(thisCacheName !== cacheName){
					console.log("[serviceWorker] Removing Cached Filed from ", thisCacheName);
					return caches.delete(thisCacheName);
				}
			}))
		})
	)
	
})

self.addEventListener('fetch', function(e){
	console.log("[service worker] fetching", e.request.url);
	
	
})