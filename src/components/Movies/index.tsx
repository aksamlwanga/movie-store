import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Movie } from './Movie';
import './style.css'

const series = ['an affair to die for', 'one man', 'Avengers', 'iron man', 'mr robot', 'sex life', 'high school']
const API_KEY = '6e2722bd'

type Props={
    movies:any,
    setMovies:any,
    setTempMovies:any
}
export const Movies: React.FC<Props> = (props) => {
    

    useEffect(() => {
        const promises = series.map(serie => {
            return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(serie)}&apikey=${API_KEY}&page=1`)
                .then(res => res.json())

        })

        Promise.all(promises).then((movies: any) => {
            const updatedMovies: any = movies.map((movie: any) => movie.Search).flat(2).map((movie: any) => ({

                title: movie.Title,
                year: movie.Year,
                image: movie.Poster,
                imdb: movie.imdbTD
            }))
           props.setMovies(updatedMovies)
           props.setTempMovies(updatedMovies)
        })

    }, [])
    if (props.movies.length === 0) {
        return <div className="loader">
            <CircularProgress />
        </div>
    }
    return (
        <div className="movies">
            {props.movies.map((movie: any) => {
                return (
                    <Movie
                        key={movie.imdbTD}
                        title={movie.title}
                        year={movie.year}
                        image={movie.image}
                    />
                )
            })}
        </div>
    )
}