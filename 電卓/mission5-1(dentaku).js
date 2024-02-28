
function inputNumber(num){
    document.querySelector( '#calc' ).value += num;
  }
  
  
  function Clear(){
    var calcAreaText = document.querySelector( '#calc' ).value;
    var afterDeleteText = calcAreaText.slice(0, -1);
    document.querySelector( '#calc' ).value = afterDeleteText;
  }
  
  
  function update(updatenum){
    document.querySelector( '#calc' ).value = updatenum;
  }
  
  
  function operatorConversion(calcAreaText){
    var multipliedConv = calcAreaText.replaceAll( "×" , "*" );
    var dividedConv = multipliedConv.replaceAll( "÷" , "/" );
    return dividedConv;
  }
  
  
  function calcFunction(calcAreaTextConv){
    const answer = new Function('return ' + calcAreaTextConv);
    return answer;
  }
  
  
  function calc(){
    var calcAreaText = document.querySelector( '#calc' ).value;
    var calcAreaTextConv = operatorConversion(calcAreaText);
    
    var regex = /[+\-\×\÷]/g;
    
    var branch = calcAreaText.search(regex);
    if(branch!=-1){
      
      try {
        const answer = calcFunction(calcAreaTextConv);
        update( answer());
      } catch( _error ) {
        update( _error );
      }
    } else {
      
      document.querySelector( '#calc' ).value = 0;
    }
  }
  
  
  function percentage(){
    var calcAreaText = document.querySelector( '#calc' ).value;
    
    var regex = /[+\-\×\÷]/g;
    
    var branch = calcAreaText.search(regex);
    if(branch!=-1){
     
      var operatorSearch = calcAreaText.match(regex);
     
      var operatorLastArray = operatorSearch.length - 1;
      
      var operatorLastindex = calcAreaText.lastIndexOf(operatorSearch[operatorLastArray])+1;
      
      var calcText1 = calcAreaText.slice(0, operatorLastindex) + '(';
      var calcText2 = calcAreaText.slice(operatorLastindex)+'÷100)';
      var calcAreaText = calcText1+calcText2;
      var calcAreaTextConv = operatorConversion(calcAreaText);
      try {
        const percentageAnswer = calcFunction(calcAreaTextConv);
        update(percentageAnswer());
      } catch( _error ) {
        update( _error );
      }
    } else{
      document.querySelector( '#calc' ).value = 0;
    }
  }