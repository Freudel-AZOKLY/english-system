/* English System : fonctionnement hors ligne */
var CACHE = "english-system-v9";
var CORE = ["./", "index.html", "app.js", "content-w01-05.js", "content-w06-09.js", "content-w10-15.js", "content-w16-21.js", "content-w22-27.js", "content-w28-33.js", "content-w34-38.js", "content-w39-43.js", "content-tests.js", "placement-data.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var sameOrigin = url.origin === self.location.origin;
  var isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!sameOrigin && !isFont) return;
  if (sameOrigin) {
    // Réseau d'abord pour recevoir les mises à jour, cache si hors ligne
    e.respondWith(fetch(req, { cache: "no-cache" }).then(function (res) {
      if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req.mode === "navigate" ? "index.html" : req, copy); }); }
      return res;
    }).catch(function () { return caches.match(req.mode === "navigate" ? "index.html" : req, { ignoreSearch: true }); }));
    return;
  }
  e.respondWith(caches.match(req).then(function (hit) {
    return hit || fetch(req).then(function (res) {
      if (res && (res.ok || res.type === "opaque")) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    });
  }));
});
