// console.log("Hi I am form index.js... so it's linked...s");

// const btn = document.querySelector('#alert-btn');
// if( btn){
//     btn.addEventListener('click', triggerAlert);
// }

// function triggerAlert() {
//     console.log("triggerAlert was called!!");

//   var alertEl = document.querySelector('.alert');
  
//   alertEl.setAttribute("role", "alert");
// }


// function showAlert(){
//     console.log("show alert was called...")
//     document.getElementById("expirationWarning").className = ""; 
// }

const showAlertTimeout = document.getElementById('show-alert-timeout');

if(showAlertTimeout){
    showAlertTimeout.addEventListener('click', triggerAlertMessage);
}

function triggerAlertMessage(){
    console.log("trigger alert message was called");
    const alert = document.getElementById('alert-message-timeout').style.visibility="visible";

    setTimeout(function(){
         document.getElementById('alert-message-timeout').style.visibility="hidden";
        // document.getElementById('alert-message').className="visible";
    },2000);
}