import React from 'react'
import VisibleMovieList from '../containers/VisibleMovieList'
import VisibleCategoryList from '../containers/VisibleCategoryList'
import ToggleLikes from '../containers/ToggleLikes'
import PaginationComponent from '../containers/Pagination'

const App = () => (
  <div>
    <VisibleCategoryList />
    <ToggleLikes />
    <VisibleMovieList />
    <PaginationComponent />
  </div>
)

export default App
