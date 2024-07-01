function emailSend(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_r55172h", "template_cftjdt6", params).then(function(res){
        alert("Sucess!" + res.status);
    })
}