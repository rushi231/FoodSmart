import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  // State to track which FAQ item is expanded
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to expand/collapse FAQ items
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data organized by categories
  const faqData = [
    {
      category: "Using Recipe Finder",
      questions: [
        {
          question: "How do I find recipes with my ingredients?",
          answer: "Simply go to the Pantry page, add all the ingredients you have available in your kitchen, and click on the 'Find Recipes' button. Our system will show you all possible recipes you can make with what you have on hand."
        },
        {
          question: "Can I save my pantry inventory for next time?",
          answer: "Yes! Once you create an account, your pantry inventory will be automatically saved. You can update it anytime by adding new items or removing ones you've used up."
        },
        {
          question: "How accurate are the recipe suggestions?",
          answer: "Our algorithm matches your available ingredients with our recipe database. We'll show you recipes where you have at least 80% of the required ingredients. For any missing ingredients, we'll clearly indicate what you need to add."
        },
        {
          question: "Can I filter recipe results by dietary preferences?",
          answer: "Absolutely! You can filter recipes by various dietary needs including vegetarian, vegan, gluten-free, dairy-free, and more from the recipe results page."
        }
      ]
    },
    {
      category: "Managing Your Pantry",
      questions: [
        {
          question: "How do I add items to my pantry?",
          answer: "On the Pantry page, use the 'Add Item' form to enter your ingredients. You can specify quantities, units, and expiration dates to keep your inventory accurate."
        },
        {
          question: "What should I do when I use up an ingredient?",
          answer: "You can either update the quantity or remove the item completely from your pantry. This ensures you'll always get accurate recipe recommendations based on what you actually have available."
        },
        {
          question: "How can I track ingredient expiration dates?",
          answer: "When adding items to your pantry, you can include an expiration date. We'll send you notifications when ingredients are about to expire so you can use them before they go bad."
        },
        {
          question: "Can I scan barcodes to add items?",
          answer: "This feature is coming soon! In a future update, you'll be able to scan product barcodes with your phone camera to quickly add items to your pantry."
        }
      ]
    },
    {
      category: "Recipe Features",
      questions: [
        {
          question: "How many recipes are in your database?",
          answer: "We currently have over 10,000 recipes in our database, ranging from quick and easy meals to gourmet dishes. Our collection is constantly growing."
        },
        {
          question: "Can I save recipes I like?",
          answer: "Yes! Click the 'Save' or heart icon on any recipe to add it to your favorites. You can access your saved recipes anytime from your profile."
        },
        {
          question: "Are nutrition facts available for recipes?",
          answer: "Yes, each recipe includes detailed nutrition information including calories, protein, carbs, fat, and other key nutritional values."
        },
        {
          question: "Can I submit my own recipes?",
          answer: "We plan to add this feature soon! You'll be able to contribute your own recipes to our community and help other users discover delicious meals."
        }
      ]
    },
    {
      category: "Account & Settings",
      questions: [
        {
          question: "Do I need to create an account?",
          answer: "While you can use basic features without an account, creating one allows you to save your pantry inventory, track expiration dates, save favorite recipes, and more."
        },
        {
          question: "Is my personal information secure?",
          answer: "We take data security seriously. Your personal information is encrypted and we never share it with third parties. See our Privacy Policy for more details."
        },
        {
          question: "How do I reset my password?",
          answer: "Click on 'Forgot Password' on the login page and follow the instructions sent to your email address."
        },
        {
          question: "Can I delete my account?",
          answer: "Yes, you can delete your account and all associated data from your account settings page."
        }
      ]
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about using our recipe finder and managing your pantry.</p>
      </div>

      <div className="faq-search">
        <input 
          type="text" 
          placeholder="Search for a question..." 
          aria-label="Search FAQs"
        />
      </div>

      <div className="faq-categories">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="faq-category">
            <h2>{category.category}</h2>
            <div className="faq-questions">
              {category.questions.map((faq, faqIndex) => {
                const index = `${categoryIndex}-${faqIndex}`;
                return (
                  <div 
                    key={index} 
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                  >
                    <div 
                      className="faq-question" 
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3>{faq.question}</h3>
                      <span className="faq-icon">
                        {activeIndex === index ? '−' : '+'}
                      </span>
                    </div>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="faq-contact">
        <h2>Still have questions?</h2>
        <p>We're here to help! Contact us at <a href="mailto:support@recipefinder.com">support@recipefinder.com</a></p>
        
        <div className="contact-buttons">
          <a href="/contact" className="contact-button primary">Contact Support</a>
          <a href="/feedback" className="contact-button secondary">Submit Feedback</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;