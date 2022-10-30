import { API_KEY } from '$env/static/private'

export const load = async({ params }) => {

    const getMovieDetails = async() => {

        //const API_KEY = process.env.API_KEY;
        
        //const API_KEY='86daa51510ce962b280888e3feb31b51'
        const url = `https://api.themoviedb.org/3/movie/${params.slug}?api_key=${API_KEY}&language=en-US`;
        
        const res = await fetch(url);
        
        const data = await res.json();
        
        return data;

    }

    return {
        movie : getMovieDetails(),
    }
}