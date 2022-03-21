import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import './index.css';

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <div className="titleGif">
        <h1>GifExpert:</h1>
      </div>

      <h3>
        Colocá una palabra o frase clave y presioná "Enter" para buscar tus gifs
        preferidos! 😎
      </h3>
      <AddCategory setCategories={setCategories} />
      <br />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
