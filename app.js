
var app = (function () {
    
    var context = {
      views : [],
      models : [
        {
          dataLayer : function(args) {
            this.testVar1 = args.testVar1;
            this.testVar2 = args.testVar2;
            this.testVar3 = args.testVar3;
            return this;
          }
        },
        {
          google_tag_params : function(args) {
            this.testVar1 = args.testVar1;
            this.testVar2 = args.testVar2;
            this.testVar3 = args.testVar3;
            return this;
          }
        }
      ]
    }
    
    /* pub-sub topics */
    var topics = {};
    
    var defineContext = function (appName, appObj) {
      context.views.push(appObj);
      context.views[context.views.length-1][appName].init();
    }
    
    var getView = function (title) {
      var currentView;
      if (!utils.isUndefined(title) && !utils.isNull()) {
        currentView = context.views[0][title];  
      }
      return currentView;
    }

    var removeContext = function(title) {
      if (!utils.isUndefined(title) && !utils.isNull()) {
        delete context.views[0][title];
      }
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
    };

    var utils = {
      isUndefined : function (obj) {
        return (typeof obj === 'undefined');
      },
      isNull : function (obj) {
        return (typeof obj === 'null');
      },
      isAvailable : function (obj) {
        isAvailable = false;
        if (!utils.isUndefined(obj) && !utils.isNull(obj)) {
          isAvailable = true;
        }
        return isAvailable;
      }
    };

    var init = function() {
      this.publish('customEventForBaseTestData', {testMessage : 'base module initialized.'});
      this.publish('customEventForMainPageTestData', {testMessage : 'mainpage module initialized.'});
      this.publish('customEventForProductListTestData', {testMessage : 'productlist module initialized.'});
    }
    
    return {
      models : context.models,
      define : defineContext,
      get : getView,
      remove : removeContext,
      subscribe : subscribe,
      publish : publish,
      views : context.views,
      utils : utils,
      init : init
    }
    
  })();