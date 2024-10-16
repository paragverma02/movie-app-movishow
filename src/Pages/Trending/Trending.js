import axios from 'axios';
import React, { useState } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';

const Trending = () => {

   const [content, setContent ] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );

        setContent(data.results);
    };

  return (
    <div>
      <span className='pageTitle'>Trending</span>
      <div className='trending'>
        {content && content.map((c) => (
            <SingleContent 
            key={c.id} 
            id={c.id} 
            poster={c.poster_path} 
            title={c.title || c.name} date={c.first_air_date || c.release_date} />
        ))}
      </div>
    </div>
  )
}

export default Trending;
