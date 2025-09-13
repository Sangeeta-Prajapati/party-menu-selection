import React, { useEffect } from 'react';
import './IngredientModal.css';

const IngredientModal = ({ dish, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (dish) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [dish, onClose]);

  if (!dish) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{dish.name}</h2>
          <button className="close-button" onClick={onClose}>
            <span className="close-icon">×</span>
          </button>
        </div>
        
        <div className="modal-content">
          <div className="dish-image-section">
            <img 
              src={dish.image} 
              alt={dish.name}
              className="modal-dish-image"
            />
            <div className="dish-info">
              <span className="dish-type-badge">
                {dish.type === 'VEG' ? '🌱 Vegetarian' : '🍖 Non-Vegetarian'}
              </span>
              <span className="dish-category-badge">{dish.mealType}</span>
            </div>
          </div>
          
          <div className="dish-details">
            <div className="description-section">
              <h3 className="section-title">Description</h3>
              <p className="dish-description">{dish.description}</p>
            </div>
            
            <div className="ingredients-section">
              <h3 className="section-title">
                <span className="ingredient-icon">🥘</span>
                Ingredients Required
              </h3>
              <div className="ingredients-list">
                {dish.ingredients.map((ingredient, index) => (
                  <div key={index} className="ingredient-item">
                    <div className="ingredient-name">{ingredient.name}</div>
                    <div className="ingredient-quantity">{ingredient.quantity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="close-modal-button" onClick={onClose}>
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal;
