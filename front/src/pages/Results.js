import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const recommendations = location.state?.recommendations || [];

  if (!recommendations.length) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          No recommendations available. Please complete the insurance form first.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          sx={{ display: 'block', mx: 'auto', mt: 2 }}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Your Insurance Recommendations
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {recommendations.map((plan, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {plan.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {plan.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  Premium: ₹{plan.premium}/month
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Coverage: ₹{plan.coverage}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  href={plan.purchaseLink}
                  target="_blank"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate('/')}
        sx={{ mt: 4, display: 'block', mx: 'auto' }}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default Results;
