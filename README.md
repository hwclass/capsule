##inheritable-native-js-app-structure

A small library-like initializing code for dynamic views.

###usage

<pre lang="javascript">
<code>
  <b>app.define</b>('testModule', {
    config : {
      title : 'View Title'
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
  });
</code>
</pre>