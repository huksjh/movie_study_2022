import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";

const Home = () => {
    // 로딩
    const [loading, setLoading] = useState(true);

    // 데이터 담기용
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
                    {movies.map((movie) => (
                        <Movie key={movie.id} id={movie.id} coverImage={movie.medium_cover_image} title={movie.title} genres={movie.genres} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
