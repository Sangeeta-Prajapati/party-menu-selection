import React from 'react';
import DishCard from './DishCard';
import './DishList.css';

const DishList = ({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) => {
  if (dishes.length === 0) {
    return (
      <div className="no-dishes-container">
        <div className="no-dishes-content">
          <div className="no-dishes-icon">🍽️</div>
          <h3 className="no-dishes-title">No dishes found</h3>
          <p className="no-dishes-message">
            Try adjusting your filters or search terms to find more dishes.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="dish-list-container">
      <div className="dish-list-header">
        <h2 className="dish-list-title">
          Available Dishes ({dishes.length})
        </h2>
        {selectedDishes.length > 0 && (
          <div className="selected-count">
            <span className="selected-icon">✓</span>
            {selectedDishes.length} selected for party
          </div>
        )}
      </div>
      
      <div className="dish-list">
        {dishes.map(dish => (
          <DishCard
            key={dish.id}
            dish={dish}
            onAddDish={onAddDish}
            onRemoveDish={onRemoveDish}
            isSelected={selectedDishes.includes(dish.id)}
            onViewIngredients={onViewIngredients}
          />
        ))}
      </div>
    </div>
  );
};

export default DishList;
