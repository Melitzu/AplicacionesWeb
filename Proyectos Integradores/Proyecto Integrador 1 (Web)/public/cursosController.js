// En cursosController.js

const Course = require('../models').Course; // Asegúrate de que la importación sea correcta



const obtenerCursosDisponibles = async (req, res) => {
    try {
      const cursos = await Course.find();
      res.render('cursos-eliminar', { cursos });
    } catch (error) {
      res.status(500).send('Error al obtener la lista de cursos');
    }
  };

  const eliminarCurso = async (req, res) => {
    const courseId = req.params.id; // Obten el ID del curso desde la URL
    try {
      // Realiza la lógica para eliminar el curso con el ID proporcionado
      await Course.findByIdAndRemove(courseId);
      res.redirect('/eliminar-cursos'); // Redirige a la página de cursos después de eliminar
    } catch (error) {
      res.status(500).send('Error al eliminar el curso');
    }
  };
  
  module.exports = { eliminarCurso, obtenerCursosDisponibles };
