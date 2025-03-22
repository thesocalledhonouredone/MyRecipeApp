import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { Link } from 'react-router-dom';

const ViewRecipes = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className="container mt-4">
      <h2>View Recipes</h2>

      {/* Recipe Cards */}
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text text-muted">{recipe.category}</p>
                <p className="card-text"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p className="card-text"><strong>Instructions:</strong> {recipe.instructions}</p>
                <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewRecipes;