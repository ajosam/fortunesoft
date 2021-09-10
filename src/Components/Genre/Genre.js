import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './Genre.css'
import MovieGenre from './MovieGenre'

function Genre(props) {

    const [movie,setMovie] = useState([])
    const [actions,setAction] = useState([])
    const [crime,setCrime] = useState([])
    const [drama,setDrama] = useState([])
    const [animation,setAnimation] = useState([])
    const [adventure,setAdventure] = useState([])
    const [romance,setRomance] = useState([])

    const [family,setFamily] = useState([])
    const [thriller,setThriller] = useState([])
    const [biography,setBiography] = useState([])
    const [history,setHistory] = useState([])
    const [scifi,setScifi] = useState([])
    const [war,setWar] = useState([])
    const [mystery,setMystery] = useState([])


    const [genre, setGenre] = useState([]);

    

    const movieList =[
        {genre:'Action',movie:actions},
        {genre:'Crime',movie:crime},
        {genre:'Drama',movie:drama},
        {genre:'Animation',movie:animation},
        {genre:'Adventure',movie:adventure},
        {genre:'Romance',movie:romance},
        {genre:'Family',movie:family},
        {genre:'Thriller',movie:thriller},
        {genre:'Biography',movie:biography},
        {genre:'History',movie:history},
        {genre:'Sci-Fi',movie:scifi},
        {genre:'War',movie:war},
        {genre:'Mystery',movie:mystery}
    ]

    const getGenre = () => {
        let genreArray = [];
        movie.map((movie) => {
          let theGenre = movie.genres;
          for (let i = 0; i < theGenre.length; i++) {
            if (genreArray.includes(theGenre[i]) === false) {
              genreArray.push(theGenre[i]);
            }
          }
        });
        setGenre(genreArray);
      };
      useEffect(() => {
        getGenre();
        
      }, [movie]);

      

 
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data)
            
           
             setMovie(response.data.movies)

            //  console.log(movie.filter(genres));

             setAction(response.data.movies.filter((movie)=>{
                 return(
                  movie.genres.includes("Action")
                 )
             }))
             setCrime(response.data.movies.filter((movie)=>{
                return(
                 movie.genres.includes("Crime")
                )
            }))
            setDrama(response.data.movies.filter((movie)=>{
                return(
                 movie.genres.includes("Drama")
                )
            }))
            setAnimation(response.data.movies.filter((movie)=>{
                return(
                 movie.genres.includes("Animation")
                )
            }))
            setAdventure(response.data.movies.filter((movie)=>{
                return(
                 movie.genres.includes("Adventure")
                )
            }))
            setRomance(response.data.movies.filter((movie)=>{
                return(
                 movie.genres.includes("Romance")
                )
            }))
            setFamily(response.data.movies.filter((movie)=>{
                return(
                 movie.genres.includes("Family")
                )
            }))
            setThriller(response.data.movies.filter((movie)=>{
                return(
                 movie.genres.includes("Thriller")
                )
            }))
            setBiography(response.data.movies.filter((movie)=>{
                return(
                 movie.genres.includes("Biography")
                )
            }))
            setHistory(response.data.movies.filter((movie)=>{
                return(
                 movie.genres.includes("History")
                )
            }))
            setScifi(response.data.movies.filter((movie)=>{
                return(
                 movie.genres.includes("Sci-Fi")
                )
            }))
            setWar(response.data.movies.filter((movie)=>{
                return(
                 movie.genres.includes("War")
                )
            }))
            setMystery(response.data.movies.filter((movie)=>{
                return(
                 movie.genres.includes("Mystery")
                )
            }))
            
             
        }).catch(err=>{
            alert('Network error')
        })
     }, [])
   
    return (
        <div className='Genre'>
            <h2>{props.head}</h2>
            <div className='genre-list'>
                {
                    movie.map((obj)=>{
                        return(
                            <div>
                                
                                <img className='smallPoster' src={obj.poster} alt="poster" />
                                
                                {/* <p>{obj.title}</p> */}
                            </div>
                        )
                    })
                }
                

            </div>
            {
                movieList.map((moviegenre)=>{
                    
                    return(
                    <div>
                    <h2>{moviegenre.genre}</h2>
                    <MovieGenre movieList={moviegenre.movie} />
                    </div>
                    )
                })
            }

                

                {/* {
                genre.map((moviegenre)=>{
                    
                    return(
                    <div>
                    <h2>{moviegenre}</h2>
                    <MovieGenre movieList={moviegenre.movie} />
                    </div>
                    )
                })
            } */}
           
          
        </div>
    )
}

export default Genre
