import React, {useEffect, useState} from 'react'
import requests from './../api/requests';
import axios from '../api/axios';

export default function Row({ isLargeLow, title, id, fetchUrl }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovieData();
    }, [])

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl); 
        setMovies(request.data.results)
    }

    return <div></div>;


}
