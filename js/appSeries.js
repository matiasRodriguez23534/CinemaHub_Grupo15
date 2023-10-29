let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 154){
		pagina += 1;
		cargarSeries();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarSeries();
	}
});

const cargarSeries = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmNjNTE3MWE1ZWZmNjIzZDY1NWNhYWNhZGU0Nzg4MCIsInN1YiI6IjY1M2QyNGUyYzhhNWFjMDBjNmQ2OWU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YYPO7UOCWCW5eyUYlMdBJ8Aa4wJN1TWcNOPakV8Bifg'
            }
        };

        const respuesta = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=es-MX&page=${pagina}`, options)

        if (respuesta.ok) {
            const datos = await respuesta.json();

            let series = '';
            datos.results.forEach(serie => {
                series += `
                    <div class="card">
                        <a href="pelicula.html">
                            <img class="poster" src="https://image.tmdb.org/t/p/w500/${serie.poster_path}" >
                        </a>
                        <h3 class="titulo">${serie.name}</h3>
                    </div>
                `;
            });

            document.getElementById('contenedor').innerHTML = series;
        } else if (respuesta.status === 401) {
            console.log('Pusiste la llave mal');
        } else if (respuesta.status === 404) {
            console.log('La serie que buscas no existe');
        } else {
            console.log('Hubo un error y no sabemos qué pasó');
        }
    } catch (error) {
        console.log(error);
    }
};

cargarSeries();

