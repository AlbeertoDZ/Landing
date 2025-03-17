
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();


    console.log(event.target.name.value);

    const name = event.target.name.value;
    const email = event.target.email.value;
    const asunto = event.target.subject.value;
    const mensaje = event.target.message.value;
    const edad = event.target.edad.value;

    let error = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Validaciones
    if (name.length >= 3 && name.length <= 30) {

    } else {
        error += "Nombre no valido (3 a 30 caracteres)\n";
    }

    if (emailRegex.test(email)) {

    } else {
        error += "Formato email no valido, compruebe que es correcto\n";
    }

    if (asunto.length >= 3 && asunto.length <= 40) {

    } else {
        error += "Escriba un asunto(3 a 40 caracteres\n"
    }

    if (mensaje.length >= 3 && asunto.length <= 300) {

    } else {
        error += "Escriba un mensaje (min 3 / max 300 caracteres)\n"
    }

    if (edad !== "") {

    } else {
        error += "Seleccione su edad\n"
    }

    // Por si hay errores
    if (error.length != 0) {
        alert(error); //imprime mensaje final de error
        //document.body.innerHTML += msj;
        let p = document.createElement("pre");
        let mensaje = document.createTextNode(error);
        p.style.color = "#DD1C1A";
        p.style.fontSize = "16px";
        p.appendChild(mensaje);

        document.getElementById("contact").appendChild(p); // dibuja resultado
    }
    else {
        //Enviar formulario
        //document.querySelector("form").submit();
        alert("Formulario enviado con éxito");
        event.target.submit();
    }
})