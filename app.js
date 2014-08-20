
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
    
    var topics = {};
    
    var defineContext = function (appName, appObj) {
      context.views.push(appObj);
      context.views[context.views.length-1][appName].init();
    }
    
    var getContext = function (view) {
      var currentView;
      for (var index in context.views) {
        if (context.views[index].config.title == view) {
          currentView = context.views[index];
        };
      }
      return currentView;
    }

    var removeContext = function(title) {
      /*
      for (var count=0, len=context.views.length; count < len; count++) {        
        if (context.views[count].config.title == title) {
          delete context.views[count][title];
        }
      }
      */
      for (var index in context.views) {
        if (context.views[index]) {
          console.log(context.views[index][title].config);
        }
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
    }

    var init = function() {
      this.publish('customEventForFirstTestData', {testMessage : 'base module initialized.'});
      this.publish('customEventForSecondTestData', {testMessage : 'mainpage module initialized.'});
      this.publish('customEventForThirdTestData', {testMessage : 'productlist module initialized.'});
    }
    
    return {
      context : context,
      define : defineContext,
      get : getContext,
      remove : removeContext,
      subscribe : subscribe,
      publish : publish,
      init : init
    }
    
  })();