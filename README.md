# 🍽️ Party Menu Selection App

A modern, interactive React application for selecting and organizing party menu dishes. Built with ReactJS, featuring beautiful UI components, filtering capabilities, and ingredient management.

![Party Menu App](https://img.shields.io/badge/React-18.2.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen.svg)

## 🌟 Features

### 🎯 Core Functionality
- **Dish Selection**: Browse and select dishes for your party
- **Category Filtering**: Filter by meal types (Starter, Main Course, Dessert, Sides)
- **Search Functionality**: Real-time search through dish names
- **Dietary Filters**: Separate Veg and Non-Veg filters
- **Ingredient Details**: View detailed ingredients for each dish
- **Selection Summary**: Track selected dishes with counts

### 🎨 UI/UX Features
- **Responsive Design**: Works perfectly on desktop and mobile
- **Beautiful Cards**: Modern card-based layout with hover effects
- **Visual Indicators**: Clear selection states and meal type badges
- **Smooth Animations**: Elegant transitions and micro-interactions
- **Glassmorphism Design**: Modern glass-like UI elements
- **High-Quality Images**: Professional food photography for each dish

### 📊 Data Management
- **26 Diverse Dishes**: Wide variety of Indian, Continental, Asian, and International cuisines
- **Detailed Information**: Each dish includes ingredients, descriptions, and categories
- **Mock Data Structure**: Well-organized JSON data for easy customization

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/Sangeeta-Prajapati/party-menu-selection.git>
   cd party-menu-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

## 📁 Project Structure

```
party-menu-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── DishCard.js          # Individual dish display component
│   │   ├── DishCard.css         # Styling for dish cards
│   │   ├── DishList.js          # Container for dish grid
│   │   ├── DishList.css         # Grid layout styling
│   │   ├── Filters.js           # Search and filter controls
│   │   ├── Filters.css          # Filter component styling
│   │   ├── IngredientModal.js   # Modal for ingredient details
│   │   └── IngredientModal.css  # Modal styling
│   ├── data/
│   │   └── mockDishes.js        # Dish data and ingredients
│   ├── App.js                   # Main application component
│   ├── App.css                  # Global application styles
│   ├── index.js                 # Application entry point
│   └── index.css                # Global styles
├── package.json                 # Dependencies and scripts
└── README.md                   # Project documentation
```

## 🎮 How to Use

### 1. **Browse Dishes**
- The app loads with all dishes displayed in a responsive grid
- Each dish card shows image, name, description, and meal type

### 2. **Filter by Category**
- Click on category tabs: All Dishes, Starter, Main Course, Sides, Dessert
- View counts showing total dishes and selected dishes per category

### 3. **Search Dishes**
- Use the search bar to find specific dishes by name
- Search is case-insensitive and works within selected categories

### 4. **Filter by Diet Type**
- Toggle between "All Types", "Veg", and "Non-Veg"
- Visual indicators show dietary preferences

### 5. **Select Dishes**
- Click "Add to Party" to select dishes
- Selected dishes show a checkmark overlay
- Click "Remove" to deselect dishes

### 6. **View Ingredients**
- Click "Ingredients" button on any dish card
- Modal opens with detailed ingredient list and quantities

### 7. **Track Selection**
- Bottom panel shows total selected dishes
- Category tabs display selection counts
- "Continue" button for next steps

## 🛠️ Technical Details

### **React Concepts Used**
- ✅ **Functional Components**: All components use modern React hooks
- ✅ **JSX**: Dynamic rendering with JavaScript expressions
- ✅ **Props**: Data passing between components
- ✅ **State Management**: useState hook for component state
- ✅ **Conditional Rendering**: Dynamic UI based on state
- ✅ **List Rendering**: .map() for rendering dish arrays

### **State Management**
```javascript
// Main state variables in App.js
const [selectedCategory, setSelectedCategory] = useState('ALL');
const [searchTerm, setSearchTerm] = useState('');
const [vegFilter, setVegFilter] = useState('ALL');
const [selectedDishes, setSelectedDishes] = useState([]);
const [currentDish, setCurrentDish] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
```

### **Component Architecture**
- **App.js**: Main container with state management and filtering logic
- **Filters.js**: Search, category tabs, and dietary filters
- **DishList.js**: Grid container for dish cards
- **DishCard.js**: Individual dish display with selection functionality
- **IngredientModal.js**: Modal overlay for ingredient details

## 📊 Available Dishes

### **Indian Cuisine (16 dishes)**
- **Main Course**: Kadhai Paneer, Butter Chicken, Dal Makhani, Mutton Curry, Veg Kurma, Chicken Biryani, Fish Curry
- **Starters**: Chicken Tikka, Veg Manchurian, Aloo Tikki
- **Sides**: Hummus & Pita, Jeera Rice, Butter Naan, Papadum, Raita, Chicken Kebab
- **Desserts**: Gulab Jamun, Kheer, Barfi

### **Continental Cuisine (5 dishes)**
- **Starters**: Caesar Salad, Lamb Chops
- **Desserts**: Brownie, Ice Cream, Chocolate Cake

### **Asian Cuisine (2 dishes)**
- **Starters**: Spring Rolls, Chicken Wings

### **Other Cuisines (3 dishes)**
- **Mediterranean**: Hummus & Pita
- **American**: Chicken Wings
- **Mughlai**: Chicken Biryani, Chicken Kebab

## 🔧 Available Scripts

```bash
npm start          # Start development server
npm test           # Run test suite
npm run build      # Build for production
npm run eject      # Eject from Create React App (irreversible)
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### **Netlify (Recommended)**
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Your app will be live instantly!

### **Vercel**
1. Connect your GitHub repository to Vercel
2. Deploy with one click
3. Automatic deployments on code changes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Your Name**
- GitHub: https://github.com/Sangeeta-Prajapati
- LinkedIn: https://www.linkedin.com/in/sangeeta-prajapati-496b64243/


## 🙏 Acknowledgments

- **Unsplash**: High-quality food images
- **React Community**: Amazing documentation and resources
- **Create React App**: Excellent development setup
- **Food Bloggers**: Inspiration for authentic dish images

---

**⭐ If you found this project helpful, please give it a star on GitHub!**
