import React, { createContext, useState } from 'react';

// Create the context
export const RecipeContext = createContext();

// Create the provider component
export const RecipeProvider = ({ children }) => {
  // Default recipes
  const defaultRecipes = [
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

  // Initialize state with default recipes
  const [recipes, setRecipes] = useState(defaultRecipes);

  return (
    <RecipeContext.Provider value={{ recipes }}>
      {children}
    </RecipeContext.Provider>
  );
};