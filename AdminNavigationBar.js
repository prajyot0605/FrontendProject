import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { ShoppingCart, AddCircleOutline, Edit, Delete } from '@material-ui/icons';

const AdminNavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <ShoppingCart />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          upGrad Eshop
        </Typography>
        <IconButton color="inherit" component={Link} to="/add-product">
          <AddCircleOutline />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavigationBar;
