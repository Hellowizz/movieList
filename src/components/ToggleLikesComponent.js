import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.css';


function ToggleLikesComponent({isToggled, toggleLikes}) {
  return (
    <div className="toggle-showlikes" onClick={toggleLikes}>
        show likes :
        <div className="toggle-button">
          {!isToggled && <div className="toggle-button-is-selected" />}
        </div>
    </div>
  );
};

ToggleLikesComponent.propTypes = {
  isToggled: PropTypes.bool,
  toggleLikes: PropTypes.func.isRequired
}

export default ToggleLikesComponent
