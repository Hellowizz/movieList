import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './MovieCard.css';

// IMAGES
import likeImg from '../img/heart.svg';
import dislikeImg from '../img/heartbroken.svg';
import crossImg from '../img/cross.svg';

// FUNCTIONS
const getColor = (categoryName) => {
  switch (categoryName) {
    case 'Thriller' :
      return '#3C3C42';
    case 'Drame' :
      return '#5181D6';
    case 'Animation' :
      return '#66B568';
    case 'Comedy' :
      return '#EFA53A';
    default :
      return 'black';
    }
}

const MovieCard = ({title, category, likes, dislikes, toggleLikes, handleClick}) => {
  const [isCrossShown, setIsCrossShown] = useState(false);

  const color = getColor(category);

  const likeLength = likes * 200 / (likes + dislikes);
  const dislikeLength = dislikes * 200 / (likes + dislikes);

  return (
    <div
      className="movie-card-container"
      style={{ borderColor: color }}
      onMouseEnter={() => setIsCrossShown(true)}
      onMouseLeave={() => setIsCrossShown(false)}
      onClick={handleClick}
    >
      <div className="movie-infos" style={{ borderRadius: !toggleLikes ? '9px 9px 0 0' : '9px', backgroundColor: color }}>
        <div className="movie-type">
          <h1>{title}</h1>
          <h2>{category}</h2>
        </div>
        {isCrossShown && <img alt="cross" src={crossImg} style={{ height: '17px', marginLeft: '3px'}}/>}
      </div>

      { !toggleLikes && <div className="movie-more">

        <div className="movie-appreciation-container">
          <div className="movie-appreciation">
            <img alt="like" src={likeImg} style={{ height: '15px'}}/>
          </div>
          <div className="appreciation-bar">
            <div className="likes-bar" style={{ width: likeLength}}/>
            <div className="dislikes-bar" style={{ width: dislikeLength}}/>
          </div>
          <div className="movie-appreciation">
            <img alt="dislike" src={dislikeImg} style={{ height: '15px'}}/>
          </div>
        </div>

      </div>}
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  toggleLikes: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
}

export default MovieCard
