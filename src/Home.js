import React from 'react';
import './Home.css';
import food_image from './food_image.JPG';
import cook from './cook.JPG';
import phone from './phone.JPG';
import cookandenjoy from './cookandenjoy.JPG';



const Card = ({ image,title, description }) => {
  return (
    <div className="card">
      <img src={image} alt="food" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
  

const Home = () => {
  return (
    <div className="hero-container">
      <div className="hero-content clearfix">
        <div className="hero-text">
          <h1 className="homepage-text">A Chef In Every Tasty Meal Box</h1>
          <p className="homepage-paragraph">
            Get pre-portioned ingredients for Gusto Meal Kits<br />
            best recipes delivered direct to your door!
          </p>
          <button className="cta-button">Try Now</button>
          <button className="cta-button">Learn More</button>
        
        </div>
        <div className="hero-image">
          {food_image && <img src={food_image} alt="food" />}
        </div>
      </div>
      <div className="homepagetitle">
            <h2>How It Works</h2>
          </div>
      <div className="cards-container">
        <Card image = {phone} title="Fresh Ingredients" description="We source the best ingredients from local farmers and producers." />
        <Card image={cook} title="Healthy Meals" description="Our meals are packed with fresh vegetables, lean proteins, and whole grains." />
        <Card image = {cookandenjoy} title="Easy Recipes" description="Our recipes are designed to be easy to follow, so you can cook like a pro." />
      </div>
    </div>


   
  );
};

export default Home;