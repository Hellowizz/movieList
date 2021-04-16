import data from '../data/movies';

const initialState = {
  moviesData : data,
  shownCategories: [],
  selectedCategories: [],
  isToggledLikes: true,
  moviesNumberInPage: 4,
  numberOfPages: 0,
  currentPage: 1
}

const movies = (state = initialState, action) => {
  let newMoviesData = state.moviesData.slice(0);
  // set delete duplications
  let newShownCategories = [...new Set(newMoviesData.map(m => m.category))];
  let newSelectedCategories = state.shownCategories.length === 0 ? newShownCategories.slice(0) : state.selectedCategories.slice(0);

  // calcultate the number of page
  let newNumberOfPages = Math.floor(newMoviesData.length / 4);
  if (newMoviesData.length % 4 > 0) newNumberOfPages ++;

  switch (action.type) {

    case 'DELETE_MOVIE':
      const toDeleteId = newMoviesData.findIndex((movie => movie.id === action.id));
      newMoviesData.splice(toDeleteId, 1);
      newShownCategories = [...new Set(newMoviesData.map(m => m.category))];
      newShownCategories.sort((a, b) => (a < b ? -1 : 1 ));

      return {...state, moviesData : newMoviesData, shownCategories: newShownCategories, selectedCategories: newSelectedCategories, numberOfPages: newNumberOfPages};

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

    case 'CHANGE_NUMBER_OF_PAGES' :
      return {...state, numberOfPages: action.pagesNumber}

    case 'CHANGE_ACTIVE_PAGE' :
      return {...state, currentPage: action.page}

    default:
      newShownCategories.sort((a, b) => (a < b ? -1 : 1 ));

      return {moviesData : newMoviesData, shownCategories: newShownCategories, selectedCategories: newSelectedCategories, numberOfPages: newNumberOfPages, currentPage: 1};
  }
}

export default movies;
