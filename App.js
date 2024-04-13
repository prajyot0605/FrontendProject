import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import AddProductsPage from './pages/AddProductsPage';

const App = () => {
  // State to manage login status and admin status
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  // Logout function
  const handleLogout = () => {
    // Perform logout actions
    setLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <Router>
      <NavigationBar loggedIn={loggedIn} isAdmin={isAdmin} onLogout={handleLogout} />
      <Route path="/login">
        <LoginPage setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} />
      </Route>
      <Route path="/signup">
        <SignupPage setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} />
      </Route>
      <Route path="/add-products">
        <AddProductsPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Router>
  );
};

export default App;
