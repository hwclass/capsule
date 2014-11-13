##capsule.js

A small library-like initializing code for dynamic views.

###Usage

<pre lang="javascript">
<code>
  /*Context : testModule*/

  app.define('testModule', {

    /**
     * config{} contains configuration properties.
     *
    */
    config : {
      title : 'View Title'
    },

    /**
     * models{} contains module-specific model structures.
     *
    */
    models : [],

    /**
     * el{} wraps the elements living in the context of current module.
     *
    */
    el : {
      container : document.querySelector('body')
    },

    /**
     * fn{} is used to reach module specific methods / functions.
     *
    */
    fn : {},

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
      app.subscribe('customEventForBaseTestData', function(args) {
        console.log(args);
      });
    }
    
  });
</code>
</pre>