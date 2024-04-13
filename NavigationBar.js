import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';

const NavigationBar = ({ loggedIn, isAdmin, onLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <ShoppingCart />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          upGrad Eshop
        </Typography>
        {loggedIn ? (
          <>
            <InputBase placeholder="Search..." />
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            {isAdmin && (
              <Button color="inherit" component={Link} to="/add-products">
                Add Products
              </Button>
            )}
            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
