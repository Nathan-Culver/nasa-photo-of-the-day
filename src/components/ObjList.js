import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TitleCard from './TitleCard';
import PicCard from './PicCard';
import DescCard from './DescCard';

export default function ObjList() {
  const [title, setTitle] = useState([]);
  const [pic, setPic] = useState([]);
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    setTitle([]);
    setPic([]);
    setDesc([]);
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res);
        setTitle(res.data.title);
        setPic(res.data.url);
        setDesc(res.data.explanation);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <TitleCard imgTitle={title} />
      <PicCard imgUrl={pic} />
      <DescCard imgDesc={desc} />
    </div>
  );
}