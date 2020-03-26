import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class MovieCard extends Component {
    
    render() {
        const {movie}=this.props;
        return (
            <div className="card col-md-3 mb-5" style={{width:'18rem'}}>
                <div className="card-body bg-dark text-center h-100">
                    <img className='w-100 mb-2'src={movie.Poster} alt='Movie Cover'/>
                    <h5 className="card-title text-light">{movie.Title}</h5>
                    
                    
                    <Link to={'/movie/'+movie.imdbID} className="btn btn-primary">Movie Info
                       <i className='fas fa-chevron-right'></i>
                    </Link>
                    
                </div>
            </div>
        )
    }
}

export default MovieCard

