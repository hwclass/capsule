/*Context : Main Page*/
app.define('mainpage', {
  mainpage : {
    config : {
      title : 'mainpage'
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
      app.subscribe('customEventForSecondTestData', function(args) {
        console.log(args);
      });
    }
  }
});