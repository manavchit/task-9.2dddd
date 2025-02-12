import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
  return (
    <div className="footerContainer" style={{ backgroundColor: '#00bcd4', color: '#fff', padding: '2rem 0' }}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4} md={3}>
            <h3>Explore</h3>
            <ul>
              <li>Home</li>
              <li>Questions</li>
              <li>Articles</li>
              <li>Tutorials</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <h3>Support</h3>
            <ul>
              <li>FAQ's</li>
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <h3>Stay Connected</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <Facebook style={{ fontSize: 40, marginRight: 10 }} />
              <Twitter style={{ fontSize: 40, marginRight: 10 }} />
              <Instagram style={{ fontSize: 40 }} />
            </div>
          </Grid>
        </Grid>
        <Typography variant="h2" align="center" style={{ marginBottom: '10px', marginTop: '30px', color: '#fff' }}>
          Dev @ Deakin
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4} md={3} style={{ marginBottom: '20px' }}>
            <ul style={{ textAlign: 'center', paddingLeft: '0px' }}>
              <li>Privacy Policy</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <ul style={{ textAlign: 'center', paddingLeft: '0px' }}>
              <li>Terms</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <ul style={{ textAlign: 'center', paddingLeft: '0px' }}>
              <li>Code of Conduct</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;