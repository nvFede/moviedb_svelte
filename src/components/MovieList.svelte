<script>
	export let movies;
</script>

<section>
	<div class="popular-movies">
		{#each movies as movie}
			<h1>{movie.title}</h1>
			<a href={'/movies/' + movie.id}>
				<img
                    src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                    alt={movie.title} 
                />
            </a>
			<small>{movie.overview}</small>
		{/each}
	</div>
</section>
