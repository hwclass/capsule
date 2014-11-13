/*Mediator : App*/

var capsule = (function () {
    
  /**
   * context{} wraps the modules living in the context of app mediator.
   *
  */
  var context = {
    
    /**
     * views[] contains the modules.
     *
    */
    views : [],

    /**
     * models{} contains module-specific model structures.
     *
    */
    models : []

  }

  var el = {
    container : document.getElementById('container')
  }
    
  /**
   * topics{} wraps current custom event types and their datas.
   *
  */
  var topics = {};
  
  /**
   * defineContext() creates a new module with its name and properties.
   *
  */
  var defineContext = function (appName, appObj) {
    context.views[appName] = Object.create(appObj);
    utils.initModule(appName);
  }
  
  /**
   * getModule() returns a module given its name.
   *
  */
  var getModule = function (title) {
    var currentView;
    if (!utils.isUndefined(title) && !utils.isNull(title)) {
      if (!utils.isUndefined(context.views[title]) && !utils.isNull(context.views[title])) {
        currentView = context.views[title];
      } else {
        utils.log('No module with name ' + title);
      }
    } else {
      utils.log('No module with name ' + title);
    }
    return currentView;
  }

  /**
   * removeModule() removes a module given its name.
   *
  */
  var removeModule = function(title) {
    if (!utils.isUndefined(title) && !utils.isNull()) {
      delete context.views[title];
    }
  }
  
  /**
   * subscribe() joins a topic with a custom event listener.
   *
  */
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
  
  /**
   * publish() sends a data or callback reply to the specified custom event listeners.
   *
  */
  var publish = function(topic, info) {
    // If the topic doesn't exist, or there's no listeners in queue, just leave
    if(!topics[topic] || !topics[topic].queue.length) return;

    // Cycle through topics queue, fire!
    var items = topics[topic].queue;
    for(var x = 0; x < items.length; x++) {
      items[x](info || {});
    }
  };

  /**
   * utils{} is used to reach app specific methods / functions.
   *
  */
  var utils = {
    isUndefined : function (obj) {
      return (typeof obj === 'undefined');
    },
    isNull : function (obj) {
      return (typeof obj === 'null');
    },
    isEmptyString : function(str) {
      return (str === '');
    },
    isAvailable : function (obj) {
      isAvailable = false;
      if (!utils.isUndefined(obj) && !utils.isNull(obj)) {
        isAvailable = true;
      }
      return isAvailable;
    },
    log : function (message) {
      console.log(message);
    },
    initModule : function (moduleName) {
      context.views[moduleName].init();
    }
  };

  /**
   * init() stars the current app module.
   *
  */
  var init = function(modules) {
    console.log(modules);
    /*Send data to customEventForProductListTestData topic as testMessage*/
    this.publish('customTopicForBasketTestData', {testMessage : 'Basket Module Initialized.'});
  }
  
  return {
    models : context.models,
    define : defineContext,
    get : getModule,
    remove : removeModule,
    subscribe : subscribe,
    publish : publish,
    views : context.views,
    el : el,
    init : init
  }
  
})();