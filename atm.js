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
    switch(account) {
      case 'one':
        balanceOne += parseInt(amount);
        $('#placeholder_one').text("$" +balanceOne);
      break;

      case 'two':
        balanceTwo += parseInt(amount);
        $('#placeholder_two').text("$" +balanceTwo);
      break;
    };
    background();
  };


  $('#withdraw_one').on('click', function(e){
    withdraw('one', $('#amount_one').val())
    });

  $('#withdraw_two').on('click', function(e){
    withdraw('two', $('#amount_two').val())
    });

  function withdraw(account, amount){
    switch(account) {
      case 'one':
      if(parseInt(amount)<= balanceOne){
        balanceOne -= parseInt(amount);
        $('#placeholder_one').text("$" +balanceOne);
        }else{
          crossAccount(account, amount)
        };
      break;

      case 'two':
      if(parseInt(amount)<= balanceTwo){
        balanceTwo -= parseInt(amount);
        $('#placeholder_two').text("$" +balanceTwo);
        }else{
          crossAccount(account, amount)
        };
      break;
    };
    background();
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

  function crossAccount(account, amount){
    switch(account) {
      case 'one':
        if (parseInt(amount)<= balanceOne+balanceTwo ){
          newAmount = (amount-balanceOne);
          balanceOne = 0;
          balanceTwo = (balanceTwo-newAmount);
          $('#placeholder_one').text("$" +balanceOne);
          $('#placeholder_two').text("$" +balanceTwo);
        };
        break;
      case 'two':
        if (parseInt(amount)<= balanceOne+balanceTwo){
          newAmount = (amount-balanceTwo);
          balanceTwo = 0;
          balanceOne = (balanceOne-newAmount);
          $('#placeholder_one').text("$" +balanceOne);
          $('#placeholder_two').text("$" +balanceTwo);
        };
        break;
      };
     background(); 
  };

});