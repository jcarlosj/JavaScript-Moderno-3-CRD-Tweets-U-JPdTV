/* Agrega 'Tweet' al DOM */

// Constantes y Variables
const listaTweets = document .getElementById( 'lista-tweets' );     // Obtiene el elemento donde se desplegarán los 'Trinos'

// Event Listeners
eventListeners();

function eventListeners() {
    // Envío del formulario  
    document .querySelector( '#formulario' ) .addEventListener( 'submit', agregarTweet );     // 'submit' ---> Evento de envio de formulario
}

// Agregar Tweet al DOM desde el formulario
function agregarTweet( event ) {
    event .preventDefault();            // Prevenir abrir lo que se tenga en el 'action' del formulario
    console .log( 'agregarTweet() ', 'Formulario enviado' );

    // Tomar el valor del 'textarea'
    const tweet = document .getElementById( 'tweet' ) .value;
    console .log( 'tweet (textarea) ', tweet );

    const botonBorrar = document .createElement( 'a' );  // Crea elemento 'a' 
    botonBorrar .classList = 'borrar-tweet';             // Agrega clase ( también se puede usar el .add )
    botonBorrar .textContent = 'X';                      // Agrega texto de contenido al enlace 

    const li = document .createElement( 'li' );     // Crea el elemento 'li'
    li .innerText = tweet;                          // Asigna el contenido del 'tweet' en el elemento 'textarea'
    li.appendChild( botonBorrar );                  // Agrega el elemento 'a' al elemento 'li'
    listaTweets .appendChild( li );                 // Tomamos el elemento Padre en el que vamos a desplegar el elemento en el DOM
}