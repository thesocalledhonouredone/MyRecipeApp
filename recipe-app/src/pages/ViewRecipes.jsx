import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const ViewRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  // Load mock data on component mount
  useEffect(() => {
    setRecipes(mockRecipes);
  }, []);

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>View Recipes</h2>

      {/* Modern Search Bar */}
      <div className="search-bar mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search recipes by title, category, or ingredients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="input-group-text search-icon">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>

      {/* Recipe Cards */}
      <div className="row">
        {filteredRecipes.map((recipe) => (
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