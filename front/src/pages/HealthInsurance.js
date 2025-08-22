import React, { useState } from 'react';
import {
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Paper
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Form validation schemas for each step
const validationSchemas = [
  Yup.object({
    age: Yup.number()
      .required('Age is required')
      .min(1, 'Age must be at least 1')
      .max(120, 'Age must be less than 120'),
    gender: Yup.string().required('Gender is required'),
  }),
  Yup.object({
    medicalHistory: Yup.string().required('Medical history is required'),
    occupation: Yup.string().required('Occupation is required'),
  }),
  Yup.object({
    coverage: Yup.number()
      .required('Coverage amount is required')
      .min(100000, 'Minimum coverage amount is 1,00,000'),
    familySize: Yup.number()
      .required('Family size is required')
      .min(1, 'Family size must be at least 1'),
  }),
];

const steps = ['Personal Information', 'Medical Details', 'Coverage Requirements'];

const HealthInsurance = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/api/health-insurance/recommend', values);
      navigate('/results', { state: { recommendations: response.data } });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error appropriately
    }
  };

  const initialValues = {
    age: '',
    gender: '',
    medicalHistory: '',
    occupation: '',
    coverage: '',
    familySize: '',
  };

  const renderStepContent = (step, values, errors, touched, handleChange, handleBlur) => {
    switch (step) {
      case 0:
        return (
          <Box>
            {/* Personal Information Fields */}
            {/* Add your form fields here */}
          </Box>
        );
      case 1:
        return (
          <Box>
            {/* Medical Details Fields */}
            {/* Add your form fields here */}
          </Box>
        );
      case 2:
        return (
          <Box>
            {/* Coverage Requirements Fields */}
            {/* Add your form fields here */}
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Health Insurance Application
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mt: 4, mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas[activeStep]}
          onSubmit={(values, { setSubmitting }) => {
            if (activeStep === steps.length - 1) {
              handleSubmit(values);
            } else {
              handleNext();
              setSubmitting(false);
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {renderStepContent(activeStep, values, errors, touched, handleChange, handleBlur)}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default HealthInsurance;
