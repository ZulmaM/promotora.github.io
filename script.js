//seguimos las instrucciones igual que en html primero el comentario y abajo el ejmplo implementado en codigo
//primero creamos nuestra hoja js, y la vinculamos con nuestro html mediante el script que va siempre
//antes de cerrar la etiqueta body, y lo que vamos a hacer como solo tenemos una hoja html, entonces lo que hacemos
// es  modificar mi html desde el dom usando JS, entonces declaramos primero una variable var y le decimos  que 
//el boton cuyo id es ButtonIniciar  cuando se haga click sobre el, cambie la visibilidad escondiendo el boton y
// y mostrando  el formulario cuyo id es loginForm 
var ButtonIniciar = document.getElementById("ButtonIniciar");
var loginForm = document.getElementById("loginForm");

 //Esto establece un evento que a su vez genera uba funcion de escucha ("click") en el elemento con 
 //el id "ButtonIniciar" que cuando se hace clic en este botón, se ejecutará la función que se encuentra
 // dentro de las llaves { ... }.
ButtonIniciar.addEventListener("click", function() {
//dentro de la funcion realizamos una comprobacion de que el display del form este en none, es decir que este oculto
    if (loginForm.style.display === "none") {

//si es asi al hacer click en el boton se ejecuta esta funcion mostrando el formulario
        loginForm.style.display = "block";

//caso contrario si ya esta visible el form se ejecuta esta linea de codigo
    } else {
        loginForm.style.display = "none";
    }
});


