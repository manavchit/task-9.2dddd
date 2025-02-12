import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import './PricingPlans.css'; // Import styles
import { Link } from "react-router-dom";

const cardStyle = {
    margin: '20px',
};

const Plans = () => {
    return (
        <Container>
            <h1 className="word-art-heading">MEMBERSHIP OPTIONS</h1>
            <Card.Group className="card-group">
                <Card style={cardStyle} className="pricing-card">
                    <Card.Content>
                        <h3 className="custom-card-header" style={{ fontWeight: 'bold', fontSize: '2.75rem' }}>Free Plan</h3>
                        <Card.Description>Free Subscription <br />$0</Card.Description>
                        <ul>
                            <li>&#10003; 500 Requests</li>
                            <li>&#10003; Limited Projects</li>
                            <li>&#10003; Extended Free Trial</li>
                            <li>&#10003; Limited Features</li>
                        </ul>
                        <Link to="https://buy.stripe.com/test_aEUbKK3FA3984ko001">
                            <button className="custom-button">GET PLAN</button>
                        </Link>
                    </Card.Content>
                </Card>
                <Card style={cardStyle} className="pricing-card">
                    <Card.Content>
                        <h3 className="custom-card-header1" style={{ fontWeight: 'bold', fontSize: '2.75rem' }}>Premium Plan</h3>
                        <Card.Description>Premium Subscription <br />$99</Card.Description>
                        <ul>
                            <li>&#10003; Unlimited Requests</li>
                            <li>&#10003; Unlimited Projects</li>
                            <li>&#10003; Extended Study Plan</li>
                            <li>&#10003; Advanced Features</li>
                        </ul>
                        <Link to="https://buy.stripe.com/test_6oE0220tofVU2cg7su">
                            <button className="custom-button1">GET PLAN</button>
                        </Link>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Container>
    );
};

export default Plans;
