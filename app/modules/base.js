/*Context : Base*/

app.define('base', {

  /**
   * config{} contains configuration properties.
   *
  */
  config : {
    title : 'Base View'
  },

  /**
   * models{} contains module-specific model structures.
   *
  */
  models : [{
      modelExmampleForBaseModule1 : function(args) {
        this.testVar1 = args.testVar1;
        this.testVar2 = args.testVar2;
        this.testVar3 = args.testVar3;
        return this;
      }
    },{
      modelExmampleForBaseModule2 : function(args) {
        this.testVar1 = args.testVar1;
        this.testVar2 = args.testVar2;
        this.testVar3 = args.testVar3;
        return this;
      }
    }
  ],

  /**
   * el{} wraps the elements living in the context of current module.
   *
  */
  el : {
    container : document.querySelector('body'),
    messagePane : document.getElementById('messagePane')
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
  	
  	var self = this.getInstance();
    
    app.subscribe('customTopicForBaseTestData', function(args) {
      self.el.messagePane.innerHTML += args.testMessage;
    });
    
  }
  
});