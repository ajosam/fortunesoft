import React from 'react'
import './Genre.css'

function MovieGenre(props) {
    return (
        <div className='movieGenre'>
            <div className='genre-action'>
                {
                    props.movieList.map((movie)=>{
                        return(
                            <div>
                                <img className='smallPoster' src={movie.poster} alt="poster" />
                            </div>
                        )
                    })
                }
                
            
            </div>
            
        </div>
    )
}

export default MovieGenre
