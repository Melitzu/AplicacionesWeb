//Reto N4 
//Melián Lucabeche
//CALCULADO RA DE IMC Y DATOS DE SALUD DE PACIENTE EN ESPECIFICO


<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de IMC y Salud</title>
</head>
<body>
    <h1>Calculadora de IMC y Salud</h1>
    <form id="healthForm">
        <label for="nombre">Nombre del paciente:</label>
        <input type="text" id="nombre" required><br>    //requisitos de ingresar valores de usuario 

        <label for="peso">Peso (kg):</label>
        <input type="number" id="peso" step="0.01" required><br>

        <label for="altura">Altura (m):</label>
        <input type="number" id="altura" step="0.01" required><br>

        <label for="edad">Edad (años):</label>
        <input type="number" id="edad" required><br>

        <label for="genero">Género:</label>
        <select id="genero" required>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
        </select><br>

        <label for="nivelActividad">Nivel de actividad física:</label>
        <select id="nivelActividad" required>
            <option value="sedentario">Sedentario</option>
            <option value="moderado">Moderado</option>
            <option value="activo">Activo</option>
        </select><br>

        <button type="button" onclick="calcularIMC()">Calcular</button>
    </form>

    <h2>Resultados:</h2>
    <p>IMC: <span id="resultadoIMC"></span></p>
    <p>Clasificación de IMC: <span id="clasificacionIMC"></span></p>
    <p>Gasto Energético Diario (GED): <span id="gedDiario"></span></p>
    <p>Estado Nutricional: <span id="estadoNutricional"></span></p>

    <script>
        function calcularIMC() {
            // Obtener los valores del formulario
            const peso = parseFloat(document.getElementById('peso').value);
            const altura = parseFloat(document.getElementById('altura').value);
            const edad = parseInt(document.getElementById('edad').value);
            const genero = document.getElementById('genero').value;
            const nivelActividad = document.getElementById('nivelActividad').value;

            // Calcular el IMC
            const imc = peso / (altura * altura);

            // Clasificar el IMC
            let clasificacionIMC = "";
            if (imc < 18.5) {
                clasificacionIMC = "Bajo Peso";
            } else if (imc >= 18.5 && imc < 24.9) {
                clasificacionIMC = "Peso Normal";
            } else if (imc >= 25 && imc < 30.0) {
                clasificacionIMC = "Sobrepeso";
            } else {
                clasificacionIMC = "Obesidad";
            }

            // Calcular el Gasto Energético Diario del paciente
            let factorActividad = 1.2; // Sedentarismo declarado
            if (nivelActividad === "moderado") {
                factorActividad = 1.55
            } else if (nivelActividad === "activo") {
                factorActividad = 1.9
            }
            const gedDiario = factorActividad * peso;   

            // Calcular el Estado Nutricional del paciente
            let estadoNutricional = "Adecuado";
            if (clasificacionIMC === "Bajo Peso" || clasificacionIMC === "Obesidad") {
                estadoNutricional = "Necesita atención especializada";
            }

            // Mostrar los resultados
            document.getElementById('resultadoIMC').textContent = imc.toFixed(2);
            document.getElementById('clasificacionIMC').textContent = clasificacionIMC;
            document.getElementById('gedDiario').textContent = gedDiario.toFixed(2);
            document.getElementById('estadoNutricional').textContent = estadoNutricional;
        }
    </script>
</body>
</html>
