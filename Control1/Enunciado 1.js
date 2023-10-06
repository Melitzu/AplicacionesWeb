//Melián Lucabeche
//Calculadora de Rendimiento Anual de trabajadores en Empresa de área TI

<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de Rendimiento Anual</title>
</head>
<body>
    <h1>Calculadora de Rendimiento Anual</h1>
    
    <!-- ####Formulario para ingresar la puntuación##### -->
    <label for="puntuacion">Ingrese su puntuacion obtenida (0.0 - 1.0): </label>
    <input type="number" step="0.01" id="puntuacion" min="0" max="1.0" />      //variable tipo numericas definidas con su maximo y minimo
    <button onclick="calcularRendimiento()">Calcular</button>
    
    <!-- Resultados obtenidos -->
    <p>Tu nivel de rendimiento es: <span id="nivelRendimiento"></span></p>
    <p>En base a tu rendimiento, tu monto es de: $<span id="cantidadDinerobtenido"></span></p>

    <script> //Funcion calculadora
        function calcularRendimiento() {
            // Obtenemos la puntuación ingresada por el usuario
            constpuntuacion = parseFloat(document.getElementById('puntuacion').value);

            // Definimos los niveles de rendimiento y sus valores correspondientes
            const niveles = {
                0.0: "Maxima Insuficiencia"
                0.2: "Insuficiente",
                0.4: "Aceptable",
                0.6: "Meritorio",
                0.8: "Excelente"
            };

            // Calculadora del nivel de rendimiento
            let nivel = "Desconocido";
            for (const nivelPuntuacion in niveles) {
                if (puntuacion >= parseFloat(nivelPuntuacion)) {
                    nivel = niveles[nivelPuntuacion];
                }
            }

            //Apartado de calculadora de puntuación y dinero recibido
            const cantidadDinerobtenido = puntuacion * 250000;

            // Mostramos los resultados en la página
            document.getElementById('nivelRendimiento').textContent = nivel;
            document.getElementById('cantidadDinerobtenido').textContent = cantidadDinerobtenido.toFixed(2);
        }
    </script>
</body>
</html>
