import './Home.scss';
import React, { useEffect } from 'react';

import axios from 'axios';

const Home = () => {


     const makeApiCall= async ()=>{
        let searchTerm="Harry";
        let type = "movie";
        let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}&type=${type}`
        console.log(url);
        let response = await axios.get(url);
        let searchData = response.data;
        console.log(searchData);
    }
    useEffect(()=>{
        makeApiCall();
    },[]);
    return (
        <div className='home'>
            Home
        </div>
    );
};

export default Home;