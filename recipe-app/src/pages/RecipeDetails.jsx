import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes } = useContext(RecipeContext);

  // Find the recipe by ID
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div className="container mt-4">Recipe not found.</div>;
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        Back to Recipes
      </button>
      <div className="card">
        <img
          src={recipe.image ? URL.createObjectURL(recipe.image) : 'https://via.placeholder.com/150'}
          className="card-img-top"
          alt={recipe.title}
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h2 className="card-title">{recipe.title}</h2>
          <p className="card-text text-muted">{recipe.category}</p>
          <h4>Ingredients</h4>
          <p className="card-text">{recipe.ingredients}</p>
          <h4>Instructions</h4>
          <p className="card-text">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;