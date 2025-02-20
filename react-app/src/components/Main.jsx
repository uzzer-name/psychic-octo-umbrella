import React, { useState } from 'react';
import './Main.css';
import myImage from './images/image.webp'; 

const Main = () => {
    const [showImage, setShowImage] = useState(false);
    const [headerText, setHeaderText] = useState('React first steps');
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
      setShowImage(true);
      setHeaderText('執行日期 明天凌晨 在天安門廣場'); 
      setButtonClicked(true);
    };

    return (
      <div className={`main-container ${buttonClicked ? 'red-border' : ''}`}>
        <h1>{headerText}</h1>
        {!showImage ? (
          <p>I am alive</p>
        ) : (
          <img src={myImage} alt="My Description" />
        )}
        {!buttonClicked && (
          <button className={`main-button`} onClick={handleClick}>
            Click plz
          </button>
        )}
      </div>
    );
};

export default Main;