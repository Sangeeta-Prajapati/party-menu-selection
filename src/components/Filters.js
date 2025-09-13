import React from 'react';
import './Filters.css';

const Filters = ({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegFilter,
  onVegFilterChange,
  categoryCounts,
  totalSelectedCount
}) => {
  const categories = [
    { name: 'ALL', label: 'All Dishes' },
    { name: 'STARTER', label: 'Starter' },
    { name: 'MAIN COURSE', label: 'Main Course' },
    { name: 'SIDES', label: 'Sides' },
    { name: 'DESSERT', label: 'Dessert' }
  ];

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h1 className="app-title">🍽️ Party Menu Selection</h1>
        <p className="app-subtitle">Choose your perfect party dishes</p>
      </div>
      
      <div className="filters-content">
        {/* Search Bar */}
        <div className="search-section">
          <input
            type="text"
            placeholder="🔍 Search dishes..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Category Tabs with Counts */}
        <div className="category-tabs">
          {categories.map(category => {
            const count = categoryCounts[category.name] || 0;
            const selectedCount = category.name === 'ALL' ? totalSelectedCount : 
              (categoryCounts[`${category.name}_SELECTED`] || 0);
            
            return (
              <button
                key={category.name}
                className={`category-tab ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => onCategoryChange(category.name)}
              >
                <span className="category-label">{category.label}</span>
                <div className="category-counts">
                  <span className="total-count">({count})</span>
                  {selectedCount > 0 && (
                    <span className="selected-count">✓ {selectedCount}</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Veg/Non-Veg Toggle Filters */}
        <div className="veg-filters">
          <div className="filter-toggle-group">
            <button
              className={`filter-toggle ${vegFilter === 'ALL' ? 'active' : ''}`}
              onClick={() => onVegFilterChange('ALL')}
            >
              All Types
            </button>
            <button
              className={`filter-toggle ${vegFilter === 'VEG' ? 'active' : ''}`}
              onClick={() => onVegFilterChange('VEG')}
            >
              🌱 Veg
            </button>
            <button
              className={`filter-toggle ${vegFilter === 'NON-VEG' ? 'active' : ''}`}
              onClick={() => onVegFilterChange('NON-VEG')}
            >
              🍖 Non-Veg
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
