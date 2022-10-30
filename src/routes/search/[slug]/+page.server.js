import { API_KEY } from '$env/static/private';

export const load = async ({ params }) => {
	const searchMovie = async () => {
		const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${params.slug}&page=1&include_adult=false`;

		const res = await fetch(url);

		const data = await res.json();

		return data.results;
	};

	return {
		movies: searchMovie()
	};
};
