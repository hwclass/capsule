/*Context : Base*/
app.define('base', {
  base : {
    config : {
      title : 'base'
    },
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
      app.subscribe('customEventForFirstTestData', function(args) {
        console.log(args);
      });
    }
  }
});