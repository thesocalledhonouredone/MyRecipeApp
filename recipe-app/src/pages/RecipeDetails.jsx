import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate(); // For navigation

  // Mock data for demonstration
  const mockRecipes = [
    {
      id: 1,
      title: 'Pancakes',
      ingredients: 'Flour, Milk, Eggs, Sugar',
      instructions: 'Mix ingredients and cook on a hot pan.',
      category: 'Breakfast',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Spaghetti Bolognese',
      ingredients: 'Pasta, Ground Beef, Tomato Sauce, Onions',
      instructions: 'Cook pasta and prepare the sauce separately.',
      category: 'Dinner',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Caesar Salad',
      ingredients: 'Lettuce, Croutons, Parmesan, Caesar Dressing',
      instructions: 'Toss all ingredients together in a bowl.',
      category: 'Lunch',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Chocolate Cake',
      ingredients: 'Flour, Sugar, Cocoa Powder, Eggs, Butter',
      instructions: 'Mix ingredients, bake at 350°F for 30 minutes.',
      category: 'Dessert',
      image: 'https://via.placeholder.com/150',
    },
  ];

  // Find the recipe by ID
  const recipe = mockRecipes.find((recipe) => recipe.id === parseInt(id));

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
          src={recipe.image}
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