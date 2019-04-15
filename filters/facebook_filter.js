(function () {

  var keywords = ["GOT", "game of thrones", "final season", "season 8", "lannister", "starks", "jon snow", "arya", "stark", "cersei", "dragons"]

  chrome.storage.sync.get('gotEnabled', function (storage) {

    if (storage.gotEnabled) {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          var newNodes = mutation.addedNodes;
          if (newNodes !== null) {

            var nodes = document.querySelectorAll('.fbUserContent, .userContentWrapper, ._1bar, ._5my2, ._4qjp, ._2kg4, ._4-u2');
            for (var ii = 0, nn = nodes.length; ii < nn; ii++) {
              var text = nodes[ii] ? nodes[ii].textContent.toLowerCase() : '';
              keywords.forEach(function (keyword) {
                if (text && text.indexOf(keyword) >= 0 && nodes[ii].style.display != 'none') {
                  nodes[ii].style.display = 'none';
                  chrome.runtime.sendMessage({
                    action: "removeTrump"
                  });
                }
              })

            }

          }
        });
      });

      observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
      });
    }

  })

})();