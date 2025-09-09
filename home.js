
document.getElementById('add-money').addEventListener('click' , function(event){
    event.preventDefault();
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('addmoney').style.display = 'block';
})

document.getElementById('cash-out').addEventListener('click' , function(event){
    event.preventDefault();
    document.getElementById('cashout').style.display = 'block';
    document.getElementById('addmoney').style.display = 'none';
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