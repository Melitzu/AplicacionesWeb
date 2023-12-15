//Melián Lucabeche
<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de Propina</title>
</head>
<body>
    <h1>Calculadora de Propinas</h1>
    //Entrada de datos en CLP Chilenos
    <label for="montoTotal">Monto Total (CLP):</label>
    <input type="text" id="montoTotal">
    
    <br>
    //Porcentajes de propinas del 10, 15 y 20 %
    <label for="porcentajePropina">Porcentaje de Propina:</label>
    <select id="porcentajePropina">
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="20">20%</option>
    </select>
    
    <br>
    
    <button onclick="calcularPropina()">Calcular</button>
    
    <br>
    
    <div id="resultado"></div> //Funcion importante, div remplaza contenido anterior 
    
    //Validación de entradas con parseFloat y isNaN para prevenir erorres
    <script> 
        function calcularPropina() {    
            var montoTotal = parseFloat(document.getElementById("montoTotal").value);
            var porcentajePropina = parseFloat(document.getElementById("porcentajePropina").value);
            
            if (isNaN(montoTotal) || isNaN(porcentajePropina)) {
                document.getElementById("resultado").innerHTML = "Por favor, ingresa un monto válido y selecciona un porcentaje de propina válido.";
                return;
            }
            
            var propina = montoTotal * (porcentajePropina / 100);
            var totalConPropina = montoTotal + propina;
            
            document.getElementById("resultado").innerHTML = "Propina: CLP " + propina.toFixed(2) + "<br>Total a pagar: CLP " + totalConPropina.toFixed(2);
        }
    </script>
</body>
</html>


