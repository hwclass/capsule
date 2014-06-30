  app.defineContext('productList', { 
    productList : { 
      
      config : {
        title : 'productList'
      },
  
      el : {
        container : document.querySelector('body')
      },
  
      fn : {
        
        log : function (message) {
          console.log(message);
        }
    
      },
      
      getInstance : function () {
	    	return this;
	    },
  
      init : function () {
        console.log('productList initialized...');
      } 
      
    } 
  
  });