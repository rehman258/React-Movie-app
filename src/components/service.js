import axios from "axios"
const APIKEY = '?api_key=5b3c61ebd6be152646b06a5536dcdd98';
const BASEURL = `https://api.themoviedb.org/3`;
const nowPlayingUrl = `${BASEURL}/movie/now_playing`;/*done*/
const topRatedUrl = `${BASEURL}/movie/top_rated`;
const movieUrl = `${BASEURL}/movie/`; /*done*/
const genreUrl = `${BASEURL}/genre/movie/list`;/*done*/
const moviesUrl = `${BASEURL}/discover/movie`;/*done*/
const personUrl = `${BASEURL}/trending/person/week`;

// home , topRated, 

export const fetchMovies = async ()=>{
    try{
        const {data} =  await axios.get(nowPlayingUrl+APIKEY,{
            params:{
                page:1,
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original'
        const modifiedData = data.results.map(el=>({
            ...el,
            'backdrop_path':posterUrl+el.backdrop_path,
            'poster_path':posterUrl+el.poster_path
        }))
        return modifiedData
    }catch(err){
        console.log(err)
    }
}

export const fetchGenres = async ()=>{
    try{
        const {data:{genres}} =  await axios.get(genreUrl+APIKEY)
        // console.log(data)
        return genres
    }catch(err){
        console.log(err)
    }
}

export const fetchMoviesByGenres = async (genreId)=>{
    try{
        const {data} =  await axios.get(moviesUrl+APIKEY,{
            params:{
                with_genres:genreId,
                page:1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original'
        const modifiedData = data.results.map(el=>({
            ...el,
            'backdrop_path':posterUrl+el.backdrop_path,
            'poster_path':posterUrl+el.poster_path
        }))
        return modifiedData
    }catch(err){
        console.log(err)
    }
}
export const fetchPersons = async ()=>{
    try{
        const {data} =  await axios.get(personUrl+APIKEY)
        const posterUrl = 'https://image.tmdb.org/t/p/w200'
        const modifiedData = data.results.map(el=>({
            ...el,
            'profileImg':posterUrl+el.profile_path,
        }))
        return modifiedData
    }catch(err){
        console.log(err)
    }
}

export const fetchMovieById = async (movieId)=>{
    try {
        const {data} =  await axios.get(movieUrl+movieId+APIKEY);
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchMovieTopRated = async ()=>{
    try {
        const {data} = await axios.get(topRatedUrl+APIKEY,{
            params:{
                page:1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original'
        const modifiedData = data.results.map(el=>({
            ...el,
            'backdrop_path':posterUrl+el.backdrop_path,
            'poster_path':posterUrl+el.poster_path
        }))
        console.log(modifiedData)
        return  modifiedData
    } catch (error) {
        
    }
}
export const fetchMovieTrailer = async(trailerId) =>{
    const {data:{results}} = await axios.get(BASEURL+`/movie/${trailerId}/videos`+APIKEY)
    // console.log(r/)
    return results[0]
}