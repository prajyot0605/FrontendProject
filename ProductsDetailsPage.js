import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Typography, TextField } from '@material-ui/core';

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch product details when component mounts
    fetchProductDetails();
  }, []);

  const fetchProductDetails = () => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  };

  const handleBuyClick = () => {
    // Handle buy action here (e.g., add product to cart, proceed to checkout)
    console.log(`Buy ${quantity} ${product.name}`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card>
        <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body1">{product.price}</Typography>
        <TextField
          type="number"
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          InputProps={{ inputProps: { min: 1 } }}
        />
        <Button variant="contained" color="primary" onClick={handleBuyClick}>
          Buy
        </Button>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;
