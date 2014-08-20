
var app = (function () {
    
    var context = {
      views : [] 
    }
    
    var topics = {};
    
    var defineContext = function (appName, appObj) {
      context.views.push(appObj);
      context.views[context.views.length-1][appName].init();
    }
    
    var getContext = function (view) {
      var currentView;
      for (var index in context.views) {
        return context.views[index][view];
      }
      return currentView;
    }
    
    var subscribe = function(topic, listener) {
      // Create the topic's object if not yet created
      if(!topics[topic]) topics[topic] = { queue: [] };
 
      // Add the listener to queue
      var index = topics[topic].queue.push(listener);
 
      // Provide handle back for removal of topic
      return (function(index) {
        return {
          remove: function() {
            delete topics[index];
          }
        }
      })(index);
    }
    
    var publish = function(topic, info) {
      // If the topic doesn't exist, or there's no listeners in queue, just leave
      if(!topics[topic] || !topics[topic].queue.length) return;
 
      // Cycle through topics queue, fire!
      var items = topics[topic].queue;
      for(var x = 0; x < items.length; x++) {
        items[x](info || {});
      }
    }

    var init = function() {
      this.publish('customEventForFirstTestData', {testMessage : 'test message'});
      this.publish('customEventForSecondTestData', {testMessage : 'test message'});
      this.publish('customEventForThirdTestData', {testMessage : 'test message'});
    }
    
    return {
      context : context,
      define : defineContext,
      get : getContext,
      subscribe : subscribe,
      publish : publish,
      init : init
    }
    
  })();