// Establish a cache name
const cacheName = "Cache_v1";

self.addEventListener("install", (event) => {
  console.log("Lets get backed 💨");
  event.waitUntil(caches.open(cacheName));
});

self.addEventListener("fetch", async (event) => {
  // Check if this is a navigation request
  if (event.request.mode === "navigate") {
    // Open the cache
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        // Go to the network first
        return fetch(event.request.url)
          .then((fetchedResponse) => {
            cache.put(event.request, fetchedResponse.clone());

            return fetchedResponse;
          })
          .catch(() => {
            // If the network is unavailable, get
            return cache.match(event.request.url);
          });
      })
    );
  } else {
    return;
  }
});
