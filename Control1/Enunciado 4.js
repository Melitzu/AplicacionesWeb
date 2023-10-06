//Meián Lucabeche
//Función calculadora de IVA

<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de IVA</title>
</head>
<body>
    <h1>Calculadora de IVA</h1>
    
    <!-- Calcule sus montos con el IVA contado  -->
    <label for="monto">Ingrese el monto sin IVA: $</label>
    <input type="number" id="monto" step="0.01" min="0" />
    <br>
    <label for="iva">Ingrese su porcentaje de IVA (de no ingresar su porcentaje se integrará el 19,5% que rige en la legislación chilena) (%): </label>
    <input type="number" id="iva" step="0.01" min="0" />
    <br>
    <button onclick="calcularIVA()">Calcular</button>
    
    <!-- Resultado -->
    <p>El monto total con IVA es: $<span id="total"></span></p>
    <p>El valor del IVA es: $<span id="valorIVA"></span></p>
//Función Calculadora de IVA
    <script>
        function calcularIVA() {
            // Se obtiene el monto con y sin iva ingresado por el usuario, en caso de no haberse integrado, se aplica 19,5%
            const montoSinIVA = parseFloat(document.getElementById('monto').value);
            const porcentajeIVA = parseFloat(document.getElementById('iva').value) || 19.5; // Valor por defecto del 19.5% si no se ingresa el IVA

            // Calcular el monto del IVA y el monto total con IVA
            const montoIVA = (montoSinIVA * porcentajeIVA) / 100;
            const totalConIVA = montoSinIVA + montoIVA;

            // Mostrar los resultados en la página
            document.getElementById('total').textContent = totalConIVA.toFixed(2);
            document.getElementById('valorIVA').textContent = montoIVA.toFixed(2);
        }
    </script>
</body>
</html>
