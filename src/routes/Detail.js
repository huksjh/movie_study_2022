import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Detail = () => {
    // id 값 구하기
    const { id } = useParams();
    const navigate = useNavigate();

    const [detailMovie, setDetailMovie] = useState([]);

    const getDetailInfo = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetailMovie(json.data.movie);
        console.log(json.data.movie);
    };
    useEffect(() => {
        getDetailInfo();
    }, []);

    if (detailMovie) {
        console.log(detailMovie);
    }

    return (
        <div>
            <h1>Detail</h1>
            <button onClick={() => navigate("/")}>Back Home</button>
        </div>
    );
};

export default Detail;
