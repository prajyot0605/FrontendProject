import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';

const CreateOrderPage = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);

  const handlePlaceOrder = async () => {
    // Send request to backend to create order
    try {
      // Simulate order creation (replace with actual backend call)
      await createOrder();
      setActiveStep(1); // Move to next step after successful order creation
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const createOrder = async () => {
    // Simulate order creation (replace with actual backend call)
    console.log('Order created successfully');
  };

  const handleConfirm = () => {
    // Redirect to the orders page after confirming order
    history.push('/orders');
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Place Order</StepLabel>
        </Step>
        <Step>
          <StepLabel>Confirmation</StepLabel>
        </Step>
      </Stepper>

      <div>
        {activeStep === 0 && (
          <div>
            {/* Add content for the first step (e.g., shipping address form) */}
            <Typography variant="h5">Enter Shipping Address</Typography>
            {/* Add shipping address form */}
            <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </div>
        )}
        {activeStep === 1 && (
          <div>
            {/* Display confirmation message after successfully placing order */}
            <Typography variant="h5">Your order is confirmed.</Typography>
            <Button variant="contained" color="primary" onClick={handleConfirm}>
              Back to Orders
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateOrderPage;
