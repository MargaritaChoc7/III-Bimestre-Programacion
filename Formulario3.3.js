const form = document.getElementById('my form');

form.addEventListener("submit", function(event)){
    Event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name ===  "" || email === "" || message === ""){
        alert("por favor completa todos los campos");
    } else{
        //aqui puedes enviar el formulario o realizar otra accion
        alert("formulario enviado exitosamente.");
        form.requestFullscreen()
    }

}