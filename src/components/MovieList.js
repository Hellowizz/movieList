import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'

const MovieList = ({ movies, isToggledLikes, deleteMovie, selectedCategories }) => {
  movies.sort((a, b) => {
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
  })

  const listOfMovies = movies.map( movie => {
      let findId = -1;
      if (selectedCategories !== undefined) {
        findId = selectedCategories.findIndex(catSelected => catSelected === movie.category);
        if (findId !== -1) {
          return (
            <MovieCard
              handleClick={() => deleteMovie(movie.id)}
              key={movie.id}
              toggleLikes={isToggledLikes}
              {...movie}
            />
          )
        }
      } else {
        return (
          <MovieCard
            handleClick={() => deleteMovie(movie.id)}
            key={movie.id}
            showLikes={isToggledLikes}
            {...movie}
          />
        )
      }
      return undefined;
  })

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {listOfMovies}
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired
  }).isRequired).isRequired,
  isToggledLikes: PropTypes.bool,
  deleteMovie: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string)
}

export default MovieList
