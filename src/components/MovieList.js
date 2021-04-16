import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'

const MovieList = ({ movies, isToggledLikes, deleteMovie, currentPage, changePagesNumber, selectedCategories }) => {
  //sort movies by titles
  movies.sort((a, b) => {
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
  })

  let idInListOfMovies = 0;
  // create the component with all the movies
  const listOfMovies = movies.map( (movie, id) => {
      let findId = -1;
      if (selectedCategories !== undefined) {
        // s'il appartient à l'une des catégorie affichée
        findId = selectedCategories.findIndex(catSelected => catSelected === movie.category);
        if (findId !== -1) {
          if (idInListOfMovies >= ((currentPage-1) * 4) && idInListOfMovies < (currentPage * 4)) {
            idInListOfMovies ++;
            return (
              <MovieCard
                handleClick={() => deleteMovie(movie.id)}
                key={idInListOfMovies}
                toggleLikes={isToggledLikes}
                {...movie}
              />
            )
          }
          idInListOfMovies ++;
        }
      }
      return undefined;
  })

  // calculte the number of pages
  let newNumberOfPages = Math.floor(idInListOfMovies / 4);
  if (idInListOfMovies % 4 > 0) newNumberOfPages ++;
  changePagesNumber(newNumberOfPages);

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
  currentPage: PropTypes.number,
  deleteMovie: PropTypes.func.isRequired,
  changePagesNumber: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string)
}

export default MovieList
