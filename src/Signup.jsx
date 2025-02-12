import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import TopHeader from './Header';
import db from "./firebase";
import { addDoc, collection } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      redirect: false,
      errors: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  }

  validateForm = () => {
    const { first_name, last_name, email, password, confirm_password } = this.state;
    const errors = {};

    if (!first_name) {
      errors.first_name = "First name is required";
    }

    if (!last_name) {
      errors.last_name = "Last name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!email.includes("@") || !email.endsWith("@gmail.com")) {
      errors.email = "Invalid email format";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    if (!confirm_password) {
      errors.confirm_password = "Confirm password is required";
    } else if (password !== confirm_password) {
      errors.confirm_password = "Passwords do not match";
    }

    this.setState({ errors });
    return Object.values(errors).every((error) => error === "");
  };

  registerNewUser = async () => {
    if (this.validateForm()) {
      const collectionRef = collection(db, 'users');
      const payload = {
        firstName: this.state.first_name,
        lastName: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
      };

      await addDoc(collectionRef, payload);
      this.setState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        redirect: true,
        errors: {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirm_password: "",
        },
      });

      console.log('Successfully Registered User');
    }
  };

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/login" />;
    }

    const { errors } = this.state;

    return (
      <div>
        <TopHeader />
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Sign up for an account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  placeholder='First Name'
                  name="first_name"
                  onChange={this.updateInput}
                  value={this.state.first_name}
                  error={errors.first_name ? { content: errors.first_name } : null}
                />
                <Form.Input
                  placeholder='Last Name'
                  name="last_name"
                  onChange={this.updateInput}
                  value={this.state.last_name}
                  error={errors.last_name ? { content: errors.last_name } : null}
                />
                <Form.Input
                  placeholder='E-mail address'
                  name="email"
                  onChange={this.updateInput}
                  value={this.state.email}
                  error={errors.email ? { content: errors.email } : null}
                />
                <Form.Input
                  placeholder='Password'
                  name="password"
                  type='password'
                  onChange={this.updateInput}
                  value={this.state.password}
                  error={errors.password ? { content: errors.password } : null}
                />
                <Form.Input
                  placeholder='Confirm Password'
                  name="confirm_password"
                  type='password'
                  onChange={this.updateInput}
                  value={this.state.confirm_password}
                  error={errors.confirm_password ? { content: errors.confirm_password } : null}
                />

                <Button color='teal' fluid size='large' onClick={this.registerNewUser}>
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message>
              Already got an account? <a href='/login'>Log in here</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Signup;