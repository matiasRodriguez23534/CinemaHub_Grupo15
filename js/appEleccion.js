const peliculaId = localStorage.getItem("peliculaId");
console.log(peliculaId);
const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/${peliculaId}?api_key=dbcc5171a5eff623d655caacade47880`
    );

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);
      console.log(typeof datos);
      let peliculas = '';
      peliculas += `
        <div class="card">
          <img class="poster" src="https://image.tmdb.org/t/p/w500/${datos.poster_path}">
        </div>
        <div class="card">
        <h1 class="titulo">${datos.title}</h1>
             
        </div>
      `;

      document.getElementById('contenedor').innerHTML = peliculas;
    } else if (respuesta.status === 401) {
      console.log('Pusiste la llave mal');
    } else if (respuesta.status === 404) {
      console.log('La pelicula que buscas no existe');
    } else {
      console.log('Hubo un error y no sabemos que paso');
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();