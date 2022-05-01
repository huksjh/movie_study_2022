import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/style.movie.css";
const Movie = ({ id, coverImage, title, genres }) => {
    return (
        <div className="movieBox">
            {coverImage ? <img src={coverImage} alt={title} /> : null}
            <h3>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h3>
            {genres ? (
                <ul>
                    {genres.map((gener) => (
                        <li key={gener}>{gener}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
