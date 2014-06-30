##inheritable-native-js-app-structure

A small library-like initializing code for dynamic views.

###usage

<pre lang="javascript">
<code>
app.defineContext('base', { 
    
  base : { 
    
    config : {
      title : 'base'
    },

    el : {
      container : document.querySelector('body')
    },

    fn : {
      
      isUndefined : function (obj) {
        return (typeof obj === 'undefined')
      }
  
    },

    getInstance : function () {
    	return this;
    },

    init : function () {
      console.log('base initialized...');
    } 
    
  } 

});
</code>
</pre>