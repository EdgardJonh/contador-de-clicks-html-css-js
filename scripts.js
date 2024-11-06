



  const contadorElemento = document.getElementById('contador');
  let contador = 0;

  // Incrementar valor al hacer clic izquierdo
  document.addEventListener('click', (e) => {
    if (e.button === 0) { // Botón izquierdo
      contador++;
      contadorElemento.textContent = contador;
    }
  });

  // Decrementar valor al hacer clic derecho
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Prevenir el menú contextual predeterminado
    contador--;
    contadorElemento.textContent = contador;
  });
