<script>
	export let data;

	const { movie } = data;

	console.log(movie);

	export let img_url = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0
	});
</script>

<section>
	<!--Title-->
	<div class="text-center pt-12 md:pt-20">
		<h1 class="font-bold break-normal text-3xl md:text-5xl mt-4">{movie.title}</h1>
		<h3 class="text-green-600 break-normal text-xl md:text-2xl mb-4">{movie.tagline}</h3>
	</div>

	<!--image-->
	<div
		class="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
		style="background-image:url({img_url}); height: 75vh;"
	/>

	<!--Container-->
	<div class="container max-w-6xl mx-auto -mt-32">
		<div class="mx-0 sm:mx-6">
			<div
				class="bg-white w-full p-8 md:p-24 text-xl md:text-xl text-gray-800 leading-normal"
				style="font-family:Georgia,serif;"
			>
				<div class="flex">
					<div class="text-sm md:text-base text-green-600  mb-4 flex-1">
						Release Date :
						{movie.release_date}
					</div>
					<div class="w-64 flex justify-end font-mono">
						<svg
							aria-hidden="true"
							class="w-5 h-5 text-yellow-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><title>Rating star</title><path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/></svg
						>
						<p class="ml-2 text-sm font-bold text-gray-900 dark:text-white mr-2">
							{Math.round(movie.vote_average * 100) / 100} | 
						</p>
						<small>
							<span class="font-bold text-sm">{movie.vote_count} Votes</span>
						</small>
					</div>
				</div>

				<div class="genres mb-4">
					<small>Genres: </small>
					{#each movie.genres as genre}
						<span
							class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
						>
							{genre.name}
						</span>
					{/each}
				</div>
				{movie.overview}

				<ul class="text-sm font-sans mt-8">
					<li class="font-bold mt-1">
						Budget: <span class="text-green-600 font-normal">{formatter.format(movie.budget)}</span>
					</li>
					<li class="font-bold mt-1">
						Original Language: <span class="text-green-600 font-normal"
							>{movie.original_language}</span
						>
					</li>
					<li class="font-bold mt-1" />
				</ul>
			</div>
		</div>
	</div>
</section>
