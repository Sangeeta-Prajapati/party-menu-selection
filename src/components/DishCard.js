import React from 'react';
import './DishCard.css';

const DishCard = ({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) => {
  const handleActionClick = () => {
    if (isSelected) {
      onRemoveDish(dish.id);
    } else {
      onAddDish(dish.id);
    }
  };

  return (
    <div className={`dish-card ${isSelected ? 'selected' : ''}`}>
      <div className="dish-image-container">
        <img 
          src={dish.image} 
          alt={dish.name}
          className="dish-image"
          loading="lazy"
          onError={(e) => {
            // Fallback to a simple colored background with dish name
            e.target.style.display = 'none';
            const container = e.target.parentElement;
            container.innerHTML = `
              <div style="
                width: 100%; 
                height: 100%; 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 18px;
                font-weight: bold;
                text-align: center;
                padding: 20px;
                box-sizing: border-box;
              ">
                ${dish.name}
              </div>
            `;
          }}
        />
        <div className="dish-type-badge">
          {dish.type === 'VEG' ? '🌱' : '🍖'}
        </div>
        {isSelected && (
          <div className="selected-overlay">
            <span className="selected-icon">✓</span>
          </div>
        )}
      </div>
      
      <div className="dish-content">
        <div className="dish-header">
          <h3 className="dish-name">{dish.name}</h3>
          <span className="dish-category">{dish.mealType}</span>
        </div>
        
        <p className="dish-description">{dish.description}</p>
        
        <div className="dish-actions">
          <button 
            className={`action-button ${isSelected ? 'remove-button' : 'add-button'}`}
            onClick={handleActionClick}
          >
            {isSelected ? (
              <>
                <span className="button-icon">−</span>
                Remove
              </>
            ) : (
              <>
                <span className="button-icon">+</span>
                Add to Party
              </>
            )}
          </button>
          
          <button 
            className="ingredients-button"
            onClick={() => onViewIngredients(dish)}
          >
            <span className="button-icon">📋</span>
            Ingredients
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
