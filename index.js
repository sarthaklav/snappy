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
    showAlertTimeout.addEventListener('click', triggerTimeoutAlert);
}

function triggerTimeoutAlert(){
    console.log("trigger alert message was called");
     document.getElementById('alert-message-timeout').style.visibility="visible";

    setTimeout(function(){
         document.getElementById('alert-message-timeout').style.visibility="hidden";
    },3000);
}


const showAlertCancel = document.getElementById('show-alert-cancel');
if(showAlertCancel) {
    showAlertCancel.addEventListener('click',triggerCancelAlert);
}
function triggerCancelAlert(){
    console.log("trigger cancel alert was called");
    document.getElementById('alert-message-cancel').style.visibility="visible";
}


const closeAlertCancel = document.getElementById('close-alert-cancel');

if(closeAlertCancel){
    console.log("if element is working");
    closeAlertCancel.addEventListener('click', closeTimeoutAlertMessage);
}

function closeTimeoutAlertMessage(){
    console.log("close event handller was called");
    document.getElementById('alert-message-cancel').style.visibility="hidden";
}