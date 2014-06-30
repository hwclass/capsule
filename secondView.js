  app.defineContext('mainPage', { 
    mainPage : { 
      
      config : {
        title : 'mainPage'
      },
  
      el : {
        container : document.querySelector('body')
      },
  
      fn : {
        
        isNull : function (obj) {
          return (typeof obj === 'null')
        }
    
      },
      
      getInstance : function () {
	    	return this;
	    },
  
      init : function () {
        console.log('mainPage initialized...');
      } 
      
    } 
  
  });