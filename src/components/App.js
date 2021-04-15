import React from 'react'
import VisibleMovieList from '../containers/VisibleMovieList'
import VisibleCategoryList from '../containers/VisibleCategoryList'
import ToggleLikes from '../containers/ToggleLikes'

const App = () => (
  <div>
    <VisibleCategoryList />
    <ToggleLikes />
    <VisibleMovieList />
  </div>
)

export default App
