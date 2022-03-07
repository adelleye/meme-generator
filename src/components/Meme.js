import React, { useState, useEffect } from "react";
import placeHolderImage from "../images/ned-stark.jpg";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: `${placeHolderImage}`,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  const [allMemes, setAllMemes] = useState([]);

  //API CALL
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((result) => result.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  console.log(allMemes);

  //Get a random image
  function getMemeImage() {
    const randomNumber = Math.round(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          className="form--text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image"></img>
        <h3 className="meme--text top">{meme.topText}</h3>
        <h3 className="meme--text bottom">{meme.bottomText}</h3>
      </div>
    </main>
  );
};

export default Meme;
