import { API_KEY } from '$env/static/private'
export const load = async() => {

    const fetchPopularMovies = async() => {

        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        const res = await fetch(url);
        
        const data = await res.json();
        
        return data.results;

    }

    return {
        movies : fetchPopularMovies(),
    }
}