// Solicitar las 3 notas al usuario
const nota1 = parseFloat(prompt("Ingresa la nota 1 (entre 1.0 y 7.0):"));
const nota2 = parseFloat(prompt("Ingresa la nota 2 (entre 1.0 y 7.0):"));
const nota3 = parseFloat(prompt("Ingresa la nota 3 (entre 1.0 y 7.0):"));

// Verificar que las notas estén dentro del rango permitido
if (nota1 >= 1.0 && nota1 <= 7.0 && nota2 >= 1.0 && nota2 <= 7.0 && nota3 >= 1.0 && nota3 <= 7.0) {
  // Calcular el promedio ponderado
  const promedio = (nota1 * 0.4 + nota2 * 0.3 + nota3 * 0.3).toFixed(2);

  // Determinar la situación del estudiante
  if (promedio < 3.95) {
    alert("Reprobaste la asignatura. Tu promedio es " + promedio);
  } else if (promedio >= 3.95 && promedio <= 4.94) {
    alert("Tienes que dar examen. Tu promedio es " + promedio);
  } else {
    alert("Aprobaste el curso. Felicidades. Tu promedio es " + promedio);
  }
} else {
  alert("Las notas ingresadas no están dentro del rango permitido (1.0 - 7.0).");
}
