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
    "url": "./data/db.json",
    "revision": "d87549130d100ad4027c7e27322b4a69"
  },
  {
    "url": "favicon.ico",
    "revision": "606f6364af731e212b3dc0fd82a80fe0"
  },
  {
    "url": "images/manifest/icon-192x192.png",
    "revision": "937c054bf2714abb7ba9c9001100ec0f"
  },
  {
    "url": "images/manifest/icon-512x512.png",
    "revision": "1d34caa9640f52b86ebd2a43495ed427"
  },
  {
    "url": "index.html",
    "revision": "0636e533e3d9a0879b35834bd64f5f32"
  },
  {
    "url": "./js/app.js",
    "revision": "2c322956ab892b1a05c9397a21b9740d"
  },
  {
    "url": "./js/connection.js",
    "revision": "596c93897e34c24588b6f659aaeaec2c"
  },
  {
    "url": "manifest.json",
    "revision": "cf818d882ae8265edae2859befe2c73d"
  },
  {
    "url": "package.json",
    "revision": "38abbfaa287faa8e32e5d0a8eb96f9a1"
  },
  {
    "url": "./styles/style.css",
    "revision": "d7465298283a95075211f980c42a3cb8"
  },
  {
    "url": "workbox-config.js",
    "revision": "d78db7c6b7de5b80fec71c2308846ec8"
  },
  {
    "url": "./node_modules/idb/build/esm/index.js",
    "revision": "1744c78524339333fc1a296a8d11baf9"
  },
  {
    "url": "./node_modules/idb/build/esm/chunk.js",
    "revision": "c425e70eed99680fd3f14b1f70580f8a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
