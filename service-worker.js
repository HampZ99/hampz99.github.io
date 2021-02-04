/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.24887269ba682f132e4cdefdb6ed2a46.js"
);

workbox.core.setCacheNameDetails({prefix: "my-project"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "revision": 0,
    "url": "/some-cachefirst-file.txt"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("https://rickandmortyapi.com/api/character/", new workbox.strategies.NetworkFirst({ "networkTimeoutSeconds":5, plugins: [] }), 'GET');
workbox.routing.registerRoute("https://rickandmortyapi.com/api/location", new workbox.strategies.NetworkFirst({ "networkTimeoutSeconds":5, plugins: [] }), 'GET');
