/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["book_detail.html","7b317054dc7d068a38fdc20b699ac9e2"],["css/common.css","bd65dc52c364248a89150665e2295aa2"],["css/main.css","fa3ef4af5a03ecd582b74fbc8210d7da"],["css/reset.css","301f2263cdb88c3f5399d411a5e718ff"],["css/sub.css","1f7fb12a675dd227b13f797c2e7ca897"],["images/bookclub1.png","4271fa259777e633b394b8564326db7f"],["images/bookclub2.png","75ced67d575ace1f313c955cc8061ba7"],["images/bookclub3.png","8643ba729a66a5f2f1e7ba7b45149869"],["images/bookclub4.png","9c490b02099d0fe0ae3601f7b9dcccfe"],["images/logox128.png","fb6925f4eacf936cb59865d57d8c7b5b"],["images/logox48.png","9e7ffecf511a2c2b83eb39678d51d4dd"],["images/logox512.png","fbb4dbf0353156e456616b57c672524f"],["img/Star 1.png","e7c98f1d500d46c673abf8001df1584c"],["img/Star 5.png","633b5d19ae6563a5901da7b2a81fcbd6"],["img/best (1).jpg","12d8cdc24cb15a9a7deabe1bc7b3bc33"],["img/best (1).png","c264243d02534356bb6fb1562fc89932"],["img/best (10).jpg","35dfdbd13ad343bf8fc109786be483b2"],["img/best (11).jpg","9a74cdc9d9d98036e22da5a436890d8d"],["img/best (12).jpg","93b8484f0e2712f05d65a4c82a790dc9"],["img/best (13).jpg","572f36a66e3b7592b1af8c93e7b38069"],["img/best (14).jpg","7d1e24934f9f5a7e0cdc24bff0eb00c6"],["img/best (15).jpg","afe18477a039c484e6e4f395b6bfd4f7"],["img/best (16).jpg","5588b7cd5f98d2741693b31374e52720"],["img/best (17).jpg","f48543791f9e27154a0256a57a7f251e"],["img/best (18).jpg","8028058d765b4e426a9ada8acd0e0e50"],["img/best (19).jpg","1e80ce4e4e709598d14ccbc6f36f5acd"],["img/best (2).jpg","dec05cc07b9115be3e664175f4919157"],["img/best (20).jpg","95caef66854b0dd847a94d618c338a84"],["img/best (21).jpg","f6c5f70294dbac2b72fe33651a52a555"],["img/best (22).jpg","0038473179a82d53e2e91c7f1452b6bd"],["img/best (23).jpg","b62f2c6b33ec3b723ff31c97e755e0ee"],["img/best (24).jpg","979f4d0e2923e31f0151e3c6ffe1089c"],["img/best (25).jpg","afe18477a039c484e6e4f395b6bfd4f7"],["img/best (26).jpg","6be7b5ff022a3463f473aa154043670d"],["img/best (27).jpg","4406bc491fb179f11d0fcf68ebe17455"],["img/best (28).jpg","04bc5b8ae3884356ca6b776357d325d9"],["img/best (29).jpg","9d67d162d1c360b82b24fc81f045693c"],["img/best (3).jpg","47f1c1b7624f0f0570efbdd4985026c8"],["img/best (30).jpg","737b5a8f47390fd5d223fe0a3f4b43ee"],["img/best (31).jpg","e4f68447063d63f8a2a96b5e2dfe3f12"],["img/best (33).jpg","80bca6adc73b355518b8932ce00af4ff"],["img/best (34).jpg","d56dee968460f963fb3f325fe3d44214"],["img/best (35).jpg","e598827ab10a809f228454332009433a"],["img/best (4).jpg","3b0ea0e055dcb735eb05aa04da294706"],["img/best (5).jpg","31745cddaca871d0d71232c282ad6a8a"],["img/best (6).jpg","2558cb219ed6a6ec7e98e4c72c78b2ba"],["img/best (7).jpg","04901be4da4347f354c409bc70209b80"],["img/best (8).jpg","0fd0e7c262f074cd141c2d1d857ce05a"],["img/best (9).jpg","bf3de3db0355a21f2c3c6bf05599b551"],["img/best1.jpg","fce1e1350ba97f4f4ab15e7c8d18e791"],["img/bx_home-alt-2.png","840256d1ab515d84b50bfae22bb947f8"],["img/bx_menu-alt-left.png","adfae748f09963c81132fc810e8913d9"],["img/bx_search.png","f4d9647c84a80058d7b7bd77ef257aac"],["img/bx_user.png","2dbb6f4d1df64c4b921ee95a354424fd"],["img/choice1.jpg","e2d2b45e5ccfbf4d09f97719d416e51b"],["img/choice2.jpg","d7bec1582a6951dfc580ecd0aea16d9e"],["img/choice3.jpg","6822fc0bcd44d59e3a2e1b31869ff990"],["img/choice4.jpg","ac31011009988df8c7d352eb6e4e0d43"],["img/choice5.jpg","08976bc41004db93631dcb0b88197ec8"],["img/choice6.jpg","a63f4a94f0f69a412d360e81cff9d183"],["img/choice7.jpg","cf9800e052b16b13b6e3e446197bc459"],["img/close.svg","522a41f625821358e1c0c012752785b3"],["img/downArrow.png","210fb5549af348212f4e5eb3ac87e2de"],["img/flo.png","cb437d416abc22e427c0f4436bc76779"],["img/free.png","2c3acf99187a734d1cba6957a1d4d7d3"],["img/guide01.png","7d1dd85021e3ba2fab09267dfb79e7eb"],["img/guide02.png","eca55daeffcf903e345fb43262c462dd"],["img/guide03.png","dc44f52e035a900a05df9b656ddb27f5"],["img/guide04.png","b5f5784dc29ff2c906603c22d156340b"],["img/ico_bClub.png","077e263bd471d8a09ef65fa53c741233"],["img/ico_dev_and.png","669a12882fe6f63d92af0e958c3350e8"],["img/ico_dev_ink.png","7c3e1de1198ec7a2a860ff0ff9316745"],["img/ico_dev_ios.png","5617d56cf7ad85f5a50af6b4a4d7d46b"],["img/ico_dev_mac.png","9ff2fd3137ad20625a8ee8e4f9c3e0bc"],["img/ico_faq 1.png","8695481dcdf2e68290d998a880a43510"],["img/ico_guide 5.png","abe01545f494f6bd6c3ff44b2659cb0f"],["img/ico_not 1.png","479b61b5c8ae9a4a0e231ebe772d1ef4"],["img/ico_usecard 1.png","ca58b6c5ab6811df9dfe678bd2f184bc"],["img/infinite.png","78e363b583cccf7cc7aea3398176a402"],["img/logo.svg","686a17cddc4b642ee006d2f34a3b8630"],["img/main1.jpg","0c59ffa8cc91339ca8970c4c885a780b"],["img/main10.jpg","1085ec6e058ed57d96687e3c90992bbd"],["img/main2.jpg","0346b2ab4d2bf6b3efcdf0642e31457e"],["img/main3.jpg","a4d4033b6be9a5139d18330d172e868d"],["img/main4.jpg","63af403fbcaff255528e31e3e48e76f6"],["img/main5.jpg","bdd0196ce7de4685be6a5a760cc117d7"],["img/main6.jpg","5b3f73ab1e8fe69cd1b492c1377a3cc1"],["img/main7.jpg","84311f0c0de472187c72fa6b7b3c3b0a"],["img/main8.jpg","173a64460e7d59393d60fd9fcc5f7991"],["img/main9.jpg","267e9b8411cf5ace5b4a61038267eb14"],["img/mdi_recent.png","f33070f25ecab7225da7014a96621d48"],["img/money.png","b83a77e1421a99144adfbf82de9e6726"],["img/moreArrow.png","eb188359c9b58bf24b2b63494d6ae075"],["img/ms.png","393f919d2e3460dec7dda8b8d947f225"],["img/new.png","2c939b9c58942ccaf866692a8f33a2d6"],["img/new1.jpg","110186365997a6c0bb581a61187fe4cf"],["img/new2.jpg","1c6ad2d9ed813abf01be38ada45581d3"],["img/new3.jpg","e97f289504acdbbbcb04713dbd5ccd66"],["img/new4.jpg","a8eae3d75799f34f6c528bc9edac4ed6"],["img/new5.jpg","de880b6f0fbda355acaac4aac7c7d86a"],["img/new6.jpg","add555a79c0ba64647051e46edad2912"],["img/new7.jpg","68baf2e5e6d83151bc32f40032ee5d56"],["img/new8.jpg","e31d3b60b1f67a2b9a6d8bd4c6e81827"],["img/sel11.jpg","e12dc708d37a169ee4c8b6135f1b9a13"],["img/sel12.jpg","4b01316df1cda9afeacfd528d958ea96"],["img/sel13.jpg","dc91c22e0a1b085aa60532412f1f90c5"],["img/sel14.jpg","b30366e56c71a42cc4dc809d158deda9"],["img/sel15.jpg","938218b45c121923a2028300a10eeb9a"],["img/sel16.jpg","b1a834965fef9d75de0dfa4da08b52f8"],["img/sel21.jpg","18fcb2e36d0a9ee961c43f67c60295b3"],["img/sel22.jpg","d1064d00dcb8aef89a9f11f8e3964009"],["img/sel23.jpg","7859d195d98961ff0c833c8476844da9"],["img/sel24.jpg","c5338302db95d8179f1ba918371be1c9"],["img/sel25.png","34f612611eb957c8038ea5f2c5c2e29c"],["img/sel26.jpg","a408bfe21dc0c02b74fc48a658f8a854"],["img/sel31.jpg","5b16a0f4aef51e1d1f4d37d8d41c4271"],["img/sel32.jpg","51ab9e06c46648f344d004e41d2bd515"],["img/sel33.jpg","8d312b722c1d9b47de7f3a20d2d0c7ff"],["img/sel34.jpg","6b5547ce0c98ef3de352bfc15a32f3ce"],["img/sel35.jpg","f5fce90a7d08f04682044021ccb4d64f"],["img/sel36.jpg","bb055de407a2f7766c6d6163b02ea5a4"],["img/ticket01.png","c105211e38756631c2f8e3ae16d30910"],["img/ticket02.jpg","a673a558e42ae354e973360d7c8592dd"],["img/ticket03.jpg","91389abfcad8909d0c1446c55f894f7e"],["img/ticket04.jpg","3be8248e03070d9168f513a3bf165a9c"],["img/ticket05.jpg","427336be06f0223aac57eaa0728db304"],["img/ticket06.jpg","e20e84d9bd723a1a51038465efbbd0f8"],["img/ticket07.jpg","119f4837202a1d03c68f6f3aebf7220d"],["img/ticket08.jpg","351d51e28ee51317a6daa06c4c0e0f2e"],["img/ticket09.jpg","b6b9a27a0b934c409a66195620fef5c8"],["img/ticket10.jpg","66a1351c15ad957fdefac48fae066d86"],["img/ticket11.jpg","a99315d64221f58923e20a6f27e83e17"],["img/ticket12.jpg","44385f0485f073fe8764bdf4e66d12bc"],["img/ticket13.jpg","6aa93e6cf130a37cfe4d2ec59705bb4a"],["img/ticket14.jpg","9ddbfbf811912bcb020c7edabe0bc8b7"],["img/ticket15.jpg","2e9c60bc3391c6bc481dfdc6ba68ca33"],["img/ticket16.jpg","cdad23b0e29f390e3c4a34e43ed7626b"],["img/ticket17.png","affff63d4673485a651ca420e27c36df"],["img/ticket18.jpg","0bda5d5cad8ec28ba50d8d3b817cb0af"],["img/ticket19.png","2e56ad208e18fa1ae19d4835074e3476"],["img/ticket20.png","2cb82cb2c7a08daaf683ac2bb7d0e714"],["img/ticket21.png","0b70f311e72a14d3d4b4f9d5bd481b0c"],["img/ticket22.png","cbdc7d1e8729bc0a287329dd34953eb4"],["img/ticket23.png","bcd301521e895ae685f167d04b20a622"],["img/top_menu.png","3746335ad14ff8dc71b05529c6a5ef36"],["img/underline1.jpg","d4609988e1b953728b78fe2d467c2cdc"],["img/underline2.jpg","eceb405b86bb845cd58ff0bb64ef698f"],["img/underline3.jpg","d35996826b3affd044230cbfcc3f0d8f"],["img/upArrow.png","a34bf7cd9cd70f99a332d08f50fe7cb8"],["img/update.png","691cf904646f1063c6104c9fbbc65554"],["index.html","80589aea5d46191b78a986c6ed83ac4e"],["js/common.js","358be615ac5967d9f34f3ca79e14bc62"],["js/main.js","083b1e5d8699854f9ef38794211c11e9"],["js/sub.js","900406024f39b0f776f8806e43678622"],["service_info.html","5af21a348b0fc7c17bab97bbd569ccda"],["ticket.html","ca98e6f45c5e6d22751338aa59f28f8a"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/this\\.is\\.a\\.regex/, toolbox.networkFirst, {});




