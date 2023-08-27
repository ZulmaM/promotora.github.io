//primero creamos nuestra hoja js, y la vinculamos con nuestro html mediante el script que va siempre
//antes de cerrar la etiqueta body, y lo que vamos a hacer como solo tenemos una hoja html, vamos a 
//hacer que al hacer click en el boton iniciar session se abra el formulario de inicio de sesion para eso
// declaramos  una variable para hacer aparecer y desaparcer el formulario, aca lo que estamos haciendo es 
//modificar mi html desde el dom entonces decimos var por variable que el boton cuyo id es ButtonIniciar
//y  la variable con id loginForm
var ButtonIniciar = document.getElementById("ButtonIniciar");
var loginForm = document.getElementById("loginForm");


ButtonIniciar.addEventListener("click", function() {
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
    } else {
        loginForm.style.display = "none";
    }
});


