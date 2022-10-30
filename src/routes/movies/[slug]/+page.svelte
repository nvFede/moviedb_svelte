<script>
	export let data;

	const { movie } = data;

	console.log(movie);
</script>

<section>
	
    <h1>{movie.title}</h1>
	
    <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt={movie.title} />



</section>
