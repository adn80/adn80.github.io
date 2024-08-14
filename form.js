const form = document.getElementById("contact-form");

function setResponseText(text) {
    console.log(text)
    // document.getElementById("response-text").innerText = text;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    setResponseText("Please Wait, Sending message..");
    var msg = sendMessage();
});

function isValidEmail(email) {
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
}

function sendMessage() {

    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let message = document.getElementById("Message").value;

    if (email == "" || message == "") {
        setResponseText("Please fill both the fields.");
        return false;
    }
    if (!isValidEmail(email)) {
        setResponseText("Enter a valid email address.");
        return false;
    }

    //Body of the Request.
    let data = new FormData();
    data.set('Name', name)
    data.set('Email', email);
    data.set('Message', message);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbxK5hKBnWwyCGTiyNU5hKNxdHZXEM2WwRNspJM-Ghqgonnocm_bLlEIGJlMyHqHkauZ/exec', true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
        setResponseText("Thank You for sending Message.");
        setTimeout(function () {
        resetTheForm();
     }, 2000);
    }
    }
    xhr.onerror = function(){
        setResponseText("Somthing error, Try again");
    }
    xhr.send(data);
    return true;
}

function resetTheForm() {
    //for empty all values
    setResponseText("");
    document.getElementById("Email").value = "";
    document.getElementById("Message").value = "";
    document.getElementById("Name").value = ""
}