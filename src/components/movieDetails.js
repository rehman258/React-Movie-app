import React,{useEffect,useState} from 'react';
import {fetchMovieById,fetchMovieTrailer} from '../components/service';
import ReactPlayer from 'react-player'
import {Button} from 'react-bootstrap'
import {FaPlayCircle}  from 'react-icons/fa';
const MovieDetails = ({match}) => {
    
    const params = match.params;
    const [singleMovie,setSingleMovie] = useState([])
    const [trailerURL,setTrailerURL] = useState([])
    

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const fetchtTrailerMovie = async(trailerId)=>{
        setTrailerURL(await fetchMovieTrailer(trailerId));
        await handleShow()
    }
    useEffect(()=>{
        const fetchAPI = async ()=>{
            setSingleMovie(await fetchMovieById(params.id))
            
        }
        fetchAPI();
    },[params])
    return (
        <div className="container-fluid px-0 movieDetails">
            <div className="row mx-0">
                <div className="col-lg-5 ps-0 position-relative">
                    <img src={`https://image.tmdb.org/t/p/w400/`+singleMovie.backdrop_path} style={{background:'#8b8b8bba'}} className="w-100" alt="" />
                    <Button variant="light"
                        className="btn btn-outline-warning d-flex align-items-center justify-content-center p-3 rounded-circle fs-2 position-absolute outline-none"
                        style={{left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}
                        onClick={()=>fetchtTrailerMovie(singleMovie.id)}>
                        <FaPlayCircle />
                    </Button>
                </div>
                <div className="col-lg-7">
                    <p className="text-light fs-1">
                        {singleMovie.title}
                    </p>
                    <div>
                        {
                            singleMovie.genres ? singleMovie.genres.map((el,index)=>(
                                <button className="GenresListItem btn border rounded me-2 mb-3 text-light" key={index}>
                                    {
                                        el.name
                                    }
                                </button>
                            ))
                            :'false'
                        }
                        {
                            singleMovie.popularity ? <div className="text-light h4">{singleMovie.popularity}</div> :''
                        }
                        {   
                            singleMovie.spoken_languages ? singleMovie.spoken_languages.map((el,index)=>(
                                <div className="GenresListItem btn  rounded me-2 mb-3 text-light" key={index}>
                                    {
                                        el.name
                                    }
                                </div>
                            ))
                            :'false'
                        }
                        {
                            singleMovie.vote_average ? <div className="text-light h4">IMDB {singleMovie.vote_average}</div> :''
                        }
                    </div>
                </div>
            </div>
            <div className="modal" tabIndex="-1" style={{display:show ? 'block':'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" >
                        {
                            trailerURL ? 
                                <ReactPlayer playing={show} url={`https://www.youtube.com/watch?v=xOrXpK-rUaI`}
                                    width='100%'
                                />
                            :"Sorry couldn't find video"
                        }
                    </div>
                   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
