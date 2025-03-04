

//form
document.getElementById("form-contacts").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let form = event.target;
    let formData = new FormData(form);
    let submitButton = form.querySelector(".click-form"); 
    let originalButtonText = submitButton.value; 
     
    submitButton.value = "Enviando...";

    submitButton.disabled = true; 

    fetch(form.action, { 
        method: "POST",
        body: formData
    }).then(response => {
        if (response.ok) {
            alert("Mensagem enviada com sucesso!");
            form.reset(); 
        } else {
            alert("Erro ao enviar a mensagem. Tente novamente.");
        }
    }).catch(error => {
        alert("Erro ao conectar ao servidor. Verifique sua conexão.");
    }).finally(() => {
        submitButton.value = originalButtonText;
        submitButton.disabled = false;
    });
});
