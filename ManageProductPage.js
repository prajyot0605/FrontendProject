import React, { useState, useEffect } from 'react';
import { Card, Typography, IconButton, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const ManageProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch all products when component mounts
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // Call backend API to delete the selected product
    fetch(`http://localhost:3000/products/${selectedProduct.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update UI after successful deletion
        setProducts(products.filter(p => p.id !== selectedProduct.id));
        setDeleteDialogOpen(false);
        console.log(`Product ${selectedProduct.name} deleted successfully`);
      })
      .catch(error => console.error('Error deleting product:', error));
  };

  const handleCancelDelete = () => {
    setDeleteDialogOpen(false);
  };

  return (
    <div>
      {products.map(product => (
        <Card key={product.id}>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Typography variant="body1">{product.price}</Typography>
          <IconButton onClick={() => handleEditClick(product)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => handleDeleteClick(product)}>
            <Delete />
          </IconButton>
        </Card>
      ))}

      <Dialog open={deleteDialogOpen} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ManageProductsPage;
