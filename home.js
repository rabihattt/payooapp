
document.getElementById('add-money').addEventListener('click' , function(event){
    event.preventDefault();
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('addmoney').style.display = 'block';
    document.getElementById('transfermoney').style.display = 'none';
    document.getElementById('get bonus').style.display= 'none';
        document.getElementById('paybill').style.display= 'none';

})

document.getElementById('cash-out').addEventListener('click' , function(event){
    event.preventDefault();
    document.getElementById('cashout').style.display = 'block';
    document.getElementById('addmoney').style.display = 'none';
        document.getElementById('transfermoney').style.display = 'none';
    document.getElementById('get bonus').style.display= 'none';
        document.getElementById('paybill').style.display= 'none';

})
document.getElementById('transfer-money').addEventListener('click' , function(event){
    event.preventDefault();
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('addmoney').style.display = 'none';
        document.getElementById('transfermoney').style.display = 'block';
    document.getElementById('get bonus').style.display= 'none';
        document.getElementById('paybill').style.display= 'none';


})
document.getElementById('get-bonus').addEventListener('click' , function(event){
    event.preventDefault();
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('addmoney').style.display = 'none';
        document.getElementById('transfermoney').style.display = 'none';
    document.getElementById('get bonus').style.display= 'block';
        document.getElementById('paybill').style.display= 'none';


})
document.getElementById('pay-bill').addEventListener('click' , function(event){
    event.preventDefault();
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('addmoney').style.display = 'none';
        document.getElementById('transfermoney').style.display = 'none';
    document.getElementById('get bonus').style.display= 'none';
    document.getElementById('paybill').style.display= 'block';

})










document.getElementById('addmoneybtn').addEventListener('click' ,function(event){
    event.preventDefault();

    const bank = document.getElementById('bank').value;
    const accno =  document.getElementById('accno').value;
   const addamount = parseInt( document.getElementById("addamount").value);
   const addpin = parseInt(document.getElementById('addpin').value);


const total = parseInt( document.getElementById('total').innerText);
// this id is under span tag thats why innertext

if(accno.length<11){
    alert('please enter 11 digit account number');
    return;
}


if(addpin!==1234){
    alert('please enter valid pin');
   return;
}

const newtotal = total + addamount;
document.getElementById('total').innerText = newtotal;
})



document.getElementById('cashoutbtn').addEventListener('click' , function(event){
    console.log('clicked')
        const acno =  document.getElementById('acno').value;
   const deductamount = parseInt( document.getElementById("deductamount").value);
   const adpin = parseInt(document.getElementById('adpin').value);
  
   if(acno.length!==11){
    alert('please enter 11 digit account number');
    return;
}


if(adpin!==1234){
    alert('please enter valid pin');
   return;
}


   const total = parseInt(document.getElementById('total').innerText);
   if(deductamount>total){
    alert('insufficient balance');
    return;
}
   const newtotal = total - deductamount;
document.getElementById('total').innerText = newtotal;
})


document.getElementById('transferbtn').addEventListener('click' , function(event){
    console.log('clicked')
        const acno =  document.getElementById('taccno').value;
   const deductamount = parseInt( document.getElementById("taddamount").value);
   const adpin = parseInt(document.getElementById('taddpin').value);
  
   if(acno.length!==11){
    alert('please enter 11 digit account number');
    return;
}


if(adpin!==1234){
    alert('please enter valid pin');
   return;
}


   const total = parseInt(document.getElementById('total').innerText);
   if(deductamount>total){
    alert('insufficient balance');
    return;
}
   const newtotal = total - deductamount;
document.getElementById('total').innerText = newtotal;
alert('transfer successful');
})

document.getElementById('bonusbtn').addEventListener('click',function(){
    const baccno = parseInt(document.getElementById('baccno').value);
    if(baccno!==987){
alert('invalid  number');
        return;
    }
    else{
        const total = document.getElementById('total').innerText;
        const newtotal = parseInt(total) + 1000;
        document.getElementById('total').innerText = newtotal;
        alert('congratulations you won 1000$ bonus');
    }
})


document.getElementById('paybillbtn').addEventListener('click' , function(event){
    console.log('clicked')
        const paccno =  document.getElementById('paccno').value;
   const pamount = parseInt( document.getElementById("pamount").value);
   const paddpin = parseInt(document.getElementById('paddpin').value);
  
   if(paccno.length!==11){
    alert('please enter 11 digit account number');
    return;
}


if(paddpin!==1234){
    alert('please enter valid pin');
   return;
}


   const total = parseInt(document.getElementById('total').innerText);
   if(pamount>total){
    alert('insufficient balance');
    return;
}
   const newtotal = total - pamount;
document.getElementById('total').innerText = newtotal;
alert('payment successfull');
})