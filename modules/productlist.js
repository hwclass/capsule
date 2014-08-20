/*Context : Product List*/
app.define('productlist', {
  productlist : {
    config : {
      title : 'productlist'
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
      console.log(this.config.title + ' initialized.');
    }
  }
});