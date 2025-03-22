import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import ViewRecipes from './pages/ViewRecipes';
import RecipeDetails from './pages/RecipeDetails';

const App = () => {
  return (
    <RecipeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/view-recipes" element={<ViewRecipes />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </RecipeProvider>
  );
};

export default App;