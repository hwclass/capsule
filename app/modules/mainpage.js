/*Module : Main Page*/

app.define('mainpage', {
  
  /**
   * config{} contains configuration properties.
   *
  */
  config : {
    title : 'Main Page View'
  },
  
  /**
   * models{} contains module-specific model structures.
   *
  */
  models : [{
      modelExmampleForMainModule1 : function(args) {
        this.testVar1 = args.testVar1;
        return this;
      }
    },
    {
      modelExmampleForMainModule2 : function(args) {
        this.testVar1 = args.testVar1;
        return this;
      }
    }
  ],
  
  /**
   * el{} wraps the elements living in the context of current module.
   *
  */
  el : {
    container : document.querySelector('#mainpage')
  },
  
  /**
   * fn{} is used to reach module specific methods / functions.
   *
  */
  fn : {
    isUndefined : function (obj) {
      return (typeof obj === 'undefined');
    },
    isNull : function (obj) {
      return (typeof obj === 'null');
    }
  },
  
  /**
   * getInstance() returns the current context.
   *
  */
  getInstance : function () {
    return this;
  },
  
  /**
   * init() stars the current module.
   *
  */
  init : function () {

  	/*getting instance*/
  	var self = this.getInstance();
    
    /*subscribind the message for customTopicForMainPageTestData topic*/
    app.subscribe('customTopicForMainPageTestData', function(args) {
      app.el.messagePane.innerHTML += args.testMessage + '<br>';
    });

  }
  
});