# Recipe Management Application

## Overview
The **Recipe Management Application** is a web-based platform designed to help users organize, store, and manage their favorite recipes. Whether you're a home cook, food enthusiast, or professional chef, this app provides a simple and intuitive way to save recipes with essential details like ingredients, cooking instructions, preparation time, and images. Users can also categorize, search, and filter recipes for easy access.

This project was developed as part of my internship to demonstrate my skills in **React.js**, **Node.js**, **MongoDB**, and modern web development practices.

---

## Features
1. **Recipe Management**:
   - Add, edit, and delete personal recipes.
   - Store essential details like ingredients, cooking steps, preparation time, and images.

2. **Customizable Organization**:
   - Categorize recipes (e.g., Breakfast, Lunch, Dinner, Desserts).
   - Tag recipes for easier sorting and retrieval.
   - Favorite and bookmark frequently used recipes.

3. **Search and Filter**:
   - Search recipes by name, category, or ingredients.
   - Filter recipes based on tags or categories.

4. **User Experience Enhancements**:
   - Image upload for recipes to enhance visual appeal.
   - Auto-save feature to prevent accidental data loss.

5. **Sharing and Collaboration**:
   - Share recipes via a unique link or social media integration.
   - Export recipes as PDF or text format for offline access.

---

## Technologies Used
### Frontend:
- **React.js**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for responsive and modern design.
- **React Router**: For navigation between pages.
- **Vite**: A fast build tool for modern web development.

### Backend:
- **Node.js**: A JavaScript runtime for building the server.
- **Express.js**: A web framework for Node.js.
- **MongoDB**: A NoSQL database for storing recipes.
- **MongoDB Atlas**: Cloud-based hosting for the MongoDB database.

### Hosting:
- **Frontend**: Hosted on **Vercel**.
- **Backend**: Hosted on **Render** or **Heroku**.
- **Database**: Hosted on **MongoDB Atlas**.

---

## How to Run the Project Locally
Follow these steps to set up and run the project on your local machine.

### Prerequisites
- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Set up a MongoDB database locally or use MongoDB Atlas for cloud hosting.

### Step 1: Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/recipe-app.git
cd recipe-app
```

### Step 2: Install Dependencies
Install the required dependencies for both the frontend and backend.

#### Frontend:
```bash
cd client
npm install
```

#### Backend:
```bash
cd server
npm install
```

### Step 3: Set Up Environment Variables
Create a `.env` file in the `server` directory and add the following variables:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

### Step 4: Run the Application
#### Start the Backend Server:
```bash
cd server
npm start
```

#### Start the Frontend Development Server:
```bash
cd client
npm run dev
```

### Step 5: Access the Application
Open your browser and navigate to:
```
http://localhost:5173
```

---

## Screenshots
Here are some screenshots of the application:

### Home Page
![Home Page](screenshots/home.png)

### Add Recipe Page
![Add Recipe Page](screenshots/add-recipe.png)

### View Recipes Page
![View Recipes Page](screenshots/view-recipes.png)

### Recipe Details Page
![Recipe Details Page](screenshots/recipe-details.png)

---

## Future Enhancements
1. **User Authentication**:
   - Add user authentication using **Firebase Authentication** or **JWT**.
   - Allow users to create accounts and save their personal recipes.

2. **Advanced Search**:
   - Implement advanced search filters (e.g., by preparation time, dietary restrictions).

3. **Responsive Design**:
   - Improve the app's responsiveness for mobile and tablet devices.

4. **Export Recipes**:
   - Add functionality to export recipes as PDF or text files.

5. **Social Sharing**:
   - Allow users to share recipes on social media platforms.

---

## Contributing
If you'd like to contribute to this project, follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your fork.
4. Submit a pull request with a detailed description of your changes.

---

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Contact
If you have any questions or feedback, feel free to reach out:
- **Name**: [Your Name]
- **Email**: [Your Email]
- **GitHub**: [Your GitHub Profile]

---

Thank you for checking out my **Recipe Management Application**! I hope you find it useful and informative. 😊

---
