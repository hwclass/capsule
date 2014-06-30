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