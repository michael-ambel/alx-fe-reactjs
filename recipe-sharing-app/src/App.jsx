import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import RecipeList from './components/RecipeList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {


  return (
    <>
      
      <Router>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
      <Routes>
      
        <Route
          path=":recipeId"
          element={<RecipeDetails />}
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
