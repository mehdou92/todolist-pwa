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
    "url": "./js/app.js",
    "revision": "4075c2fd42597a1061af9430b4413d57"
  },
  {
    "url": "./data/db.json",
    "revision": "4702595d4abb71a0985ce0dbacfe8bce"
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
    "revision": "3c58b1c8930a4e2b2c1661b298ce1f2b"
  },
  {
    "url": "manifest.json",
    "revision": "daf8987c49de16dc696c0442ee380389"
  },
  {
    "url": "package.json",
    "revision": "c0b56fb8ee4ece9b71aec60c932cc89a"
  },
  {
    "url": "./styles/style.css",
    "revision": "d7465298283a95075211f980c42a3cb8"
  },
  {
    "url": "workbox-config.js",
    "revision": "5b226da29281213a2cdb86735fe8ce18"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
