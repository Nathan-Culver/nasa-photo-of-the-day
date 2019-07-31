import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PicCard from './PicCard';

export default function PicList() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    setPics([]);
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res);
        setPics(res.data.url);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <PicCard imgUrl={pics} />;
    </div>
  );
}