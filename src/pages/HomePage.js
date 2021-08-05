import React,{useEffect,useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import { FaEye } from "react-icons/fa";
// import Genres from '../components/Genres';

import { fetchMovies,fetchGenres,fetchMoviesByGenres,fetchPersons } from '../components/service';
// import {useParams} from 'react-router-dom';
const HomePage = (props) => {
    // let { id } = useParams();

    const [playingNow ,setPlayingNow] = useState([]);
    const [genresList,setGenresList] = useState([])
    const [moviesByGenres,setMoviesByGenres] = useState([]);
    const [trendPersons,setTrendPersons] = useState([]);

    var settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 50, 
        slidesToShow: 1,
        slidesToScroll: 1
      };
      useEffect(()=>{
        const fetchingAPI = async ()=>{
          setPlayingNow( await fetchMovies());
          setGenresList( await fetchGenres());
          setTrendPersons( await fetchPersons());
          setMoviesByGenres( await fetchMoviesByGenres());
        }
          fetchingAPI()
      },[])
      const updateMoviesByGenres = async (genreId) =>{
        setMoviesByGenres( await fetchMoviesByGenres(genreId));
      }
      return (
        <div className="Home_Flow pb-4">
            <div className="sliderArea">
                <Slider {...settings} className="rounded overflow-hidden h-100">
                {
                    playingNow.slice(0,5).map((el,index)=>(
                        <div className="h-100 position-relative" key={index}>
                            <img className="w-100 h-100" src={el.backdrop_path} alt="" />
                            <p className="SliderPosterTitle position-absolut h3 text-light z-index">
                                {
                                    el.title
                                }
                            </p>
                        </div>
                    ))
                }
                </Slider>
            </div>
            <div className="w-100 py-2 GenresList">
                {
                    genresList.map((el,index)=>(
                        <button className="GenresListItem btn border rounded-pill me-2 mb-3 text-light" key={index} onClick={()=>updateMoviesByGenres(el.id)}>
                            {
                                el.name
                            }
                        </button>
                    ))
                }
            </div>
            <div className="moviesByGenres d-flex flex-column justify-content-center align-items-center mb-5">
                <div className="container-fluid px-0">
                    <div className="row mx-0">
                    {
                        moviesByGenres.slice(0,12).map((el,index)=>(
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4  "  key={index}>
                                <div className="ImgBox byGenresMovieItem position-relative">
                                    <Link to={`/detail/${el.id}`} className=" d-flex justify-content-center align-items-center text-decoration-none ovarlay-movie">
                                        <FaEye 
                                            color='white'
                                            size={25}
                                        />
                                    </Link>
                                    <img src={el.poster_path} loading="lazy" className="w-100" style={{minHeight:'350px',height:'350px'}} alt="" />
                                </div>
                                    <p className="text-light fs-5 text-center mt-2 fw-bold">
                                        {
                                            el.title
                                        }
                                    </p>
                                    <hr className="bg-light" />
                                    <p className="text-light fs-5 text-center mt-2 fw-bold">
                                        
                                            <span>
                                                {
                                                    el.vote_average
                                                }
                                            </span>
                                        
                                    </p>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <button className="btn btn-outline-primary">Load More</button>
            </div>
            <div className="trendPersons container-fluid px-0">
                    <div className="row mx-0">
                        {
                            trendPersons.map((person,index)=>(
                                <div className="col-lg-3 mb-3" key={index}>
                                    <img src={person.profileImg} alt="" />
                                    <p className="text-light fw-bold text-center py-2">
                                        {
                                            person.name
                                        }
                                    </p>
                                </div>
                            ))
                        }
                    </div>
            </div>
           
        </div>
      )
}

export default HomePage;
