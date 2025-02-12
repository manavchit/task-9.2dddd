import React from 'react';
import { AppBar, InputBase, Toolbar, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

class LoginHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: false
    };
  }

  componentDidMount() {
    const loggedIn = localStorage.getItem('authenticated');

    if (loggedIn === 'true') {
      this.setState({
        authenticated: true
      });
    }
  }

  logOutClick = () => {
    this.setState({ authenticated: false });
    localStorage.setItem('authenticated', false);
  };

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6">Dev @ Deakin</Typography>
          </Link>
          <div className="headerSearch">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <Link to="/find_question" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="button" style={{ marginRight: '1rem' }}>
                Find Question
              </Typography>
            </Link>
            <Link to="/post" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="button" style={{ marginRight: '1rem' }}>
                Post
              </Typography>
            </Link>
            <Link to="/plan" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="button">Plans</Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default LoginHeader;