/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './style.css'

export const Movie = (props: { title: React.ReactNode; image: string | undefined; year: React.ReactNode; }) => {
    console.log(props)

    return (
        <div className="movie">
            <h2>{props.title}</h2>
            <img src={props.image} />
            <h3>{props.year}</h3>

        </div>
    )


}