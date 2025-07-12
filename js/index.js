// Navbar dinamico para todas las paginas

document.getElementById(`navbar_container`).innerHTML = 
`<nav id="sideBar" class="navbar offsidebar_menu">
      <span id="menu_icon" class="icono_menu material-symbols-outlined">
        menu
      </span>
      <img
        id="menu_logo"  
      class="off_menu logo_navbar"
        src="./assets/LogoNavbar.png"
        alt="Logo de la empresa de Software Global"
      />
      <ul id="menu_opciones" class="off_menu">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="nosotros.html">Nosotros</a></li>
        <li><a href="servicios.html">Servicios</a></li>
        <li><a href="sectores.html">Sectores</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </nav>`;

// Menu desplegable para tablets y celulares

let menuAction = document.getElementById("menu_icon").addEventListener("click", desplegarMenu);

function desplegarMenu(){
    
    let sideBar = document.getElementById("sideBar");
    let logoSideBar = document.getElementById("menu_logo");
    let opcionesSideBar = document.getElementById("menu_opciones");

    let containsClass = sideBar.classList.contains("offsidebar_menu");

    if(containsClass){
        sideBar.classList.remove('offsidebar_menu');
        logoSideBar.classList.remove('off_menu');
        opcionesSideBar.classList.remove('off_menu');
    }
    else{
        sideBar.classList.add('offsidebar_menu');
        logoSideBar.classList.add('off_menu');
        opcionesSideBar.classList.add('off_menu');
    }
}


// Seccion leer mas en tarjetas de las paginas

document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.contenedorTarjetasWeb');

    if (cardsContainer) {

        cardsContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('leerMas')) {

                const clickedButton = event.target;

                const contenidoParrafo = clickedButton.previousElementSibling;
                
                if (contenidoParrafo && contenidoParrafo.classList.contains('overflowContenidoTarjeta')) {
                    contenidoParrafo.classList.toggle('contenidoTarjeta');
                    clickedButton.textContent = contenidoParrafo.classList.contains('contenidoTarjeta') ? 'Leer mas' : 'Mostrar menos';
                }
            }
        });
    } else {
        console.error('El contenedor .contenedorTarjetasWeb no fue encontrado.');
    }
});


// Validacion formulario de contacto

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formularioContacto');
    const nombreInput = document.getElementById('nombreContacto');
    const apellidoInput = document.getElementById('apellidoContacto');
    const emailInput = document.getElementById('emailContacto');
    const mensajeInput = document.getElementById('mensajeContacto');

    const cleanLettersAndSpacesRegex = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g;
    const finalLettersAndSpacesValidationRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const cleanEmailRegex = /[^a-zA-Z0-9@._-]/g;
    const finalEmailValidationRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const cleanMessageRegex = /[^a-zA-Z0-9\s.,?!()@]/g;

    const applyNameFieldCleaning = (inputElement) => {
        inputElement.value = inputElement.value.replace(cleanLettersAndSpacesRegex, '');
    };

    nombreInput.addEventListener('input', () => applyNameFieldCleaning(nombreInput));
    apellidoInput.addEventListener('input', () => applyNameFieldCleaning(apellidoInput));



    emailInput.addEventListener('input', () => {
        emailInput.value = emailInput.value.replace(cleanEmailRegex, '');
    });

    mensajeInput.addEventListener('input', () => {
        mensajeInput.value = mensajeInput.value.replace(cleanMessageRegex, '');
    });


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        const nombreValue = nombreInput.value.trim();
        if (nombreValue === '' || !finalLettersAndSpacesValidationRegex.test(nombreValue)) {
            isValid = false;
        }

        const apellidoValue = apellidoInput.value.trim();
        if (apellidoValue === '' || !finalLettersAndSpacesValidationRegex.test(apellidoValue)) {
            isValid = false;
        }

        const emailValue = emailInput.value.trim();
        if (emailValue === '' || !finalEmailValidationRegex.test(emailValue)) {
            isValid = false;
        }

        const mensajeValue = mensajeInput.value.trim();

        if (isValid) {
            form.submit();
        } else {
            console.log('Intento de envío de formulario inválido. Sin feedback visible.');
        }
    });
});