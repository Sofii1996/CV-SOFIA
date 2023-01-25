

let texto_ocultar= document.getElementById ("texto_ocultar")
let boton_leer= document.getElementById ("boton_leer")


boton_leer.addEventListener ("click", toggletext);

function toggletext(){
    texto_ocultar.classList.toggle ("mostrar")

    if (texto_ocultar.classList.contains ("mostrar")){
        boton_leer.innerHTML ="Leer menos";
    }else{
            boton_leer.innerHTML= "Leer más";
        }
    }


        function myFunction() {
            alert("Página cargada exitosamente :) ");
          }



