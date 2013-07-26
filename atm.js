//Document is ready

$(function(){

  var balanceOne = 0
  var balanceTwo = 0


  $('#deposit_one').on('click', function(e){
    deposit('one', $('#amount_one').val())
    });

  $('#deposit_two').on('click', function(e){
    deposit('two', $('#amount_two').val())
    });


  function deposit(account, amount){
    if(parseInt(amount) >0){
      switch(account) {
        case 'one':
          balanceOne += parseInt(amount);
        break;

        case 'two':
          balanceTwo += parseInt(amount);
        break;
      };
    }else{
      alert('Not a valid input')
    };
    updateValues();
    background();
  };

  $('#withdraw_one').on('click', function(e){
    withdraw('one', $('#amount_one').val())
    });

  $('#withdraw_two').on('click', function(e){
    withdraw('two', $('#amount_two').val())
    });


  function withdraw(account, amount){
    if(parseInt(amount) >0){
      switch(account) {
        case 'one':
        if(parseInt(amount)<= balanceOne){
          balanceOne -= parseInt(amount);
          }else{
            crossAccount(account, amount)
          };
        break;

        case 'two':
        if(parseInt(amount)<= balanceTwo){
          balanceTwo -= parseInt(amount);
          }else{
            crossAccount(account, amount)
          };
        break;
      };
    }else{
      alert('Not a valid input')
    };
    updateValues();
    background();
  };


  function crossAccount(account, amount){
    switch(account) {
      case 'one':
        if (parseInt(amount)<= balanceOne+balanceTwo ){
          newAmount = (amount-balanceOne);
          balanceOne = 0;
          balanceTwo = (balanceTwo-newAmount);
        }else{
          alertMessage();
        };
        break;
      case 'two':
        if (parseInt(amount)<= balanceOne+balanceTwo){
          newAmount = (amount-balanceTwo);
          balanceTwo = 0;
          balanceOne = (balanceOne-newAmount);
        }else{
          alertMessage();
        };
        break;
      };
    updateValues();
    background(); 
  };


  function alertMessage(){
    alert('Not enough money')
  };


  function updateValues(){
    $('#placeholder_one').text("$" +balanceOne);
    $('#placeholder_two').text("$" +balanceTwo);
  };


  function background(){
    if ( balanceOne > 0 ){
      $('#balance_one').css( "background-color", "#E3E3E3" );
    }else{
      $('#balance_one').css( "background-color", "#ff0033" );  
    };

    if ( balanceTwo > 0){
      $('#balance_two').css( "background-color", "#E3E3E3" );
    }else{
      $('#balance_two').css( "background-color", "#ff0033" );
    };

  };

});