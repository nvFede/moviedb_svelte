<script>
	import SearchBox from "../../components/SearchBox.svelte";
    import { fly } from "svelte/transition"
	
	export let data;

	const { movies } = data;

	console.log(movies);
    let fallback = 'http://placekitten.com/400/590'
    const handleError = ev => ev.target.src = fallback
</script>

<section>
	
    <h1 class="font-sans text-4xl p-6 mt-10 text-center">Popular movies</h1>

	<div class="flex content-center" in:fly={{ y: 60, duration: 400}} out:fly={{ y:-50, duration:400}}>
        
        <div class="grid m-20 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-50 ">
            {#each movies as movie}
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <a data-sveltekit-noscroll data-sveltekit-prefetch  href={'/movies/' + movie.id}>
                        <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} on:error={handleError} />
                    </a>
                    <div class="px-6 py-4">
                        <h3 class="font-bold text-xl mb-2">{movie.title}</h3>

                        

                        <p class="text-gray-700 text-base">
                            <!-- <small>{movie.overview.substr(0,220)+'...'}</small> -->
                            <small>Release date:<span class=" p-1 text-gray-400">{movie.release_date}</span>   </small>
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
