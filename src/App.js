import React, { useState } from 'react';
import './App.css';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';
import { dishes } from './data/mockDishes';

function App() {
  // State management
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegFilter, setVegFilter] = useState('ALL');
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [currentDish, setCurrentDish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate category counts
  const getCategoryCounts = () => {
    const counts = {};
    const categories = ['ALL', 'STARTER', 'MAIN COURSE', 'SIDES', 'DESSERT'];
    
    categories.forEach(category => {
      const filteredDishes = dishes.filter(dish => {
        const matchesCategory = category === 'ALL' || dish.mealType === category;
        const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             dish.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesVegFilter = vegFilter === 'ALL' || dish.type === vegFilter;
        
        return matchesCategory && matchesSearch && matchesVegFilter;
      });
      
      counts[category] = filteredDishes.length;
      
      // Count selected dishes in this category
      const selectedInCategory = filteredDishes.filter(dish => 
        selectedDishes.includes(dish.id)
      ).length;
      counts[`${category}_SELECTED`] = selectedInCategory;
    });
    
    return counts;
  };

  const categoryCounts = getCategoryCounts();

  // Filtering logic
  const filteredDishes = dishes.filter(dish => {
    const matchesCategory = selectedCategory === 'ALL' || dish.mealType === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dish.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVegFilter = vegFilter === 'ALL' || dish.type === vegFilter;
    
    return matchesCategory && matchesSearch && matchesVegFilter;
  });

  // Event handlers
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleVegFilterChange = (filter) => {
    setVegFilter(filter);
  };

  const handleAddDish = (dishId) => {
    if (!selectedDishes.includes(dishId)) {
      setSelectedDishes([...selectedDishes, dishId]);
    }
  };

  const handleRemoveDish = (dishId) => {
    setSelectedDishes(selectedDishes.filter(id => id !== dishId));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentDish(null);
    setIsModalOpen(false);
  };

  // Get selected dishes data for display
  const selectedDishesData = dishes.filter(dish => selectedDishes.includes(dish.id));

  return (
    <div className="App">
      <div className="app-container">
        <Filters
          activeCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          vegFilter={vegFilter}
          onVegFilterChange={handleVegFilterChange}
          categoryCounts={categoryCounts}
          totalSelectedCount={selectedDishes.length}
        />
        
        <DishList
          dishes={filteredDishes}
          onAddDish={handleAddDish}
          onRemoveDish={handleRemoveDish}
          selectedDishes={selectedDishes}
          onViewIngredients={handleViewIngredients}
        />

        {/* Selected Dishes Summary */}
        {selectedDishes.length > 0 && (
          <div className="selected-dishes-summary">
            <div className="summary-header">
              <h3 className="summary-title">
                <span className="party-icon">🎉</span>
                Your Party Menu ({selectedDishes.length} items)
              </h3>
              <button 
                className="clear-all-button"
                onClick={() => setSelectedDishes([])}
              >
                Clear All
              </button>
            </div>
            
            <div className="summary-dishes">
              {selectedDishesData.map(dish => (
                <div key={dish.id} className="summary-dish-item">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="summary-dish-image"
                  />
                  <div className="summary-dish-info">
                    <span className="summary-dish-name">{dish.name}</span>
                    <span className="summary-dish-category">{dish.mealType}</span>
                  </div>
                  <button 
                    className="remove-from-summary"
                    onClick={() => handleRemoveDish(dish.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Continue Button */}
        <div className="continue-section">
          <div className="continue-container">
            <div className="continue-info">
              <h3 className="continue-title">
                Ready to Continue?
              </h3>
              <p className="continue-subtitle">
                {selectedDishes.length > 0 
                  ? `You have selected ${selectedDishes.length} dish${selectedDishes.length > 1 ? 'es' : ''} for your party`
                  : 'Select some dishes to continue with your party planning'
                }
              </p>
            </div>
            <button 
              className={`continue-button ${selectedDishes.length > 0 ? 'active' : 'disabled'}`}
              disabled={selectedDishes.length === 0}
            >
              Continue ({selectedDishes.length})
            </button>
          </div>
        </div>
      </div>

      {/* Ingredient Modal */}
      {isModalOpen && (
        <IngredientModal
          dish={currentDish}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;