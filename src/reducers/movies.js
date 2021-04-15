import data from '../data/movies';

const initialState = {
  moviesData : data,
  shownCategories: [],
  selectedCategories: [],
  isToggledLikes: true
}

const movies = (state = initialState, action) => {
  let newMoviesData = state.moviesData.slice(0);
  // set delete duplications
  let newShownCategories = [...new Set(newMoviesData.map(m => m.category))];
  let newSelectedCategories = state.shownCategories.length === 0 ? newShownCategories.slice(0) : state.selectedCategories.slice(0);

  switch (action.type) {

    case 'DELETE_MOVIE':
      const toDeleteId = newMoviesData.findIndex((movie => movie.id === action.id));
      newMoviesData.splice(toDeleteId, 1);
      newShownCategories = [...new Set(newMoviesData.map(m => m.category))];
      newShownCategories.sort((a, b) => (a < b ? -1 : 1 ));

      return {...state, moviesData : newMoviesData, shownCategories: newShownCategories, selectedCategories: newSelectedCategories};

    case 'SELECT_CATEGORY':
      const alreadySelectedIdCategory = newSelectedCategories.findIndex((cat => cat === action.catName));
      if (alreadySelectedIdCategory === -1) {
        newSelectedCategories.push(action.catName);
      } else {
        newSelectedCategories.splice(alreadySelectedIdCategory, 1);
      }
      newShownCategories.sort((a, b) => (a < b ? -1 : 1 ));

      return {...state, moviesData : newMoviesData, shownCategories: newShownCategories, selectedCategories: newSelectedCategories};

    case 'TOGGLE_LIKES' :
      return {...state, isToggledLikes: !state.isToggledLikes};

    default:
      newShownCategories.sort((a, b) => (a < b ? -1 : 1 ));
      return {moviesData : newMoviesData, shownCategories: newShownCategories, selectedCategories: newSelectedCategories};
  }
}

export default movies;
