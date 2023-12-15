// Reto 1
// Programa para ingresar numeros x pantalla
//Saber si es numero par o impar


//Hacer un programa en javascript que 
//ingrese numeros por pantalla y saber si son numeros pares o impares

<!DOCTYPE html>
<html>
<head>
    <title>Verificar si un número es par o impar</title>
</head>
<body>
    <h1>Verificar si un número es par o impar</h1>

    <label for="numeroInput">Ingresa un número:</label>
    <input type="number" id="numeroInput">
    <button onclick="verificarParImpar()">Verificar</button>

    <p id="resultado"></p>

    <script>
        function verificarParImpar() {
            // Obtén el valor ingresado por el usuario
            const numero = parseInt(document.getElementById("numeroInput").value);

            // Verifica si el número es par o impar
            if (numero % 2 === 0) {
                document.getElementById("resultado").innerHTML = `${numero} es un número par.`;
            } else {
                document.getElementById("resultado").innerHTML = `${numero} es un número impar.`;
            }
        }
    </script>
</body>
</html>
