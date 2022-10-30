<script>
    import { goto } from '$app/navigation';

	let isActive = false;
    let searchInput = '';
    function searchMovie() {
        goto('/search/'+searchInput);
    }

</script>

<form on:submit|preventDefault={searchMovie}>
	<div class="flex items-center justify-center">
		<div class="flex border-2 rounded">
			<input
				bind:value={searchInput}
				type="text"
				class="px-2 py-1 w-50"
				placeholder={!isActive ? 'Search...' : ''}
			/>
			<button type="submit" class="flex items-center justify-center px-4 border-l">
				<svg
					class="w-5 h-5 text-gray-600"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
					/>
				</svg>
			</button>
		</div>
	</div>
</form>
