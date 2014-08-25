/*Context : Base*/
app.define('base', {
  base : {
    config : {
      title : 'base'
    },
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
    ],
    el : {
      container : document.querySelector('body')
    },
    fn : {
      isUndefined : function (obj) {
        return (typeof obj === 'undefined');
      },
      isNull : function (obj) {
        return (typeof obj === 'null');
      }
    },
    getInstance : function () {
    	return this;
    },
    init : function () {
      app.subscribe('customEventForBaseTestData', function(args) {
        console.log(args);
      });
    }
  }
});