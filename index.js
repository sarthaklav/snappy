
//below alert message deals with the alert massage that disappears in 3 seconds automatically

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


//below event handler deals with the alert message cancelled manually 

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



//code to open and close modal box in the documentation page

const openModal = document.getElementById('openModalBtn');
const dialog    = document.getElementById('dialogBox');
const closeModal = document.getElementById('closeDialogBox');

openModal.addEventListener('click', function(){
   dialog.showModal();
   console.log("Dialog Open event handeller is running..");
   document.querySelector('body').style.opacity= .2;
})

closeModal.addEventListener('click', function(){
    dialog.close();
    console.log("dialog close box clicked...");
    document.querySelector('body').style.opacity= 1;   
})

//code below deals with toast message

const toastMsg = document.getElementById('toast-msg');
const toastBtn = document.getElementById('toast');

toast.addEventListener('click', function(){
    // document.getElementById('toast-msg').style.display= "block";
    toastMsg.style.display= "block";
    setTimeout(function(){
     toastMsg.style.display= "none";
    },4000)
   
})