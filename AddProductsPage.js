import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, ToggleButton, ToggleButtonGroup } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';


const AddProductsPage = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState('default');

  useEffect(() => {
    // Fetch categories when component mounts
    fetchCategories();
  }, []);

  useEffect(() => {
    // Fetch products when selected category or sorting option changes
    fetchProducts();
  }, [selectedCategory, sortingOption]);

  const fetchCategories = () => {
    fetch('http://localhost:3000/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  };

  const fetchProducts = () => {
    // Construct URL based on selected category and sorting option
    let url = 'http://localhost:3000/products';
    if (selectedCategory) {
      url += `?category=${selectedCategory}`;
    }
    // Add sorting option as query parameter
    url += `&sort=${sortingOption}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  };

  const handleCategoryChange = (event, newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleSortingOptionChange = (event, newSortingOption) => {
    setSortingOption(newSortingOption);
  };

  const handleLoginRedirect = () => {
    history.push('/login');
  };

  // Check if user is logged in
  const isLoggedIn = true; // Replace with actual logic to check if user is logged in

  if (!isLoggedIn) {
    // Redirect user to login page if not logged in
    handleLoginRedirect();
    return null;
  }

  return (
    <div>
      <ToggleButtonGroup value={selectedCategory} exclusive onChange={handleCategoryChange}>
        {categories.map(category => (
          <ToggleButton key={category.id} value={category.id}>
            {category.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <ToggleButtonGroup value={sortingOption} exclusive onChange={handleSortingOptionChange}>
        <ToggleButton value="default">Default</ToggleButton>
        <ToggleButton value="priceHighToLow">Price High to Low</ToggleButton>
        <ToggleButton value="priceLowToHigh">Price Low to High</ToggleButton>
        <ToggleButton value="newest">Newest</ToggleButton>
      </ToggleButtonGroup>

      <div>
        {products.map(product => (
          <Card key={product.id}>
            {/* Render product details */}
            <div>{product.name}</div>
            <div>{product.price}</div>
            {/* Add more product details */}
          </Card>
        ))}
      </div>
    </div>
  );
  
};

export default AddProductsPage;
