/*Context : Product List*/
app.define('productlist', {
  config : {
    title : 'Product List View'
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
    app.subscribe('customEventForProductListTestData', function(args) {
      console.log(args);
    });
  }
});