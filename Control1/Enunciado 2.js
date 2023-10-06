//Melián Lucabeche 

//Desarrollar un programa donde se le pregunta al usuario por 1 frase y letra
//En pantalla mostrar el numero de veces que aparece la letra y frase, desarrollado en javascript/HTML 

<!DOCTYPE html>
<html>
<head>
    <title>Programa contador de letras y frases</title>
</head>
<body>
    <h1>Programa contador de letras y frases</h1>

    <!-- Programa contador de letras y frases -->
    <label for="frase">Ingrese una frase: </label>
    <input type="text" id="frase" />
    <br>
    <label for="letra">Ingrese una letra: </label>
    <input type="text" id="letra" maxlength="1" />
    <br>
    <button onclick="contarFrasesYLetras()">Contar</button>

    <!-- Resultado -->
    <p>La letra <span id="letrasIngresadas"></span> aparece <span id="contadordeLetras"></span> veces en la frase.</p>
    <p>La frase que ingresó aparece<span id="contadordeFrases"></span> veces en el texto.</p>


<p><la letra /span id="letrasIngresada"></span> aparece <span id="contadordeletras"/p>p>
    <script> //Función Contar Frases Y Letras
        function contarFraseYLetra() {
            // Obtener la frase y la letra ingresadas por el usuario
            const frase = document.getElementById('frase').value.toLowerCase();
            const letra = document.getElementById('letra').value.toLowerCase();

            // Contar el número de veces que aparece la letra en la frase
            let contadorLetra = 0;
            for (let i = 0; i < frase.length; i++) {
                if (frase[i] === letra) {
                    contadorLetra++;
                }
            }

            // Contar el número de veces que aparece la frase en el texto
            const texto = document.body.innerText.toLowerCase();
            const contadorFrase = (texto.match(new RegExp(frase, 'g')) || []).length;

            // Mostrar los resultados en la página
            document.getElementById('letrasIngresadas').textContent = letra;
            document.getElementById('contadordeLetras').textContent = contadorLetra;
            document.getElementById('contadordeFrases').textContent = contadorFrase;
        }
    </script>
</body>
</html>
