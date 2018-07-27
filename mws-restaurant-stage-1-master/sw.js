import idb from "idb";
importScripts('http://localhost:${1337}restaurants');
//-stages/mws-restaurant-stage-1-master/

var cacheName = 'mws-restaurant-stage-1-master';
var filesToCache = [
       '/',
       '/index.html',
       '/restaurant.html',
       'data/restaurants.json',
       '/css/styles.css',
       '/js/dbhelper.js',
       '/js/main.js',
       '/js/restaurant_info.js',
       '/img/1.jpg','/img/2.jpg','/img/3.jpg','/img/4.jpg','/img/5.jpg','/img/6.jpg','/img/7.jpg','/img/8.jpg','/img/9.jpg','/img/10.jpg'
       
];
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(filesToCache);

        }).then(function(){
            return self.skipWaiting();
        })
    );
});

self.addEventListener('fetch', function(event) {

    event.respondWith(
    
    cache-polyfill.match(event.request).then(function(response) {
    
    return response || fetch(event.request);
    
    })
    
    );
    
    });
    /*self.addEventListener('fetch', function(event) {

        console.log(event.request.url);
        cache-polyfill.js
        });*/