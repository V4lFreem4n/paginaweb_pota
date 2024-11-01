function animacion() {
    let letras = [["¿", "Q", "u", "i", "é", "n", "e", "s", " ", "s", "o", "m", "o", "s", "?"],
    ["S", "o", "m", "o", "s", " ", "t", "u", " ", "m", "e", "j", "o", "r", " ", "o", "p", "c", "i", "ó", "n"]];

    //let letras = [["N", "a", "d", "i", "a", " ","R","o","d","r","i","g","u","e","z"],["L", "a", "b", "o", "r", "a", "t", "o", "r", "y", " ", "T", "e", "c", "h", "n", "i", "q", "u", "e"]];
    const espacio = document.getElementById("contenido_texto");
    let letraContador = 0;
    let nivelArray = 0;

    function pintarTexto() {
      espacio.textContent += letras[nivelArray][letraContador];
      letraContador++;

      if (letraContador === letras[nivelArray].length) {
        clearInterval(intervaloEscritura);
        setTimeout(() => borrarCadena(espacio), 1000); // Espera un segundo antes de empezar a borrar
      }
    }

    function borrarCadena(espaciohtml) {
      let cantidad = espaciohtml.textContent.length;
      let indice = 0;

      function deleteWords() {
        espaciohtml.textContent = espaciohtml.textContent.slice(0, -1);
        indice++;

        if (indice === cantidad) {
          clearInterval(intervaloBorrado);
          letraContador = 0;
          nivelArray = (nivelArray + 1) % letras.length; // Pasar al siguiente array de letras
          setTimeout(() => intervaloEscritura = setInterval(pintarTexto, 150), 500); // Espera un segundo antes de empezar a escribir
        }
      }
      let intervaloBorrado = setInterval(deleteWords, 100); // Ajusta la velocidad de borrado aquí
    }


    let intervaloEscritura = setInterval(pintarTexto, 150);
  }

  window.addEventListener("load", animacion);

 
