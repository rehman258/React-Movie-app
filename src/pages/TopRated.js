import React,{useEffect,useState} from 'react';
import { fetchMovieTopRated } from '../components/service';
import {Link} from 'react-router-dom';
const TopRated = () => {
    const [topRatedMovies,setTopRatedMovies] =useState([])
    useEffect( () => {
        async function fetchData(){
            setTopRatedMovies( await fetchMovieTopRated())
        } 
        fetchData()
    }, []);
    return (
        <div>
            <div className="Wrapper">
                <div className="container-fluid px-0">
                    <div className="row mx-0">
                        {
                            topRatedMovies.map((item,index)=>(
                                <div className="col-lg-4" key={index}>
                                    <Link to={`/detail/${item.id}`}>
                                        <img className="w-100"    src={item.poster_path} alt="" />
                                    </Link>
                                    <h5 className="text-light text-center my-2">
                                        {
                                            item.title
                                        }
                                        <p className="text-light fs-4">
                                            {
                                                item.vote_average
                                            }
                                        </p>
                                    </h5>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopRated;
