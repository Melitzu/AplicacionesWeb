//Melián Lucabeche

<!DOCTYPE html>
<html>
<head>
    <title>Verificador de NickName</title>
</head>
<body>
    <h1>Verificador de NickName</h1>
    
    <!-- Formulario para ingresar Nickname -->
    <label for="username">Ingrese un nombre de usuario(Nickname): </label>
    <input type="text" id="username" />
    <br>
    <button onclick="verificarUsuarioValidez()">Verificar</button>
    
    <!-- Resultado -->
    <p id="resultado"></p>

    <script>
        function verificarUsuario() {
            // Función para obtener el nombre de usuario para su validación
            const username = document.getElementById('username').value;

            // Verificar la vericidad del nombre de usuario
            const regex = /^[0-9].*[a-zA-Z]$/;
            const tieneLetraMayuscula = /[A-Z]/.test(username);
            const tieneLetraMinuscula = /[a-z]/.test(username);
            const tieneNumero = /[0-9]/.test(username);
//Validación de nombre de usuarip
            if (
                username.length >= 9 &&
                regex.test(username) &&
                tieneLetraMayuscula &&
                tieneLetraMinuscula &&
                tieneNumero
            ) {
                document.getElementById('resultado').textContent = "El nombre de usuario es válido";
            } else {
                document.getElementById('resultado').textContent = "Tu nombre de usuario no cumple con los requisitos solicitados";
            }
        }
    </script>
</body>
</html>
