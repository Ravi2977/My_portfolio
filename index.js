function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('mail').value,
        message: document.getElementById('message').value
    }
    const serviceId = "service_nssug1z"
    const templateId = "template_h1253mb"
    emailjs.send(serviceId, templateId, params).then(
        (resp) => {
            document.getElementById('name').value = "",
                document.getElementById('mail').value = "",
                document.getElementById('message').value = ""
            console.log(resp)
            alert("Your contact Successfully sent")
        }).catch((err => console.log(err)))

}

