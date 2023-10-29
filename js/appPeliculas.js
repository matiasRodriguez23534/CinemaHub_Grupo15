document.addEventListener("DOMContentLoaded", function() {
    let pagina = 1;
    let peliculaId;
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');

    btnSiguiente.addEventListener('click', () => {
        if(pagina < 1000){
            pagina += 1;
            cargarPeliculas();
        }
    });

    btnAnterior.addEventListener('click', () => {
        if(pagina > 1){
            pagina -= 1;
            cargarPeliculas();
        }
    });

    const cargarPeliculas = async() => {
        try {
            const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
        
            // Si la respuesta es correcta
            if(respuesta.status === 200){
                const datos = await respuesta.json();
                
                let peliculas = '';
                datos.results.forEach(pelicula => {
                    peliculas += `
                    <div class="card">
                        <a href="pelicula.html">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" data-id="${pelicula.id}">
                        </a>
                        <h3 class="titulo">${pelicula.title}</h3>
                    </div>
                    `;
                });

                document.getElementById('contenedor').innerHTML = peliculas;

                // Obtener todos los elementos de imagen con la clase "poster"
                const posters = document.querySelectorAll(".poster");
                
                // Agregar evento de clic a cada imagen
                posters.forEach(poster => {
                    poster.addEventListener("click", function() {
                        peliculaId = this.getAttribute("data-id");
                        console.log("ID de la película seleccionada:", peliculaId);
                    
                    });
                });

            } else if(respuesta.status === 401){
                console.log('Pusiste la llave mal');
            } else if(respuesta.status === 404){
                console.log('La pelicula que buscas no existe');
            } else {
                console.log('Hubo un error y no sabemos que paso');
            }

        } catch(error){
            console.log(error);
        }
     }

});
cargarPeliculas();

console.log("ID de la película seleccionada:", peliculaId);
export { peliculaId };