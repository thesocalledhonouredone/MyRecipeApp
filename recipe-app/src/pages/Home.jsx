import React from 'react';

const Home = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Recipe App</h1>
          <p className="lead">
            Your personal recipe management solution. Organize, save, and access your favorite recipes anytime, anywhere.
          </p>
          <a href="/add-recipe" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Recipe App?</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-journal-bookmark fs-1"></i>
              </div>
              <h3>Organize Recipes</h3>
              <p>
                Easily categorize and tag your recipes for quick access.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-search fs-1"></i>
              </div>
              <h3>Search & Filter</h3>
              <p>
                Find recipes by name, category, or ingredients in seconds.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-image fs-1"></i>
              </div>
              <h3>Visual Appeal</h3>
              <p>
                Add images to your recipes for a more engaging experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center py-5">
        <div className="container">
          <h2 className="mb-4">Ready to Simplify Your Cooking?</h2>
          <p className="lead mb-4">
            Start managing your recipes today and make cooking a breeze.
          </p>
          <a href="/add-recipe" className="btn btn-primary btn-lg">
            Add Your First Recipe
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;