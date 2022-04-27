import React from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";

const Home = () => {
    return (
        <div>
            <nav>
                <ul style={{ display: "flex", alignItems: "center", listStyle: "none" }}>
                    <li style={{ padding: "0 5px" }}>
                        <Link to="/">Home</Link>
                    </li>
                    <li style={{ padding: "0 5px" }}>
                        <Link to="/movie" element={Movie}>
                            Detail
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
