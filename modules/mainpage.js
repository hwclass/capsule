/*Context : Main Page*/
app.define('mainpage', {
  config : {
    title : 'Main Page View'
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
    app.subscribe('customEventForMainPageTestData', function(args) {
      console.log(args);
    });
  }
});