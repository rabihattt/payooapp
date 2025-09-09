document.getElementById('loginbtn').addEventListener('click',function(event){
    event.preventDefault();
    
    // console.log(event);
    const mobileno = 12345678910;
    const pinnoo = 1234;
    const mobno = document.getElementById('mobno').value;

// .value always returnstring by default so we shoulld convert it  and compare it with the main one

    const moconverted = parseInt(mobno);
    const pinnooo = document.getElementById('pinno').value;
    const pinconverted = parseInt(pinnooo);
    console.log(moconverted , pinconverted);
    if(moconverted===mobileno&&pinconverted===pinnoo){
      window.location.href = "main.html";
    }
    else{
        alert('Login Failed');
    }

})